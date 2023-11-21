import  { useState } from "react";
import {FaBarsStaggered} from 'react-icons/fa6'


const Navbar = () => {
  const [nav, setNav] = useState(false)
    const togglenav =() =>{
      setNav(!nav);
      console.log(nav);
    } 

  return (
    <header className=" sticky top-0 bg-black">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-5">
        <div>
          <a className="text-[#FF7C01] font-bold text-2xl" href="/"> TopRufs <span className="text-4xl font-bold">.</span></a>
        </div>
        <div className="md:static absolute md:min-h-fit hidden  min-h-[60vh] left-0 top-[9%] md:w-auto w-full md:flex items-center px-5 ">
          <ul className=" flex md:flex-row flex-col  md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-[#FF7C01] text-white font-bold " href="">Home</a>
            </li>
            <li>
              <a className="hover:text-[#FF7C01] text-white font-bold " href="">About Us</a>
            </li>
            <li>
              <a className="hover:text-[#FF7C01] text-white font-bold " href="">Projects</a>
            </li>
            <li>
              <a className="hover:text-[#FF7C01] text-white font-bold " href="">Services</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="text-white font-bold  bg-[#FF7C01] hidden md:block px-10 py-4 text-md  rounded-full">
          Contact Us
          </button>
          
        <FaBarsStaggered onClick={togglenav} size={20} className="md:hidden text-white font-bold " ></FaBarsStaggered>
        </div>
        {/* mobile nav starts */}
        <div className=
        {nav ?
        "absolute bg-[#FF7C01] flex-col justify-center rounded-lg ease-in   min-h-[50vh] right-0 top-[9%]  w-44 md:hidden items-center px-5 " 
        : "hidden"}
        >
          <ul  className= "flex md:flex-row flex-col pt-4 text-white font-bold   md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-[#FF7C01]" href="">Home</a>
            </li>
            <li>
              <a className="hover:text-[#FF7C01]" href="">About Us</a>
            </li>
            <li>
              <a className="hover:text-[#FF7C01]" href="">Projects</a>
            </li>
            <li>
              <a className="hover:text-[#FF7C01]" href="">Services</a>
            </li>
          </ul>
        </div>
        {/* mobile nav ends */}
      </nav>
    </header>
  );
};

export default Navbar;
