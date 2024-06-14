import React from 'react'
import {Form, Button} from 'react-bootstrap';

const Reviewform = ({handleSubmit,revText,lableText,defaultValue}) => {
  return (
    <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>{lableText}</Form.Label>
        <Form.Control as='textarea' rows={3} defaultValue={defaultValue}/>


        

        
    </Form.Group>
    <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
    
    

  )
}

export default Reviewform