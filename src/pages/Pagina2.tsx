import React, { use, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Pagina2 = () => {
  const [nombre, setNombre] = useState ("lucas")
  const [apellido, setApellido] = useState ("gallardo")
  const [eNombre,setENombre] = useState("")
  const validarnombre = (valor:string)=>{
    if(valor.length<4){
      setENombre("debes ingresar 4 caracteres")
    }else{
    setENombre("")
    }
    setNombre(valor)
  }
  return (
    <>
      <h1>Registro</h1>
      <h2>Bienvenido {nombre} {apellido}</h2>
      <form>
        <Form.Group>
            <Form.Label>nombre</Form.Label>
            <Form.Control 
            type='text' 
            placeholder='ingrese sun nombre'
            onChange={(e)=>validarnombre(e.currentTarget.value)}
            />
            <Form.Text>
              {eNombre}
            </Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>apellido</Form.Label>
            <Form.Control 
            type='text' 
            placeholder='ingrese su apellido'
            onChange={(e)=>setApellido(e.currentTarget.value)}
            />
        </Form.Group>
        <Button type='button' variant = "success">registrar</Button>
      </form>
    </>
  )
}

export default Pagina2
