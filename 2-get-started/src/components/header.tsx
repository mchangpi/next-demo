import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href={"/"}>Home Link</Link>
      <Link href={"/performance"}>Performance Link</Link>
      <Link href={"/reliability"}>Reliability Link</Link>
      <Link href={"/scale"}>Scale Link</Link>
    </div>
  );
}
