module.exports = {
  siteMetadata: {
    title: `A thinking Dev`,
    name: `Yash Srivastava`,
    siteUrl: `https://novela.narative.co`,
    description: `Personal blog by Yash Srivastava, where I write about design, marketing, development, history, productivity and life`,
    hero: {
      heading: `Welcome to my blog. A place where I give words to my thoughts, learnings and in the process help others.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/amadeus6996`,
      },
      {
        name: `github`,
        url: `https://github.com/cr7yash`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`,
      },
      {
        name: `linkedin`,
        url: `hhttps://www.linkedin.com/in/yash-srivastava-aba296104/`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/cr7yash96`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `A thinking Dev`,
        short_name: `ATD`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/open-peeps.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
