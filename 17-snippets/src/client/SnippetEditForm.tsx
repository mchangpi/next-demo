"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";

interface FormProps {
  snippet: Snippet;
}

function SnippetEditForm({ snippet }: FormProps) {
  return (
    <div>
      {/* {snippet.title} */}
      <Editor
        height="50vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
}

export default SnippetEditForm;
