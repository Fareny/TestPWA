const withPWA = require('next-pwa')({
  dest: '.next',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
});
