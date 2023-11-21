import HeroImg from "../assets/bgImg.svg";

const Subscribe = () => {
  return (
    <div
      className="h-[70vh] max-w-full w-full"
      style={{
        background: `url(${HeroImg})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-around pt-10">
        <div className="w-[280px]">
          <h1 className="text-white text-6xl">
            Choose the right{" "}
            <span className="text-[#FF7C01] font-bold">Roofing Professionals</span>
          </h1>
        </div>
        <div className="w-[300px] bg-white h-[370px] rounded-xl">
          <div>
            <div className="p-4 text-center text-white font-bold leading-4 rounded-xl bg-[#FF7C01]">
              <p>SUBSCRIBE OUR NEWLETTER</p>
            </div>
            <div className="p-4">
              <input
                type="text"
                className="bg-[#C4C4C430] rounded-full m-4 px-10 py-3  text-left text-sm  "
                placeholder="Your name "
              />
              <input
                type="text"
                className="bg-[#C4C4C430] rounded-full m-4 px-10 py-3  text-left text-sm  "
                placeholder="Your Email"
              />
              <input
                type="text"
                className="bg-[#C4C4C430] rounded-full m-4 px-10 py-3  text-left text-sm  "
                placeholder="your phone number"
              />
            </div>
            <button className="bg-[#FF7C01] font-bold text-white rounded-full relative left-10 px-24 py-3 text-center">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Subscribe;
