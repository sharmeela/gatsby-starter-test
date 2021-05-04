import React from 'react'
import { Link,  graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import Img from 'gatsby-image'
import Layout from "../components/layout";

export const query = graphql`
  query {
    productsImages {
      localImage {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

const ImgPage = (props ) => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>Fluid source</p>   
            <Img fluid={props.data.productsImages.localImage.childImageSharp.fluid} />     
        </Layout>
    )
}

export default ImgPage