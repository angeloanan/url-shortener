module.exports = {
  async rewrites () {
    return [
      {
        source: '/:route*',
        destination: '/api/redirect'
      }
    ]
  }
}
