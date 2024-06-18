import { Button, Card, CardHeader, Chip, Typography } from "@material-tailwind/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useStore as useStoreQuiz } from "../../states/main";
import { useStore as useStoreAuth } from "../../states/auth";
import sessionAPI from "../../services/quizSession";
import { IoArrowBack } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

export default function DetailQuiz() {
  // global state
  const user = useStoreAuth((state) => state.user);
  const { detailQuiz, loading, getQuizDetail } = useStoreQuiz((state) => ({
    detailQuiz: state.detailQuiz,
    loading: state.loading,
    getQuizDetail: state.getDetail,
  }));

  const { id } = useParams();
  const navigate = useNavigate();

  const onClickStartQuiz = async () => {
    const response = await sessionAPI.createQuizSession(id);

    // session sudah ada
    if (response.error) {
      const session = await sessionAPI.getQuizSession(id);
      navigate(`/quiz/session/${session.data[0].id}`);
    }

    // session baru
    if (response.message === "Success") {
      navigate(`/quiz/session/${response.data.id}`);
    }
  };

  useEffect(() => {
    getQuizDetail(id);
  }, [id, getQuizDetail, user]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center mb-5">
          <BarLoader color="#0f172a" css="margin: 0 auto" />
        </div>
      ) : (
        <div className="mx-auto my-12 max-w-screen-xl px-4 md:px-6 lg:px-8 overflow-auto">
          <Link to="/dashboard">
            <Button className="mb-2" size="sm" variant="outlined">
              <span className="flex flex-row gap-2 items-center">
                <IoArrowBack /> Back
              </span>
            </Button>
          </Link>
          <Card className="p-4 my-2 md:w-dvh md:overflow-auto md:flex-row justify-center">
            <div className='grid md:grid-cols-2 gap-6 mb-4'>
              <CardHeader
                floated={false}
                color="blue-gray"
                className="relative w-dvh mx-auto mt-0"
              >
                <img
                  src={
                    detailQuiz?.image?.includes("http")
                      ? detailQuiz.image
                      : `${import.meta.env.VITE_CDN_URL}/${detailQuiz.image}`
                  }
                  alt="card-image"
                  className="object-cover md:h-52 w-full"
                />
                <Button
                  color="green"
                  className="w-full rounded-s-none rounded-r-none"
                  onClick={onClickStartQuiz}
                >
                  <span className="flex flex-row gap-2 items-center">
                    <FaPlay />
                    Mulai Quiz
                  </span>
                </Button>
              </CardHeader>
              <div className="flex flex-col gap-2">
                <Chip
                  size="sm"
                  variant="outlined"
                  value={detailQuiz.category?.name || "Uncategorized"}
                  color="blue-gray"
                  className="w-fit"
                />
                <h5 className="text-xl font-bold line-clamp-2">
                  {detailQuiz.title}
                </h5>
                <Typography>
                  {detailQuiz._count?.questions} Soal
                </Typography>
                <p className="line-clamp-6">{detailQuiz.description}</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}