import "./Formulario.css";
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botão';
const Formulario = () => {

	const times = [
		'Programação',
		'Front-End',
		'Data Sciente',
		'DevOps',
		'Ux e Design',
		'Mobile',
		'Inovação e Gestão'
	]

	const aoSalvar = (evento) => {
		evento.preventDefault();
		console.log('form foi submetido');
	}

	return (
		<section className='formulario'>
			<form onSubmit={aoSalvar}>
        <h2>Preencha os dados para cirar o card do colaborador</h2>
				<CampoTexto obrigatorio label='Nome' placeholder='Digite sei nome' />
				<CampoTexto obrigatorio label='Cargo' placeholder='Digite seu cargo' />
				<CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
				<ListaSuspensa obrigatorio label='Time' itens={times}/>
				<Botao>
					Criar card
				</Botao>
			</form>
		</section>
	);
};
export default Formulario;
