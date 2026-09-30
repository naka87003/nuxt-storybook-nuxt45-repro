export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    baseURL: 'https://api.example.com',
  });

  return {
    provide: {
      api,
    },
  };
});
