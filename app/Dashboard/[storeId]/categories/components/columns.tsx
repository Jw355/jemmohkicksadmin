"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import Image from "next/image";

export type CategoryColum = {
  id: string;
  name: string;
  billboardLabel: string;
  url: string;
  createdAt: string;
};

export const columns: ColumnDef<CategoryColum>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "billboardLabel",
    header: "Billboard",
  },
  {
    accessorKey: "url",
    header: "BillboardImage",
    cell: ({ row }) => {
      const urlValue = row.getValue("url");
      const urlString = urlValue ? urlValue.toString() : "";

      return (
        <div>
          <Image
            alt="category image"
            src={urlString}
            width={100}
            height={100}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
