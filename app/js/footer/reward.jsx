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
      console.log('THIS IS EGG');
    }
  }
  render() {
    return (
      <div>
        <span>{this.state.rewardUnlocked ? '!' : '?'}</span>
      </div>
    )
  }
}

export default RewardItem;
