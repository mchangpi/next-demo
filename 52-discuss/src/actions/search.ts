"use server";

import { redirect } from "next/navigation";

/*
interface SearchState {
  errors: {
    search?: string[];
    _form?: string[];
  };
}
*/

export async function search(/*formState: SearchState,*/ formData: FormData) {
  const term = formData.get("term");

  if (!term || typeof term !== "string") {
    redirect("/");
  }
  redirect(`/search?term=${term}`);
}
