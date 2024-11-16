import { prisma } from '@/lib/prisma';

export async function getPosts() {
  return await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function getPostBySlug(slug: string) {
  return await prisma.post.findUnique({
    where: {
      slug,
    },
    include: {
      author: true,
      tags: true,
    },
  });
}