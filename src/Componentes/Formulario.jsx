import { useState } from 'preact/hooks';

export function Formulario({ guardarNota }) {
    const [prioridad, setPrioridad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [texto, setTexto] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!prioridad || !categoria || !texto.trim()) {
        alert('Por favor, completá todos los campos');
        return;
    }

    guardarNota({ prioridad, categoria, texto });

    // Limpiar formulario
    setPrioridad('');
    setCategoria('');
    setTexto('');
};

return (
    <form onSubmit={handleSubmit}>
        <fieldset>
        <legend>Prioridad:</legend>
        <label>
        <input
            type="radio"
            name="prioridad"
            value="Baja"
            checked={prioridad === 'Baja'}
            onChange={(e) => setPrioridad(e.target.value)}
        />
        Baja
        </label>
        <label>
        <input
            type="radio"
            name="prioridad"
            value="Media"
            checked={prioridad === 'Media'}
            onChange={(e) => setPrioridad(e.target.value)}
        />
        Media
        </label>
        <label>
        <input
            type="radio"
            name="prioridad"
            value="Alta"
            checked={prioridad === 'Alta'}
            onChange={(e) => setPrioridad(e.target.value)}
        />
        Alta
        </label>
    </fieldset>

    <label>
        Categoría:
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Seleccioná una opción</option>
        <option value="Colegio">Colegio</option>
        <option value="Vida Personal">Vida Personal</option>
        <option value="Trabajo">Trabajo</option>
        <option value="Compras">Compras</option>
        <option value="Hogar">Hogar</option>
        </select>
    </label>

    <input
        type="text"
        placeholder="Ingrese una nota"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
    />

    <button type="submit">Guardar</button>
    </form>
);
}

