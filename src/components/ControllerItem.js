import React, { useState } from 'react'
import CodeGenerator from './CodeGenerator'
import {Card, Button} from '@material-ui/core'

export default function ControllerItem(props) {

  const [showProperties, setshowProperties] = useState(false)
  const [showSettings, setshowSettings] = useState(false)


  return (
    <>
        <Card>         
        <h3 className="clickH3" onClick={() => setshowProperties(!showProperties)}> Zone: {props.zone}</h3>
        {showProperties && <ul>{props.properties}</ul>} 
        <p>Room name: {props.name}, address: {props.address}</p>
      </Card>
      <Button onClick={() => setshowSettings(!showSettings)}> Show/Hide Settings:</Button>
        {showSettings && <table>{props.settings}</table>}
      <CodeGenerator name={props.name}></CodeGenerator>
    </>
  )
}
