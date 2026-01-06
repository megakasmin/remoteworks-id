import { NextRequest } from "next/server";
import { createJob } from "@/lib/repositories/job.repository";
import { jobCreateSchema } from "@/lib/validation/job.schema";
import {
  badRequest,
  created,
  serverError,
  unauthorized,
} from "@/lib/http/response";
import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    // 🔐 STEP 5 — API PROTECTION
    const session = await auth();

    if (!session || !session.user) {
      return unauthorized();
    }

    // 🔍 ZOD VALIDATION
    const body = await req.json();
    const parsed = jobCreateSchema.safeParse(body);

    if (!parsed.success) {
      return badRequest(parsed.error.flatten());
    }

    const data = parsed.data;

    // 💾 CREATE JOB (ownership ditanam DI SINI)
    const job = await createJob({
      title: data.title,
      company: data.companyName,
      location: data.location,
      type: data.employmentType,
      isRemote: data.isRemote,
      description: data.description,
      applyUrl: data.applyUrl,
      userId: session.user.id, // ✅ BENAR
    });

    return created(job);
  } catch (e) {
    return serverError(e);
  }
}
