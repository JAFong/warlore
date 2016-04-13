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
      eggVisibility: "visible",
      // eggVisibility: "hidden",
      currentEgg: {
        x: 0,
        y: 0,
        name: 'test'
      }
    }
  }
  componentDidMount() {
    this.timeStore = TimeStore;
    this.timeStore.addChangeListener(this.onStoreChange.bind(this));
  }
  componentWillUnmount() {
    this.timeStore.removeChangeListener(function() {});
  }
  onStoreChange() {
    var events = this.state.events;
    var playerTime = this.timeStore.getTime();
    var currentTime = playerTime.currentTime;
    this.state.currentEgg;

    // Possibly enable a timer until event can be displayed
    // same time length as the animation loop duration

    // rounded currentTime
    Math.floor(currentTime);
    // if currentTime is in events, display the egg
  }
  displayEgg(egg) {

  }
  unlockReward() {
    AppDispatcher.dispatch({
      eventName: 'eggUnlocked',
      egg: this.state.currentEgg
    });
  }
  render() {
    return (
      <div style={{
        left: this.state.currentEgg.x,
        top: this.state.currentEgg.y,
        background: 'red',
        height: '250px',
        width: '250px',
        position: 'absolute',
        zIndex: '1',
        visibility: this.state.eggVisibility
      }}
      onMouseDown={this.unlockReward.bind(this)}></div>
    )
  }
}

export default EasterEgg
