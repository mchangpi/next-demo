"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => {};
}
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return <div>{error.message}</div>;
}
