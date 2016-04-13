import EggEvents from './../eggEvents.jsx'
import AppDispatcher from '../AppDispatcher.jsx'

var EggStore = {
  unlockEgg(egg, eggId) {
    localStorage.setItem(egg.name, JSON.stringify(egg));
    EggEvents[eggId].unlocked = true;
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
      EggStore.unlockEgg(data.egg, data.eggId);
      // Stop Video
      // Open Modal
      $(EggStore).trigger('eggStoreUnlock', data.egg);
      break;
    default:
  }
});

export default EggStore;
