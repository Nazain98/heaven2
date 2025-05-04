// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Heart's Heaven"
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/styles/global.css',
    '~/assets/styles/variables.css',
  ],
})
