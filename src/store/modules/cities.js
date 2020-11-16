export default ({
  state: {
    user_city: '',
    cities: [],
  },
  getters: {
    userCity(state) {
      return state.user_city;
    },
    allCities(state) {
      return state.cities.data
    }
  },
  mutations: {
    updateUserCity(state, city) {
      localStorage.city = JSON.stringify(city);
      state.user_city = city;
    },
    updateCities(state, cities) {
      state.cities = cities;
    }
  },
  actions: {
    async fetchUserCity(ctx, ip) {
      const res = await fetch(`http://api.sypexgeo.net/h6JRc/json/${ip}`);
      const city = await res.json()

      ctx.commit('updateUserCity', city);
    },
    async fetchCities(ctx) {
      const res = await fetch(`http://fmdev.ru/pharmacy/map/api/getListCity/?product_code=jent`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
      });
      const cities = await res.json()

      ctx.commit('updateCities', cities);
    },
  },
})