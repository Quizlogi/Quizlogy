import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from '@material-tailwind/react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ImageCard({ data }) {
  return data.map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.1 }}
      className='w-full h-full'>
      <Link to={`/quiz/${item.id}`}>
        <Card
          className='w-full h-full mb-6 group transition-all duration-300'
          style={{
            backgroundImage: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)',
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundImage =
              'linear-gradient(90deg, #5961F9 0%, #EE9AE5 100%)')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundImage =
              'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)')
          }>
          {' '}
          <CardHeader
            color='blue-gray'
            className='relative h-44 mt-4 group-hover:text-secondary'>
            <img
              src={
                item.image.includes('http')
                  ? item.image
                  : `${import.meta.env.VITE_CDN_URL}/${item.image}`
              }
              alt='card-image'
              className='h-full w-full object-cover group-hover:text-white'
            />
          </CardHeader>
          <CardBody className='flex flex-col gap-1 '>
            <div className='max-w-[fit-content] p-0 '>
              <Chip
                size='sm'
                variant='outlined'
                value={item.category.name}
                color='white'
                className=' group-hover:border-white group-hover:text-white'
              />
            </div>
            <h5
              className='line-clamp-1 text-primary group-hover:text-white font-bold text-xl'
              color='blue-gray '>
              {item.title}
            </h5>
            <Typography
              variant='paragraph'
              className='group-hover:text-white'>
              {item.question_count} pertanyaan
            </Typography>
            <p className='line-clamp-3 text-primary group-hover:text-white'>
              {item.description}
            </p>
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  ));
}

ImageCard.propTypes = {
  data: propTypes.array.isRequired,
};
