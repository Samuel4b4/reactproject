import React, { Component } from 'react'

export default class state extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'kalyan'
        }
    }
    
    render() {
        setTimeout(()=>{
            this.setState({name:"samuel manohar"})
    },2000)
        return (
            <div>
                <h1>
                {this.state.name}
                    </h1>
              
            </div>
        )
    }
}
