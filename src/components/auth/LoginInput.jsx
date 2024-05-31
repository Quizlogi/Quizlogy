import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export function LoginInput() {
    return (
        <Card color="white" shadow={true} className="w-80 max-w-screen-lg sm:w-96 p-8 mx-auto mt-16">
        <Typography variant="h4" color="blue-gray" className="mb-8 text-center">
          Log In to Quizlogy
        </Typography>
        <form className="space-y-6">
          <div>
            <Typography color="blue-gray" className="mb-2">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-md shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "before:content-none after:content-none",
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
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
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