import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar, Button } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";

export function NavbarAuth({ type }) {
  return (
    <Navbar className="fixed top-0 w-full z-50 mx-auto max-w-full px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Toaster />
        <a href="/" className="mr-4 cursor-pointer py-1.5">
          <img
            src="/quizlogy-logo-without-font.png"
            style={{ width: "auto", height: "40px" }}
            alt="Logo"
          />
        </a>
        <div className="flex items-center gap-x-1">
          {type === "login" ? (
            <Link to="/register">
              <Button
                // color="blue"
                // variant="filled"
                size="sm"
                className="bg-secondary hidden lg:inline-block transition-all duration-300 hover:text-white hover:bg-indigo-600"
              >
                Sign Up
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button
                // color="blue"
                // variant="filled"
                size="sm"
                className="bg-secondary hidden lg:inline-block transition-all duration-300 hover:text-white hover:bg-indigo-600"
              >
                Log In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Navbar>
  );
}

NavbarAuth.propTypes = {
  type: propTypes.string,
};
