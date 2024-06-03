import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import propTypes from "prop-types";
import Table from "../table";

const columns = [
  {
    name: "No",
    selector: (row, index) => index + 1,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
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

export default function TableRole({ data }) {
  return <Table columns={columns} data={data} />;
}

TableRole.propTypes = {
  data: propTypes.array.isRequired,
};
