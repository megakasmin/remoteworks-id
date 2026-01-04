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

export const jobListQuerySchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
  employmentType: z
    .enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"])
    .optional(),
  remote: z.coerce.boolean().optional(),
});

