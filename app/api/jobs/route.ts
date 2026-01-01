import { NextRequest } from "next/server";
import { createJob, findJobs } from "@/lib/repositories/job.repository";
import { jobCreateSchema } from "@/lib/validation/job.schema";
import { badRequest, created, serverError } from "@/lib/http/response";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = jobCreateSchema.safeParse(body);

if (!parsed.success) {
  return badRequest(parsed.error.flatten());
}

    const data = parsed.data;

    const job = await createJob({
      title: data.title,
      company: data.companyName,     // 🔥 mapping
      location: data.location,
      type: data.employmentType,     // 🔥 mapping
      isRemote: data.isRemote,
      description: data.description,
      applyUrl: data.applyUrl,
    });

    return created(job);
  } catch (e) {
    return serverError(e);
  }
}
