import Navbar from "../../components/navbar";

const signup = () => {
  return (
    <div className="px-6 h-screen bg-white">
      <Navbar />
      <div className="md:grid grid-cols-2">
        <div className="md:px-28">
          <div className="my-10">
            <h1 className="text-[#734F96] font-bold text-2xl my-5">
              Create an Account Today
              <br /> And start chatting away!
            </h1>
            <div className="text-[#dabcf6]">
              <p className="md:inline">Experience Seamless Communication,</p> 
              <p className="md:inline">Endless Conversations, </p>
              <p className="md:inline">And Stay Connected Anytime, Anywhere</p>
            </div>
          </div>
          <h2 className="mb-4 text-xl text-[#734F96]">Sign Up Now!</h2>
          <div className="">
            <form className="flex flex-col justify-between mb-3" action="">
              <input
                className="block outline-none border-b-2 border-b-[#ece0f7] w-full mb-10 bg-inherit"
                type="text"
                placeholder="Username"
              />
              <input
                className="block outline-none border-b-2 border-b-[#ece0f7] w-full mb-10 bg-inherit"
                type="text"
                placeholder="Email"
              />
              <input
                className="block outline-none border-b-2 border-b-[#ece0f7] w-full mb-10 bg-inherit"
                type="text"
                placeholder="Password"
              />
              <button className="w-full bg-[#734F96] rounded-3xl text-white font-semibold py-2">
                Let's do this
              </button>
            </form>
            <button className="text-center w-full">
              I already have an account
            </button>
          </div>
        </div>
        <div className=" w-full h-full justify-center items-center hidden md:flex">DIRE'S CHAT</div>
      </div>
    </div>
  );
};

export default signup;
