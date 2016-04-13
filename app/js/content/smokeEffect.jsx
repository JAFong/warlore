class SmokeEffect extends React.Component {
  componentDidMount() {
    // http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png
    var context = document.getElementById('myCanvas');
    var image = new Image();
    image.onload = function() {
      context.drawImage(image, 0, 0);
    }
    image.src = 'http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png';
  }
  render() {
    return (
      <div>
        <canvas id="myCanvas" height="400" width="400"></canvas>
      </div>
    )
  }
}

export default SmokeEffect
