module.exports = {
   //pathPrefix: '/m-3-test',
  siteMetadata: {
    author: 'David Bernstein',
    description: 'Modeling and Analysis of the Human Gut Microbiome',
    siteUrl: 'https://m-3-lab/m-3-lab.github.io/',
    title: 'Microbiome Metabolic Modeling Lab',
    // List of link buttons to include on the landing image. Delete this field
    // and/or all entires if you do not want these links.
    // options: 'contact', 'opportunities', 'people', 'publications', 'research'
    primaryLinks: [
      'Research',
      'Opportunities',
    ],
    // List of PubMed IDs to include on the publication page. Delete this field
    // and/or all entires if you do not want the publication page.
    publications: [
      34904863,
      33602294,
      37888487,
      36802169
    ],
    // An array of links to display in the page footer. Include as many as you like
    // (not just the ones here). If either the link or text is missing,
    // it will not be shown. Delete this field and/or all entires to disable
    // footer links.
    footerLinks: [
      { text: 'GitHub', link: 'https://github.com/m-3-lab' },
      { text: 'University of Vermont', link: 'https://www.uvm.edu/cems/ebe/profile/david-bernstein' },
      { text: 'LinkedIn', link: 'https://www.linkedin.com/in/james-knight-174996156' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-scientist',
        short_name: 'scientist',
        start_url: '/',
        background_color: '#3d8183',
        theme_color: '#3d8183',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
  ],
};
