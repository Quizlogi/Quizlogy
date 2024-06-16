import ImageCard from "../../components/main/ImageCard";
import { Typography } from "@material-tailwind/react";

import { useStore as useStoreQuiz } from "../../states/quizzes";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BarLoader } from "react-spinners";
import { Input } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { debounce } from "lodash";

export default function SearchPage() {
  const [filterText, setFilterText] = useState("");
  const { quiz, searchQuiz, loading } = useStoreQuiz((state) => ({
    quiz: state.quiz,
    loading: state.loading,
    searchQuiz: state.searchQuiz,
  }));

  useEffect(() => {
    searchQuiz(filterText);
  }, [filterText, searchQuiz]);

  const debounceSetFilterText = debounce((value) => {
    setFilterText(value);
  }, 500);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      debounceSetFilterText.cancel();
      setFilterText(e.target.value);
    }
  };

  return (
    <div className="mx-auto my-12 max-w-screen-xl px-4 md:px-6 lg:px-8 overflow-hidden">
      <Toaster />
      <div>
        <Typography color="black" variant="h4" className="mb-5 text-center">
          Cari Quiz
        </Typography>

        <Input
          className="col-span-4 mb-10"
          icon={<FaSearch />}
          label="Search"
          placeholder="Search..."
          onChange={(e) => debounceSetFilterText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {loading ? (
          <div className="flex justify-center mt-10">
            <BarLoader color="#0f172a" css="margin: 0 auto" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 h-full pb-7 mt-5 items-center justify-center">
            <ImageCard data={Array.isArray(quiz) ? quiz : []} />
          </div>
        )}
      </div>
    </div>
  );
}
