/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'gatsby-starter-essentials',
    description: 'Gatsby starter providing solid essentials to build upon',
    author: 'Sebastian Andil <sebastian.andil@gmail.com>',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter Essentials',
        short_name: 'Essentials',
        start_url: '/',
        background_color: '#639',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.svg',
      },
    },
  ],
}
