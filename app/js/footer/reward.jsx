import AppDispatcher from '../AppDispatcher.jsx'
import EggStore from './../stores/eggStore.jsx'

class RewardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rewardUnlocked: false
    };
  }
  componentDidMount() {
    if (localStorage[this.props.rewardName]) {
      this.setState({
        rewardUnlocked: true
      });
    }

    this.eggStore = EggStore;
    this.eggStore.addUnlockListener(this.onEggUnlock.bind(this));
  }
  componenetWillUnmount() {
    this.eggStore.removeUnlockListener(function() {});
  }
  onEggUnlock(event, egg) {
    if (egg.name === this.props.rewardName) {
      this.setState({
        rewardUnlocked: true
      });
    }
  }
  showReward() {
    if (this.state.rewardUnlocked) {
      AppDispatcher.dispatch({
        eventName: 'showModal',
        egg: JSON.parse(localStorage[this.props.rewardName])
      });
    }
  }
  render() {
    return (
      <div onMouseDown={this.showReward.bind(this)}>
        <span>{this.state.rewardUnlocked ? '!' : '?'}</span>
      </div>
    )
  }
}

export default RewardItem;
