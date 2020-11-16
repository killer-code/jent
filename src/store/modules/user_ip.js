export default ({
  state: {
    user_ip: '',
  },
  getters: {
    userIP(state) {
      return state.user_ip.ip;
    },
  },
  mutations: {
    updateUserIP(state, ip) {
      localStorage.ip = ip.ip;
      state.user_ip = ip;
    },
  },
  actions: {
    async fetchUserIP(ctx) {
      const res = await fetch(`https://json.geoiplookup.io/`);
      const ip = await res.json()
      console.log(ip.ip);
      ctx.commit('updateUserIP', ip);
    },
  },
})