import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import * as serverActions from "@/actions";

interface ShowPageProps {
  params: { id: string };
}

const simNetworkDelay = (delay: number) =>
  new Promise((resolved) => setTimeout(resolved, delay));

export default async function ShowPage({ params }: ShowPageProps) {
  await simNetworkDelay(2000);

  /* prisma syntax */
  const snippet = await db.snippet.findFirst({
    where: { id: Number(params.id) },
  });
  // </form>  console.log(snippet);

  const handleDeleteSnippetAction = serverActions.deleteSnippet.bind(
    null,
    snippet ? snippet.id : -1
  );

  return snippet ? (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">Show snippet: {snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <form action={handleDeleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
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

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    id: snippet.id.toString();
  });
}
