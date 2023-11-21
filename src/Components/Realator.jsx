
import real from '../assets/img-3.svg'

const Realator = () => {
  return (
    <section className="my-32">
      <div className=" mx-28">
        <h2 className="text-white  font-bold text-4xl">We turn ideas into</h2>
        <div className="flex">
          <p className="text-[#FF7C01] font-bold text-4xl">Reality</p>
          <div className=" w-14 mt-6 h-2 ml-5 bg-[#FF7C01] rounded-full "></div>
          <div className=" w-3 mt-6 ml-2 h-3    bg-[#FF7C01] rounded-full"></div>
        </div>
      </div>
      <div className="flex my-10 justify-around">
        <div className=" w-80">
          <p className="text-[#FFFFFF66]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Tristique enim mi
            aenean molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Tristique enim mi aenean
            molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit amet.
          </p> <br /><br />
          <p className="text-[#FFFFFF66]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Tristique enim mi
            aenean molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Tristique enim mi aenean
            molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div>
            <img src={real} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Realator;
