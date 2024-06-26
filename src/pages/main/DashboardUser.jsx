import ImageCard from '../../components/main/ImageCard';
import { Typography } from '@material-tailwind/react';
import { OriginalCard } from "../../components/main/OriginalCard";

import { useStore as useStoreAuth } from "../../states/auth";
import { useStore as useStoreQuiz } from "../../states/quizzes";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BarLoader } from "react-spinners";

export default function DashboardUser() {
  const user = useStoreAuth((state) => state.user);
  const { quiz, loading, getDiscovery } = useStoreQuiz((state) => ({
    quiz: state.quiz,
    loading: state.loading,
    getDiscovery: state.getDiscovery,
  }));

  useEffect(() => {
    getDiscovery();
  }, [getDiscovery, user]);

  return (
    <div className="mx-auto my-12 max-w-screen-xl px-4 md:px-6 lg:px-8 overflow-hidden">
      <Toaster />
      <div className="mb-12">
        <OriginalCard user={user ?? {}} />
      </div>
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
              Quiz Populer
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 h-full pb-7 items-center justify-center">
              <ImageCard data={quiz.popular ?? []} />
            </div>

            <Typography
              color="black"
              variant="h4"
              className="mb-12 text-center"
            >
              Quiz Terbaru
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 h-full pb-7 items-center justify-center">
              <ImageCard data={quiz.newest ?? []} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
