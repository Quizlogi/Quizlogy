/* eslint-disable react/no-unknown-property */
import '/src/App.css';
import { Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '/variants';

export default function Hero() {
  return (
    <div classname='md:px-14 p-4 max-w-screen-2xl mx-auto '>
      <div className='gradientBg rounded-xl md:px-14 p-4 max-w-screen-2xl mx-auto rounded-br-[80px] my-24'>
        {/* img */}
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}>
            <img src='/hero.svg' alt='Hero Image' className='lg:h-[386px]' />
          </motion.div>
          {/* content */}
          <div className='md:w-3/5'>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}>
              <Typography
                variant='h2'
                className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>
                Quizlogy
              </Typography>
              <Typography variant='p' className='text-[#EBEBEB] text-2xl mb-8'>
                Platform quiz beragam kategori
              </Typography>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-row gap-2 mr-4'>
              {/* <Link to='/register'>
                <Button
                  // variant='filled'
                  // color='blue'
                  className='py-3 px-2.5 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>
                  Daftar Sekarang
                </Button>
              </Link> */}
              <Link to='/login'>
                <Button
                  // variant='outlined'
                  className='py-4 px-7 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>
                  Login
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
