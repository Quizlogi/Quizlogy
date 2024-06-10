import {
  ArrowDownCircleIcon,
  ArrowRightCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/16/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Radio,
  Typography,
} from "@material-tailwind/react";
import propTypes from "prop-types";
import { useState } from "react";
import { FiEdit, FiSave, FiTrash, FiTrash2 } from "react-icons/fi";

export default function QuestionList({
  question,
  i,
  questionUpdate,
  questionDelete,
}) {
  const [open, setOpen] = useState();
  const [editing, setEditing] = useState({});
  const [inputValue, setInputValue] = useState({});

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        onClick={() => handleOpen(i + 1)}
        key={i}
        open={open === i + 1}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          className={`flex justify-between border-b-0 transition-colors ${
            open === i + 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {open === i + 1 ? (
            <ArrowDownCircleIcon className="h-7 mr-2" />
          ) : (
            <ArrowRightCircleIcon className="h-7 mr-2" />
          )}

          <div className="flex items-center" style={{ width: "100%" }}>
            {editing[i] ? (
              <Input
                label="Question"
                type="text"
                className="text-base font-medium"
                defaultValue={question.question}
                onChange={(e) =>
                  setInputValue({ ...inputValue, [i]: e.target.value })
                }
                onInput={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <span className="text-base font-medium">{question.question}</span>
            )}
          </div>

          {editing[i] ? (
            <FiSave
              className="h-7 ml-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                questionUpdate(question.id, inputValue[i]);
                setEditing({ ...editing, [i]: false });
              }}
            />
          ) : (
            <>
              <FiEdit
                className="h-7 ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setEditing({ ...editing, [i]: true });
                  setInputValue({ ...inputValue, [i]: question.question });
                }}
              />

              <FiTrash2
                className="h-7 ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  questionDelete(question.id);
                }}
              />
            </>
          )}
        </AccordionHeader>
        <AccordionBody
          className="pt-0 text-base font-normal"
          onClick={(e) => e.stopPropagation()}
        >
          <List>
            {question.options.map((answer) => (
              <ListItem className="p-0" key={answer.id}>
                <label
                  htmlFor="vertical-list-react"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="vertical-list"
                      id="vertical-list-react"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-400"
                  >
                    {answer.option}
                  </Typography>
                  <div className="ml-auto">
                    {/* add this div */}
                    <FiEdit className="h-7 mr-2 cursor-pointer" />
                    {/* add the FiEdit component */}
                    <FiTrash className="h-7 cursor-pointer" />
                    {/* add the FiTrash component */}
                  </div>
                </label>
              </ListItem>
            ))}
          </List>

          <div className="pt-0 text-base font-normal flex justify-center items-center">
            <Button color="blue" className="mt-1 mb-2">
              <PlusCircleIcon className="h-5" />
            </Button>
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
}

QuestionList.propTypes = {
  question: propTypes.object.isRequired,
  i: propTypes.number.isRequired,
  questionUpdate: propTypes.func.isRequired,
  questionDelete: propTypes.func.isRequired,
};
