"use server";

import { z } from "zod";
import { auth } from "@/auth";

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

  /* revalidate the homepage */
  const result = createTopicSchema.safeParse({ name, description });

  let errors = {};
  if (!result.success) {
    errors = result.error.flatten().fieldErrors;
  }

  const session = await auth();
  if (!session || !session.user) {
    errors = { _form: ["You must sign in to do this"] };
  }

  console.log(errors);
  return { errors };
}
