import { z } from "zod";
import { jobCreateSchema } from "./job.schema";

/**
 * POST /api/jobs
 * Create new job (submit job)
 */

export const CreateJobRequestSchema = jobCreateSchema.extend({
  description: z.string().min(20),
  applyUrl: z.string().url(),
  tags: z.array(z.string()).optional(),
});

export type CreateJobRequest = z.infer<typeof CreateJobRequestSchema>;

/**
 * Success response
 */
export const CreateJobResponseSchema = z.object({
  id: z.string().uuid(),
  status: z.literal("PENDING_REVIEW"),
});

export type CreateJobResponse = z.infer<typeof CreateJobResponseSchema>;
