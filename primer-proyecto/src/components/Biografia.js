import React from "react";

// Crear un componente que muestre su nombre y alguna biografía usando una variable.

const soy = {
    Nombre: "Jimmy",
    Apellido1: " Alvarez",
    Apellido2: " Espinoza",
    FecNac:"08/08/82",
    Telefono:"#8824-1244",
};

export const Biografía = () => {
    return (
    <> 
    
    <p>{soy.Nombre}</p>
    <p>{soy.Apellido1}</p>
    <p>{soy.Apellido2}</p>
    <p>{soy.FecNac}</p>
    <p>{soy.Telefono}</p>
    </>

    )   
};