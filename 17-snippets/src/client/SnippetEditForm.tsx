"use client";

import type { Snippet } from "@prisma/client";

interface FormProps {
  snippet: Snippet;
}

function SnippetEditForm({ snippet }: FormProps) {
  return <div>CLIENT component has snippet with title: {snippet.title}</div>;
}

export default SnippetEditForm;
