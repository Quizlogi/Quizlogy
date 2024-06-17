import { useEffect, useState } from "react";
import { submitAnswer } from "../services/quizSession"
import { removeQuizAnswer } from "../utils/userAnswer";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Typography } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";

export default function ResultQuiz() {
  const [quizResult, setQuizResult] = useState({});
  const { sessionId } = useParams();

  useEffect(() => {
    const fetchQuizResult = async () => {
      try {
        const response = await submitAnswer(sessionId);
        if (response.error) {
          console.log(response.error);
          return;
        }
        removeQuizAnswer();
        setQuizResult(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuizResult();
  }, [sessionId]);

  console.log(quizResult);

  return (
    <Card className="w-[576px] h-[560px] mx-auto items-center my-4">
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <div>
          <Typography variant="h2">Result Quiz</Typography>
        </div>
        <Typography variant="paragraph">kamu mendapat hasil skor :</Typography>
        <div className="flex flex-row">
          {[...Array(3)].map((star, index) => {
            const starCount = index + 1;
            
            if(quizResult?.score < 30 || quizResult?.score === undefined) {
              return (
                <FaStar
                  key={index}
                  size={50}
                  color={starCount <= 0 ? "#ffc107" : "#e4e5e9"} 
                />
              );
            }
            if(quizResult?.score < 70) {
              return (
                <FaStar
                  key={index}
                  size={50}
                  color={starCount <= 1 ? "#ffc107" : "#e4e5e9"} 
                />
              );
            }
            if(quizResult?.score < 90) {
              return (
                <FaStar
                  key={index}
                  size={50}
                  color={starCount <= 2 ? "#ffc107" : "#e4e5e9"} 
                />
              );
            } else {
              return (
                <FaStar
                  key={index}
                  size={50}
                  color={starCount <= 3 ? "#ffc107" : "#e4e5e9"} 
                />
              );
            }
          })}
        </div>
        <div>
          <div className="flex flex-col items-center">
            <Typography variant="h4">
              {quizResult?.score || 0}
            </Typography>
          </div>
        </div>
        <div className="flex flex-row gap-2 mt-7">
          <Link to="/dashboard">
            <Button className="flex flex-row items-center gap-2 bg-violet-600 h-[44px]">
              <MdHome size={20} /> Homepage
            </Button>
          </Link>
          <Link to={`/quiz/${quizResult?.quiz_id}`}>
            <Button className="flex flex-row items-center gap-2 bg-violet-600 h-[44px]">
              <IoMdRefresh size={20} /> Coba lagi
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}