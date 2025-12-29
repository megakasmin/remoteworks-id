import { NextResponse } from "next/server";
import { jobListQuerySchema } from "@/lib/validation/job.query.schema";
import { findJobs } from "@/lib/repositories/job.repository";
import { ZodError } from "zod";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = jobListQuerySchema.parse(
      Object.fromEntries(searchParams)
    );

    const result = await findJobs(query);

    return NextResponse.json(result);
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        {
          message: "Invalid query parameters",
          errors: err.issues,
        },
        { status: 400 }
      );
    }

    console.error(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
