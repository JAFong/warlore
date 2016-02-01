import YouTubePlayer from './youtubePlayer.jsx'
import EasterEgg from './easterEgg.jsx'
import VideoControls from './videoControls.jsx'

class VideoBox extends React.Component {
  render() {
    return (
      // <YouTubePlayer videoUrl="http://www.youtube.com/embed/oPpekcveMOQ" />
      <div>
        <VideoControls></VideoControls>
        <div className="video-box" height width>
          <EasterEgg></EasterEgg>
          <YouTubePlayer videoId="2Rxoz13Bthc" />
        </div>
      </div>
    );
  }
}

export default VideoBox;
