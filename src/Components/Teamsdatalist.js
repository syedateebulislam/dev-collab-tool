import React, { Component } from 'react'
import teamsdata from "./teamsdata.json"
import Teams from './Teams';

const DataList = teamsdata.teams;

class Teamsdatalist extends Component {
    render() {
        return (
            <div>
                <span>{DataList.map(s => (<Teams TeamsProps={s}/>))}</span>
            </div>
        )
    }
}

export default Teamsdatalist
