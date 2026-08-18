import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { albumsData, songsData } from '../assets/assets'

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <h1 className="my-4 font-bold text-2xl">Featured Charts</h1>
      <div className="flex overflow-auto">
        {albumsData.map((item, index) => (
          <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
        ))}
      </div>
      <h1 className="my-4 font-bold text-2xl">Today's biggest hits</h1>
      <div className="flex overflow-auto">
        {songsData.map((item, index) => (
          <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
        ))}
      </div>
    </>
  )
}

export default DisplayHome