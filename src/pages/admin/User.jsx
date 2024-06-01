import { useEffect, useState } from "react";
import TableUser from "../../components/admin/TableUser";
import { useStore } from "../../states/user";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import ModalComponent from "../../components/modal";
import useInput from "../../hooks/useInput";
import { BarLoader } from "react-spinners";
import UserForm from "../../components/admin/form/UserForm";
import { shallow } from "zustand/shallow";
import { Toaster } from "react-hot-toast";

export default function UserPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);

  const [name, setName, resetName] = useInput("");
  const [email, setEmail, resetEmail] = useInput("");
  const [username, setUsername, resetUsername] = useInput("");
  const [password, setPassword, resetPassword] = useInput("");
  const [role, setRole] = useState("");

  const { users, loading, fetchUsers, createUser } = useStore((state) => ({
    users: state.users,
    fetchUsers: state.fetchUsers,
    createUser: state.createUser,
    loading: state.loading,
  }), shallow);

  const handleOpen = () => {
    if (open) {
      setSelectedUser(null);
    }

    setOpen(!open);
  };

  const onEdit = (row) => {
    setSelectedUser(row);
    setOpen(true);
  };

  const onDelete = (row) => {
    console.log(row);
  };

  const handleSubmit = async () => {
    if (selectedUser) {
      console.log("Edit", selectedUser);
    } else {
      setOpen(false);

      await createUser({
        name,
        email,
        username,
        password,
        role_id: role,
      });

      resetName();
      resetEmail();
      resetUsername();
      resetPassword();
      setRole("");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <Toaster />
      <div className="flex-grow p-4">
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  List User
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button
                  className="flex items-center gap-3"
                  size="sm"
                  onClick={handleOpen}
                >
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add User
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardBody className="h-full">
            {loading ? (
              <div className="flex justify-center">
                <BarLoader color="#0f172a" css="margin: 0 auto" />
              </div>
            ) : (
              <TableUser data={users} onEdit={onEdit} onDelete={onDelete} />
            )}
          </CardBody>
        </Card>

        <ModalComponent
          open={open}
          handleOpen={handleOpen}
          handleSubmit={handleSubmit}
          title={selectedUser ? "Edit User" : "Add User"}
        >
          <div className="flex flex-col gap-4">
            <UserForm
              selectedUser={selectedUser}
              name={name}
              email={email}
              username={username}
              password={password}
              role={role}
              setName={setName}
              setEmail={setEmail}
              setUsername={setUsername}
              setPassword={setPassword}
              setRole={setRole}
            />
          </div>
        </ModalComponent>
      </div>
    </>
  );
}
