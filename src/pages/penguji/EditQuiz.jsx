import { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import {
  Typography,
  Card,
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";
import Select from "react-select";
import { FaFileImage } from "react-icons/fa";
import { TrashIcon } from "@heroicons/react/16/solid";

import { useStore } from "../../states/quiz";
import { BarLoader } from "react-spinners";

const inputClass = `!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent
placeholder:text-gray-500
placeholder:opacity-100
focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10`;

export default function EditQuiz() {
  //   const navigate = useNavigate();

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categor, setCategory] = useState({ value: "", label: "" });
  const [selectedImage, setSelectedImage] = useState("");

  const { quiz, category, updateQuiz, getCategory, getQuizById, loading } =
    useStore((state) => ({
      quiz: state.quiz,
      category: state.category,
      getCategory: state.getCategory,
      getQuizById: state.getQuizById,
      updateQuiz: state.updateQuiz,
    }));

  const filteredCategory = category.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));

  useEffect(() => {
    getQuizById(id);
    getCategory();
  }, [getCategory, getQuizById, id]);

  useEffect(() => {
    setTitle(quiz?.title);
    setDescription(quiz?.description);
    setCategory({
      value: quiz?.category?.id,
      label: quiz?.category?.name,
    });

    if (quiz?.image)
      quiz?.image.startsWith("http")
        ? setSelectedImage(quiz?.image)
        : setSelectedImage(`${import.meta.env.VITE_CDN_URL}/${quiz?.image}`);
  }, [quiz]);

  console.log(import.meta.env);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      updateQuiz(id, {
        title,
        description,
        category: categor.value,
        image: selectedImage,
      });
    } catch (error) {
      toast.error("Failed to create quiz");
    }
  };

  return (
    <div className="mx-auto my-12 w-[1006px] mb-5">
      <Typography className="ml-4 mb-6" variant="h4">
        Edit Quiz
      </Typography>

      {loading ? (
        <BarLoader color="#0f172a" css="margin: 0 auto" />
      ) : (
        <Form onSubmit={onSubmit}>
          <Card className="w-full">
            <div className="flex flex-col w-[500px] p-5 gap-2">
              <h6>Nama Quiz :</h6>
              <Input
                label="quizName"
                placeholder="Sistem Organ Manusia"
                className={inputClass}
                labelProps={{
                  className: "hidden",
                }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <h6>Deskripsi :</h6>
              <Textarea
                label="deskripsi"
                placeholder="Deskripsi singkat tentang quiz ini"
                className={inputClass}
                variant="outlined"
                labelProps={{
                  className: "hidden",
                }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <h6>Kategori :</h6>
              <Select
                options={filteredCategory}
                onChange={setCategory}
                value={categor}
              />
              <h6>Image :</h6>
              {/* TODO: Input gambar */}
              <label
                htmlFor="doc"
                className="flex items-center p-4 gap-3 rounded-3xl border border-gray-300 border-dashed bg-gray-50 cursor-pointer"
              >
                <FaFileImage className="text-3xl" />
                <div className="space-y-2">
                  <h4 className="text-base font-semibold text-gray-700">
                    Upload a file
                  </h4>
                  <span className="text-sm text-gray-500">Max 2 MB</span>
                </div>
                <input
                  type="file"
                  id="doc"
                  name="doc"
                  accept="png, jpg"
                  hidden
                  onChange={handleImageChange}
                />
              </label>
              {selectedImage && (
                <>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedImage(null)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <TrashIcon className="h-4 w-4 mr-2" />
                      Remove
                    </button>
                  </div>

                  <div className="mt-4">
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="w-full"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="w-[10rem] my-4 mx-auto max-w-full">
              <Button
                color="blue"
                ripple={true}
                className="w-full"
                type="submit"
              >
                Update
              </Button>
            </div>
          </Card>
        </Form>
      )}
    </div>
  );
}
