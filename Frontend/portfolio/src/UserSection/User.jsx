import LinkedPhoto from "./adderphott.png";

export function User() {
  return (
    <>
      <div className="h-auto w-full sm:w-[600px] mx-auto flex flex-col mt-[20px] p-2">
        <div className="space-x-4 sm:space-x-11 h-auto sm:h-[200px] w-full flex flex-col sm:flex-row items-center">
          <div>
            <img src={LinkedPhoto} className="rounded-full h-[100px] w-[100px] sm:h-[120px] sm:w-[120px]" alt="Profile" />
          </div>

          <div className="text-white font-bold flex flex-col space-y-4 mt-4 sm:mt-0 sm:ml-6">
            <h1 className="text-[25px] sm:text-[30px]">Mohit Sati</h1>
            <div className="flex flex-row space-x-4 sm:space-x-6 text-[18px] sm:text-[20px]">
              <i className="fa-brands fa-linkedin cursor-pointer transition:transform duration-300 hover:scale-125 hover:text-slate-400"></i>
              <i className="fa-brands fa-discord cursor-pointer transition:transform duration-300 hover:scale-125 hover:text-slate-400"></i>
              <i className="fa-brands fa-twitter cursor-pointer transition:transform duration-300 hover:scale-125 hover:text-slate-400"></i>
              <i className="fa-brands fa-github cursor-pointer transition:transform duration-300 hover:scale-125 hover:text-slate-400"></i>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 text-slate-400">
          <p className="text-sm sm:text-base">
            Love to code and passionate about the world of tech, interested in computer science and
            Semiconductors. <br /> <br />
            Full-stack developer at <strong className="text-green-600">@BiraoCoin</strong> but looking for backend roles/full-stack/frontend roles.
          </p>

          <p className="mt-7 text-sm sm:text-base">
            Currently working on <strong className="text-green-600">Web2</strong> and <strong className="text-green-600">Web3</strong>
          </p>
          
          <div className="flex justify-between">
          <p className="mt-6 text-white text-sm sm:text-base">
            ~Open to work
          </p>
          <div>
            <button className="bg-blue-600 p-1 w-[300px] mt-4 text-white text-[20px] rounded-xl font-bold transition:transform duration-300 hover:scale-105">Connect  <i className="fa-brands fa-twitter cursor-pointer"></i></button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
