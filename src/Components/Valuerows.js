import React, { Component } from 'react'

class Valuerows extends Component {

    constructor(){
        super()
        this.state = {
            Jenkins:"CT",
            Jar:"PERMB",
            Build:29,
            User:"syed",
            status:"success"
        }
    }
    
    render() {
        return (
            <div>
                <p>Jenkins Entity - {this.state.Jenkins}</p>
                <p>Jar Name - {this.state.Jar}</p>
                <p>Build Number - {this.state.Build}</p>
                <p>Started By - {this.state.User}</p>
                <p>Build Status - {this.state.status}</p>
                <p>____________</p>   
            </div>
        )
    }
}

export default Valuerows