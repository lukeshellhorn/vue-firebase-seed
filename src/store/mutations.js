export const STORAGE_KEY = 'cmv-storage'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const state = {
  cmvStore: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}')
}

export const mutations = {
  addAuthVal (state, { authToken }) {
    state.cmvStore.hasAdmin = false;
    auth.currentUser.getIdToken()
    .then((idToken) => {
      // Parse the ID token.
      const payload = JSON.parse(atob(idToken.split('.')[1]));
      // Confirm the user is an Admin.
      if (!!payload['hasAdmin']) {
        console.log('sally is admin');
        state.cmvStore.hasAdmin = true;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  },

  clearAuthVal (state, { todo }) {
    state.cmvStore = {};
  }
}