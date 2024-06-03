import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { BarLoader } from "react-spinners";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import TableRole from "../../components/admin/TableRole";
import { useStore } from "../../states/role";
import useInput from "../../hooks/useInput";

export default function RolePage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [open, setOpen] = useState(false);

  const [name, setInput] = useInput("");

  const { roles, loading, fetchRoles, updateRole } = useStore((state) => ({
    roles: state.roles,
    fetchRoles: state.fetchRoles,
    updateRole: state.updateRole,
    loading: state.loading,
  }));

  const handleOpen = () => {
    if (open) {
      setSelectedRole(null);
    }

    setOpen(!open);
  };

  const onEdit = (row) => {
    setSelectedRole(row);
    setInput({ target: { value: row.name } });
    setOpen(true);
  };
  return (
    <div className="flex-grow p-4">
      <Toaster />
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                List User
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="h-full">
          {loading ? (
            <div className="flex justify-center">
              <BarLoader color="#0f172a" css="margin: 0 auto" />
            </div>
          ) : (
            <TableRole data={[]} onEdit={onEdit} />
          )}
        </CardBody>
      </Card>
    </div>
  );
}
