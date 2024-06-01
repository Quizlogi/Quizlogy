import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { register } from "../../services/auth";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
   
  export function RegisterInput() {
    const [name, setName] = useState(""); 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <Card color="white" shadow={true} className="w-80 max-w-screen-lg sm:w-96 p-8 mx-auto mt-16">
      <Toaster />
      <Typography variant="h4" color="blue-gray" className="mb-8 text-center">
        Welcome to Quizlogy
      </Typography>
      <form className="space-y-6">
        <div>
          <Typography color="blue-gray" className="mb-2">
            Nama
          </Typography>
          <Input
            size="lg"
            placeholder="Your Name"
            className="!border !border-gray-300 bg-white text-gray-900 shadow-md shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <Typography color="blue-gray" className="mb-2">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className="!border !border-gray-300 bg-white text-gray-900 shadow-md shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <Typography color="blue-gray" className="mb-2">
            Username
          </Typography>
          <Input
            size="lg"
            placeholder="budisetiawan123"
            className="!border !border-gray-300 bg-white text-gray-900 shadow-md shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <Typography color="blue-gray" className="mb-2">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className="!border !border-gray-300 bg-white text-gray-900 shadow-md shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button className="w-full" size="lg" onClick={() => register({name, email, username, password})}>
          Sign Up
        </Button>
        <Typography color="gray" className="text-center font-normal">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-gray-900">
            Log In
          </a>
        </Typography>
      </form>
    </Card>
    );
  }