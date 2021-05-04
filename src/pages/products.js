import React from 'react';
import { Link, graphql} from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
    query{
        allProducts {
            edges {
                node {
                    availability_status
                    description
                    id
                    id__normalized
                    sku
                    title
                    price
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
                {data.allProducts.edges.map((edge, index) => {
                    return (
                            <Link to={`/products/${edge.node.id__normalized}`}>
                            <li key={index}>
                                <h2>{edge.node.id__normalized}</h2>
                                <p>{edge.node.title}</p>
                            </li></Link>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default ProductsList