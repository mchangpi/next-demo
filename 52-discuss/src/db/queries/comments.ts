import type { Comment } from "@prisma/client";
import { cache } from "react";
import { db } from "@/db";

export type CommentWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};

const fetchCommentsToBeCached = (
  postId: string
): Promise<CommentWithAuthor[]> => {
  console.log("Query for Post:", postId);

  return db.comment.findMany({
    where: { postId },
    include: {
      user: { select: { name: true, image: true } },
    },
  });
};

export const fetchCommentsByPostId = cache(fetchCommentsToBeCached);

/*
model Comment {
  id       String  @id @default(cuid())
  content  String
  postId   String
  userId   String
  parentId String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  parent   Comment?  @relation("Comments", fields: [parentId], references: [id], onDelete: Cascade)
  post     Post      @relation(fields: [postId], references: [id], onDelete: Cascade)
  user     User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  children Comment[] @relation("Comments")
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  Post          Post[]
  Comment       Comment[]
}
*/
