import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

export async function createCity(req: Request, res: Response) {// Controlador para criar um novo pedido
	try {
		const {table, products} = req.body;//pega informações da tabela de produtos

		const order = await Cidade.create({ table, products });//crria um novo pedido
		res.status(201).json(order);//retorna 201 
	} catch (error) {//caso haja erro retorna 500
		console.log(error);
		res.sendStatus(500);
	}
}