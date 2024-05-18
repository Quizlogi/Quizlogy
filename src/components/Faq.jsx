import { Typography } from "@material-tailwind/react";
import { SimpleCard } from "./SimpleCard";

export default function Faq() {
  return (
    <div className='flex flex-col mx-auto my-12 max-w-[1006px] justify-between'>
      <Typography className='mx-auto' variant='h2'>Mengapa Quizlogy?</Typography>
      <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
        <SimpleCard title='Kategori Beragam' />
        <SimpleCard title='Nilai setelah Quiz' />
        <SimpleCard title='Koreksi untuk Evaluasi' />
        <SimpleCard title='Nilai setelah Quiz' />
      </div>
    </div>
  );
}