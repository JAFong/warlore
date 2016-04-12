import AppDispatcher from '../AppDispatcher.jsx'

var EggStore = {
  unlockEgg(name) {
    localStorage.setItem(name, true);
  },
  addUnlockListener(callback) {
    $(this).on('eggStoreUnlock', callback);
  },
  removeUnlockListener(callback) {
    $(this).off('eggStoreUnlock', callback);
  }
}

AppDispatcher.register(function(data) {
  switch (data.eventName) {
    case 'eggUnlocked':
      EggStore.unlockEgg(data.egg.name);
      // Stop Video
      // Open Modal
      $(EggStore).trigger('eggStoreUnlock');
      break;
    default:
  }
});

export default EggStore;
