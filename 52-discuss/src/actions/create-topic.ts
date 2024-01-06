"use server";

import { z } from "zod";

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
    console.log(errors);
  }
  return { errors: {} };
}
