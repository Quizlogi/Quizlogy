import { useStore as useSessionStore } from "../states/quizSession"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RunningQuiz from "../components/main/RunningQuiz"

export default function StartQuiz() {
  const { sessionId } = useParams();

  const { quiz, getQuizSessionById } = useSessionStore((state) => ({
    quiz: state.quizSession,
    getQuizSessionById: state.getQuizSessionById,
  }))

  useEffect(() => {
    try {
      getQuizSessionById(sessionId);
    } catch(error) {
      console.log(error);
    }
  }, [getQuizSessionById, sessionId]);

  console.log(quiz.questions);


  return (
    <RunningQuiz />
  );
}