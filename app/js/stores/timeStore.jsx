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
  updateTime(currentTime, percentagePlayed) {
    if (currentTime) {
      this.currentTime = currentTime;
    }
    if (percentagePlayed) {
      this.percentagePlayed = percentagePlayed;
    }
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
    default:

  }
  return true;
  // use own event library to send change to other components
});

export default TimeStore;
