import { Typography } from "@material-tailwind/react";
import { useStore } from "../../states/quizzes";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BarLoader } from "react-spinners";
import TableHistory from "../../components/main/TableHistory";

export default function HistoryPage() {
  const { quiz, loading, getHistoryQuiz } = useStore((state) => ({
    quiz: state.quiz,
    loading: state.loading,
    getHistoryQuiz: state.getHistoryQuiz,
  }));

  useEffect(() => {
    getHistoryQuiz();
  }, [getHistoryQuiz]);

  return (
    <div className="mx-auto my-12 max-w-screen-xl px-4 md:px-6 lg:px-8 overflow-hidden">
      <Toaster />
      <div>
        {loading ? (
          <div className="flex justify-center mb-5">
            <BarLoader color="#0f172a" css="margin: 0 auto" />
          </div>
        ) : (
          <>
            <Typography
              color="black"
              variant="h4"
              className="mb-12 text-center"
            >
              History Quiz
            </Typography>
            <div className="flex justify-center">
              <div className="w-full max-w-[1080px] px-4 sm:px-6 lg:px-8 mt-8">
                <TableHistory data={Array.isArray(quiz) ? quiz : []} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
