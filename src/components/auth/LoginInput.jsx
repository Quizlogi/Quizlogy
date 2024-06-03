import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import { login } from "../../services/auth";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../states/authUser/auth";
   
  export function LoginInput() {
    const setAuth = useStore((state) => state.setAuthUser);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
      const masuk = login({ email, password });
      masuk.then((user) => {
        setAuth(user);
        switch (user.role) {
        case 1:
          navigate("/dashboard");
          break;
        case 2:
          navigate("/penguji");
          break;
        case 3:
          navigate("/admin");
          break;
        default:
          break;
        }
      });
    };

    return (
        <Card color="white" shadow={true} className="w-80 max-w-screen-lg sm:w-96 p-8 mx-auto mt-16">
        <Toaster />
        <Typography variant="h4" color="blue-gray" className="mb-8 text-center">
          Log In to Quizlogy
        </Typography>
        <form className="space-y-6">
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
              onChange={(e) => 
                setEmail(e.target.value)
              }
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
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-full" size="lg" onClick={onLogin}>
            Log In
          </Button>
          <Typography color="gray" className="text-center font-normal">
            Don't have an account?{" "}
            <a href="/register" className="font-medium text-gray-900">
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    );
  }