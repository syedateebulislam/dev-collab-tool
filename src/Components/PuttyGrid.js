import React, { Component } from 'react'
import './myStyles.css'
import Puttydatalist from './Puttydatalist';


class PuttyGrid extends Component {


    render(props) {
        return (
            <div className={this.props.name}>
                <fieldset>
                    <h2>- {this.props.name} -</h2>
                    
                    <Puttydatalist/>

                </fieldset>
            </div>
        )
    }
}

export default PuttyGrid
