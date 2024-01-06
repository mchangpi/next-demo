import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  // const session = await auth();

  return <div>Home Page</div>;
}

function validateSignInOut(session: any) {
  console.log("Sign in from Server Component: session", session);
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
      From Server:
      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Sign Out</div>
      )}
      <hr />
      <Profile />
    </div>
  );
}
