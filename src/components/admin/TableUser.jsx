import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import propTypes from "prop-types";
import Table from "../table";

export default function TableUser({ data, onEdit, onDelete }) {
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
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role.name,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Button color="blue" size="sm" onClick={() => onEdit(row)}>
            <PencilIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
          <Button color="red" size="sm" onClick={() => onDelete(row)}>
            <TrashIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={data} />;
}

TableUser.propTypes = {
  data: propTypes.array.isRequired,
  onEdit: propTypes.func,
  onDelete: propTypes.func,
};
