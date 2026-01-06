import { NextRequest } from "next/server";
import { ok, forbidden, serverError } from "@/lib/http/response";
import { auth } from "@/lib/auth";
import { updateJob } from "@/lib/repositories/job.repository";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // ✅ WAJIB await
    const { id } = await context.params;

    // 🔐 AUTH
    const session = await auth();
    if (!session?.user?.id) {
      return forbidden("Unauthorized");
    }

    // 🔒 OWNERSHIP CHECK
    const job = await prisma.job.findFirst({
      where: {
        id,
        userId: session.user.id,
      },
    });

    if (!job) {
      return forbidden("You do not own this job");
    }

    const body = await req.json();
    const updated = await updateJob(id, body);

    return ok(updated);
  } catch (e) {
    return serverError(e);
  }
}
