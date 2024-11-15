export function FindMe() {
    
    return (
      <>
        <div className="w-full max-w-[800px] h-auto flex flex-col items-center space-y-9 px-4 sm:px-0 text-center">
         
          <h1 className="font-bold text-[30px] sm:text-[50px] mt-5 underline text-yellow-600">
            Find Me!!
          </h1>
  

          <div className="bg-slate-800 h-auto sm:h-[300px] w-full sm:w-[80%] rounded-3xl flex flex-col justify-center items-center space-y-10 sm:space-y-14 py-8">
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://www.linkedin.com/in/mohit-sati-pop/"><i className="fa-brands fa-linkedin cursor-pointer text-[40px] sm:text-[50px] transition-transform duration-300 hover:scale-125 hover:text-slate-400"></i></a>
              <a href="https://discord.com/channels/@me"><i className="fa-brands fa-discord cursor-pointer text-[40px] sm:text-[50px] transition-transform duration-300 hover:scale-125 hover:text-slate-400"></i></a>
              <a href="https://x.com/TSilent_Monk"><i className="fa-brands fa-twitter cursor-pointer text-[40px] sm:text-[50px] transition-transform duration-300 hover:scale-125 hover:text-slate-400"></i></a>
              <a href="https://github.com/SuperexMack"><i className="fa-brands fa-github cursor-pointer text-[40px] sm:text-[50px] transition-transform duration-300 hover:scale-125 hover:text-slate-400"></i></a>
              <a href="https://github.com/SuperexMack"><i className="fa-brands fa-square-instagram cursor-pointer text-[40px] sm:text-[50px] transition-transform duration-300 hover:scale-125 hover:text-slate-400"></i></a>
            </div>
  

            <h1 className="font-bold text-[20px] sm:text-[30px] text-center">
              I'd{" "}
              <span className="text-red-500">
                <i className="fa-solid fa-heart"></i>
              </span>{" "}
              to connect with you!
            </h1>
          </div>
        </div>
      </>
    );
  }
  