import { z } from "zod";

export const jobCreateSchema = z.object({
  title: z.string().min(3),
  companyName: z.string().min(2),
  location: z.string().min(2),
  employmentType: z.enum([
    "FULL_TIME",
    "PART_TIME",
    "CONTRACT",
    "INTERNSHIP",
  ]),
  isRemote: z.boolean(),
  description: z.string().min(10),
  applyUrl: z.string().url(),
});


export const jobListQuerySchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
  employmentType: z
    .enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"])
    .optional(),
  remote: z.coerce.boolean().optional(),
});
