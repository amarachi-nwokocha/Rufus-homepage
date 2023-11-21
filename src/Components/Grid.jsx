import gridImg from "../assets/gridImg.svg";
const Grid = () => {
  return (
    <div className="max-w-[1140px] w-full mx-40 my-20">
      <div className="mb-20">
    
        <h1 className="text-white text-center text-4xl font-bold">
          Let’s decorate your
          <span className="text-[#FF7C01] ">Home</span>
        </h1>
        <p className="text-[#C4C4C4] text-center mt-4 ">
          Check out some of our projects
        </p>
      </div>
      <img src={gridImg} alt="" />
      <div className=" text-center">
       
        <button className="bg-[#FF7C01] text-white rounded-full px-40 py-2 my-10">
          REQUEST A FREE QUOTE
        </button>
      </div>
    </div>
  );
};

export default Grid;
