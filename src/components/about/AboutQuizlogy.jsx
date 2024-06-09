/* eslint-disable react/no-unknown-property */
import '/src/App.css';
import AboutImg from '/public/about-ilustrasi.png';
import { Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '/variants';

export default function AboutQuizlogy() {
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
            <img src={AboutImg} alt='About Image' className='lg:h-[386px]' />
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
                className='md:text-4xl text-2xl font-bold text-white mb-6 leading-relaxed'>
                Tentang Quizlogy
              </Typography>
              <Typography variant='p' className='text-[#EBEBEB] text-lg mb-8'>
              Quizlogy adalah sebuah platform pembelajaran online yang bertujuan untuk meningkatkan keterlibatan pengguna melalui kuis interaktif dan materi edukasi. Platform ini menawarkan fitur-fitur fleksibel seperti membuat kuis sendiri dan variasi topik yang memungkinkan pengguna aktif memilih kategori kuis dan mengujinya sesuai dengan minat. Proyek ini berfokus pada bagaimana Quizlogy dapat meningkatkan efektivitas pembelajaran, meningkatkan minat pengguna, dan membuat pengguna lebih mudah membuat kuis yang efektif dan relevan.
              </Typography>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-row gap-2 mr-4'>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
