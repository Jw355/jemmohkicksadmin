import prismadb from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  if (store) {
    redirect(`/Dashboard/${store.id}`);
  }

  return <>{children} </>;
}
