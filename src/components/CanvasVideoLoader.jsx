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
  }, []);

  return <div className="canvas-holder"></div>;
}

export default CanvasVideoLoader;
