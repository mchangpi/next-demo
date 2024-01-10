import type { Post } from "@prisma/client";
import { db } from "@/db";

/* // option 2
export type PostWithData = Awaited<
  ReturnType<typeof fetchPostsByTopicSlug>
>[number]; */

// option 1
export type PostWithData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

/* export function fetchPostsByTopicSlug(slug: string) { // option 2 */
// option 1
export function fetchPostsByTopicSlug(slug: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}

export function fetchTopPosts(): Promise<PostWithData[]> {
  return db.post.findMany({
    orderBy: [{ comments: { _count: "desc" } }],
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
    take: 5,
  });
}

/*
// prisma/schema.prisma
model Post {
  id      String @id @default(cuid())
  title   String
  content String
  userId  String
  topicId String

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user     User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  topic    Topic     @relation(fields: [topicId], references: [id])
  comments Comment[]
}
*/
