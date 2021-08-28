import React, { Component } from 'react'
import jenkinsdata from "./jenkinsdata";
import jenkinsapidata from "./jenkinsAPIData";
import jenkinsalldata from "./jenkinsAllData.json"; 
import Jenkins from './Jenkins';

const DataList_1 = jenkinsdata.jenkins;
const DataList_2 = jenkinsapidata.jenkins;
const DataList = jenkinsalldata.jenkins;
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
