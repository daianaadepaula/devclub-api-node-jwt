import { useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
import api from '../../services/api'

function Login() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const navigate = useNavigate()

	async function handleSubmit(event) {
		event.preventDefault()

		try {
			const { data: token } = await api.post('/login', {
				email: emailRef.current.value,
				password: passwordRef.current.value
			})

			localStorage.setItem('token', token)
			navigate('/listar-usuarios')
		} catch (error) {
			console.log(error);
			alert('Senha ou Email incorretos!')
		}
	}

	return (
		<div className="max-w-md mx-auto mt-10 bg-white p-8 border-gray-300 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
			<form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
				<input placeholder="Email" type="email" className="register-input" ref={emailRef} />
				<input placeholder="Senha" type="password" className="register-input" ref={passwordRef} />
				<button className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-200 hover:text-zinc-900">Login</button>
			</form>

			<Link to="/" className="text-blue-700 hover:underline mt-4 block text-center">Não tem uma conta? Cadastre-se</Link>
		</div>
	);
}

export default Login;