export default ({
  actions: {
    async getSMS(ctx, payload) {
      const url = 'https://fmdev.ru/pharmacy/map/api/getSMSCode/';
      const resp = await fetch(
        `${url}?phone=${payload.phone}&product_code=jent`, 
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
      });

      const result = await resp.json();
      console.log(result);
      if ( result.status === 'error' ) {
        return result.message;
      } else {
        return result.status;
      }
    },

    async pushSMS(ctx, payload) {
      const url = 'http://fmdev.ru/pharmacy/map/api/checkSMSCode/';
      const resp = await fetch(
        `${url}?phone=${payload.phone}&product_code=jent&sms_code=${payload.code}`, 
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
      });

      const result = await resp.json();
      console.log(result);
      if ( result.status === 'error' ) {
        return result.message;
      } else {
        return result.status;
      }
    },
  },
})