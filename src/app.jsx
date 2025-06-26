import { useState } from 'react'
import { Formulario } from './Componentes/Formulario'
import { ListaNotas } from './Componentes/ListaNotas'
import { Filtrar } from './Componentes/Filtrar'
import "./index.css"

export function App() {
  const [notas, setNotas] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');


  const guardarNota = (nuevaNota) => {
    const notaConEstado = { ...nuevaNota, estado: 'Pendiente', id: crypto.randomUUID() };
    setNotas([...notas, notaConEstado]);
  };

  const cambiarEstadoNota = (id, nuevoEstado) => {
    setNotas(notas.map(nota =>
      nota.id === id ? { ...nota, estado: nuevoEstado } : nota
    ));
    // const actualizadas = notas.map(nota =>
    //   nota.id === id ? { ...nota, estado: nuevoEstado } : nota
    // );
    // setNotas(actualizadas);
  };

  const eliminarNota = (id) => {
    setNotas(notas.filter(nota => nota.id !== id));
    //const filtradas = notas.filter(nota => nota.id !== id);
    //setNotas(filtradas);
  };

  const notasFiltradas = filtroCategoria === 'Todas'
    ? notas
    : notas.filter(nota => nota.categoria === filtroCategoria);


  return (
    <>
      <h2>To-do List</h2>
      <Formulario guardarNota={guardarNota} />
      <Filtrar setFiltroCategoria={setFiltroCategoria} />
      <ListaNotas
        notas={notasFiltradas}
        cambiarEstadoNota={cambiarEstadoNota}
        eliminarNota={eliminarNota}
      />
    </>
  );
}