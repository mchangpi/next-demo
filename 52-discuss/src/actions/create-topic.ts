"use server";

import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, { message: "Must be lowercase letters" }),
  description: z.string().min(10),
});

export async function createTopic(formData: FormData) {
  const name = formData.get("name");
  const description = formData.get("description");

  /* revalidate the homepage */
  const result = createTopicSchema.safeParse({ name, description });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
  }
}
