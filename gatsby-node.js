const path = require('path');
const fetch = require('isomorphic-fetch');
const axios = require('axios');

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { parse } = require('path');

module.exports.sourceNodes = async ({ actions, createNodeId, node, store, cache }) => {
    const { createNode, createNodeField } = actions;
    const data = await fetch('https://jsonplaceholder.typicode.com/photos');
    const parsed = await data.json();

    //console.log('imgdata', parsed);
    

    

},

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
},

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js');
    const productTemplate = path.resolve('./src/templates/product.js');
    const imgTemplate = path.resolve('./src/templates/imageProduct.js');
    await graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
                allProducts {
                    edges {
                        node {
                            details
                            id
                            id__normalized
                            price
                            slug
                            sku
                            title
                        }
                    }
                }
            }
        `).then(res => {
            res.data.allProducts.edges.forEach(async edge => {
                createPage({
                    component: productTemplate,
                    path:`/products/${edge.node.id__normalized}`,
                    context: {
                        id__normalized: edge.node.id__normalized
                    }
              })
            })

            res.data.allMarkdownRemark.edges.forEach((edge) => {
                createPage({
                    component: blogTemplate,
                    path: `/blog/${edge.node.fields.slug}`,
                    context: {
                        slug: edge.node.fields.slug
                    }
                })
            })
        })
}