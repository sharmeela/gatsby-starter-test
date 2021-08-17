import React from 'react'
import { Link,  graphql, useStaticQuery } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
/*
export const query = graphql`
    query {
      productsImages {
        url
        title
        localImage {
          childImageSharp {
            gatsbyImageData(             
              layout: FULL_WIDTH
              height: 400
              width: 400
            )
          }
        }
      }
    }
`
*/
const AboutPage = (props ) => {
    //console.log('data', props.data.productsImages);
    ////const image = getImage(props.data.productsImages.localImage);
    //console.log('image', image);
    return (
        <Layout>
            <h1>About Me</h1>
            
            //<p><Link to="/contact">Want to work with me? Reach out.</Link></p>
            <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />

            <p>GatsbyImage source</p>
			{/* <GatsbyImage image={image} alt={"hello"} />*/}
        </Layout>
    )
}

export default AboutPage