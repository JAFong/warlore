import AppDispatcher from '../AppDispatcher.jsx'

var TimeStore = {
  currentTime: "",
  percentagePlayed: 0,
  getTime() {
    return {
      currentTime: this.currentTime,
      percentagePlayed: this.percentagePlayed
    }
  }
  // updateTime() {}
}

AppDispatcher.register(function(data) {
  return true;
  // use own event library to send change to other components
});

export default TimeStore;
