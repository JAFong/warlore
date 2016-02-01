import AppDispatcher from '../AppDispatcher.jsx'

var playerParams = {
  autoplay: 0,
  controls: 0,
  showinfo: 0,
  wmode: "transparent",
  rel: 0,
  modestbranding: true,
  // enablejsapi: 1
};

class YouTubePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videoId: this.props.videoId};
  }
  componentWillMount() {
    var urlWithParams = this.state.videoId;
    var counter = 0;
    for (var param in playerParams) {
      var char = "&"
      if (counter === 0) {
        char = "?"
      }
      urlWithParams += char + param + "=" + playerParams[param];
      counter++;
    }
    this.setState({videoId: urlWithParams});
    this.loadYtPlayer();
  }
  loadYtPlayer() {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.player;
    window.onYouTubeIframeAPIReady = function() {
      this.player = new YT.Player('YTplayer', {
        videoId: this.state.videoId,
        events: {
          'onReady': onPlayerReady.bind(this),
          'onStateChange': onPlayerStateChange.bind(this),
        }
      })
    }.bind(this);

    function onPlayerReady(event) {
      // Change from on PlayerReady to on playerStateChange
      // only set interval if playing or seeking
      // otherwise remove interval

      setInterval(function() {
        var currentTime = this.player.getCurrentTime();
        var percentagePlayed = (currentTime / this.player.getDuration()) * 100;
        AppDispatcher.dispatch({
          eventName: 'timeChange',
          time: {
            currentTime: currentTime,
            percentagePlayed: percentagePlayed
          }
        })
      }.bind(this), 50)
    }

    function onPlayerStateChange(event) {
    }

    function stopVideo() {
      player.stopVideo();
    }
  }
  componentDidMount() {
    $(function() {
    	// Find all YouTube videos
    	var $allVideos = $('.video-box');
	    // The element that is fluid width
    	var $fluidEl = $("body");
    	// Figure out and save aspect ratio for each video
    	$allVideos.each(function() {
    		$(this)
    			.data('aspectRatio', this.height / this.width)
    			// and remove the hard coded width/height
    			.removeAttr('height')
    			.removeAttr('width');
    	});
    	// When the window is resized
    	// (You'll probably want to debounce this)
    	$(window).resize(function() {
        var $fluidWidth = $fluidEl.width();
        var $fluidHeight = $fluidEl.height();
    		var newWidth = $fluidWidth
        var newHeight = $fluidHeight
        var minHeight = $fluidWidth * 0.5625;
        var minWidth = $fluidHeight * 1.78;
        if (newWidth < minWidth) {
          var newLeft = ($fluidWidth - minWidth) / 2;
          var newTop = 0;
          newWidth = minWidth;
        } else {
          var newTop = (minWidth - $fluidWidth) / 2;
          var newLeft = 0;
        }
        if (newHeight < minHeight) {
          newHeight = minHeight;
        }
    		// Resize all videos according to their own aspect ratio
    		$allVideos.each(function() {
    			var $el = $(this);
    			$el
    				.width(newWidth)
    				.height(newHeight)
            .css({left: newLeft, top: newTop})
    		});
    	// Kick off one resize to fix all videos on page load
    	}).resize();
    });
  }
  render() {
    return (
      <div id="YTplayer"></div>
    );
  }
}

export default YouTubePlayer;
