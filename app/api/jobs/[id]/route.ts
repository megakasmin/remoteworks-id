import { NextRequest } from "next/server";
import { findJobById } from "@/lib/repositories/job.repository";
import { ok, notFound, serverError } from "@/lib/http/response";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const job = await findJobById(params.id);

    if (!job) {
      return notFound("Job not found");
    }

    return ok(job);
  } catch (e) {
    return serverError(e);
  }
}
