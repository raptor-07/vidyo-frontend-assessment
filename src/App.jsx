/* eslint-disable react/prop-types */

import { useState, useRef } from "react";
import LoadVideo from "./components/LoadVideo";
import WaveSurferPlayer from "./components/WaveSurferPlayer";
import CanvasVideoLoader from "./components/CanvasVideoLoader";
import RenderVideo from "./components/RenderVideo";
import "./styles/App.css";

function App() {
  const [videoLoad, setVideoLoad] = useState(false);
  const videoRef = useRef({});

  return (
    <div>
      {videoLoad ? (
        <div className="video-player-ui">
          <h3>Video Player</h3>
          <RenderVideo videoRef={videoRef}/>
          <h3>Canvas Player</h3>
          <CanvasVideoLoader />
          <WaveSurferPlayer />
        </div>
      ) : (
        <div>
          <h2>
            This Player Plays a video using Canvas tag and outputs corresponding
            waveform for the Audio
          </h2>
          <LoadVideo setVideoLoad={setVideoLoad} videoRef={videoRef} />
        </div>
      )}
    </div>
  );
}

export default App;
