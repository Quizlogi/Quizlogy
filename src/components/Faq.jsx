import { Typography } from "@material-tailwind/react";
import { SimpleCard } from "./SimpleCard";

export default function Faq() {
  return (
    <div className='flex flex-col mx-auto my-12 max-w-[1006px] px-4'>
      <Typography className='text-center' variant='h2'>Mengapa Quizlogy?</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mt-6">
        <SimpleCard title='Kategori Beragam' />
        <SimpleCard title='Nilai setelah Quiz' />
        <SimpleCard title='Koreksi untuk Evaluasi' />
        <SimpleCard title='Nilai setelah Quiz' />
      </div>
    </div>
  );
}