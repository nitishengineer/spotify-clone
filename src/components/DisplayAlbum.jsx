import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { albumsData, songsData, assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {
  const { id } = useParams()
  const { playWithId } = useContext(PlayerContext)
  const albumData = albumsData[Number(id)]

  return (
    <>
      <Navbar />

      {/* Album header */}
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-[min(30vw,300px)] rounded shadow-lg" src={albumData.image} alt={albumData.name} />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1 text-sm">
            <img className="inline-block w-5" src={assets.spotify_logo} alt="spotify" />
            <b> Spotify </b> • 1,323,345 likes <b> • 50 songs, </b> about 2 hr 30 min
          </p>
        </div>
      </div>

      {/* Tracklist header */}
      <div className="grid grid-cols-3 md:grid-cols-4 mt-10 mb-2 pl-4 text-[#a7a7a7] text-sm">
        <p><b className="mr-4">#</b> TITLE</p>
        <p>ALBUM</p>
        <p className="hidden md:block">DATE ADDED</p>
        <img className="w-4 m-auto" src={assets.clock_icon} alt="duration" />
      </div>
      <hr />

      {/* Song rows */}
      {songsData.map((item, index) => (
        <div
          key={index}
          onClick={() => playWithId(item.id)}
          className="grid grid-cols-3 md:grid-cols-4 gap-4 p-2 pl-4 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer rounded"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5 rounded" src={item.image} alt={item.name} />
            {item.name}
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden md:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  )
}

export default DisplayAlbum