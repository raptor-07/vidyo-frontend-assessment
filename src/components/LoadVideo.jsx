/* eslint-disable react/prop-types */

import "../styles/LoadVideo.css";

function LoadVideo({ setVideoLoad, videoRef }) {
  const handleLoad = () => {
    try {
      const inputElement = document.createElement("input");
      inputElement.type = "file";
      inputElement.accept = "video/*";
      inputElement.click();

      inputElement.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          // console.log(file);
          // console.log(event);
          const videoURL = URL.createObjectURL(file);
          // console.log(videoURL, typeof videoURL);
          videoRef.current.src = videoURL;
          // console.log(videoRef.current.src, videoRef, "log videoRef in LoadVideo.jsx");
          setVideoLoad(true);
        }
      };
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="load-video" onClick={handleLoad}>
      Click to load your Video
    </div>
  );
}

export default LoadVideo;
