"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type OrderColumn = {
  id: string;
  firstname: string;
  lastname: string;
  modeofpayment: string;
  url: string;
  email: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "firstname",
    header: "First Name",
  },
  {
    accessorKey: "lastname",
    header: "LastName",
  },
  {
    accessorKey: "modeofpayment",
    header: "PaymentMethod",
  },
  {
    accessorKey: "url",
    header: "Image",
    cell: ({ row }) => {
      const urlValue = row.getValue("url");
      const urlString = urlValue ? urlValue.toString() : "";

      return (
        <div>
          <img src={urlString} width={100} height={100} />
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "totalPrice",
    header: "Total price",
  },
  {
    accessorKey: "isPaid",
    header: "Paid",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
