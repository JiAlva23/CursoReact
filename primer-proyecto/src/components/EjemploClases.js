import React, { Component } from "react";

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

export class EjemploClases extends Component {
  // 1
  constructor(props) {
    super(props);

    this.state = {
      nombre: "Luis",
      apellido: "Cascante",
    };
  }

  // 2
render() {
    return (
      <div>
        <p>
          Hola mi nombre es {this.state.nombre} {this.state.apellido}
        </p>
      </div>
    );
  }

  // 3
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        nombre: "Alonzo",
      });
    }, 5000);
  }
}
