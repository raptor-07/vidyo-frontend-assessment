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
          <RenderVideo videoRef={videoRef}/>
          <CanvasVideoLoader videoRef={videoRef} />
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
