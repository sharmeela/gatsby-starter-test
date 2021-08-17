import React from 'react';
import { Link, graphql} from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
/*
export const query = graphql`
    query{
		allProductsByApi {
			edges {
			  node {
				media {
				  all {
					imageFile {
					  childrenImageSharp {
						gatsbyImageData(layout: CONSTRAINED)
					  }
					}
				  }
				}
			  }
			}
		}
    }
`
*/

export const query = graphql`
    query{
		wpgraphql {
			posts {
				edges {
				  node {
					featuredImage {
						node {
							sourceUrl
							mediaItemId
							modified
						}
					}
				  }
				}
			  }
			}
	}
`
const ProductsList = (props) => {
    const {data} = props;
    console.log('id', data);
    
    return (
        <Layout>
            <h1>Product</h1>
			<ol>
				{/*data.allProductsByApi.edges.map((edge, index) => {
					const imagePath = getImage(edge.node.media.all[0].imageFile.childrenImageSharp[0].gatsbyImageData);
                    return (
                            <Link to={`/products/${edge.node.id}`}>
                            <li key={index}>
                                <h2>{edge.node.id}</h2>
                                <p>{edge.node.title}</p>
								<GatsbyImage image={imagePath} alt={"hello"} />   								
                            </li></Link>
                    )
                })*/}
			</ol>
            <ol>
                {/*data.allProductsApi.edges.map((edge, index) => {
                    return (
                            <Link to={`/products/${edge.node.id__normalized}`}>
                            <li key={index}>
                                <h2>{edge.node.id__normalized}</h2>
                                <p>{edge.node.title}</p>								
                            </li></Link>
                    )
                })*/}
            </ol>
        </Layout>
    )
}

export default ProductsList