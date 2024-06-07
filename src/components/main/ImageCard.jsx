import { Card, CardHeader, CardBody, Typography, Chip } from "@material-tailwind/react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function ImageCard({ data }) {
  return data.map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.1 }}
      className="w-full h-full"
    >
    <Link to={`/quiz/${item.id}`}>
      <Card className="w-full h-full mb-6">
      <CardHeader color="blue-gray" className="relative h-44 mt-4">
          <img
            src={item.image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
      </CardHeader>
      <CardBody className="flex flex-col gap-1">
        <div className="max-w-[fit-content] p-0">
          <Chip size="sm" variant="outlined" value={item.category.name} color="blue-gray" />
        </div>
        <h5 className="line-clamp-1 text-slate-950 font-bold text-xl" color="blue-gray">
          {item.title}
        </h5>
        <Typography variant="paragraph">
          {item.question_count} pertanyaan
        </Typography>
        <p className="line-clamp-3">
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
