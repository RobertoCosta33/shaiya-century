/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["pt-BR", "en-US", "es-ES"],
    defaultLocale: "pt-BR",
  },
};

module.exports = nextConfig;
