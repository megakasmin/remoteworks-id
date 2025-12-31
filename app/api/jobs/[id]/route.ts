import { NextRequest, NextResponse } from "next/server";
import { findJobById } from "@/lib/repositories/job.repository";

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(
  _req: NextRequest,
  { params }: Params
) {
  const { id } = await params; // ✅ WAJIB await

  if (!id) {
    return NextResponse.json(
      { message: "Job ID is required" },
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
}
