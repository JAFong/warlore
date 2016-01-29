import TimeStore from './../stores/timeStore.jsx'

class VideoControlBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTime: TimeStore.getTime()
    }
    console.log(Flux);
    console.log(this.state);
  }
  componentDidMount() {
    this.store = TimeStore;
    this.store.addChangeListener(this.onStoreChange);
  }
  componentWillUnmount() {
    this.store.removeChangeListener(this.onStoreChange);
  }
  onStoreChange() {
    this.setState({
      playerTime: this.store.getTime()
    })
  }
  render () {
    return (
      <div>SomethingSomethingSomethingSomething</div>
    )
  }
}

export default VideoControlBar;
