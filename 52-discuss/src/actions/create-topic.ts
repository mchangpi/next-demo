"use server";

import type { Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, { message: "Must be lowercase letters" }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const name = formData.get("name");
  const description = formData.get("description");

  const result = createTopicSchema.safeParse({ name, description });

  const session = await auth();
  if (!session || !session.user) {
    return { errors: { _form: ["You must sign in to do this"] } };
  }

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  let topic: Topic;
  try {
    // throw new Error("Failed to create topic");
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: { _form: [err.message] },
      };
    } else {
      return {
        errors: { _form: ["Something went wrong"] },
      };
    }
  }

  revalidatePath("/");
  redirect(paths.topicShow(topic.slug));
}

/*
model Topic {
  id          String @id @default(cuid())
  slug        String @unique
  description String
  posts       Post[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
*/
