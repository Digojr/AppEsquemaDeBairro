import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

export async function listCity(req: Request, res: Response) {// Controlador para listar todos os pedidos
	try {
		const orders = await Cidade.find()// Encontra todos os pedidos, ordenando-os pela data de criação
			.sort({creatAt: 1})
			.populate('products.product');

		res.json(orders);//retorna os pedidos encontrados
	} catch (error) {//se ouver algum erro retorna 500
		console.log(error);
		res.sendStatus(500);
	}

}