import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

export default function ImageCard() {
  return (
    <Card className="w-full mb-6">
      <CardHeader color="blue-gray" className="relative h-44 mt-4">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="paragraph" color="gray">
          Matematika Wajib
        </Typography>
        <Typography variant="h5" color="blue-gray">
          Limit Fungsi Trigonometri
        </Typography>
        <Typography variant="paragraph">
          20 pertanyaan
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
    </Card>
  );
}
