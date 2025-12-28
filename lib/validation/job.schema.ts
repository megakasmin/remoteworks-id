import { z } from "zod";

export const jobSchema = z.object({
  title: z.string().min(3),
  companyName: z.string().min(2),
  location: z.string(),
  employmentType: z.enum(["FULL_TIME", "PART_TIME", "CONTRACT"]),
  isRemote: z.boolean(),
});
