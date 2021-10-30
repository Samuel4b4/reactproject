import React, { Component } from 'react'

export default class Cooperativebank extends Component {
    render() {
        return (
            <div>
                <h1>Cooperative Bank {this.props.info.lastname}</h1>
            </div>
        )
    }
}

