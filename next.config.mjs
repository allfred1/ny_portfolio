/** @type {import('next').NextConfig} */
const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       // Отключить кэширование для всех страниц
  //       // во время разработки мне очень часто приходилось перезагружать страницу чтобы проверсти что произшло.
  //       // но это не работало, приходилось  перезапускать сервере, отключение кэша помогло

  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
  //         },
  //         {
  //           key: 'Pragma',
  //           value: 'no-cache',
  //         },
  //         {
  //           key: 'Expires',
  //           value: '0',
  //         },
  //         {
  //           key: 'Surrogate-Control',
  //           value: 'no-store',
  //         },
  //       ],
  //     },
  //   ]
  // },
};

export default nextConfig;
