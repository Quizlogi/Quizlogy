import { Input, Select, Option } from "@material-tailwind/react";
import propTypes from "prop-types";

const UserForm = ({
  selectedUser,
  name,
  email,
  username,
  password,
  role,
  setName,
  setEmail,
  setUsername,
  setPassword,
  setRole,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {selectedUser ? (
        <>
          <Input
            type="text"
            label="Name"
            color="blue"
            placeholder="Name"
            value={name}
            onChange={setName}
          />
          <Input
            type="email"
            label="Email"
            color="blue"
            placeholder="Email"
            value={email}
            onChange={setEmail}
          />
          <Input
            type="text"
            label="Username"
            color="blue"
            placeholder="Username"
            value={username}
            onChange={setUsername}
          />
          <Input
            type="password"
            label="Password"
            color="blue"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
          <Select
            label="Role"
            placeholder="Role"
            value={role}
            onChange={setRole}
          >
            <Option value="1">User</Option>
            <Option value="2">Instructure</Option>
            <Option value="3">Admin</Option>
          </Select>
        </>
      ) : (
        <>
          <Input
            type="text"
            label="Name"
            color="blue"
            placeholder="Name"
            value={name}
            onChange={setName}
          />
          <Input
            type="email"
            label="Email"
            color="blue"
            placeholder="Email"
            value={email}
            onChange={setEmail}
          />
          <Input
            type="text"
            label="Username"
            color="blue"
            placeholder="Username"
            value={username}
            onChange={setUsername}
          />
          <Input
            type="password"
            label="Password"
            color="blue"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
          <Select
            label="Role"
            placeholder="Role"
            value={role}
            onChange={setRole}
          >
            <Option value="1">User</Option>
            <Option value="2">Instructure</Option>
            <Option value="3">Admin</Option>
          </Select>
        </>
      )}
    </div>
  );
};

export default UserForm;

UserForm.propTypes = {
  selectedUser: propTypes.object,
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
  role: propTypes.string.isRequired,
  setName: propTypes.func.isRequired,
  setEmail: propTypes.func.isRequired,
  setUsername: propTypes.func.isRequired,
  setPassword: propTypes.func.isRequired,
  setRole: propTypes.func.isRequired,
};
