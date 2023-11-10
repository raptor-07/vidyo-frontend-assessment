/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";

function RenderVideo({ videoRef }) {
  useEffect(() => {
    console.log(document.querySelector("video"), "video in RenderVideo.jsx");
    const video = document.querySelector("video");
    function hasAudio(video) {
      try {
        // console.log(video, "video in hasAudio function");
        // console.log(video.mozHasAudio, "video.mozHasAudio");
        // console.log(video.audioTracks, "video.audioTracks");

        return video.mozHasAudio || Boolean(video.audioTracks[0]);
      } catch {
        //some browsers are incompatible with the audioTracks property causing it to be undefined at runtime - Most compatible browser is Firefox
        if (video.audioTracks === undefined) {
          console.error(
            "video.audioTracks is undefined - audioTracks property is not supported in this browser - check https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/audioTracks for compatibility table"
          );
          return false;
        }
      }
    }

    if (!hasAudio(video)) {
      alert(
        "NOTE: THIS ALERT MIGHT BE A FALSE POSITIVE! \nPLEASE CHECK THIS LOOM VIDEO FOR MORE INFO: https://www.loom.com/share/18f1af39e0ae4a4691402ca766731218?sid=5e13fa6d-5c10-4238-b011-0c22f2adbf31 \n\n video has no audio track \n Please upload a video with audio track \n\n  check docs: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/audioTracks for compatibility table"
      );
    }

    // play/pause button logic
    const playButton = document.querySelector(".play-button");

    playButton.onclick = () => {
      if (video.paused) {
        video.play();
        playButton.innerHTML = "Pause";
      } else {
        video.pause();
        playButton.innerHTML = "Play";
      }
    };
  }, []);

  return (
    <div className="video-player">
      <button className="play-button"> Play </button>
      <video controls ref={videoRef}>
        <source src={videoRef.current?.src} type="video/mp4" />
      </video>
    </div>
  );
}

export default RenderVideo;
