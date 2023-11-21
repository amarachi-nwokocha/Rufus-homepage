import Head from "../assets/Head.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Testimony = () => {
  return (
    <div className="max-w-[1140px] w-full m-auto ">
      <div>
        <h1 className="text-center text-white text-[50px] font-bold">
          Testimonies
        </h1>
      </div>
      <div className="flex my-20">
        <div>
          <img src={Head} alt="" />
        </div>
        <div className="ml-10 w-[500px] text-xl">
          <p className="text-[#C4C4C4]">
            It has been a great opportunity working with your organization.
            Great experience and great services.
          </p>
          <hr className=" w-28 border-2 my-6  border-[#FF7C01]"/>
          <p className="text-[#C4C4C4]">Frank Utori</p>

          <div className="flex mt-10 gap-10">
            <FaArrowLeftLong
              size={30}
              className="text-[#C4C4C4] font-light hover:text-[#FF7C01]"
            />
            <FaArrowRightLong
              size={30}
              className="text-[#FF7C01]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
