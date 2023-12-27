import { notFound } from "next/navigation";
import { db } from "@/db";

interface ShowPageProps {
  params: { id: string };
}

const simNetworkDelay = (delay: number) =>
  new Promise((resolved) => setTimeout(resolved, delay));

export default async function SnippetShowPage({ params }: ShowPageProps) {
  await simNetworkDelay(2000);

  /* prisma syntax */
  const snippet = await db.snippet.findFirst({
    where: { id: Number(params.id) },
  });
  //   console.log(snippet);

  return snippet ? (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">Show snippet: {snippet.title}</h1>
        <div className="flex gap-4">
          <button className="p-2 border rounded">Edit</button>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  ) : (
    notFound()
  );
}
