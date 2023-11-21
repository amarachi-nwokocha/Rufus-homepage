
 import img from "../assets/img-6.svg";

const GridCont = () => {
  return (
    <div className="mx-40">
      <div className="grid grid-cols-2 mb-10 mx-20">
        <div className="col-start-2 w-[400px] px-10">
      <h2 className="text-white text-4xl font-bold">
          Giving your home the beauty beyond expectation
        </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0">
         <div className="col-start-1 ">
         <img
            src={img}
            alt=""
          
          />
         </div>
          <div className="col-start-2 px-10">

          <p className="text-[#FF7C01]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum
            dolor sit amet, consectetur.
          </p>
          <p className="text-[#FFFFFF66]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Tristique enim mi
            aenean molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Tristique enim mi aenean
            molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit amet.
          </p>
          <p className="text-[#FFFFFF66] col-start-2 row-start-2 my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Tristique enim mi
            aenean molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Tristique enim mi aenean
            molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit amet.
          </p>
          </div>
        </div>
     </div>
  )
}
export default GridCont 