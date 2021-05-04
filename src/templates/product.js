import React from 'react'
import {graphql} from 'gatsby';
import Layout from '../components/layout'

export const query = graphql`
    query($id__normalized: String) {
        products(id__normalized: { eq: $id__normalized}) {
        id
        id__normalized,
        description,
        price
        sku
        title
    }
  }
`
const Product = (props) => {
    console.log('props');
    return (
        <Layout>
            <h1>{props.data.products.title}</h1>
            <p>{props.data.products.id__normalized}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.description}}></div>
            
        </Layout>
    )
}

export default Product