import { NextRequest } from "next/server";
import { ok, notFound } from "@/lib/http/response";
import { findJobById } from "@/lib/repositories/job.repository";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const job = await findJobById(params.id);

  if (!job) {
    return notFound("Job not found");
  }

  return ok(job);
}
