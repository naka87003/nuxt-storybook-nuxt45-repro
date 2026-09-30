export default defineNuxtPlugin(() => {
  // Force Nuxt's generated $fetch module to be evaluated in Storybook's preview.
  void $fetch;
});
