import { db } from "@/db"; /* server action */

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => (
    <div key={snippet.id}>{snippet.title}</div>
  ));

  return <div>{renderedSnippets}</div>;
}
