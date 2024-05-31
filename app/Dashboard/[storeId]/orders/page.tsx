import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { OrderClient } from "./components/client";
import { OrderColumn } from "./components/columns";
import { formatter } from "@/lib/utils";

const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismadb.order.findMany({
    include: {
      orderItems: {
        include: {
          product: {
            include: {
              image: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    firstname: item.firstname,
    lastname: item.lastname,
    modeofpayment: item.paymentmethod,
    email: item.email,
    url: item.orderItems.map((item) => item.product.image[0]?.url).join(", "),
    phone: item.phone,
    address: item.address,
    products: item.orderItems
      .map((orderItem) => orderItem.product.name)
      .join(", "),
    totalPrice: formatter.format(
      item.orderItems.reduce((total, item) => {
        return total + Number(item.product.price);
      }, 0)
    ),
    isPaid: item.isPaid,
    createdAt: format(item.createdAt, "MMM do, yyy"),
  }));
  return (
    <div className="bg-white h-screen w-full flex-grow rounded-sm mt-4 p-4 ">
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <OrderClient data={formattedOrders} />
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
