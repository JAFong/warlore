import YouTubePlayer from './youtubePlayer.jsx'
import EasterEgg from './easterEgg.jsx'
import VideoControls from './videoControls.jsx'

class VideoBox extends React.Component {
  render() {
    return (
      // <YouTubePlayer videoUrl="http://www.youtube.com/embed/oPpekcveMOQ" />
      <div className="video-box" height width>
        <EasterEgg></EasterEgg>
        <YouTubePlayer videoUrl="http://www.youtube.com/embed/2Rxoz13Bthc" />
        <VideoControls></VideoControls>
      </div>
    );
  }
}

export default VideoBox;
