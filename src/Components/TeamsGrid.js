import React, { Component } from 'react'
import './myStyles.css'
import Teamsdatalist from './Teamsdatalist';


class TeamsGrid extends Component {


    render(props) {
        return (
            <div className={this.props.name}>
                <fieldset>
                    <h2>- {this.props.name} -</h2>
                    
                    <Teamsdatalist/>

                </fieldset>
            </div>
        )
    }
}

export default TeamsGrid
