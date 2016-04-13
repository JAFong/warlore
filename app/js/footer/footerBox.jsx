import RewardItem from './reward.jsx'

class FooterBox extends React.Component {
  render() {
    return (
      <div className="footer-box">
        <RewardItem rewardName="test"></RewardItem>
        <RewardItem rewardName="test1"></RewardItem>
        <RewardItem rewardName="test2"></RewardItem>
      </div>
    )
  }
}

export default FooterBox;
