import React, { useState } from 'react'

export default function Properties(props) {

    const [temp, setTemp] = useState('');


    if (props.name === 'DND') {
        return (
            <div>{
                props.value === '1' ? <li>
                    {props.name}
                </li> : ''
            }
            </div>
        )
    }

    if (props.name === 'DeponedCard') {
        return (
            <div>{
                props.value === '1' ? <li>
                    Occupied
               </li> : ''
            }
            </div>
        )
    }

    if (props.name === 'TempRoomSet') {
        return <input
            type="text"
            placeholder="Set Temperature"
            value={temp}
            onChange={event => setTemp(event.target.value)}
        />
    }

    if (props.name === 'TempRoomCurrent') {
        return (
            <div>
                <li>
                    Current Temperature: {props.value}
                </li>
            </div>
        )
    }

    return (
        ''
    )
}

