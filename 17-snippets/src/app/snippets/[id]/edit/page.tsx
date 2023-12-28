import { notFound } from "next/navigation";
import { db } from "@/db";

import SnippetEditForm from "@/client/SnippetEditForm";

interface EditPageProps {
  params: { id: string };
}

export default async function EditPage({ params }: EditPageProps) {
  const id = Number(params.id);

  const snippet = await db.snippet.findFirst({ where: { id } });
  if (!snippet) return notFound();

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
