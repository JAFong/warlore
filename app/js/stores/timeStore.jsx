import AppDispatcher from '../AppDispatcher.jsx'

var TimeStore = {
  currentTime: "",
  percentagePlayed: 0,
  getTime() {
    return {
      currentTime: this.currentTime,
      percentagePlayed: this.percentagePlayed
    }
  },
  initStore(totalTime) {
    this.totalTime = totalTime;
  },
  updateTime(currentTime, percentagePlayed) {
    if (currentTime && !percentagePlayed) {
      this.currentTime = currentTime;
      this.percentagePlayed = currentTime/this.totalTime * 100 + "%"
      return;
    }
    if (!currentTime && percentagePlayed) {
      this.percentagePlayed = percentagePlayed;
      this.currentTime = this.totalTime * percentagePlayed / 100
      return;
    }
      this.currentTime = currentTime;
      this.percentagePlayed = percentagePlayed;
  },
  addScrubListener(callback) {
    $(this).on('timeStoreScrub', callback);
  },
  removeScrubListener(callback) {
    $(this).off('timeScoreScrub', callback);
  },
  addChangeListener(callback) {
    $(this).on('timeStoreChange', callback);
  },
  removeChangeListener(callback) {
    $(this).off('timeStoreChange', callback);
  }
}

AppDispatcher.register(function(data) {
  switch (data.eventName) {
    case 'timeChange':
      TimeStore.updateTime(data.time.currentTime, data.time.percentagePlayed)
      $(TimeStore).trigger('timeStoreChange')
      break;
    case 'scrubVideo':
      TimeStore.updateTime(null, data.time.percentagePlayed)
      $(TimeStore).trigger('timeStoreScrub')
      break;
    case 'youtubePlayerInit':
      TimeStore.initStore(data.time.totalTime);
      break;
    default:

  }
  return true;
  // use own event library to send change to other components
});

export default TimeStore;
