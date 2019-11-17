import React from 'react'

export default function SettingsTable(props) {
    return (
     <tbody>
         <tr  key={props.id}>             
               <td  style={{ border:"1px solid black"}}> {props.name}</td>
               <td style={{ border:"1px solid black"}}> {props.value}</td>
            </tr>
     </tbody>          
    )
}
