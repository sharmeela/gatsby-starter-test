const path = require('path');

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
	//console.log('node.internal.type', node.internal.type);
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
},
/*
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js');
   // const productTemplate = path.resolve('./src/templates/product.js');
    //const imgTemplate = path.resolve('./src/templates/imageProduct.js');
    await graphql(`
            {
                /*allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title,
                            date
                        }
						fields {
							slug
							}
						}
					}
				}
				allProductsByApi {
                    edges {
                        node {                            
                            id
                            title
                        }
                    }
                }
            }
        `).then(res => {
			/*res.data.allMarkdownRemark.edges.forEach((edge) => {
                createPage({
                    component: blogTemplate,
                    path: `/blog/${edge.node.fields.slug}`,
                    context: {
                        slug: edge.node.fields.slug
                    }
                })
            })*/            

            /*
			res.data.allProductsByApi.edges.forEach(async edge => {
                createPage({
                    component: productTemplate,
                    path:`/products/${edge.node.id}`,
                    context: {
                        id: edge.node.id
                    }
              })
            })
			
        })
}*/

// please comment this section to check wp-graphql queries
module.exports.createResolvers = ({
  getNodesByType,
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode, deleteNode  } = actions
  createResolvers({
    mediaAll: {
      imageFile: {
        type: `File`,
        async resolve(source, args, context, info) {
			//const productsApiNode = getNodesByType("ProductsApi")
			console.log('source', source);
			//if(productsApiNode){
				try {
					
					let getUrlIndex = source.src.search("cloudfront");
					console.log('getUrlIndex', getUrlIndex);
					if(getUrlIndex > 0){
					  baseUrlPath = source.src;
					}else if(source.src.search("images.pexels.com") > 0){
						baseUrlPath = source.src;
					}else{
					  baseUrlPath = "https://stellalunaback.debugme.in/wp-content/uploads/" + source.src;
					}
				  const remoteFileNode = await createRemoteFileNode({
					url: `${baseUrlPath}`,
					store,
					cache,
					createNode,
					createNodeId,
					reporter,
				  }, () => console.log(this))
				  return remoteFileNode;			  
				}catch (err) {
					console.log(err);
				}
			//}
			return null;
			
        },
      },
    },
	mediaWide: {
      imageFile: {
        type: `File`,
        async resolve(source, args, context, info) {
			try {
				//console.log('source', source);
				let getUrlIndex = source.src.search("cloudfront");
				if(getUrlIndex > 0){
				  baseUrlPath = source.src;
				}else
				{
				  baseUrlPath = "https://stellalunaback.debugme.in/wp-content/uploads/" + source.src;
				}
			  const remoteFileNode = await createRemoteFileNode({
				url: `${baseUrlPath}`,
				store,
				cache,
				createNode,
				createNodeId,
				reporter,
			  })
			  return remoteFileNode;			  
			}catch (err) {
                console.log('err', err);
			}
			return null;
			
        },
      },
    },
  })
}

 //Uncomment this to check the wp-graphql node
 /*
exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_Product.galleryImages: {
      imageFile: {
        type: "File",
        async resolve(source) {
			console.log('source', source);
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
*/


