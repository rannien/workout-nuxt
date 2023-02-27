// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  imports: {
    dirs: ['./stores'],
  },
  runtimeConfig: {
    apiSecret: '123',
    strapiBaseUrl: 'http://localhost:1337',
  },
});
