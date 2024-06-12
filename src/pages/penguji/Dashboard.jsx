import { useStore } from "../../states/quizzes";
import { useEffect } from "react";

import CardCount from "../../components/cardCount";
import { BarLoader } from "react-spinners";

export default function DashboardPenguji() {
  const { quiz, loading, getQuiz } = useStore((state) => ({
    quiz: state.quiz,
    getQuiz: state.getQuiz,
    loading: state.loading,
  }));

  useEffect(() => {
    getQuiz();
  }, [getQuiz]);

  const data = [{ title: "Total Quiz", number: quiz.length }];

  return (
    <div className="flex-grow p-4">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <BarLoader color="#2563EB" />
        </div>
      ) : (
        <CardCount data={data} />
      )}
    </div>
  );
}
