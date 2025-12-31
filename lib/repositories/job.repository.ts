import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findJobs(params: {
  page: number;
  limit: number;
  employmentType?: string;
}) {
  const { page, limit, employmentType } = params;

  const where: any = {};
  if (employmentType) {
    where.employmentType = employmentType;
  }

  const [items, total] = await Promise.all([
    prisma.job.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: limit,
      skip: (page - 1) * limit,
    }),
    prisma.job.count({ where }),
  ]);

  return { items, total };
}

export async function findJobById(id: string) {
  return prisma.job.findUnique({
    where: { id },
  });
}
