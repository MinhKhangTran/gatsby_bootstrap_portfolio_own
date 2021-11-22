require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://minhkhangtran.com",
    title: "My portfolio",
    description: "A static site made with gatsby and bootstrap ✨",
    keywords: "bootstrap, gatsby, minh khang tran, portfolio, freelancer from germany, freiberufler für websites, freiberufler für webdesign, website, webdesign, static sites, mkt,",
    author: "mkt",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/Hero.png",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `f07g68yd3yyd`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
