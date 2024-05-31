import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/client";
import { BillboardColum } from "./components/columns";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      image: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillboardColum[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    url: item.image[0]?.url,
    createdAt: format(item.createdAt, "MMM do, yyy"),
  }));
  return (
    <div className="bg-white h-screen w-full flex-grow rounded-sm mt-4 p-4 ">
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <BillboardClient data={formattedBillboards} />
        </div>
      </div>
    </div>
  );
};

export default BillboardsPage;
