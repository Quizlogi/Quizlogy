import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";

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
import useInput from "../../hooks/useInput";
import toast from "react-hot-toast";

const inputClass = `!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent
placeholder:text-gray-500
placeholder:opacity-100
focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10`;

export default function CreateQuiz() {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useInput("");
  const [description, setDescription] = useInput("");
  const [categor, setCategory] = useState({});

  const { category, createQuiz, getCategory } = useStore((state) => ({
    category: state.category,
    createQuiz: state.createQuiz,
    getCategory: state.getCategory,
  }));

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  const filteredCategory = category.map((cat) => ({
    value: cat.id.toString(),
    label: cat.name,
  }));

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

      const data = {
        title,
        description,
        category: categor.value,
        image: selectedImage,
      };

      const d = await createQuiz(data);

      navigate(`/penguji/quiz/${d.id}/questions`);
    } catch (error) {
      toast.error("Failed to create quiz");
    }
  };

  return (
    <div className="mx-auto my-12 w-[1006px] mb-5">
      <Typography className="ml-4 mb-6" variant="h4">
        Create Quiz
      </Typography>
      <Form onSubmit={onSubmit}>
        <Card className="w-full">
          <div className="flex flex-col w-[500px] p-5 gap-2">
            <h6>Nama Quiz :</h6>
            {/* sementara begini dulu */}
            <Input
              label="quizName"
              placeholder="Sistem Organ Manusia"
              className={inputClass}
              labelProps={{
                className: "hidden",
              }}
              value={title}
              onChange={setTitle}
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
              onChange={setDescription}
            />
            <h6>Kategori :</h6>
            <Select options={filteredCategory} onChange={setCategory} />
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
                  <img src={selectedImage} alt="Selected" className="w-full" />
                </div>
              </>
            )}
          </div>
          <div className="w-[10rem] my-4 mx-auto max-w-full">
            <Button color="blue" ripple={true} className="w-full" type="submit">
              Create
            </Button>
          </div>
        </Card>
      </Form>
    </div>
  );
}
