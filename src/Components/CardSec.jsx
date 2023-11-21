
import work from '../assets/IconWork.svg'
import idea from '../assets/iconIdea.svg'
import coin from '../assets/iconCoin.svg'
const CardSec = () => {
  return (
    <div>
        <div>
          <h2>What makes us standout from the others</h2>
          <div className='grid grid-cols-3 mx-10'>
          <div className='bg-white text-center  md:mx-10 block p-6 w-80 '>
                <img src={work} alt="" className='text-center m-auto' />
                <h3 className=' text-3xl my-6 font-bold '>Professional Experience</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit amet.</p>
                <div className='w-20 mt-8 h-1 bg-[#FF7C01] mx-auto'></div>
              </div>             
              <div className='bg-[#FF7C01] text-center  md:mx-10 block p-6 w-80 '>
                <img src={idea} alt="" className='text-center m-auto' />
                <h3 className=' text-3xl my-6 font-bold text-white '>Topnotch Service</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit amet.</p>
                <div className='w-20 mt-8 h-1 bg-white mx-auto'></div>
              </div> 
              <div className='bg-white text-center  md:mx-10 block p-6 w-80 '>
                <img src={coin} alt="" className='text-center m-auto' />
                <h3 className=' text-3xl my-6 font-bold '>Affordable Pricing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique enim mi aenean molestie. Arcu mauris, erat egestas at Lorem ipsum dolor sit amet.</p>
                <div className='w-20 mt-8 h-1 bg-[#FF7C01] mx-auto'></div>
              </div> 
          </div>
        </div>
    </div>
  )
}

export default CardSec