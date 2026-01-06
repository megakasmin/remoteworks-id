import { NextRequest } from "next/server";
import { ok, notFound, forbidden, serverError } from "@/lib/http/response";
import { auth } from "@/lib/auth";
import { findJobById, updateJob } from "@/lib/repositories/job.repository";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const session = await auth();
    if (!session?.user?.id) {
      return forbidden("Unauthorized");
    }

    const job = await findJobById(id);
    if (!job) {
      return notFound("Job not found");
    }

const ownedJob = await prisma.job.findFirst({
  where: {
    id,
    userId: session.user.id,
  },
});

if (!ownedJob) {
  return forbidden("You do not own this job");
}

    const body = await req.json();

    const updated = await updateJob(id, body);
    return ok(updated);
  } catch (e) {
    return serverError(e);
  }
}
