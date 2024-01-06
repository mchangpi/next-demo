import TopicCreateForm from "@/components/topics/topic-create-form";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </div>
  );
}

/*
import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import Profile from "@/components/profile";

function validateSignInOut() {
  const session = await auth();
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
*/
