"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  // return { message: "Title must be longer" };

  const title = formData.get("title"); // as string;
  const code = formData.get("code"); // as string;

  try {
    if (typeof title !== "string" || title.length < 3) {
      return { message: "Title must be longer" };
    }
    if (typeof code !== "string" || code.length < 10) {
      return { message: "Code must be longer" };
    }

    await db.snippet.create({ data: { title, code } });

    // throw new Error("Failed to save to database");
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { message: err.message };
    } else {
      return { message: "Something went wrong" };
    }
  }

  revalidatePath("/");
  redirect("/");
}

export async function editSnippet(id: number, code: string) {
  console.log("edit snippet action", id, code);

  await db.snippet.update({ where: { id }, data: { code } });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  console.log("delete snippet action", id);
  await db.snippet.delete({ where: { id } });

  revalidatePath("/");
  redirect("/");
}
