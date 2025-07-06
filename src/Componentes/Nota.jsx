import '../app.css';

export function Nota({ nota, cambiarEstadoNota, eliminarNota }) {
  const { id, texto, categoria, prioridad, estado } = nota;
  let claseNota = '';
  let claseTitulo = 'titulo-normal';

  if (estado === 'Pendiente') {
    claseNota = 'nota-pendiente';
    claseTitulo = 'titulo-normal';
  } else if (estado === 'En Proceso') {
    claseNota = 'nota-proceso';
    claseTitulo = 'titulo-normal';
  } else if (estado === 'Finalizado') {
    claseNota = 'nota-finalizado';
    claseTitulo = 'titulo-finalizado';
  }

  return (
    <div className={`Nota ${claseNota}`}>
      <div className="NotaYEstado">
        <h3 className={claseTitulo}>{texto}</h3>
        <p>Categoría: {categoria} | Prioridad: {prioridad} | Estado: {estado} </p>
      </div>
        <div className="Estado">
          <button onClick={() => cambiarEstadoNota(id, 'Pendiente')}>Pendiente</button>
          <button onClick={() => cambiarEstadoNota(id, 'En Proceso')}>En Proceso</button>
          <button onClick={() => cambiarEstadoNota(id, 'Finalizado')}>Finalizado</button>
          <button className='Eliminar' onClick={() => eliminarNota(id)}>Eliminar</button>
        </div>

    </div>
  );
}
