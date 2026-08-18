import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      {/* Top box: Home + Search */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-4 cursor-pointer">
          <img className="w-7" src={assets.home_icon} alt="home" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-4 cursor-pointer">
          <img className="w-7" src={assets.search_icon} alt="search" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* Bottom box: Library + CTA cards */}
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-7" src={assets.stack_icon} alt="library" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5 cursor-pointer" src={assets.arrow_icon} alt="arrow" />
            <img className="w-5 cursor-pointer" src={assets.plus_icon} alt="plus" />
          </div>
        </div>

        <div className="p-4 bg-[#1f1f1f] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1">
          <h1>Create your first playlist</h1>
          <p className="font-light">It's easy, we'll help you</p>
          <button className="px-4 py-2 bg-white text-[15px] text-black rounded-full mt-4">
            Create playlist
          </button>
        </div>

        <div className="p-4 bg-[#1f1f1f] m-2 mt-4 rounded font-semibold flex flex-col items-start justify-start gap-1">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">We'll keep you updated on new episodes</p>
          <button className="px-4 py-2 bg-white text-[15px] text-black rounded-full mt-4">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar