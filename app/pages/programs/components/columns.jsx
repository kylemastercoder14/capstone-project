"use client"

import { CellAction } from "./cell-action"

export const columns = [
  {
    accessorKey: "name",
    header: "Program Name",
  },
  {
    accessorKey: "programCode",
    header: "Program Code",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];