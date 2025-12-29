import { prisma } from "@/lib/prisma";
import type { JobListQuery } from "@/lib/validation/job.query.schema";

export async function findJobs(query: JobListQuery) {
  const { limit, page, remote, employmentType } = query;

  const where = {
    ...(employmentType && { employmentType }),
  };

  const [items, total] = await Promise.all([
    prisma.job.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: limit,
      skip: (page - 1) * limit,
    }),
    prisma.job.count({ where }),
  ]);

  return {
    items,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function findJobById(id: string) {
  return prisma.job.findUnique({
    where: { id },
  });
}

