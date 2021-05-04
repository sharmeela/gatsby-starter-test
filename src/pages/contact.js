import React, { Component } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Layout from "../components/layout";

class ContactPage extends Component {
    constructor(props) {
		super(props);
        this.state = {
			isLoaded: false,	
            fetchedData: []
		};
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users/2')
        .then(response => {
            return response.json()
        })
        .then(json => {
            this.setState({
                fetchedData: json.data,
                loading: false
            })
        })
    }
    
    render() {
        const{fetchedData} = this.state;
        return (
            <Layout>
                <h1>Loading dynamic data</h1>
                <p>first name : {fetchedData.first_name}</p>
                <p>last name : {fetchedData.last_name}</p>
                <p>email : {fetchedData.email}</p>
                <LazyLoadImage
                    style={{ marginBottom: '0' }}
                    src={fetchedData.avatar}
                />
            </Layout>
        )
    }
}

export default ContactPage