module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/linkin',
        destination: 'https://google.com/',
        permanent: true
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com',
        permanent: true
      }
    ];
  },
}
