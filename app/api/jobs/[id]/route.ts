import { NextRequest } from "next/server";
import { findJobById } from "@/lib/repositories/job.repository";
import { badRequest, created, serverError } from "@/lib/http/response";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const job = await findJobById(params.id);

    if (!job) {
      return badRequest("Job not found");
    }

    return created(job);
  } catch (e) {
    return serverError(e);
  }
}
