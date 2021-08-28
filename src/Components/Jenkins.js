import React from 'react'

function Jenkins({JenkinsProps}) {
    return (
        <div>

            <p>Jenkins Entity - {JenkinsProps.Entity}</p>
            <p>Jar Name - {JenkinsProps.Jar}</p>
            
            <p>Build Number - 
            <a href={JenkinsProps.url}>{JenkinsProps.Build}</a>
            </p>
            
            <p>Started By - {JenkinsProps.User}</p>
            <p>Build Status - {JenkinsProps.Status}</p>
            <p>____________</p>
            
        </div>
    )
}

export default Jenkins
