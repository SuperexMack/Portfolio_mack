import LinkedPhoto from "./adderphott.png";

export function User() {
  return (
    <>
      <div className="h-auto w-full sm:w-[600px] lg:w-[800px] mx-auto flex flex-col mt-[20px] p-2">
        <div className="space-x-0 sm:space-x-11 h-auto sm:h-[200px] w-full flex flex-col sm:flex-row items-center">
          <div>
            <img
              src={LinkedPhoto}
              className="rounded-full h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] lg:h-[120px] lg:w-[120px]"
              alt="Profile"
            />
          </div>

          <div className="text-white font-bold flex flex-col space-y-4 mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
            <h1 className="text-[20px] sm:text-[25px] lg:text-[30px]">Mohit Sati</h1>
            <div className="flex justify-center sm:justify-start flex-row space-x-4 sm:space-x-6 text-[16px] sm:text-[18px] lg:text-[20px]">
              <i className="fa-brands fa-linkedin cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-slate-400"></i>
              <i className="fa-brands fa-discord cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-slate-400"></i>
              <i className="fa-brands fa-twitter cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-slate-400"></i>
              <i className="fa-brands fa-github cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-slate-400"></i>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 text-slate-400 text-center sm:text-left">
          <p className="text-sm sm:text-base lg:text-lg">
            Love to code and passionate about the world of tech, interested in
            computer science and Semiconductors. <br /> <br />
            Full-stack developer at{" "}
            <strong className="text-green-600">@BiraoCoin</strong> but looking
            for backend roles/full-stack/frontend roles.
          </p>

          <p className="mt-7 text-sm sm:text-base lg:text-lg">
            Currently working on{" "}
            <strong className="text-green-600">Web2</strong> and{" "}
            <strong className="text-green-600">Web3</strong>
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mt-6">
            <p className="text-white text-sm sm:text-base lg:text-lg">~Open to work</p>
            <button className="bg-blue-600 px-4 py-2 mt-4 sm:mt-0 w-full sm:w-auto text-white text-sm sm:text-base lg:text-lg rounded-xl font-bold transition-transform duration-300 hover:scale-105">
              Connect <i className="fa-brands fa-twitter cursor-pointer"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
