module.exports = {
  siteMetadata: {
    title: `John Mahlon Peden`,
    description: `Personal website for John Peden`,
    author: `@johnmahlon`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
