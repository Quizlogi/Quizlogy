import { PencilIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import propTypes from "prop-types";
import Table from "../table";

export default function TableCategory({ data, onEdit }) {
  const columns = [
    {
      name: "No",
      selector: (row, index) => index + 1,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Total Quiz",
      selector: (row) => row._count.quiz,
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

TableCategory.propTypes = {
  data: propTypes.array.isRequired,
  onEdit: propTypes.func,
  onDelete: propTypes.func,
};
