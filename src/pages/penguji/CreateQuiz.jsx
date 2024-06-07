import { Typography, Card, Input, Button, Textarea } from "@material-tailwind/react";
import { FaFileImage } from "react-icons/fa";
import Select from 'react-select';
import { useInstructureStore } from "../../states/penguji";
import { useEffect } from "react";

const inputClass = `!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent
placeholder:text-gray-500
placeholder:opacity-100
focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10`;


export default function CreateQuiz() {
  const { category, getCategory } = useInstructureStore((state) => ({
    category: state.category,
    getCategory: state.getCategory,
  }));

  useEffect(() => {
    getCategory();
  }, [getCategory])

  const filteredCategory = category.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));

  return (
    <div className="mx-auto my-12 w-[1006px]">
      <Typography className="ml-4 mb-6" variant="h4">
        Create Quiz
      </Typography>
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
          />
          <h6>Kategori :</h6>
            <Select options={filteredCategory} />
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
      </Card>
      <div className="w-[10rem] my-4">
        <Button color="blue" ripple="light" className="w-full">
          Create
        </Button>
      </div>
    </div>
  );
}