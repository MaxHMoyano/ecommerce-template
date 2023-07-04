export const Hero = () => {
  return (
    <div className="h-full flex">
      <div className="title flex flex-col justify-center flex-[3]">
        <h1 className="text-5xl font-extrabold mb-5">
          Buy, replace or sell your PC components with TronStore now!
        </h1>
        <p className="font-light text-2xl">
          The best prices, the best delivery, the best experience
        </p>
        <button className="mt-5 p-3 text-lg bg-indigo-600 outline-none flex flex-row relative justify-center items-center text-white transition-colors hover:bg-indigo-700 rounded-lg w-1/4">
          Let&apos;s start
        </button>
      </div>
      <div className="flex-[2] flex justify-center items-center relative">
        {/* <Image fill alt="hero" src={'/hero.png'} /> */}
        {/* <div className="bg-hero bg-repeat-round absolute overflow-hidden -z-10 w-full h-5/6" /> */}
      </div>
    </div>
  );
};
