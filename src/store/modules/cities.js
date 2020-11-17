export default ({
  state: {
    user_city: '',
    user_district: '',
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
      console.log(city);
      localStorage.city = city.city.name_ru;
      localStorage.district = city.region.name_ru;
      state.user_city = city.city.name_ru;
      state.user_district = city.region.name_ru;
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
      });
      const cities = await res.json()

      ctx.commit('updateCities', cities);
    },
  },
})