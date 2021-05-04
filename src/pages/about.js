import React from 'react'
import { Link,  graphql, useStaticQuery } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Img from 'gatsby-image'
import Layout from "../components/layout";

export const query = graphql`
    query {
      productsImages {
        url
        title
        localImage {
          childImageSharp {
            gatsbyImageData(             
              layout: CONSTRAINED
              formats: [AUTO, WEBP, JPG, PNG]
              height: 400
              width: 400
            )
          }
        }
      }
    }
`

const AboutPage = (props ) => {
    console.log('data', props.data.productsImages);
    const image = getImage(props.data.productsImages.localImage);
    console.log('image', image);
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I currently teach full-time on Udemy.</p>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
            <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />

            <GatsbyImage image={image} alt={"hello"} />
        </Layout>
    )
}

export default AboutPage