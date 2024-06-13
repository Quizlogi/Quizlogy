import { useEffect, useState } from "react";
import { useStore as useSessionStore } from "../states/quizSession"
import { Card, Button, ButtonGroup, Chip, Typography, IconButton } from "@material-tailwind/react";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function StartQuiz() {
  const { sessionId } = useParams();
  const [quizIndex, setQuizIndex] = useState(0);
  const index = quizIndex;

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
    if (quizIndex === 0) {
      toast.error("You're at the first question!");
    }
  };

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
            {/* Apa kepanjangan dari APALAH */}
            {questions.question}
          </Typography>
          <section className="flex flex-row justify-between my-2 mb-8">
            <Typography>
              Pertanyaan {quizIndex + 1}/10
            </Typography>
          </section>
          <ButtonGroup size="md" variant="outlined" className="flex flex-col gap-4 p-1">
            {questions.options?.map((option, index) => {
              const chipValue = String.fromCharCode(65 + index);
              return (
                <Button key={index} className="flex flex-row gap-4 items-center border rounded" onClick={() => { console.log(option.id) }}>
                  <Chip size="sm" variant="outlined" value={chipValue} color="blue-gray" className="w-fit" />
                  {option.option}
                </Button>
              )
            })}
          </ButtonGroup>
        </div>
        <div className="lower-section">
          <section className="flex flex-row justify-between">
            <IconButton size="lg" variant="outlined" onClick={prevQuestion}>
              <GrCaretPrevious />
            </IconButton>
            <IconButton size="lg" variant="outlined" onClick={nextQuestion}>
              <GrCaretNext />
            </IconButton>
          </section>
        </div>
      </article>
    </Card>
  );
}