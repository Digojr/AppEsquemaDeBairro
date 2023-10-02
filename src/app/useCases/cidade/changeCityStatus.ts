import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

// Controlador para alterar o status de um pedido
export async function changeCityStatus(req: Request, res: Response) {
	try {
		const { orderId } = req.params;//pega o id do pedido
		const { status } = req.body;// pega o novo status do corpo da solicitação

		if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){//verifica se o pedido é valido
			return res.status(400).json({//se não for valido retorna 400 
				error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
			});
		}
		await Cidade.findByIdAndUpdate(orderId, { status });//atualiza os status do pedido de acordo com id
		res.sendStatus(204);//se for alterado com sucesso retorna 204
	} catch (error) {//se ocora um erro inesperado retorna 500
		console.log(error);
		res.sendStatus(500);
	}
}