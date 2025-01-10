// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      cookieOptions: {
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
      },
    },
    API_GITHUB_REPO: process.env.GITHUB_REPO,
    API_GITHUB_FILE_PATH: process.env.GITHUB_FILE_PATH,
    API_GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    ADMIN_NAME: process.env.ADMIN_NAME,
    ADMIN_PASS: process.env.ADMIN_PASS,
  },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'layout', mode: 'out-in' },
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