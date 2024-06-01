import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
} from "@material-tailwind/react";
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

const data = [
  { id: 1, title: "Beetlejuice", year: "1988", director: "Tim Burton" },
  { id: 2, title: "Ghostbusters", year: "1984", director: "Ivan Reitman" },
  { id: 3, title: "The Shining", year: "1980", director: "Stanley Kubrick" },
];

export function TableAdmin() {
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              List User
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add User
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <Table columns={columns} data={data} />
      </CardBody>
    </Card>
  );
}
