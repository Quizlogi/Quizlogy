import { BiCategory } from 'react-icons/bi';
import { BsClipboard2Check } from 'react-icons/bs';
import { GrScorecard } from 'react-icons/gr';
import { motion } from 'framer-motion';
import { fadeIn } from '/variants';

export default function Faq() {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
      <div className='flex flex-col lg:flex-row justify-center items-start gap-10'>
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='lg:w-1/4 px-4 lg:px-0'>
          <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-6'>
            Mengapa Quizlogy?
          </h3>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='w-full lg:w-3/4'>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8 px-4 lg:px-0'>
            <div className='bg-[rgba(255, 255, 255, 0.04)] border-[2px] border-secondary rounded-2xl shadow-3xl p-8 items-center flex justify-center group hover:-translate-y-4 transition-all hover:bg-indigo-950 duration-300 cursor-pointer'>
              <div className='text-primary rounded-2xl flex flex-col items-center justify-center group-hover:text-secondary transition-all duration-300 cursor-pointer'>
                <BiCategory
                  size={50}
                  className='mb-5 text-secondary group-hover:text-secondary'
                />
                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5 group-hover:text-secondary'>
                  Kategori Beragam
                </h5>
              </div>
            </div>
            <div className='bg-[rgba(255, 255, 255, 0.04)] border-[2px] border-secondary rounded-2xl shadow-3xl p-8 items-center flex justify-center group hover:-translate-y-4 transition-all hover:bg-indigo-950 duration-300 cursor-pointer md:mt-16'>
              <div className='text-primary rounded-2xl flex flex-col items-center justify-center group-hover:text-secondary transition-all duration-300 cursor-pointer'>
                <GrScorecard
                  size={50}
                  className='mb-5 text-secondary group-hover:text-secondary'
                />
                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5 group-hover:text-secondary'>
                  Nilai setelah Quiz
                </h5>
              </div>
            </div>
            <div className='bg-[rgba(255, 255, 255, 0.04)] border-[2px] border-secondary rounded-2xl shadow-3xl p-8 items-center flex justify-center group hover:-translate-y-4 transition-all hover:bg-indigo-950 duration-300 cursor-pointer'>
              <div className='text-primary rounded-2xl flex flex-col items-center justify-center group-hover:text-secondary transition-all duration-300 cursor-pointer'>
                <BsClipboard2Check
                  size={50}
                  className='mb-5 text-secondary group-hover:text-secondary'
                />
                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5 group-hover:text-secondary'>
                  Koreksi untuk Evaluasi
                </h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
