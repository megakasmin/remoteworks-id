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

export const jobUpdateSchema = z.object({
  title: z.string().min(3).optional(),
  companyName: z.string().min(2).optional(),
  location: z.string().min(2).optional(),
  employmentType: z.enum(["FULL_TIME", "PART_TIME", "CONTRACT"]).optional(),
  isRemote: z.boolean().optional(),
  description: z.string().min(10).optional(),
  applyUrl: z.string().url().optional(),
});
