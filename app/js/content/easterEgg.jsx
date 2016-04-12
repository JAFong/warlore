import AppDispatcher from '../AppDispatcher.jsx'
import TimeStore from './../stores/timeStore.jsx'

class EasterEgg extends React.Component {
  constructor(props) {
    super(props);
    var playerTime = TimeStore.getTime();
    var currentTime = playerTime.currentTime;
    var percentagePlayed = playerTime.percentagePlayed;
    this.state = {
      currentTime: currentTime,
      percentagePlayed: "0%",
      events: this.props.eggEvents,
      eggVisibility: "hidden"
    }
    this.eggEvent = {
      x: 0,
      y: 0
    }
  }
  componentDidMount() {
    this.timeStore = TimeStore;
    this.timeStore.addChangeListener(this.onStoreChange.bind(this));
  }
  componentWillUnmount() {
    this.timeStore.removeChangeListener(this.onStoreChange.bind(this));
  }
  onStoreChange() {
    var events = this.state.events;
    var playerTime = this.timeStore.getTime();
    var currentTime = playerTime.currentTime;
    this.eggEvent;

    // Possibly enable a timer until event can be displayed
    // same time length as the animation loop duration

    // rounded currentTime
    Math.floor(currentTime);
  }
  displayEgg() {

  }
  render() {
    return (
      <div style={{
        left: this.eggEvent.x,
        top: this.eggEvent.y,
        background: 'red',
        height: '250px',
        width: '250px',
        position: 'absolute',
        zIndex: '1',
        visibility: this.state.eggVisibility,
      }}></div>
    )
  }
}

export default EasterEgg
