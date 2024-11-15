export function Cards({ title, description, sFirst, sSecond, sThird, sFourth, sFive }) {
  const stylee =
    "bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 p-2 rounded-full text-white text-sm sm:text-base font-semibold";

  return (
    <>
      <div className="flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 w-full max-w-[600px] h-auto rounded-lg p-6 shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            {title}
          </h1>
          <p className="text-white text-3xl sm:text-5xl">
            <i className="fa-solid fa-rocket"></i>
          </p>
        </div>

        <div className="text-gray-300 mb-6">
          <p className="text-sm sm:text-lg">{description}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 ml-2">
          {sFirst && <p className={stylee}>{sFirst}</p>}
          {sSecond && <p className={stylee}>{sSecond}</p>}
          {sThird && <p className={stylee}>{sThird}</p>}
          {sFourth && <p className={stylee}>{sFourth}</p>}
          {sFive && <p className={stylee}>{sFive}</p>}
        </div>
      </div>
    </>
  );
}
