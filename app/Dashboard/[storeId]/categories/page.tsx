import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { CategoryClient } from "./components/client";
import { CategoryColum } from "./components/columns";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: {
        include: {
          image: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoryColum[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    url: item.billboard.image[0]?.url,
    createdAt: format(item.createdAt, "MMM do, yyy"),
  }));
  return (
    <div className="bg-white h-full w-full  flex-grow rounded-sm mt-4 p-4 ">
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <CategoryClient data={formattedCategories} />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
