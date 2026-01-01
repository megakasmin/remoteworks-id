import { NextRequest } from "next/server";
import { findJobById } from "@/lib/repositories/job.repository";
import { badRequest, created, serverError } from "@/lib/http/response";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const job = await findJobById(id);

  if (!job) {
    return badRequest("Job not found");
  }

  return created(job);
}

