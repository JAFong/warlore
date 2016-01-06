import React from 'react';
import YouTubePlayer from './youtubePlayer.jsx'
import CanvasOverlay from './youtubePlayer.jsx'

class VideoBox extends React.Component {
  render() {
    return (
      // <YouTubePlayer videoUrl="http://www.youtube.com/embed/oPpekcveMOQ" />
      <div className="video-box" height width>
        <CanvasOverlay></CanvasOverlay>
        <YouTubePlayer videoUrl="http://www.youtube.com/embed/2Rxoz13Bthc" />
      </div>
    );
  }
}

export default VideoBox;
