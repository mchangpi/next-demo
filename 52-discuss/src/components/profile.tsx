"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return (
      <div>From Client: {JSON.stringify(session.data.user)} is Signed in</div>
    );
  }

  return <div>From Client: Signed out</div>;
}
