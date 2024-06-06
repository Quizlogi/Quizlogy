import { Typography, Chip } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { fadeIn } from '/variants';

export default function ProductUse() {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto mb-10'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='md:w-1/2'>
          <img src='product-section.svg' alt='Hero Image' />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='md:w-2/5'>
          <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
            Quizlogy <span className='text-secondary'>cocok</span> untuk...
          </h2>
          <div className='flex flex-row gap-2 flex-wrap max-w-full lg:max-w-[507px] mt-2'>
            <Chip
              variant='ghost'
              value='Pekerjaan Rumah'
              className='bg-secondary text-white hover:bg-primary transition-all duration-300'
            />
            <Chip
              variant='ghost'
              value='Tugas'
              className='bg-secondary text-white hover:bg-primary transition-all duration-300'
            />
            <Chip
              variant='ghost'
              value='Pengetahuan Umum'
              className='bg-secondary text-white hover:bg-primary transition-all duration-300'
            />
            <Chip
              variant='ghost'
              value='Persiapan Ujian'
              className='bg-secondary text-white hover:bg-primary transition-all duration-300'
            />
            <Chip
              variant='ghost'
              value='Quiz General'
              className='bg-secondary text-white hover:bg-primary transition-all duration-300'
            />
            <Chip
              variant='ghost'
              value='Tes Kepribadian'
              className='bg-secondary text-white hover:bg-primary transition-all duration-300'
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
