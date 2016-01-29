import YouTubePlayer from './youtubePlayer.jsx'
import EasterEgg from './easterEgg.jsx'
import VideoControls from './videoControls.jsx'

class VideoBox extends React.Component {
  render() {
    return (
      // <YouTubePlayer videoUrl="http://www.youtube.com/embed/oPpekcveMOQ" />
      <div className="video-box" height width>
        <div>
          <VideoControls></VideoControls>
        </div>
        <div>
          <EasterEgg></EasterEgg>
          <YouTubePlayer videoId="2Rxoz13Bthc" />
        </div>
      </div>
    );
  }
}

export default VideoBox;
