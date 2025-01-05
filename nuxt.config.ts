// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: '주식회사 기장엔지니어링',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
    },
  },

  css: [
    '~/assets/css/main.css', // 사용자 정의 CSS
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
  ],

  plugins: [
    '~/plugins/bootstrap.client.ts', // 클라이언트 전용 플러그인
  ],

  compatibilityDate: '2025-01-05',
});