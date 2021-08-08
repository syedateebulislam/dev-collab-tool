import React, { Component } from 'react'
import jenkinsdata from "./jenkinsdata"; 
import Jenkins from './Jenkins';

const DataList = jenkinsdata.jenkins;

class Jenkinsdatalist extends Component {

    render() {
        return (
            <div>
                <span>{DataList.map(s => (<Jenkins JenkinsProps={s}/>))}</span>
            </div>

        )
    }
}

export default Jenkinsdatalist
