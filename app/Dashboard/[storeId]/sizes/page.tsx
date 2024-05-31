import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { SizeClient } from "./components/client";
import { SizeColum } from "./components/columns";

const SizesPage = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColum[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMM do, yyy"),
  }));
  return (
    <div className="bg-white h-screen w-full flex-grow rounded-sm mt-4 p-4 ">
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <SizeClient data={formattedSizes} />
        </div>
      </div>
    </div>
  );
};

export default SizesPage;
