# Video Player Project Assessment For Vidyo.ai

This project implements a video player using ReactJS with HTML5 Canvas, incorporating Wavesurfer.js for audio waveform rendering.

## NOTE: Please use Firefox for the best experience.

## Demo

- **[Loom Video: Explaining Bottlenecks](https://www.loom.com/share/18f1af39e0ae4a4691402ca766731218?sid=b55e50d1-09c9-45c5-a46c-e072f1dec661)**
- **[Local Run Recording](local%20run%20recording.mp4)**

## Deployment

Visit the deployed application: [Video Player - Vercel](https://vidyo-frontend-assessment.vercel.app/)


## Known Issues

- **[Issue 1: Browser Compatibility for `MediaElement.audioTracks` Property - Please use Firefox](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/audioTracks)**
  - Browser compatibility for the `audioTracks` property, which implements judgment of the presence of an audio track in the video.
- **[Issue 2: blobURLs Usage and Streaming Differences](#)**
  - BlobURLs are used to reference the memory in the stack that stores the pixel data. Some browsers may stream this faster. The entire build is running fastest on Microsoft Edge.
- **[Issue 3: Browser Compatibility for `mozHasAudio()` Method - Please use Firefox](https://caniuse.com/mdn-api_htmlvideoelement_mozhasaudio)**
  - Browser compatibility for a method used, `mozHasAudio()`, that is native to Firefox only.

## Functional Requirements

- **Part 1:**
  - Accepts a video file as input.
  - Displays video metadata, including duration on the UI.
  - Renders the video on the screen using the canvas element.
  - Includes a play/pause button in the middle of the video container.

- **Part 2:**
  - Detects the presence of audio in the video.
  - Does not allow upload if audio is not present.
  - Displays the waveform for the audio in a box below the video.

## Project Structure

- **src/components:**
  - `LoadVideo.jsx`: Handles video file input and displays video metadata.
  - `WaveSurferPlayer.jsx`: Integrates Wavesurfer.js to render the audio waveform.
  - `CanvasVideoLoader.jsx`: Enumerates through frames in the video element and paints it in the canvas context.
  - `RenderVideo.jsx`: Implements the main video player functionality.

- **src/styles:**
  - CSS files for styling the components.

## Local Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm run dev`.

## Contributions

Contributions are welcome! If you encounter issues or have suggestions, please create an issue or submit a pull request.
