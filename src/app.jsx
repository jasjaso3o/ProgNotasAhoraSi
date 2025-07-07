import { useState } from 'react'
import { Formulario } from './Componentes/Formulario'
import { ListaNotas } from './Componentes/ListaNotas'
import { Filtrar } from './Componentes/Filtrar'
import './app.css'


function App() {
  const [notas, setNotas] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');
  const [id, setId] = useState(0);

  const ordenPrioridad = { Alta: 1, Media: 2, Baja: 3 };

  const guardarNota = (nuevaNota) => {
    const notaConEstado = { ...nuevaNota, estado: 'Pendiente', id: id};
    setNotas([...notas, notaConEstado]);
    setId(id+1);
    console.log('Nota guardada:', notaConEstado);
  };

  const cambiarEstadoNota = (id, nuevoEstado) => {
    setNotas(notas.map(nota =>
      nota.id === id ? { ...nota, estado: nuevoEstado } : nota
    ));
    const notaActualizada = notas.find(nota => nota.id === id);
    console.log('Nuevo Estado:', notaActualizada);
  };
  
  const eliminarNota = (id) => {
    setNotas(notas.filter(nota => nota.id !== id));
  };

  const notasFiltradas = (filtroCategoria === 'Todas'
  ? notas
  : notas.filter(nota => nota.categoria === filtroCategoria)
  ).slice().sort((a, b) => {
    if (a.estado === 'Finalizado' && b.estado !== 'Finalizado') return 1;
    if (a.estado !== 'Finalizado' && b.estado === 'Finalizado') return -1;
    return ordenPrioridad[a.prioridad] - ordenPrioridad[b.prioridad];
  });

  return (
    <div className='App'>
      <div className='Panel'>
        <h2>To-do List</h2>
        <Formulario guardarNota={guardarNota} 
        />
      </div>
      <div className='Panel'>
        <ListaNotas
          notas={notasFiltradas}
          cambiarEstadoNota={cambiarEstadoNota}
          eliminarNota={eliminarNota}
          setFiltroCategoria={setFiltroCategoria}
        />

      </div>
    </div>

  );
}

export default App
