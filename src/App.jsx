/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState, useRef } from "react";
import "./styles/App.css";

function App() {
  const [videoLoad, setVideoLoad] = useState(false);

  return (
    <div>
      {videoLoad ? (
        <div className="video-player-ui">
        </div>
      ) : (
        <div>
          <h2>
            This Player Plays a video using Canvas tag and outputs corresponding
            waveform for the Audio
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
