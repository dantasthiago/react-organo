import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {

	 

	return (
		<div className='listasuspensa'>
			<label>{props.label}</label>
			<select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} required={props.obrigatorio}>
				{props.itens.map((item) => (
					<option key={item}>{item}</option>
				))}
			</select>
		</div>
	);
};
export default ListaSuspensa;
