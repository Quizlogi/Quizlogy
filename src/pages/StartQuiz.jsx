import { useEffect, useState } from "react";
import { useStore as useSessionStore } from "../states/quizSession"
import { getQuizAnswer, initQuizAnswer, setQuizAnswer } from "../utils/userAnswer";
import { Card, Button, ButtonGroup, Chip, Typography, IconButton } from "@material-tailwind/react";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";
import { shallow } from "zustand/shallow";
import { BarLoader } from "react-spinners";

export default function StartQuiz() {
  const { sessionId } = useParams();
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const index = quizIndex;

  const { quiz, loading, getQuizSessionById } = useSessionStore((state) => ({
    loading: state.loading,
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
  const userAns = quizAns.map((ans) => ans.option_id);

  if(loading) {
    return (
      <Card className="lg:w-[576px] h-[500px] my-4 mx-auto sm:w-dvh justify-center">
        <div className="flex flex-col gap-4 mx-auto">
          <Typography className="mt-4">Quiz sedang dimuat...</Typography>
          <BarLoader color="#0f172a" className="mx-auto" />
        </div>
    </Card>
    )
  }

  return (
    <Card className='lg:w-[576px] h-max mx-auto my-4 sm:w-dvh'>
        <article className="flex flex-col justify-between h-fit m-6 gap-4">
          <div className="upper-section">
            {/* unchanged section */}
            <section className="flex lg:flex-row max-sm:flex-col-reverse justify-between">
              <Typography variant="paragraph" className="flex-1">
                {title}
              </Typography>
              <Chip size="sm" variant="outlined" value={category} color="blue-gray" className="w-fit flex-0" />
            </section>
            <hr className="my-2 border-t border-slate-300"/>
            {/* changed section */}
            <Typography variant="h5" className="text-slate-700">
              {questions.question}
            </Typography>
            <section className="flex flex-row justify-between my-2 mb-8">
              <Typography variant="paragraph">
                Pertanyaan {quizIndex + 1}/{quiz.questions?.length || 0}
              </Typography>
            </section>
            <ButtonGroup size="md" variant="filled" className="flex flex-col gap-4 p-1 divide-white">
              {/* loop through the quiz option answer */}
              {questions.options?.map((option, index) => {
                const chipValue = String.fromCharCode(65 + index);
                // check if the user answer includes the option id
                return userAns.includes(option.id) ||
                  selectedOption === option.id ? (
                  <Button
                    key={index}
                    className="flex flex-row gap-4 items-center border-0 rounded bg-violet-600 text-white"
                    onClick={() => {
                      handleAnswer(option.id);
                    }}
                  >
                    <Chip
                      size="sm"
                      variant="ghost"
                      value={chipValue}
                      color="blue-gray"
                      className="w-fit text-inherit"
                    />
                    <span className="font-bold text-inherit">
                      {option.option}
                    </span>
                  </Button>
                ) : (
                  <Button
                    key={index}
                    className="flex flex-row gap-4 items-center border-0 rounded bg-zinc-100"
                    onClick={() => {
                      handleAnswer(option.id);
                    }}
                  >
                    <Chip
                      size="sm"
                      variant="outlined"
                      value={chipValue}
                      color="blue-gray"
                      className="w-fit bg-blue-gray"
                    />
                    <span className="font-bold text-gray-900">
                      {option.option}
                    </span>
                  </Button>
                );
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