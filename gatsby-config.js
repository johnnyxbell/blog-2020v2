module.exports = {
  siteMetadata: {
    title: 'Chris DeMars | Front-End Developer & Accessibility Specialist',
    description: '',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
