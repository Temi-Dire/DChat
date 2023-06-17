import Navbar from "../../components/navbar";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

const signin = () => {
  const [showPassword, setShowPassword] = useState(!true) 
  return (
    <div className="px-6 h-screen bg-white">
      <Navbar />
      <div className="md:grid grid-cols-2">
        <div className="md:px-28">
          <div className="my-10">
            <h1 className="text-[#734F96] font-bold text-2xl my-5">
              Welcome Back!
              <br /> D-Chat User
            </h1>
            <div className="text-[#c089f3]">
              <p className="md:inline">Experience Seamless Communication,</p> 
              <p className="md:inline">Endless Conversations, </p>
              <p className="md:inline">And Stay Connected Anytime, Anywhere</p>
            </div>
          </div>
          <h2 className="mb-4 text-xl text-[#734F96]">Sign In</h2>
          <div className="">
            <form className="flex flex-col justify-between mb-3" action="">
              <div className=" border-b-2 border-b-[#ece0f7] w-full mb-5 bg-inherit py-2">
                <input
                  className="block outline-none"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div 
              className=" border-b-2 border-b-[#ece0f7] w-full mb-10 bg-inherit py-2 flex justify-between">
                <input
                  className="block outline-none w-full"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <div onClick={() => {setShowPassword(!showPassword)}}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon/>}
                </div>
              </div>
              <button className="w-full bg-[#734F96] rounded-3xl text-white font-semibold py-2">
                Sign In
              </button>
            </form>
            <button className="text-center w-full">
              Don't have an account? CREATE ONE
            </button>
          </div>
        </div>
        <div className=" w-full h-full justify-center items-center hidden md:flex">DIRE'S CHAT</div>
      </div>
    </div>
  );
};

export default signin;
