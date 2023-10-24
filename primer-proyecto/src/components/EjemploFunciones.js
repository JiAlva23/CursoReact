const arregloEstudiantes = [
    {
      id: 1,
      nombre: "Luis",
      apellido: "Cascante",
      nota: 100,
    },
    {
      id: 2,
      nombre: "Juan",
      apellido: "Perez",
      nota: 80,
    },
  ];
  
  export function EjemploFunciones(props) {
    const nombre = "Luis";
    const apellido = "Cascan";
    return (
      <div>
        <p>
          Hola mi nombre es {nombre} {apellido}
        </p>
      </div>
    );
  }