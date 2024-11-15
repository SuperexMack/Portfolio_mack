import { Cards } from "./Card";
import Solana from "./solana.webm";
import unoSite from "./uno.webm";

export function Project() {
  const uno = "(United Nation Organisation)";

  const First = `Develop a live streaming platform for singers, featuring user authentication, video uploads, playback, and categorization.
              Includes live streaming capabilities using WebSocket, enabling real-time interactions. The platform supports video search
              and user-friendly navigation for seamless discovery and engagement.`;

  const Second = `In a world full of noise, it’s hard to hear the voices of those working to make a real difference. At SDGConnect, we believe social good deserves a dedicated space to shine. A platform where ideas, projects, and actions are aligned with the United Nations Sustainable Development Goals (SDGs)—the blueprint for creating a better world.`;

  const walletAdaper = `I created a Solana wallet adapter using this
    wallet adapter you can send Airdrop to anyone in the world including you
    juat connect your wallet to it and enjoy`;

  return (
    <>
      <div className="h-auto w-full max-w-[800px] flex flex-col items-center space-y-10 mx-auto p-4">
        <p className="font-bold text-[32px] sm:text-[40px] text-yellow-600 underline text-center">Proof of Work</p>

        {/* video section */}
        <div className="space-y-9">
          <p className="font-bold text-[16px] sm:text-[20px] text-white text-center">
            1. A Wallet Adapter for One of My client who is working in web3
          </p>
          <video
            src={Solana}
            className="h-[200px] sm:h-[300px] lg:h-[400px] w-full max-w-[600px] rounded-lg transition-transform duration-300 hover:scale-105"
            controls
          ></video>

          <p className="font-bold text-[16px] sm:text-[20px] text-white text-center">
            2. A Project for UNO {uno}
          </p>
          <video
            src={unoSite}
            className="h-[200px] sm:h-[300px] lg:h-[400px] w-full max-w-[600px] rounded-lg transition-transform duration-300 hover:scale-105"
            controls
          ></video>

          <p className="font-bold text-[16px] sm:text-[20px] text-white text-center">
            3. A Live Streaming Playing Application
          </p>
          <video
            src={Solana}
            className="h-[200px] sm:h-[300px] lg:h-[400px] w-full max-w-[600px] rounded-lg transition-transform duration-300 hover:scale-105"
            controls
          ></video>
        </div>

        {/* project cards */}
        <div className="mt-4 w-full flex flex-col items-center space-y-10">
          <h1 className="text-[32px] sm:text-[40px] font-bold text-yellow-600 underline p-6 text-center">My previous project</h1>

          <Cards
            sFirst={"React.js"}
            sSecond={"Postgresql/prisma ORM"}
            sThird={"Node js"}
            sFourth={"Express.js"}
            sFive={"Socket.io"}
            title={"1. A Live Streaming Playing Application"}
            description={First}
          ></Cards>
          <Cards
            sFirst={"React.js"}
            sSecond={"Postgresql/prisma ORM"}
            sThird={"Node js"}
            sFourth={"Express.js"}
            title={"2. A Full Stack for UNO (for a hackathon)"}
            description={Second}
          ></Cards>
          <Cards
            sFirst={"React.js"}
            sThird={"Node js"}
            sFive={"Tailwind"}
            title={"3. A Wallet Adapter"}
            description={walletAdaper}
          ></Cards>
        </div>
      </div>
    </>
  );
}
