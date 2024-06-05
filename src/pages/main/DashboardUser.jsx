import ImageCard from '../../components/main/ImageCard';
import { Typography } from '@material-tailwind/react';
import { OriginalCard } from "../../components/main/OriginalCard";
export default function DashboardUser() {
  return (
    <div className="mx-auto my-12 max-w-screen-xl px-4 md:px-6 lg:px-8 bg-[#ECEFF1] overflow-hidden">
      <div className="mb-12">
        <OriginalCard />
      </div>
      <div>
        <Typography color="black" variant="h4" className="mb-6 text-center">
          Quiz Populer
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <ImageCard className="mb-6" />
          <ImageCard className="mb-6" />
          <ImageCard className="mb-6" />
          <ImageCard className="mb-6" />
        </div>
      </div>
    </div>
  );
}
