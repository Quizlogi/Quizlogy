import { Typography } from "@material-tailwind/react";
import { SimpleCard } from "./SimpleCard";

export default function Faq() {
  return (
    <div className='flex flex-col mx-auto my-12 max-w-[1006px] px-4 sm:px-6 lg:px-8'>
      <Typography className='mx-auto mb-8 text-center' variant='h2'>Mengapa Quizlogy?</Typography>
      <div className="flex flex-wrap gap-4 justify-center">
        <SimpleCard title='Kategori Beragam' />
        <SimpleCard title='Nilai setelah Quiz' />
        <SimpleCard title='Koreksi untuk Evaluasi' />
        <SimpleCard title='Nilai setelah Quiz' />
      </div>
    </div>
  );
}