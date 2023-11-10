/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";

function RenderVideo({ videoRef }) {
  // console.log(document.querySelector("video"), "video in RenderVideo.jsx");

  useEffect(() => {
    // console.log("it is mounted");
    // console.log(navigator.userAgent.indexOf("Firefox"), "navigator.userAgent");
    // console.log(navigator.userAgent.indexOf("Chrome"), "navigator.userAgent");

    const video = document.querySelector("video");
    video.addEventListener("loadedmetadata", () => {
      // console.log(video.duration, "video.duration");
      // console.log(video, "video in RenderVideo.jsx");
      // console.log(video.duration);
      // console.log(video, "video");
      // console.log(videoDuration, "videoDuration");

      const videoDuration = video.duration;
      const metadataHolder = document.querySelector(".metadata");
      metadataHolder.innerHTML = `Video Duration: ${videoDuration}`;

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
          }
          return false;
        }
      }

      if (!hasAudio(video)) {
        alert(
          "USE FIREFOX FOR DETERMINISTIC BEHAVIOR!\n\n Toggle on media.track.enabled from about:config in Firebox!\n\ncheck docs: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/audioTracks for compatibility table\n\nOther browsers are not compatible with the Media.audioTracks property causing it to be undefined at runtime !\n\n"
        );
        alert(
          `NOTE for vidyo.ai team: THIS ALERT MIGHT BE A FALSE POSITIVE! \n\nPLEASE CHECK THIS LOOM VIDEO FOR MORE INFO: https://www.loom.com/share/18f1af39e0ae4a4691402ca766731218?sid=5e13fa6d-5c10-4238-b011-0c22f2adbf31 \n\n video might have no audio track \n\n Please upload a video with audio track`
        );

        //If there are no ambiguous false positiives, then we can simply restart react app.

        //if the browser is firefox, it will reload the page
        if (navigator.userAgent.indexOf("Firefox") !== -1) {
          window.location.reload();
        }

        //other browsers will be allowed to pass the audio check as they are not compatible with the audioTracks property.
      }
    });

    return;
    // return () => {
    //   console.log("it is unmounted");
    // };
  }, []);

  return (
    <div className="video-player">
      <video controls ref={videoRef}>
        <source src={videoRef.current?.src} type="video/mp4" />
      </video>
      <div className="metadata"></div>
    </div>
  );
}

export default RenderVideo;
