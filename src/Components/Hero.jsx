
import Img1 from '../assets/heroImg.svg'
const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row my-20'>
        <div className=' mx-6 md:ml-44 text-left w-[380px] '>
            <h1 className="text-3xl md:text-6xl leading-[70px] text-white font-bold ">The beauty of a building starts from the <span className='text-[#FF7C01]'>Roof</span></h1>
            <p  className='my-10 text-white text-xl'>When it come to choosing the best hands for your roof, choose TopRuf</p>
            <button className="text-white bg-[#FF9A2B] hidden md:block px-10 py-2 font-bold rounded-full">
       Learn More
          </button>
        </div>
        <div>
            <img className='mx-10 md:mx-0' src={Img1} alt="man fixing a ply of roof on"  />
        </div>
    </div>
  )
}

export default Hero