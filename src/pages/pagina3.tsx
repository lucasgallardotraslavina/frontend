import React, { use, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const pagina3 = () => {
  const [numero1, setN1] = useState ("")
  const [numero2, setN2] = useState ("")
  return (
    <>
    <form>
        <Form.Group>
            <Form.Label>numeor 1</Form.Label>
            <Form.Control 
            type='number' 
            placeholder='ingrese un numero'
            onChange={(e)=>setN1(e.currentTarget.value)}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>numeor 2</Form.Label>
            <Form.Control 
            type='number' 
            placeholder='ingrese un numero'
            onChange={(e)=>setN2(e.currentTarget.value)}
            />
        </Form.Group>
        <Button type='button' variant = "success">registrar</Button>
        <Form.Control 
            type='number' 
            placeholder = "resultado"
            onChange={(e)=>setN1(e.currentTarget.value)}
            />
    </form>
    </>
  )
}

export default pagina3