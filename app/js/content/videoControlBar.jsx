import TimeStore from './../stores/timeStore.jsx'

class VideoControlBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTime: TimeStore.getTime()
    }
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
    self.setState({
      playerTime: self.store.getTime()
    });
  }
  render () {
    return (
      <div>SomethingSomethingSomethingSomething</div>
    )
  }
}

export default VideoControlBar;
