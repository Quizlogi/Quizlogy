import { Typography, Card as MTCard, CardBody } from "@material-tailwind/react";
import propTypes from "prop-types";
export default function CardCount({ title, data }) {
  return (
    <div className="mx-auto my-12 max-w-[1006px]">
      <Typography className="ml-4 mb-6" variant="h4">
        {title}
      </Typography>
      <div className="flex flex-row gap-4 justify-center items-center">
        {data.map((card, index) => (
          <MTCard
            key={index}
            className="w-full sm:w-64 md:w-80 lg:w-96 h-auto shadow-lg group hover:bg-blue-400 transition-all"
          >
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="group-hover:text-blue-50 mb-2"
              >
                {card.title}
              </Typography>
              <Typography
                variant="h5"
                color="blue-gray"
                className="group-hover:text-blue-50 mb-2"
              >
                {card.number}
              </Typography>
            </CardBody>
          </MTCard>
        ))}
      </div>
    </div>
  );
}

CardCount.propTypes = {
  title: propTypes.string,
  data: propTypes.array,
};
