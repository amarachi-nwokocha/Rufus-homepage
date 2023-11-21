
import img3 from '../assets/img-4.svg'
import img1 from '../assets/img-5.svg'
import img2 from '../assets/img-9.svg'
const ImgGrid = () => {
  return (
    <div className="mx-auto">
      <div>
        <h2 className="font-bold text-4xl text-white mx-auto w-1/2 text-center">
          We provide <span className="text-[#FF7C01]"> quality</span> <br />
          services to serve you{" "}
        </h2>        
      </div>
      <div className="grid  mx-40 my-20 grid-rows-1 lg:grid-rows-2 lg:grid-flow-col">
        <img src={img1} alt=""  className="row-span-3 border-3 border-[#FF7C01]" />
        <img src={img2} alt=""  className=" col-span-2 "/>
        <img src={img3} alt="" className="row-span-2 col-span-2 " />
      </div>
      <div className="h-40  w-40 mx-auto ">
      <button className="text-[#FF7C01] border-2 px-6 mx-auto py-2 rounded-full  border-[#FF7C01]">See more</button>
    </div>
      </div>
  );
};

export default ImgGrid;
