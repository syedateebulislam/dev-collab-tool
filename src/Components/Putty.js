import React from 'react'

function Putty({PuttyProps}) {
    return (
        <div>

            <p>Environment - {PuttyProps.Env}</p>
            <p>User - {PuttyProps.User}</p>
            <p>Command - {PuttyProps.Command}</p> 
            <p>____________</p>

        </div>
    )
}

export default Putty
