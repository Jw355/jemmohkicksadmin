import prismadb from "@/lib/prismadb";
import { useAuth, UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return (
    <div className="bg-gray-300 w-full h-screen flex-grow rounded-sm mt-4 p-4 ">
      <div className="flex w-full flex-row justify-between">
        <p>Welcome Back</p>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default DashboardPage;
