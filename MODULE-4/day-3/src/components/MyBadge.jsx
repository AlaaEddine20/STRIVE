import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';

const MyBadge = (props) => {

    
    return (
        <Badge>
            <h3 style={props.style}>
               {props.text}
            </h3>
        </Badge>
    )
}

export default MyBadge