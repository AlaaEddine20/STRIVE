import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';


const WarningSign = (prop) => {
    return (
    <Alert>
        {prop.text}
    </Alert>
    )
}

export default WarningSign