"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import Image from "next/image";

export type BillboardColum = {
  id: string;
  label: string;
  createdAt: string;
  url: string;
};

export const columns: ColumnDef<BillboardColum>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "url",
    header: "Image",
    cell: ({ row }) => {
      const urlValue = row.getValue("url");
      const urlString = urlValue ? urlValue.toString() : "";

      return (
        <div>
          <Image
            alt="billboard image"
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
    header: "Created At",
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
