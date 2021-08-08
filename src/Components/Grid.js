import React, { Component } from 'react'
import './myStyles.css'
import Jenkinsdatalist from './Jenkinsdatalist';
import Puttydatalist from './Puttydatalist';


class Grid extends Component {


    render(props) {
        return (
            <div className={this.props.name}>
                <fieldset>
                    <h2>- {this.props.name} -</h2>
                    
                    <Jenkinsdatalist/>
                    

                </fieldset>
            </div>
        )
    }
}

export default Grid
