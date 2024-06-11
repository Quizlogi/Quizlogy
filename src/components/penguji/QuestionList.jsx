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
} from "@material-tailwind/react";
import propTypes from "prop-types";
import { useState } from "react";
import { FiEdit, FiSave, FiTrash2 } from "react-icons/fi";
import OptionList from "./OptionList";

export default function QuestionList({
  question,
  i,
  questionUpdate,
  questionDelete,
  optionCreate,
  optionUpdate,
  optionDelete,
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
              <OptionList
                key={answer.id}
                question={question}
                answer={answer}
                optionUpdate={optionUpdate}
                optionDelete={optionDelete}
              />
            ))}
          </List>

          <div className="pt-0 text-base font-normal flex justify-center items-center">
            <Button
              color="blue"
              className="mt-1 mb-2"
              onClick={() => optionCreate(question.id)}
            >
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
  optionCreate: propTypes.func.isRequired,
  optionUpdate: propTypes.func.isRequired,
  optionDelete: propTypes.func.isRequired,
};
