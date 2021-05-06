import React from 'react'
import { Link,  graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
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
    allProductsImages {
      edges {
        node {
          localImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, formats:[AUTO, WEBP])
            }
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
           <br></br>

            <ol>
                {props.data.allProductsImages.edges.map((edge, index) => {
                    console.log('edge', edge);
                    const imagePath = getImage(edge.node.localImage);
                    return (                            
                            <li key={index}>
                                 <GatsbyImage image={imagePath} alt={"hello"} />    
                            </li>
                    )
                })}
            </ol>

        </Layout>
    )
}

export default ImgPage