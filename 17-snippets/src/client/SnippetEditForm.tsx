"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as serverActions from "@/actions";

interface FormProps {
  snippet: Snippet;
}

function SnippetEditForm({ snippet }: FormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    // console.log(value);
    setCode(value);
  };

  const handleEditSnippetAction = serverActions.editSnippet.bind(
    null,
    snippet.id,
    code
  );

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
      <form action={handleEditSnippetAction}>
        <button type="submit" className="p-2 border-2 rounded m-2">
          Save
        </button>
      </form>
    </div>
  );
}

export default SnippetEditForm;
