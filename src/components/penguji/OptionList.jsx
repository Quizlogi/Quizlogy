import {
  ListItem,
  ListItemPrefix,
  Radio,
  Typography,
  Input,
} from "@material-tailwind/react";
import { FiEdit, FiSave, FiTrash } from "react-icons/fi";

import propTypes from "prop-types";
import { useState } from "react";

export default function OptionList({ answer, optionUpdate, optionDelete }) {
  const [editOption, setEditOption] = useState({});
  const [inputOption, setInputOption] = useState({});

  return (
    <ListItem className="p-0" key={answer.id}>
      <div className="flex w-full cursor-pointer items-center px-3 py-2">
        <ListItemPrefix className="mr-3">
          <label htmlFor={`radio-${answer.id}`}>
            <Radio
              name={`radio-${answer.id}`}
              id={`radio-${answer.id}`}
              ripple={false}
              className="hover:before:opacity-0"
              containerProps={{
                className: "p-0",
              }}
              checked={answer.is_correct}
              onChange={(e) => {
                optionUpdate(answer.id, {
                  ...answer,
                  is_correct: e.target.checked,
                });
              }}
            />
          </label>
        </ListItemPrefix>

        {editOption[answer.id] ? (
          <Input
            label="Option"
            type="text"
            className="text-base font-medium"
            defaultValue={answer.option}
            onChange={(e) =>
              setInputOption({
                ...inputOption,
                [answer.id]: e.target.value,
              })
            }
            onInput={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <Typography
            color="blue-gray"
            className="font-medium text-blue-gray-400"
          >
            {answer.option}
          </Typography>
        )}
        <div className="ms-auto flex">
          {editOption[answer.id] ? (
            <FiSave
              className="h-8 ml-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                optionUpdate(answer.id, {
                  ...answer,
                  option: inputOption[answer.id],
                });

                setEditOption({ ...editOption, [answer.id]: false });
              }}
            />
          ) : (
            <>
              <FiEdit
                className="h-7 mr-2 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();

                  setEditOption({ ...editOption, [answer.id]: true });
                  setInputOption({
                    ...inputOption,
                    [answer.id]: answer.option,
                  });
                }}
              />
              <FiTrash
                className="h-7 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  optionDelete(answer.id);
                }}
              />
            </>
          )}
        </div>
      </div>
    </ListItem>
  );
}

OptionList.propTypes = {
  answer: propTypes.object.isRequired,
  question: propTypes.object.isRequired,
  optionUpdate: propTypes.func.isRequired,
  optionDelete: propTypes.func.isRequired,
};
