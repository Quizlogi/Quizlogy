import { Input } from "@material-tailwind/react";
import propTypes from "prop-types";
import { Form } from "react-router-dom";

const CategoryForm = ({ name, setName }) => {
  return (
    <Form>
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
    </Form>
  );
};

export default CategoryForm;

CategoryForm.propTypes = {
  name: propTypes.string.isRequired,
  setName: propTypes.func.isRequired,
};
