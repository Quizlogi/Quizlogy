import { Typography, Card, Input, Button, Textarea } from "@material-tailwind/react";
import { FaFileImage } from "react-icons/fa";

const inputClass = `!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent
placeholder:text-gray-500
placeholder:opacity-100
focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10`;

export default function CreateQuiz() {
  return (
    <div className='mx-auto my-12 w-[1006px]'>
      <Typography className='ml-4 mb-6' variant='h4'>
        Create Quiz
      </Typography>
      <Card className='w-full'>
        <div className='flex flex-col w-[500px] p-5 gap-2'>
          <h6>Nama Quiz :</h6>
            {/* sementara begini dulu */}
            <Input 
              label="quizName"
              placeholder="Sistem Organ Manusia"
              className={inputClass}
              labelProps={{
                className: "hidden",
              }} />
          <h6>Deskripsi :</h6>
            <Textarea
              label="deskripsi"
              placeholder="Deskripsi singkat tentang quiz ini"
              className={inputClass}
              variant="outlined"
              labelProps={{
                className: "hidden",
              }} />
          <h6>Kategori :</h6>
            <Input 
              label="kategori"
              placeholder="Biologi"
              className={inputClass}
              labelProps={{
                className: "hidden",
              }} />
          <h6>Image :</h6>
            {/* TODO: Input gambar */}
            <label htmlFor="doc" className="flex items-center p-4 gap-3 rounded-3xl border border-gray-300 border-dashed bg-gray-50 cursor-pointer">
                <FaFileImage className="text-3xl" />
                <div className="space-y-2">
                    <h4 className="text-base font-semibold text-gray-700">Upload a file</h4>
                    <span className="text-sm text-gray-500">Max 2 MO</span>
                </div>
                <input type="file" id="doc" name="doc" accept="png, jpg" hidden/>
            </label>
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