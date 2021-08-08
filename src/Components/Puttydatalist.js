import React, { Component } from 'react'
import puttydata from "./puttydata.json"
import Putty from './Putty'

const DataList = puttydata.putty;

class Puttydatalist extends Component {
    render() {
        return (
            <div>
                <span>{DataList.map(s => (<Putty PuttyProps={s}/>))}</span>
            </div>
        )
    }
}

export default Puttydatalist
