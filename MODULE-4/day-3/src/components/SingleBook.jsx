import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col } from 'react-bootstrap';


const SingleBook = (props) => {

    return (
   
        <Col>
         <Card style={{ width: 300, height: 400, marginBottom: '1rem', backgroundColor: 'orange' }}>
           <Card.Title style={{ fontSize: '1rem' }}>
               {props.data.title}
           </Card.Title>
           <Card.Img className="mx-auto my-auto" 
           src={props.data.img} 
           style={{ width: 200, height: 330, objectFit: 'cover' }}
           />
         </Card>
        </Col>
             
    )
}
    


export default SingleBook