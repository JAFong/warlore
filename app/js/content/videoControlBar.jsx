import TimeStore from './../stores/timeStore.jsx'

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
    this.store = TimeStore;
    this.store.addChangeListener(this.onStoreChange.bind(this));
  }
  componentWillUnmount() {
    this.store.removeChangeListener(this.onStoreChange.bind(this));
  }
  onStoreChange() {
    var self = this;
    var playerTime =  self.store.getTime();
    var currentTime = playerTime.currentTime;
    var percentagePlayed = playerTime.percentagePlayed + "%";
    self.setState({
      currentTime: currentTime,
      percentagePlayed: percentagePlayed
    });
  }
  render () {
    return (
      <div className="progress-container" onMouseEnter={this.expandBar} onMouseLeave={this.minimizeBar}>
        <div className="progress-background">
          <div className="progress-crawler" style={{
            width: this.state.percentagePlayed
          }}></div>
        </div>
      </div>
    )
  }
}

export default VideoControlBar;
