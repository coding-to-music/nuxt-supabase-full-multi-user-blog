export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-supabase',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    SUPABASE_PROJECT_URL: process.env.SUPABASE_PROJECT_URL,
    SUPBASE_ANON_API_KEY: process.env.SUPBASE_ANON_API_KEY,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'simplemde/dist/simplemde.min.css',
  ],

  plugins: [
    { src: '~plugins/client.js' },
    { src: '~plugins/simplemde.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/dotenv', { systemvars: true }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
