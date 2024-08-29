import { useRef } from 'react'
import { Link } from "react-router-dom";
import api from '../../services/api'

function Cadastro() {
	const nameRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()

	async function handleSubmit(event) {
		event.preventDefault()

		try {
			await api.post('/cadastro', {
				name: nameRef.current.value,
				email: emailRef.current.value,
				password: passwordRef.current.value
			})
			alert('Usuário Cadastrado com Sucesso!')
		} catch (error) {
			alert('Erro ao cadastrar usuário!')
		}
	}

	return (
		<div className="max-w-md mx-auto mt-10 bg-white p-8 border-gray-300 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
			<form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
				<input placeholder="Nome" type="text" className="register-input" ref={nameRef} />
				<input placeholder="Email" type="email" className="register-input" ref={emailRef} />
				<input placeholder="Senha" type="password" className="register-input" ref={passwordRef} />
				<button className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-200 hover:text-zinc-900">Cadastrar</button>
			</form>

			<Link to="/login" className="text-blue-700 hover:underline mt-4 block text-center">Já tem uma conta? Faça login</Link>
		</div>
	);
}

export default Cadastro;