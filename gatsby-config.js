require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "ojasw-website",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/posts`,
        name: "posts"
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ojasw-personal-website`,
        short_name: `ojasw`,
        start_url: `/`,
        icon: `src/images/logo-o.png`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets"
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/resume`,
        name: `resume`
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          `gatsby-remark-katex`,
          {
            resolve: `gatsby-remark-images`,
            options: {}
          }
        ],
        remarkPlugins: [require(`remark-math`), require(`remark-html-katex`)],
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID
        }
      }
    },
  ],
};
