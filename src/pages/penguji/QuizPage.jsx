import { BarLoader } from "react-spinners";
import { useStore } from "../../states/quizzes";
import { useEffect, useState } from "react";

import TableQuiz from "../../components/penguji/TableQuiz";
import { Toaster } from "react-hot-toast";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";

export default function QuizPage() {
  const [open, setOpen] = useState(false);

  const { quiz, loading, getQuiz } = useStore((state) => ({
    quiz: state.quiz,
    getQuiz: state.getQuiz,
    loading: state.loading,
  }));

  useEffect(() => {
    getQuiz();
  }, [getQuiz]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const onEdit = (row) => {
    console.log(row);
  };

  const onDelete = (row) => {
    console.log(row);
  };

  return (
    <>
      <Toaster />
      <div className="flex-grow p-4">
        <Card className="w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  List Quiz
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button
                  className="flex items-center gap-3"
                  size="sm"
                  onClick={handleOpen}
                >
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Quiz
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
              <TableQuiz data={quiz} onEdit={onEdit} onDelete={onDelete} />
            )}
          </CardBody>
        </Card>
      </div>
    </>
  );
}
