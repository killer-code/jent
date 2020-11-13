export default ({
  state: {
    user_city: '',
  },
  getters: {
    userCity(state) {
      return state.user_city;
    },
  },
  mutations: {
    updateUserCity(state, city) {
      state.user_city = city;
    },
  },
  actions: {
    async fetchUserCity(ctx, ip) {
      const res = await fetch(`http://api.sypexgeo.net/h6JRc/json/${ip}`);
      const city = await res.json()

      ctx.commit('updateUserCity', city);
    },
  },
})