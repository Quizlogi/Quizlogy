import Boy1 from '/public/boy-1.png';
import Boy2 from '/public/boy-2.png';
import Girl from '/public/girl.png';
import { motion } from 'framer-motion';
import { fadeIn } from '/variants';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AboutUs() {
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
            Tentang Kami
          </h3>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='w-full lg:w-3/4'>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8 px-4 lg:px-0'>
            <div className='bg-[rgba(255, 255, 255, 0.04)] border-[1px] rounded-2xl shadow-3xl p-8 items-center flex justify-center group hover:-translate-y-4 transition-all hover:bg-indigo-950 duration-300 cursor-pointer'>
              <div className='text-primary rounded-2xl flex flex-col items-center justify-center group-hover:text-secondary transition-all duration-300 cursor-pointer'>
                <div>
                  <img
                    src={Boy1}
                    alt='Naufal profile'
                    className='mb-1 w-30 h-30 border-4 rounded-lg  group-hover:border-primary transition-all duration-300'
                  />
                </div>
                <div>
                  <h5 className='text-lg font-semibold text-primary px-5  mt-1 group-hover:text-secondary'>
                    M. Naufal Faqih
                  </h5>
                  <p className='text-primary text-md  px-5 mt-1 group-hover:text-secondary'>
                    Back-End
                  </p>
                </div>
                <div className='flex space-x-2 px-5 mt-4'>
                  <Link to='https://www.linkedin.com'>
                    <FaLinkedin
                      size={30}
                      className=' group-hover:text-secondary'
                    />
                  </Link>
                  <Link to='https://github.com'>
                    <FaGithub
                      size={30}
                      className=' group-hover:text-secondary'
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className='bg-[rgba(255, 255, 255, 0.04)] border-[1px]  rounded-2xl shadow-3xl p-8 items-center flex justify-center group hover:-translate-y-4 transition-all hover:bg-indigo-950 duration-300 cursor-pointer md:mt-16'>
              <div className='text-primary rounded-2xl flex flex-col items-center justify-center group-hover:text-secondary transition-all duration-300 cursor-pointer'>
                <div>
                  <img
                    src={Girl}
                    alt='Vina profile'
                    className='mb-2 w-30 h-30 border-4 rounded-lg  group-hover:border-primary transition-all duration-300'
                  />
                </div>

                <div>
                  <h5 className='text-lg font-semibold text-primary px-5  mt-1 group-hover:text-secondary'>
                    Vina Nur Fauziah
                  </h5>
                  <p className='text-primary text-md  px-5 mt-1 group-hover:text-secondary'>
                    Front-End
                  </p>
                </div>
                <div className='flex space-x-2 px-5 mt-4'>
                <Link to='https://www.linkedin.com'>
                    <FaLinkedin
                      size={30}
                      className=' group-hover:text-secondary'
                    />
                  </Link>
                  <Link to='https://github.com'>
                    <FaGithub
                      size={30}
                      className=' group-hover:text-secondary'
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className='bg-[rgba(255, 255, 255, 0.04)] border-[1px]  rounded-2xl shadow-3xl p-8 items-center flex justify-center group hover:-translate-y-4 transition-all hover:bg-indigo-950 duration-300 cursor-pointer'>
              <div className='text-primary rounded-2xl flex flex-col items-center justify-center group-hover:text-secondary transition-all duration-300 cursor-pointer'>
                <div>
                  <img
                    src={Boy2}
                    alt='Zalfa profile'
                    className='mb-1 w-30 h-30 border-4 rounded-lg group-hover:border-primary transition-all duration-300'
                  />
                </div>
                <div>
                  <h5 className='text-lg font-semibold text-primary px-5  mt-1 group-hover:text-secondary'>
                    Zalfa Mufrih Rifda
                  </h5>
                  <p className='text-primary text-md  px-5 mt-1 group-hover:text-secondary'>
                    Front-End
                  </p>
                </div>
                <div className='flex space-x-2 px-5 mt-4'>
                  <Link to='https://www.linkedin.com'>
                    <FaLinkedin
                      size={30}
                      className=' group-hover:text-secondary'
                    />
                  </Link>
                  <Link to='https://github.com'>
                    <FaGithub
                      size={30}
                      className=' group-hover:text-secondary'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
