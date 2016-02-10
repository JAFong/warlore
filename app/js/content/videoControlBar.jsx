import TimeStore from './../stores/timeStore.jsx'
import AppDispatcher from '../AppDispatcher.jsx'

class VideoControlBar extends React.Component {
  constructor(props) {
    super(props);
    var playerTime =  TimeStore.getTime();
    var currentTime = playerTime.currentTime;
    var percentagePlayed = playerTime.percentagePlayed;
    this.state = {
      currentTime: currentTime,
      percentagePlayed: "0%"
    }
  }
  minimizeBar() {
    $('.progress-background').removeClass('hover');
  }
  expandBar() {
    $('.progress-background').addClass('hover');
  }
  componentDidMount() {
    this.timeStore = TimeStore;
    this.timeStore.addChangeListener(this.onStoreChange.bind(this));
  }
  componentWillUnmount() {
    this.timeStore.removeChangeListener(this.onStoreChange.bind(this));
  }
  onStoreChange() {
    var self = this;
    var playerTime =  self.timeStore.getTime();
    var currentTime = playerTime.currentTime;
    var percentagePlayed = playerTime.percentagePlayed + "%";
    self.setState({
      currentTime: currentTime,
      percentagePlayed: percentagePlayed
    });
  }
  scrubVideo(e) {
    var relX = e.pageX;
    var loaderWidth = e.currentTarget.clientWidth;
    var percentagePlayed = relX/loaderWidth * 100;
    AppDispatcher.dispatch({
      eventName: 'scrubVideo',
      time: {
        percentagePlayed: percentagePlayed
      }
    })
  }
  render () {
    return (
      <div className="progress-container" onMouseEnter={this.expandBar} onMouseLeave={this.minimizeBar}>
        <div className="progress-background" onMouseDown={this.scrubVideo}>
          <div className="progress-crawler" style={{
            width: this.state.percentagePlayed
          }}></div>
        </div>
      </div>
    )
  }
}

export default VideoControlBar;
