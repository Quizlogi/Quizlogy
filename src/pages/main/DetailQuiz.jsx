import { Button, Card, CardHeader, Chip, Typography } from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import { useStore as useStoreQuiz } from "../../states/main";
import { useStore as useStoreAuth } from "../../states/auth";
import { IoArrowBack } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import PropTypes from "prop-types";

export default function DetailQuiz() {
  const user = useStoreAuth((state) => state.user);
  const { detailQuiz, loading, getQuizDetail } = useStoreQuiz((state) => ({
    detailQuiz: state.detailQuiz,
    loading: state.loading,
    getQuizDetail: state.getDetail,
  }));
  const { id } = useParams();

  useEffect(() => {
    getQuizDetail(id);
  }, [id, getQuizDetail, user])

  console.log(detailQuiz);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center mb-5">
          <BarLoader color="#0f172a" css="margin: 0 auto" />
        </div>
      ) : (
      <div className="mx-auto my-12 max-w-screen-xl px-4 md:px-6 lg:px-8 overflow-hidden">
        <Link to="/dashboard">
          <Button className="mb-2" size="sm" variant="outlined">
            <span className="flex flex-row gap-2 items-center">
              <IoArrowBack /> Back
            </span>
          </Button>
        </Link>
          <Card className="p-4 my-2">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <CardHeader floated={false} color="blue-gray" className="relative w-96 mx-auto mt-0">
                <img
                  src={detailQuiz.image}
                  alt="card-image"
                  className="object-cover"
                />
                <Button color="green" className="w-full rounded-s-none rounded-r-none">
                  <span className="flex flex-row gap-2 items-center">
                    <FaPlay />
                    Mulai Quiz
                  </span>
                </Button>
              </CardHeader>
              <div className="flex flex-col gap-2">
                {/* masih placeholder */}
                <Chip size="sm" variant="outlined" value="kategori" color="blue-gray" className="w-fit" />
                {/* ================= */}
                <h5 className="text-xl font-bold line-clamp-2">
                  {detailQuiz.title}
                </h5>
                <Typography>
                  {/* masih placeholder */}
                  Soal 10/10
                  {/* ================= */}
                </Typography>
                <p className="line-clamp-6">
                  {detailQuiz.description}
                </p>
              </div>
            </div>
          </Card>
          </div>
      )}
    </div>
  );
}

DetailQuiz.propTypes = {
  detailQuiz: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
}