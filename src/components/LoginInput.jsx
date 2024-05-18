/* eslint-disable react/no-unescaped-entities */
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export function LoginInput() {
    return (
        <Card color="transparent" shadow={true} className="w-80 max-w-screen-lg sm:w-96 p-8 mx-auto mt-16">
        <Typography variant="h4" color="blue-gray" className="mb-8 text-center">
          Log In to Quizlogy
        </Typography>
        <form className="space-y-6">
          <div>
            <Typography variant="h6" color="blue-gray">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="border-t-blue-gray-200 focus:border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="border-t-blue-gray-200 focus:border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="w-full" size="lg">
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