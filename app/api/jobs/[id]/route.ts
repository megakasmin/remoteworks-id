import { NextRequest } from "next/server";
import { ok, notFound } from "@/lib/http/response";
import { findJobById } from "@/lib/repositories/job.repository";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const job = await findJobById(id);

  if (!job) {
    return notFound("Job not found");
  }

  return ok(job);
}
