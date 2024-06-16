import { Typography } from '@material-tailwind/react';
import { Link } from "react-router-dom";

export function LogoFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-secondary p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-secondary text-center md:justify-between">
        <img src="/logo-quizlogy-horizontal.svg" alt="logo-ct" width="150" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link to="/about">
              <Typography
                color="white"
                className="font-normal transition-colors hover:text-primary focus:text-primary"
              >
                About
              </Typography>
            </Link>
          </li>
          {/* <li>
            <Typography
              as='a'
              href='#'
              color='white'
              className='font-normal transition-colors hover:text-primary focus:text-primary'>
              License
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='white'
              className='font-normal transition-colors hover:text-primary focus:text-primary'>
              Contribute
            </Typography>
          </li> */}
        </ul>
      </div>
      <hr className="my-8 border-white-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; {currentYear} Quizlogy
      </Typography>
    </footer>
  );
}
