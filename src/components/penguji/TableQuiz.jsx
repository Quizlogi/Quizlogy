import { DocumentIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import propTypes from "prop-types";

import Table from "../table";
import { Link } from "react-router-dom";

export default function TableQuiz({ data, onDelete }) {
  const columns = [
    {
      name: "No",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category.name,
      sortable: true,
    },
    {
      name: "Total Questions",
      selector: (row) => row.questions.length,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/penguji/quiz/${row.id}/questions`}>
            <Button color="green" size="sm">
              <DocumentIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </Link>

          <Link to={`/penguji/quiz/${row.id}`}>
            <Button color="blue" size="sm">
              <PencilIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </Link>

          <Button color="red" size="sm" onClick={() => onDelete(row)}>
            <TrashIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={data} />;
}

TableQuiz.propTypes = {
  data: propTypes.array.isRequired,
  onDelete: propTypes.func,
};
