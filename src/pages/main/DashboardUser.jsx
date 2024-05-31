import ImageCard from '../../components/main/ImageCard';
import { Typography } from '@material-tailwind/react';
import { OriginalCard } from '../../components/main/OriginalCard';

export default function DashboardUser() {
  return (
    <>
      <div className='mx-auto my-12 max-w-[1006px] bg-[#ECEFF1] h-dvh'>
        <div>
          <OriginalCard />
        </div>
        <div className="mx-auto my-12 max-w-[1006px]">
          <Typography color='black' variant="h4" className="mb-2">
            Quiz Populer
          </Typography>
          <div className='flex flex-wrap gap-4'>
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>
        </div>
      </div>
    </>
  );
}