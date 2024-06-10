import { ArrowLeftIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import { Card, Typography, Button } from "@material-tailwind/react";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../states/quiz";
import { BarLoader } from "react-spinners";
import QuestionList from "../../components/penguji/QuestionList";
import toast, { Toaster } from "react-hot-toast";

export default function DetailQuizPenguji() {
  const { id } = useParams();

  const {
    questions,
    getQuizById,
    createQuestion,
    updateQuestion,
    deleteQuestion,
    loading,
  } = useStore((state) => ({
    questions: state.questions,
    getQuizById: state.getQuizById,
    loading: state.loading,
    createQuestion: state.createQuestion,
    updateQuestion: state.updateQuestion,
    deleteQuestion: state.deleteQuestion,
  }));

  const questionCreate = () => {
    createQuestion(id, "(untitled)");

    toast.success("Question created");
  };

  const questionUpdate = (id, value) => {
    updateQuestion(id, value);

    toast.success("Question updated");
  };

  const questionDelete = (id) => {
    deleteQuestion(id);

    toast.success("Question deleted");
  };

  useEffect(() => {
    getQuizById(id);
  }, [getQuizById, id]);

  return (
    <div className="mx-auto my-12 w-[1006px] mb-5">
      <Toaster />
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
          <Button color="blue" className="mt-1 mb-2" onClick={questionCreate}>
            <PlusCircleIcon className="h-5" />
          </Button>
          {questions.map((question, i) => (
            <QuestionList
              key={i}
              question={question}
              i={i}
              questionUpdate={questionUpdate}
              questionDelete={questionDelete}
            />
          ))}
        </Card>
      )}
    </div>
  );
}
