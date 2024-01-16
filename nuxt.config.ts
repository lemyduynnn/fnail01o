// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  generate: {
    routes: ['/']
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  css: ['@/assets/style/main.scss'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-swiper',
    'nuxt-rating'
  ],
  tailwindcss: {
    cssPath: '@/assets/style/tailwind.css'
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: 'light-plus'
    }
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  build: {
    transpile: ['newzen-connector']
  }
});
