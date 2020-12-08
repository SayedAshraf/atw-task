export default {
  state: () => ({
    users: []
  }),
  mutations: {
    updateusers(state, users) {
      state.users = users;
    }
  },
  actions: {}
};
