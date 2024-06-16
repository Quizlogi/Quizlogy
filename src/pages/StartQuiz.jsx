import { useEffect, useState } from "react";
import { useStore as useSessionStore } from "../states/quizSession"
import { getQuizAnswer, initQuizAnswer, setQuizAnswer } from "../utils/userAnswer";
import { Card, Button, ButtonGroup, Chip, Typography, IconButton } from "@material-tailwind/react";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { Toaster } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { shallow } from "zustand/shallow";

export default function StartQuiz() {
  const { sessionId } = useParams();
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const index = quizIndex;

  const { quiz, getQuizSessionById } = useSessionStore((state) => ({
    quiz: state.quizSession,
    getQuizSessionById: state.getQuizSessionById,
  }), shallow)

  useEffect(() => {
    try {
      getQuizSessionById(sessionId);
    } catch(error) {
      console.log(error);
    }
  }, [getQuizSessionById, sessionId]);

  // check if quiz is empty
  console.log(`respons quiz index ${index}`, quiz)

  // Define variables with checks
  const title = quiz?.title || "";
  const category = quiz?.category?.name || "";
  const questions = quiz?.questions?.[index] || {};

  const nextQuestion = () => {
    if (quizIndex < (quiz.questions?.length || 0) - 1) {
      setQuizIndex(quizIndex + 1);
    }
    if (quizIndex === (quiz.questions?.length || 0) - 1) {
      console.log("End of quiz");
    }
  };

  const prevQuestion = () => {
    if (quizIndex > 0) {
      setQuizIndex(quizIndex - 1);
    }
  };

  const handleAnswer = (optionId) => {
    const questionId = questions.id;
    setQuizAnswer(questionId, optionId);
    setSelectedOption(optionId);
  };
  
  const quizAns = getQuizAnswer() || initQuizAnswer();
  const userAns = quizAns.map((ans) => ans.optionId);

  return (
    <Card className="w-[576px] h-[560px] mx-auto my-4">
      <Toaster />
      <article className="flex flex-col justify-between h-full m-6">
        <div className="upper-section">
          {/* unchanged section */}
          <section className="flex flex-row justify-between">
            <Typography>
              {title}
            </Typography>
            <Chip size="sm" variant="outlined" value={category} color="blue-gray" className="w-fit" />
          </section>
          <hr className="my-2 border-t border-slate-300"/>
          {/* changed section */}
          <Typography variant="h5" className="text-slate-700">
            {questions.question}
          </Typography>
          <section className="flex flex-row justify-between my-2 mb-8">
            <Typography>
              Pertanyaan {quizIndex + 1}/{quiz.questions?.length || 0}
            </Typography>
          </section>
          <ButtonGroup size="md" variant="filled" className="flex flex-col gap-4 p-1 divide-white">
            {/* loop through the quiz option answer */}
            {questions.options?.map((option, index) => {
              const chipValue = String.fromCharCode(65 + index);
              // check if the user answer includes the option id
              if(userAns.includes(option.id) || selectedOption === option.id) {
                return (
                  <Button key={index} className="flex flex-row gap-4 items-center border-0 rounded bg-violet-600" onClick={() => { handleAnswer(option.id) } }>
                    <Chip size="sm" variant="ghost" value={chipValue} color="blue-gray" className="w-fit text-white" />
                    <span className="text-slate-700 font-bold text-white">
                      {option.option}
                    </span>
                  </Button>
                )
              }
              return (
                <Button key={index} className="flex flex-row gap-4 items-center border-0 rounded bg-zinc-100" onClick={() => { handleAnswer(option.id) } }>
                  <Chip size="sm" variant="outlined" value={chipValue} color="blue-gray" className="w-fit bg-blue-gray" />
                  <span className="font-bold text-gray-900">
                    {option.option}
                  </span>
                </Button>
              )
            })}
          </ButtonGroup>
        </div>
        <div className="lower-section">
          <section className="flex flex-row justify-between">
            {quizIndex === 0 ? (
              <Button size="sm" variant="text" disabled></Button>
              ) : (
              <IconButton size="lg" variant="outlined" onClick={prevQuestion}>
                <GrCaretPrevious />
              </IconButton>
            )}
            {
              // check if the quiz index is the last question
              quizIndex === (quiz.questions?.length || 0) - 1 ? (
                // check if the user has answered all the questions
                quizAns.length === quiz.questions?.length ? (
                  <Link to={`/quiz/session/${sessionId}/end`}>
                    <Button size="sm" className="bg-violet-600 h-12" variant="filled" to={`/quiz/session/${sessionId}/end`}>
                      Submit
                    </Button>
                  </Link>
                ) : (
                  <Button size="sm" className="bg-violet-600" variant="filled" disabled>
                    Submit
                  </Button>
                )
              ) : (
                <IconButton size="lg" variant="outlined" onClick={nextQuestion}>
                  <GrCaretNext />
                </IconButton>
              )
            }
          </section>
        </div>
      </article>
    </Card>
  );
}