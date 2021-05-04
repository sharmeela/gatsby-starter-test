/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
        title: 'Full-Stack Bootcamp',
        author: 'Andrew Rogger',
		    description: 'code preview'
    },
    plugins: [
         `gatsby-plugin-sass`,
		      {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
		    'gatsby-transformer-remark',
        {
          resolve: "gatsby-source-custom-api",
          options: {
              url: "https://mocki.io/v1/e66f8f30-3849-4ee8-afc5-f1f4f9d0e3bb",
              rootKey: "ProductsImages",
          }
        },
        {
          resolve: "gatsby-source-custom-api",
          options: {
              url: "https://back.stellaluna.co/wp-json/custom/v1/products",
              rootKey: "products"
          }
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
          resolve: `gatsby-plugin-remote-images`,
          options: {
            nodeType: 'ProductsImages', // Created Node type name
           imagePath: 'url', // The image url name in test node type
          }
       }
    ]
}
