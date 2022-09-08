module.exports = {
  siteMetadata: {
    title: `Personal Site`,
    siteUrl: `https://ryand.tech`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-plugin-postcss',
    options: {
      postCssPlugins: [require("tailwindcss"), require("./tailwind.config.js"), require("autoprefixer")]
    }
  }, "gatsby-plugin-layout"]
};