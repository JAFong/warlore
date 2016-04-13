import AppDispatcher from '../AppDispatcher.jsx'

var EggStore = {
  unlockEgg(egg) {
    localStorage.setItem(egg.name, JSON.stringify(egg));
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
      EggStore.unlockEgg(data.egg);
      // Stop Video
      // Open Modal
      $(EggStore).trigger('eggStoreUnlock', data.egg);
      break;
    default:
  }
});

export default EggStore;
