import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import propTypes from "prop-types";
import Table from "../table";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Director",
    selector: (row) => row.director,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Actions",
    cell: () => (
      <div className="flex items-center gap-4">
        <Button color="blue" size="sm">
          <PencilIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
        <Button color="red" size="sm">
          <TrashIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];

export default function TableCategory({ data }) {
  return <Table columns={columns} data={data} />;
}

TableCategory.propTypes = {
  data: propTypes.array.isRequired,
};
