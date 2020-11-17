import React from 'react'
import { Card } from 'react-bootstrap'



const myFooter = () => {

return (
    <Card className="ext-white" style={{ height: 130, backgroundColor: '#3f7cac'}}>
        
        <Card.ImgOverlay>
          <Card.Title>Footer</Card.Title>
           <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
            
        </Card.ImgOverlay>
    </Card>
)
}

export default myFooter