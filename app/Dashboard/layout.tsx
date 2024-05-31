import { Sidenavepane } from "@/components/Dashboard/sideNav";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <>
      <div className="bg-black w-full flex ">
        <Sidenavepane />
        {children}
      </div>
    </>
  );
}
