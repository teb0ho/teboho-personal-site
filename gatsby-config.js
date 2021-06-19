/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`
      }
    }
  ],
  siteMetadata: {
    title: 'Teboho Website',
    description: 'Teboho\'s Personal Website',
    copyright: 'This website is free to reuse 2021'
  }
}
