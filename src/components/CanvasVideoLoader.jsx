/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";

function CanvasVideoLoader() {
  const drawFrame = () => {
    const video = document.querySelector("video");
    const parentDiv = document.querySelector(".canvas-holder");

    // Check if a canvas element already exists
    let canvas = parentDiv.querySelector("canvas");

    if (!canvas) {
      // If no canvas exists, create a new canvas element
      canvas = document.createElement("canvas");
      parentDiv.appendChild(canvas);
    }

    const ctx = canvas.getContext("2d");

    video.addEventListener("play", () => {
      function processFrame() {
        //pixel data is stored as continuous RGBAlpha Values
        //Reference docs: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas
        // canvas.width /= 2;
        // canvas.height /= 2;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      }
      function videoStatusCheck() {
        if (video.paused || video.ended) {
          return;
        }
        processFrame();
        setTimeout(() => {
          videoStatusCheck();
        }, 0);
      }
      videoStatusCheck();
    });

    video.addEventListener("loadedmetadata", () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      // console.log(canvas.width, canvas.height);
    });
  };

  useEffect(() => {
    drawFrame();
    const video = document.querySelector("video");

    //play/pause button logic
    const playButton2 = document.querySelector(".play-button-2");

    playButton2.onclick = () => {
      if (video.paused) {
        video.play();
        playButton2.innerHTML = "Pause";
      } else {
        video.pause();
        playButton2.innerHTML = "Play";
      }
    };
  }, []);

  // useEffect(() => {
  //   //extract video metadata such as videoduration
  //   const video = document.querySelector("video");
  //   const videoDuration = video.duration;
  //   console.log(videoDuration, "videoDuration");
  //   const metadataHolder = document.querySelector(".metadata");
  //   metadataHolder.innerHTML = `Video Duration: ${videoDuration}`;
  // }, [videoMount.current]);

  return (
    <div className="canvasContainer">
      {/* <div className="metadata"></div> */}
      <button className="play-button-2"> click to start playing on canvas </button>
      <div className="canvas-holder"></div>
    </div>
  );
}

export default CanvasVideoLoader;
