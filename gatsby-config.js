/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	flags: {
		//QUERY_ON_DEMAND: true,
		//FAST_DEV: true,
		LAZY_IMAGES: true,
	},
  siteMetadata: {
        title: 'testing for remote images',
        author: 'graphql plugin ',
		description: ''
    },
    plugins: [
         `gatsby-plugin-sass`,
		{
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/src/data`
            }
        },
		{
            resolve: 'gatsby-source-filesystem',
            options: {
                 name: `images`,
				path: `${__dirname}/src/images`,
            }
        },
		    'gatsby-transformer-remark',
        /*{
          resolve: "gatsby-source-custom-api",
          options: {
              url: "https://run.mocky.io/v3/7bc36fca-c5f0-46f8-b8b6-e22efed4a10f", //"https://mocki.io/v1/e66f8f30-3849-4ee8-afc5-f1f4f9d0e3bb",
              rootKey: "ProductsImages",
          }
        },
        {
          resolve: "gatsby-source-custom-api",
          options: {
              url: "https://stellalunaback.debugme.in/wp-json/custom/v1/products",
              rootKey: "ProductsApi"
          }
        },*/
		{
          resolve: "gatsby-source-custom-api",
          options: {
              url: "https://run.mocky.io/v3/25cb510f-4d97-4689-83d4-2974da81c165",
              rootKey: "ProductsByApi"
          }
        },	
		{
			  resolve: `gatsby-source-graphql`,
			  options: {
				fieldName: `wpgraphql`,
				url: `https://stellalunaback.debugme.in/graphql`,
				typeName: `WPGraphQL`,
				//refetchInterval: 60,
			  },
		},	
		/*{
			resolve: `gatsby-source-wordpress`,
			options: {
			// the only required plugin option for WordPress is the GraphQL url.
			url: `https://stellalunaback.debugme.in/graphql`,			
			develop: {
				hardCacheMediaFiles: true,
			},			
			schema: {
			  perPage: 20, // currently set to 100
			  requestConcurrency: 10, // currently set to 15
			  previewRequestConcurrency: 2, // currently set to 5
			  timeout: 600000,
			},
			/*type: {
				Post: {
				limit:
				  process.env.NODE_ENV === `development`
					? // Lets just pull 50 posts in development to make it easy on ourselves.
					  35
					: // And then we can pull all posts in production
					  null,
			  },
			  // this shows how to exclude entire types from the schema
			  // this example is for wp-graphql-gutenberg
			  CoreParagraphBlockAttributesV2: {
				exclude: true,
			  },
			},*/
		  /*}
		},*/
        /*{
          resolve: `gatsby-plugin-remote-images`,
          options: {
            nodeType: 'ProductsImages', // Created Node type name
            imagePath: 'url', // The image url name in test node type
          }
        },*/
		`gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
	    {
          resolve: `gatsby-transformer-sharp`,
			options: {},
		},
    ]
}
