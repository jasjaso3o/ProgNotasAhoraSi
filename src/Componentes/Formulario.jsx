import { useState } from 'react';
import '../app.css';

export function Formulario({ guardarNota }) {
	const [prioridad, setPrioridad] = useState('');
	const [categoria, setCategoria] = useState('Colegio');
	const [texto, setTexto] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!prioridad || !texto.trim()) {
			alert('Por favor, completá todos los campos');
			return;
		}

		guardarNota({ prioridad, categoria, texto });

		setPrioridad('');
		setCategoria('Colegio');
		setTexto('');
	};

	return (
		<div className="Panel">
			<form  className='Formulario' onSubmit={handleSubmit}>
				<div className='Prioridad'>

					<span>Prioridad:</span>
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
				</div>

			<label>
				Categoría:
				<select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
				<option value="Colegio">Colegio</option>
				<option value="Vida Personal">Vida Personal</option>
				<option value="Trabajo">Trabajo</option>
				<option value="Compras">Compras</option>
				<option value="Hogar">Hogar</option>
				</select>
			</label>


			<div className='InputNota'>
				<input
					type="text"
					placeholder="Ingrese una nota"
					value={texto}
					onChange={(e) => setTexto(e.target.value)}
				/>
			</div>
			<button className='Guardar' type="submit">Guardar</button>
			</form>
		</div>
	);
}

