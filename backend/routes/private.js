import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.get('/listar-usuarios', async (req, res) => {
	try {
		const users = await prisma.user.findMany({
			include: {
				password: false,
			},
		})

		res.status(200).json({ message: 'Usuários listados com sucesso', users })

	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Falha no servidor' })
	}
})

export default router