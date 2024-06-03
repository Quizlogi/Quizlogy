import { Input } from "@material-tailwind/react";
import propTypes from "prop-types";

const RoleForm = ({ name, setName }) => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        label="Name"
        color="blue"
        placeholder="Name"
        value={name}
        onChange={setName}
      />
    </div>
  );
};

export default RoleForm;

RoleForm.propTypes = {
  name: propTypes.string.isRequired,
  setName: propTypes.func.isRequired,
};
