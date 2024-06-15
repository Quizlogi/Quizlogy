import { useEffect, useState } from "react";
import { submitAnswer } from "../services/quizSession"
import { removeQuizAnswer } from "../utils/userAnswer";
import { useParams } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";

export default function ResultQuiz() {
  const [quizResult, setQuizResult] = useState({});
  const { sessionId } = useParams();

  useEffect(() => {
    const submit = async () => {
      const response = await submitAnswer(sessionId);
      if(response.error) {
        console.log(response.error);
        return;
      }
      removeQuizAnswer();
      return setQuizResult(response.data);
    }
    submit();
  }, [sessionId])

  return (
    <Card className="w-[576px] h-[560px] mx-auto my-4">
      <div>
        <Typography variant="h1">Result Quiz</Typography>
      </div>
      <p>{quizResult?.score || 0}</p>
    </Card>
  )
}