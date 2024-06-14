import { Card, Typography } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";

import { useStore } from "../../states/auth";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const ProfileUser = () => {
  const { user, updateUser } = useStore((state) => ({
    user: state.user,
    updateUser: state.update,
  }));

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password === "") await updateUser({ name, username, email });
    else await updateUser({ name, username, email, password });
  };

  return (
    <div className="flex flex-col items-center pt-10 min-h-screen">
      <Toaster />
      <Card color="transparent" shadow={false} className="w-full sm:w-auto">
        <div>
          <Typography variant="h4" color="blue-gray" className="text-center">
            Profile
          </Typography>
        </div>

        {/* Avatar */}
        <div className="flex justify-center items-center mt-8">
          <Avatar
            src={`https://ui-avatars.com/api/?name=${name}&background=random&color=fff`}
            alt="avatar"
            size="xxl"
          />
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[500px] px-4 sm:px-6 lg:px-8 mt-8">
            <form className="w-full space-y-6" onSubmit={onSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-80 bg-transparent border-b border-black py-2 outline-none focus:outline-none"
                  value={name}
                  onInput={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-80 bg-transparent border-b border-black py-2 outline-none focus:outline-none"
                  value={username}
                  onInput={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-80 bg-transparent border-b border-black py-2 outline-none focus:outline-none"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-80 bg-transparent border-b border-black py-2 outline-none focus:outline-none"
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                />
                <br />
                <small className="text-sm text-gray-500">
                  Leave it blank if you don't want to change the password
                </small>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-48 bg-secondary hover:bg-primary transition duration-300 text-white py-3 rounded-md font-semibold text-center"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileUser;
