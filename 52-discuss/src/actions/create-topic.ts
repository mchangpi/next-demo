"use server";

export async function createTopic(formData: FormData) {
  /* revalidate the homepage */
  const name = formData.get("name");
  const dscription = formData.get("description");

  console.log(name, dscription);
}
