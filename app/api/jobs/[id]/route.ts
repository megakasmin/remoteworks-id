import { NextRequest, NextResponse } from "next/server";
import { findJobById } from "@/lib/repositories/job.repository";

export async function GET(
  _req: NextRequest,
  context: any
) {
  try {
    const id = context?.params?.id;

    if (!id || typeof id !== "string") {
      return NextResponse.json(
        { message: "Invalid job id" },
        { status: 400 }
      );
    }

    const job = await findJobById(id);

    if (!job) {
      return NextResponse.json(
        { message: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(job);
  } catch (err) {
    console.error("GET /api/jobs/[id] error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
