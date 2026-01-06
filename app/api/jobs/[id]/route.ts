import { NextRequest } from "next/server";
import { badRequest, ok, notFound, forbidden, serverError } from "@/lib/http/response";
import { jobUpdateSchema } from "@/lib/validation/job.schema";
import { findJobById, updateJob } from "@/lib/repositories/job.repository";
import { getCurrentUser } from "@/lib/auth";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return forbidden("Unauthorized");
    }

    const job = await findJobById(params.id);

    if (!job) {
      return notFound("Job not found");
    }

    // 🔐 ownership check
    if (job.userId !== user.id) {
      return forbidden("You do not own this job");
    }

    const body = await req.json();
    const parsed = jobUpdateSchema.safeParse(body);

    if (!parsed.success) {
      return badRequest(parsed.error.flatten());
    }

    const data = parsed.data;

    const updated = await updateJob(params.id, {
      title: data.title,
      company: data.companyName,
      location: data.location,
      type: data.employmentType,
      isRemote: data.isRemote,
      description: data.description,
      applyUrl: data.applyUrl,
    });

    return ok(updated);
  } catch (e) {
    return serverError(e);
  }
}
