import React from 'react'
import { Link,  graphql, useStaticQuery } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Img from 'gatsby-image'
import Layout from "../components/layout";



const AboutPage = (props ) => {
    console.log('data', props.data.productsImages);
    const image = getImage(props.data.productsImages.localImage);
    console.log('image', image);
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I currently teach full-time on Udemy.</p>            
        </Layout>
    )
}

export default AboutPage