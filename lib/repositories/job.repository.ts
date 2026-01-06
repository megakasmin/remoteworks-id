import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type FindJobsParams = {
  page: number;
  limit: number;
  type?: Prisma.JobWhereInput["type"];
};

/* ======================
   CREATE JOB
====================== */
export async function createJob(data: {
  title: string;
  company: string;
  location: string;
  type: string;
  isRemote: boolean;
  description: string;
  applyUrl: string;
}) {
  return prisma.job.create({
    data,
  });
}

/* ======================
   FIND JOB LIST
====================== */
export async function findJobs(params: {
  page: number;
  limit: number;
  type?: string;
}) {
  const { page, limit, type } = params;

  const where = {
    ...(type && { type }),
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

/* ======================
   FIND JOB BY ID
====================== */
export async function findJobById(id: string) {
  return prisma.job.findUnique({
    where: { id },
  });
}

export async function updateJob(
  id: string,
  data: {
    title?: string;
    company?: string;
    location?: string;
    type?: string;
    isRemote?: boolean;
    description?: string;
    applyUrl?: string;
  }
) {
  return prisma.job.update({
    where: { id },
    data,
  });
}


