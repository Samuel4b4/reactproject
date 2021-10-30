import React from 'react'
import Andhrabank from './Andhrabank'
import Cooperativebank from './Cooperativebank'


export default function Unionbank() {
    let data={
        firstname:'xyz',
        lastname:'abc'
    }
    return (
        <div>
          <Andhrabank info={data}/>
          <Cooperativebank info={data}/>
        </div>
    )
}


