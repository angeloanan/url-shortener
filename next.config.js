// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async rewrites () {
    return [
      {
        source: '/:route*',
        destination: '/api/redirect'
      }
    ]
  }
}

module.exports = nextConfig
