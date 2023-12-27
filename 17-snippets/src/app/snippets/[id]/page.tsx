import { notFound } from "next/navigation";
import { db } from "@/db";

interface ShowPageProps {
  params: { id: string };
}

export default async function SnippetShowPage({ params }: ShowPageProps) {
  /* prisma syntax */
  const snippet = await db.snippet.findFirst({
    where: { id: Number(params.id) },
  });
  //   console.log(snippet);

  return snippet ? <div>Show snippet: {snippet.title}</div> : notFound();
}
