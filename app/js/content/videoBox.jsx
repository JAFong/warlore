import YouTubePlayer from './youtubePlayer.jsx'
import EasterEgg from './easterEgg.jsx'
import VideoControls from './videoControls.jsx'
import EggEvents from './../eggEvents.jsx'

class VideoBox extends React.Component {
  constructor(props) {
    super(props);
    this.eggEvents = EggEvents;
  }
  render() {
    return (
      <div>
        <VideoControls></VideoControls>
        <div className="video-box" height width>
          <EasterEgg eggEvents={this.eggEvents}></EasterEgg>
          <YouTubePlayer videoId="2Rxoz13Bthc" />
        </div>
      </div>
    );
  }
}

export default VideoBox;
