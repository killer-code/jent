export default ({
  actions: {
    async createOrder(ctx, payload) {
      // const fd = new FormData();
      // fd.append("product_code", 'jent');
      // fd.append("store_uid", payload.store_uid);
      // fd.append("count", 1);
      // fd.append("phone", payload.phone);
      // fd.append("email", payload.email);
      // fd.append("name", payload.name);
      // fd.append("specialty", payload.speciality);

      const url = 'http://fmdev.ru/pharmacy/map/api/createOrder/';

      const resp = await fetch(
        `${url}?product_code=jent&store_uid=${payload.store_uid}&count=1&phone=${payload.phone}&email=${payload.email}&name=${payload.name}&specialty=${payload.speciality}`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        // body: fd,
      });

      const result = await resp.json();
      if ( result.status === 'error' ) {
        return result.message;
      } else {
        return result.status;
      }
    },
  },
})