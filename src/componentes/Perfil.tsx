import React from 'react'
import { Permiso } from './Permiso'

interface Props{
    nombre:string,
    apellido:string,
    edad?:number
}
export const Perfil = (props:Props) => {
  return (
    <>
      <h1>hola</h1>
      <p>nombre: {props.nombre}</p>
      <p>apellido: {props.apellido}</p>
      <p>edad: {props.edad}</p>
      {
        props.edad != undefined &&
        props.edad > 18 &&
        <>
        <p>Tienes permitido</p>
        <Permiso permiso1='Beber' permiso2='fumar'></Permiso>
        </>
      }
      {
        props.edad != undefined &&
        props.edad < 18 &&
        <>
        <p>Tienes permitido</p>
        <Permiso permiso1='jugar' permiso2='divertirse'></Permiso>
        </>
      }
    </>
  )
}

