import { Card, CardBody, Typography } from '@material-tailwind/react';
import propTypes from 'prop-types';

export function SimpleCard({ title }) {
  return (
    <Card className='mt-6 w-96 h-48 shadow-lg group hover:bg-blue-400 transition-all'>
      <CardBody>
        <Typography
          variant='h5'
          color='blue-gray'
          className='group-hover:text-blue-50 mb-2'>
          {title}
        </Typography>
        <Typography className='group-hover:text-blue-50'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          provident repellendus quas corrupti perferendis, veritatis error
          obcaecati nam facilis incidunt aliquid
        </Typography>
      </CardBody>
    </Card>
  );
}

SimpleCard.propTypes = {
  title: propTypes.string.isRequired,
};
