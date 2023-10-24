import React from 'react'

const ListaEstudiantes = [
    {
        id:"1",
        nombre: "José",
        apellido: "Pérez",
        edad: 20,
    },
    {
        id:"2",        
        nombre: "Juan",
        apellido: "Pérez",
        edad: 20,
    },
    {
        id:"3",
        nombre: "Luis",
        apellido: "Pérez",
        edad: 20,
    },
    {
        id:"4",
        nombre: "Cristian",
        apellido: "Pérez",
        edad: 20,
    },
    {
        id:"5",
        nombre: "Fiorella",
        apellido: "Pérez",
        edad: 20,
    },
    {
        id:"6",
        nombre: "Yensy",
        apellido: "Pérez",
        edad: 20,
    },
];
    
    export const listaEstudiantes = () => {
        const listaEstudiantesHTML = listaEstudiantes.map(function (estudiante) {
          return (
            <li>
                {estudiante.id} {estudiante.nombre} {estudiante.apellido} {estudiante.edad}
            </li>

    )
          }
