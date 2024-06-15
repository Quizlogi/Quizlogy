import ImageCard from "../../components/main/ImageCard";
import { Typography } from "@material-tailwind/react";

import { useStore as useStoreQuiz } from "../../states/quizzes";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BarLoader } from "react-spinners";
import { useParams } from "react-router-dom";

export default function QuizByCategoryPage() {
  const { id } = useParams();

  const { quiz, loading, getQuizByCategory } = useStoreQuiz((state) => ({
    quiz: state.quiz,
    loading: state.loading,
    getQuizByCategory: state.getQuizByCategory,
  }));

  useEffect(() => {
    getQuizByCategory(id);
  }, [getQuizByCategory, id]);

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
              Quiz Kategori {quiz[0]?.category.name}
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 h-full pb-7 items-center justify-center">
              <ImageCard data={Array.isArray(quiz) ? quiz : []} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
