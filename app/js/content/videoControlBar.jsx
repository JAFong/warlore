class VideoControlBar extends React.Component {
  componentDidMount() {
    var bar = document.getElementById('progress-bar');
    bar.addEventListener('barUpdate', function(time) {
      updateProgressBar(time);
    }.bind(this));
  }
  render () {
    return (
      <progress id="progress-bar" min="0" max="100"></progress>
    )
  }
  updateProgressBar() {
    var progressBar = document.getElementById('progress-bar');
    var percentage = Math.floor((100 / 10));
  }
}

export default VideoControlBar;
