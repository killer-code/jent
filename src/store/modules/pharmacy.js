export default ({
  state: {
    pharmacy: [],
  },
  getters: {
    allPharmacy(state) {
      return state.pharmacy.data
    }
  },
  mutations: {
    updatePharmacy(state, pharmacy) {
      state.pharmacy = pharmacy;
    },
  },
  actions: {
    async fetchPharmacy(ctx, city) {
      const res = await fetch(`http://fmdev.ru/pharmacy/map/api/getDrugstore/?product_code=jent&city_name=${city}`);
      const pharmacy = await res.json()

      ctx.commit('updatePharmacy', pharmacy);
    },
  },
})
