"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";

interface FormProps {
  snippet: Snippet;
}

function SnippetEditForm({ snippet }: FormProps) {
  const [code, setCode] = useState(snippet.code);
  const handleEditorChange = (value: string = "") => {
    // console.log(value);
    setCode(value);
  };
  return (
    <div>
      {/* {snippet.title} */}
      <Editor
        height="50vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default SnippetEditForm;
