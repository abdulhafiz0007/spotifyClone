import { useContext } from "react";
import { Display } from "./components/Display/Display";
import { Player } from "./components/Player/Player";
import { SideBar } from "./components/SideBar/SideBar";
import { PlayerContext } from "./context/PlayerContext";
import {Routes, Route} from 'react-router-dom';


function App() {

  const {audioRef, track, } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
       <div className="h-[90%] flex">
          <SideBar />
          <Display />
       </div>
       <Player />
       <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App;
