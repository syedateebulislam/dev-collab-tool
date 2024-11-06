import React, { Component } from 'react'
import Jenkins from './Jenkins';
import axios from 'axios'; // Make sure to install axios: npm install axios

class Jenkinsdatalist extends Component {
    state = {
        jenkinsData: []
    };

    componentDidMount() {
        this.fetchJenkinsData();
    }

    fetchJenkinsData = async () => {
        try {
            const response = await axios.get('http://localhost:8083/jenkins/alldata');
            this.setState({ jenkinsData: response.data });
        } catch (error) {
            console.error('Error fetching Jenkins data:', error);
        }
    };

    render() {
        return (
            <div>
                <span>
                    {this.state.jenkinsData.map(s => (<Jenkins key={s.id} JenkinsProps={s} />))}
                </span>
            </div>
        )
    }
}

export default Jenkinsdatalist
