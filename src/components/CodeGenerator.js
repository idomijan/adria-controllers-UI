import React, { Fragment, useState, useEffect } from 'react';
import QRCode from 'qrcode.react'
import { Button} from '@material-ui/core'
  
export default function CodeGenerator(props) {

    const [showCode, setShowCode] = useState(false)

    return (
        <Fragment>           
            <Button onClick={() => setShowCode(!showCode)}>Generate QR Code</Button>
            {showCode && <QRCode value={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${props.name}`}  ></QRCode>}
        </Fragment>
    )
}

