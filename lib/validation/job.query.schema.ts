import { z } from "zod";

export const jobListQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(50).default(10),
  page: z.coerce.number().int().min(1).default(1),
  remote: z.coerce.boolean().optional(),
  employmentType: z.enum([
    "FULL_TIME",
    "PART_TIME",
    "CONTRACT",
    "INTERNSHIP",
  ]).optional(),
});

export type JobListQuery = z.infer<typeof jobListQuerySchema>;
