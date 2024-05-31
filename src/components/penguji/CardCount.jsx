import { Typography, Card as MTCard, CardBody } from "@material-tailwind/react";

const cardData = [
  { title: 'Total Quiz', number: 6 },
  { title: 'Total Category', number: 3 },
  { title: 'Total User', number: 2 },
];

export default function CardPenguji() {
  return (
    <div className='mx-auto my-12 max-w-[1006px]'>
      <Typography className='ml-4 mb-6' variant='h4'>Dashboard Penguji</Typography>
      <div className="flex flex-row gap-4 justify-center items-center">
        {cardData.map((card, index) => (
          <MTCard key={index} className="w-full sm:w-64 md:w-80 lg:w-96 h-auto shadow-lg group hover:bg-blue-400 transition-all">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="group-hover:text-blue-50 mb-2">
                {card.title}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="group-hover:text-blue-50 mb-2">
                {card.number}
              </Typography>
            </CardBody>
          </MTCard>
        ))}
      </div>
    </div>
  );
}
