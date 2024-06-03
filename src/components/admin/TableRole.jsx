import { PencilIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import propTypes from "prop-types";
import Table from "../table";

export default function TableRole({ data, onEdit }) {
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
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Button color="blue" size="sm" onClick={() => onEdit(row)}>
            <PencilIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={data} />;
}

TableRole.propTypes = {
  data: propTypes.array.isRequired,
  onEdit: propTypes.func,
};
