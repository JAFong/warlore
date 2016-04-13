import AppDispatcher from '../AppDispatcher.jsx'
import TimeStore from './../stores/timeStore.jsx'

class EasterEgg extends React.Component {
  constructor(props) {
    super(props);
    var playerTime = TimeStore.getTime();
    var currentTime = playerTime.currentTime;
    var percentagePlayed = playerTime.percentagePlayed;
    this.state = {
      lastEggTime: Math.floor(currentTime),
      percentagePlayed: "0%",
      eggVisibility: "hidden",
      currentEgg: {
        name: '',
        description: '',
        image: '',
        x: 0,
        y: 0,
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
    var playerTime = this.timeStore.getTime();
    var currentTime = Math.floor(playerTime.currentTime);
    console.log(currentTime);
    // if currentTime === LastEggTime, return
    if (currentTime === this.state.currentTime) { return }

    // Possibly enable a timer until event can be displayed
    // same time length as the animation loop duration

    // rounded currentTime
    // if currentTime is in events, display the egg
    if (this.props.eggEvents[currentTime] && !this.props.eggEvents[currentTime].unlocked) {
      this.setState({
        lastEggTime: Math.floor(currentTime),
        percentagePlayed: "0%",
        events: this.props.eggEvents,
        eggVisibility: "visible",
        currentEgg: this.props.eggEvents[currentTime]
      });
      setTimeout(function() {
        this.setState({
          lastEggTime: Math.floor(currentTime),
          percentagePlayed: "0%",
          events: this.props.eggEvents,
          eggVisibility: "hidden",
          currentEgg: {
            x: 0,
            y: 0,
            name: 'test'
          }
        });
      }.bind(this), 1000)
    }
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
