import React from 'react'
import {graphql} from 'gatsby';
import Layout from '../components/layout'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
/*
export const query = graphql`
 query {
        productsByApi{
			nodes {
				id        
				title
				media {
					all {
					imageFile {
					  childrenImageSharp {
						gatsbyImageData(layout: FULL_WIDTH, height: 10, formats: WEBP)
					  }
					}
					}
				}
			}
    }
  }
`
*/
const Product = (props) => {
	//console.log('props.data.productsApi.media.all[0]', props.data.productsByApi.media.all[0]);
	//const imagePath = getImage(props.data.productsByApi.media.all[0].imageFile.childrenImageSharp[0].gatsbyImageData);
    return (
        <Layout>
            <h1>{/*props.data.productsByApi.title*/}</h1>
				{/*<GatsbyImage image={imagePath} alt={"hello"} />   */}
        </Layout>
    )
}

export default Product