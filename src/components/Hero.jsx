import { Button, Typography } from "@material-tailwind/react"

export default function Hero() {
  return (
    <div className='flex flex-row mx-auto my-12 w-[1006px] h-[300px] justify-between'>
      <div className='flex flex-col gap-4 w-[500px] h-[250px] my-5'>
        <div>
          <Typography variant='h1'>Platform Quiz</Typography>
          <Typography variant='h1'>Beragam Kategori</Typography>
        </div>
        <div className='flex flex-row gap-2'>
          <Button variant="filled" color='blue' className='max-w-44'>Daftar Sekarang</Button>
          <Button variant="outlined">Login sebagai Penguji</Button>
        </div>
      </div>
      <img src="../public/hero.svg" alt="Hero Image" />
    </div>
  )
}