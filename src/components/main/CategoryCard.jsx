import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const getRandomGradient = () => {
  const gradients = [
    "bg-gradient-to-r from-blue-500 to-light-blue-500",
    "bg-gradient-to-r from-green-500 to-light-green-500",
    "bg-gradient-to-r from-yellow-500 to-light-yellow-500",
    "bg-gradient-to-r from-red-500 to-light-red-500",
    "bg-gradient-to-r from-purple-500 to-light-purple-500",
    "bg-gradient-to-r from-pink-500 to-light-pink-500",
    "bg-gradient-to-r from-indigo-500 to-light-indigo-500",
    "bg-gradient-to-r from-cyan-500 to-light-cyan-500",
    "bg-gradient-to-r from-rose-500 to-light-rose-500",
    "bg-gradient-to-r from-emerald-500 to-light-emerald-500",
    "bg-gradient-to-r from-gray-500 to-light-gray-500",
    "bg-gradient-to-r from-blue-gray-500 to-light-blue-gray-500",
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

export default function CategoryCard({ data }) {
  return data.map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.1 }}
      className="w-full h-full"
    >
      <Link to={`/category/${item.id}`} replace={true}>
        <Card className="w-full h-full mb-6">
          <CardHeader
            color="blue-gray"
            className={`relative h-1 mt-4 ${getRandomGradient()}`}
          ></CardHeader>
          <CardBody className="flex flex-col gap-1">
            <h5
              className="line-clamp-1 text-slate-950 font-bold text-xl"
              color="blue-gray"
            >
              {item.name}
            </h5>
            <Typography variant="paragraph">{item._count.quiz} Quiz</Typography>
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  ));
}

CategoryCard.propTypes = {
  data: propTypes.array.isRequired,
};
