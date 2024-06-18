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
import { Link } from 'react-router-dom';
import { UserPlusIcon } from "@heroicons/react/24/solid";
import ModalComponent from "../../components/modal";

export default function QuizPage() {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedQuiz, setselectedQuiz] = useState(null);

  const { quiz, loading, getQuiz, deleteQuiz } = useStore((state) => ({
    quiz: state.quiz,
    getQuiz: state.getQuiz,
    deleteQuiz: state.deleteQuiz,
    loading: state.loading,
  }));

  useEffect(() => {
    getQuiz();
  }, [getQuiz]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDelete = () => {
    deleteQuiz(selectedQuiz.id);
    setOpenDelete(!openDelete);
  };

  const onDelete = (row) => {
    setselectedQuiz(row);
    setOpenDelete(!openDelete);
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
                <Link to="/penguji/create">
                  <Button
                    className="flex items-center gap-3"
                    size="sm"
                    onClick={handleOpen}
                  >
                    <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
                    Quiz
                  </Button>
                </Link>
              </div>
            </div>
          </CardHeader>
          <CardBody className="h-full">
            {loading ? (
              <div className="flex justify-center">
                <BarLoader color="#0f172a" css="margin: 0 auto" />
              </div>
            ) : (
              <TableQuiz data={quiz} onDelete={onDelete} />
            )}
          </CardBody>
        </Card>

        <ModalComponent
          open={openDelete}
          handleOpen={() => setOpenDelete(!openDelete)}
          handleSubmit={handleDelete}
          title="Confirm Removal"
        >
          <div className="text-center">
            <Typography variant="body1" color="blue-gray">
              Are you sure you want to remove this quiz?
            </Typography>
          </div>
        </ModalComponent>
      </div>
    </>
  );
}
