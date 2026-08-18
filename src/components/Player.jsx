import { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
  const { track, playStatus, play, pause, time, seekBg, seekBar, seekSong, previous, next } =
    useContext(PlayerContext)

  const format = (t) => `${t.minute}:${String(t.second).padStart(2, '0')}`

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      {/* LEFT */}
      <div className="hidden lg:flex items-center gap-3">
        <img className="w-12" src={track.image} alt={track.name} />
        <div>
          <p>{track.name}</p>
          <p>{track.desc?.slice(0, 12)}</p>
        </div>
      </div>

      {/* CENTER */}
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="shuffle" />
          <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="previous" />
          {playStatus ? (
            <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="pause" />
          ) : (
            <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="play" />
          )}
          <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="next" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="loop" />
        </div>
        <div className="flex items-center gap-5">
          <p>{format(time.currentTime)}</p>
          <div onClick={seekSong} ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>{format(time.totalTime)}</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.play_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-20 h-1 bg-slate-50 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  )
}

export default Player