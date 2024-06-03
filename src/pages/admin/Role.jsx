import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BarLoader } from "react-spinners";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { useStore } from "../../states/role";

import TableRole from "../../components/admin/TableRole";
import useInput from "../../hooks/useInput";
import ModalComponent from "../../components/modal";
import RoleForm from "../../components/admin/form/RoleForm";

export default function RolePage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [open, setOpen] = useState(false);

  const [name, setName] = useInput("");

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
    setName({ target: { value: row.name } });
    setOpen(true);
  };

  const handleSubmit = () => {
    updateRole(selectedRole.id, { name });
    setOpen(false);
  };

  useEffect(() => {
    fetchRoles();
  }, [fetchRoles]);

  return (
    <div className="flex-grow p-4">
      <Toaster />
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                List Roles
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
            <TableRole data={roles} onEdit={onEdit} />
          )}
        </CardBody>
      </Card>

      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleSubmit={handleSubmit}
        title="Edit Role"
      >
        <RoleForm name={name} setName={setName} />
      </ModalComponent>
    </div>
  );
}
