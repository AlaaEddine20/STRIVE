import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';

const MyBadge = ({text, color}) => {

    
    return (
        <Badge>
            <h3 style={color.color}>
               {text.text}
            </h3>
        </Badge>
    )
}

export default MyBadge