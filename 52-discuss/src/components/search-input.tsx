"use client";

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

/* type SearchInputProps = {
  searchParams: { term: string };
};*/

export default function SearchInput() {
  const searchParams = useSearchParams();
  //   console.log(searchParams.get("term"));

  return (
    <form action={actions.search}>
      <Input name="term" defaultValue={searchParams.get("term") || ""} />
    </form>
  );
}
