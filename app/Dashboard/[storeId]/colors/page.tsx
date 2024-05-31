import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { ColorsClient } from "./components/client";
import { ColorColumn } from "./components/columns";

const ColorsPage = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMM do, yyy"),
  }));
  return (
    <div className="bg-white h-screen w-full flex-grow rounded-sm mt-4 p-4 ">
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <ColorsClient data={formattedColors} />
        </div>
      </div>
    </div>
  );
};

export default ColorsPage;
