import React, { useContext } from 'react'
import { songsData } from '../../assets/assets'
import { PlayerContext } from '../../context/PlayerContext'
import shuffle_icon from '../../assets/shuffle.png'
import prev_icon from '../../assets/prev.png'
import pause_icon from '../../assets/pause.png'
import play_icon from '../../assets/play.png'
import next_icon from '../../assets/next.png'
import loop_icon from '../../assets/loop.png'
import plays_icon from '../../assets/plays.png'
import mic_icon from '../../assets/mic.png'
import queue_icon from '../../assets/queue.png'
import speaker_icon from '../../assets/speaker.png'
import volume_icon from '../../assets/volume.png'
import mini_player_icon from '../../assets/volume.png'
import zoom_icon from '../../assets/volume.png'






export const Player = () => {

  const {seekBg, seekBar, playStatus, play, pause, track, time, previous, next, seekSong} = useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={track.image} alt="" />
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0, 12)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={shuffle_icon} alt="" />
                <img onClick={previous} className='w-4 cursor-pointer' src={prev_icon} alt="" />
                {playStatus ? <img onClick={pause} className='w-4 cursor-pointer' src={pause_icon} alt="" /> 
                : <img onClick={play} className='w-4 cursor-pointer' src={play_icon} alt="" /> }
                <img onClick={next} className='w-4 cursor-pointer' src={next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={loop_icon} alt="" />
            </div>
            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div onClick={seekSong} ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'></hr>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4' src={plays_icon} alt=""/>
            <img className='w-4' src={mic_icon} alt=""/>
            <img className='w-4' src={queue_icon} alt=""/>
            <img className='w-4' src={speaker_icon} alt=""/>
            <img className='w-4' src={volume_icon} alt=""/>
            <div className='w-20 bg-slate-50 h-1 rounded'>

            </div>
            <img className='w-4' src={mini_player_icon} alt=""/>
            <img className='w-4' src={zoom_icon} alt=""/>
        </div>
    </div>
  )
}
