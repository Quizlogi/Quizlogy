import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import useAuthCheck from "./hooks/useAuthCheck";
import { BarLoader } from "react-spinners";

export default function App() {
  const [user, loading] = useAuthCheck();

  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <BarLoader
        color="#5961F9"
        loading={loading}
        css="margin: 0 auto; margin-top: 20%;"
        size={150}
      />
    </div>
  ) : (
    <RouterProvider router={routes} />
  );
}
