/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";
import "../styles/WaveSurferPlayer.css";

function WaveSurferPlayer() {
  useEffect(() => {
    const video = document.querySelector("video");
    video.addEventListener("play", () => {
      // Check if a canvas element already exists
      if (document.querySelector("#placeholder").childElementCount == 0) {
        const holder = document.querySelector("#placeholder");
        // console.log(holder);
        // console.log(video);
        const ws = WaveSurfer.create({
          container: document.querySelector("#placeholder"),
          height: 128,
          cursorWidth: 3,
          waveColor: "#CECEC3",
          progressColor: "#8C8585",
          media: document.querySelector("video"),
          interact: true,
          cursorColor: "#FFFFFF",
          responsive: true,
        });
        // console.log(ws);
      }
    });
  }, []);

  return (
    <div id="placeholder" style={{ minHeight: "200px", width: "100%" }}></div>
  );
}

export default WaveSurferPlayer;
