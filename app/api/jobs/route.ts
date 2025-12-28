import { NextResponse } from "next/server";
import { ZodError } from "zod";

import {
  CreateJobRequestSchema,
  CreateJobResponseSchema,
} from "@/lib/validation/job.api.schema";

import { ApiErrorSchema } from "@/lib/validation/common.schema";

// POST /api/jobs
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1️⃣ Validate request
    const parsed = CreateJobRequestSchema.parse(body);

    /**
     * 2️⃣ Simulasi persistence (Phase 1)
     * Nanti diganti Prisma create()
     */
    const createdJob = {
      id: crypto.randomUUID(),
      status: "PENDING_REVIEW" as const,
    };

    // 3️⃣ Validate response (optional but recommended)
    const response = CreateJobResponseSchema.parse(createdJob);

    return NextResponse.json(response, { status: 201 });
  } catch (err) {
    // ❌ Validation error
if (err instanceof ZodError) {
  const fieldErrors: Record<string, string> = {};

  err.issues.forEach((issue) => {
    const field = issue.path.join(".");
    fieldErrors[field] = issue.message;
  });

  return NextResponse.json(
    ApiErrorSchema.parse({
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid request payload",
        fieldErrors,
      },
    }),
    { status: 422 }
  );
}


    // ❌ Unknown error
    console.error(err);

    return NextResponse.json(
      ApiErrorSchema.parse({
        error: {
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        },
      }),
      { status: 500 }
    );
  }
}
