import { createStore } from 'vuex';

export default createStore({
  state: {
    userSession: null
  },
  getters: {
    getUserSession: (state) => state.userSession
  },
  mutations: {
    setUserSession(state, session) {
      state.userSession = session;
    },
    clearUserSession(state) {
      state.userSession = null;
    }
  },
  actions: {
    saveUserSession({ commit }, session) {
      commit('setUserSession', session);
      sessionStorage.setItem('userSession', JSON.stringify(session));
    },
    loadUserSession({ commit }) {
      const session = sessionStorage.getItem('userSession');
      if (session) {
        commit('setUserSession', JSON.parse(session));
      }
    },
    clearUserSession({ commit }) {
      commit('clearUserSession');
      sessionStorage.removeItem('userSession');
    }
  },
  modules: {
  }
});
