import { EyeIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import propTypes from "prop-types";
import Table from "../table";
import { Link } from "react-router-dom";

export default function TableHistory({ data }) {
  const columns = [
    {
      name: "No",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Quiz Name",
      selector: (row) => row.quiz.title,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.quiz.category.name,
      sortable: true,
    },
    {
      name: "Score",
      selector: (row) => row.score,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/quiz/${row.quiz_id}`}>
            <Button color="blue" size="sm">
              <EyeIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={data} />;
}

TableHistory.propTypes = {
  data: propTypes.array.isRequired,
  onEdit: propTypes.func,
};
