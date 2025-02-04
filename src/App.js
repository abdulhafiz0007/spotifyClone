import { useContext } from "react";
import { Display } from "./components/Display/Display";
import { Player } from "./components/Player/Player";
import { SideBar } from "./components/SideBar/SideBar";
import { PlayerContext } from "./context/PlayerContext";


function App() {

  const {audioRef} = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
       <div className="h-[90%] flex">
          <SideBar />
          <Display />
       </div>
       <Player />
       <audio ref={audioRef} preload="auto"></audio>
    </div>
  );
}

export default App;
