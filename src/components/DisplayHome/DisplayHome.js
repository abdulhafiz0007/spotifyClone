import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import { AlbumItem } from '../AlbumItem/AlbumItem';
import { albumsData } from '../../assets/assets';
import { songsData } from '../../assets/assets';
import { SongItem } from '../SongItem/SongItem';

export const DisplayHome = () => {
  return (
    <>
    <Navbar />
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
            {albumsData.map(item => (
                <AlbumItem key={item.id} image={item.image} name={item.name} desc={item.desc} id={item.id} />
            ))}
        </div>
    </div>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
            {songsData.map(item => (
                <SongItem key={item.id} image={item.image} name={item.name} desc={item.desc} id={item.id} />
            ))}
        </div>
    </div>
    </>
  )
}
