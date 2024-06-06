import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className='flex flex-col-reverse lg:flex-row mx-auto mt-24 mb-32 w-full max-w-6xl justify-between items-center px-4 lg:px-0'>
      <div className='flex flex-col gap-4 w-full lg:w-[500px] h-[250px] my-5'>
        <div>
          <Typography variant='h1' className='text-3xl lg:text-5xl'>Platform Quiz</Typography>
          <Typography variant='h1' className='text-3xl lg:text-5xl'>Beragam Kategori</Typography>
        </div>
        <div className='flex flex-row gap-2'>
          <Link to="/register">
            <Button variant="filled" color='blue' className='max-w-44'>Daftar Sekarang</Button>
          </Link>
          <Link to="/login">
            <Button variant="outlined">Login sebagai Penguji</Button>
          </Link>
        </div>
      </div>
      <img src="/hero.svg" alt="Hero Image" className="w-full lg:w-auto"/>
    </div>
  )
}