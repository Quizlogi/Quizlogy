import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ImageCard({ data }) {
  return data.map((item, index) => (
    <Card key={index} className="w-full h-full mb-6">
      <CardHeader color="blue-gray" className="relative h-44 mt-4">
        <Link to={`/quiz/${item.id}`}>
          <img
            src={item.image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </Link>
      </CardHeader>
      <CardBody>
        <Typography variant="paragraph" color="gray">
          {item.category.name}
        </Typography>
        <Link to={`/quiz/${item.id}`}>
          <Typography variant="h5" color="blue-gray">
            {item.title}
          </Typography>
        </Link>
        <Typography variant="paragraph">
          {item.question_count} pertanyaan
        </Typography>
        <p className="line-clamp-3">
          {item.description}
        </p>
      </CardBody>
    </Card>
  ));
}

ImageCard.propTypes = {
  data: propTypes.array.isRequired,
};
