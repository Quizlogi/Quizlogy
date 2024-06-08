import { ArrowLeftIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import {
  Card,
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  ListItem,
  ListItemPrefix,
  Radio,
  List,
} from "@material-tailwind/react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../states/quiz";
import { BarLoader } from "react-spinners";

export default function DetailQuiz() {
  const { id } = useParams();

  const { questions, getQuizById, loading } = useStore((state) => ({
    questions: state.questions,
    getQuizById: state.getQuizById,
    loading: state.loading,
  }));

  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    getQuizById(id);
  }, [getQuizById, id]);

  return (
    <div className="mx-auto my-12 w-[1006px] mb-5">
      <Typography className="ml-4 mb-6" variant="h4">
        Detail Quiz
      </Typography>

      <Link to="/penguji/quiz" className="flex items-center ml-4 mb-6">
        <ArrowLeftIcon className="h-5 mr-2" />
        Back to Quiz
      </Link>

      {loading ? (
        <div className="flex items-center justify-center w-full h-52">
          <BarLoader color="#2563EB" />
        </div>
      ) : (
        <Card
          className="pl-4 pr-2 p-2"
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button variant="contained" color="primary" className="mt-1 mb-2">
            <PlusCircleIcon className="h-5" />
          </Button>

          {questions.map((question, i) => (
            <Accordion
              key={i}
              open={open === i + 1}
              className="mb-2 rounded-lg border border-blue-gray-100 px-4"
            >
              <AccordionHeader
                onClick={() => handleOpen(i + 1)}
                className={`flex justify-between border-b-0 transition-colors ${
                  open === i + 1 ? "text-blue-500 hover:!text-blue-700" : ""
                }`}
              >
                {question.question}
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                <List>
                  {question.options.map((answer) => (
                    <>
                      <ListItem className="p-0">
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
                        </label>
                      </ListItem>
                    </>
                  ))}
                </List>
              </AccordionBody>
            </Accordion>
          ))}
        </Card>
      )}
    </div>
  );
}
