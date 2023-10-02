import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';

//armazena as categorias criadas no json
export async function listBairro(req: Request, res: Response) {
	try {
		const categories = await Bairro.find();

		res.json(categories);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}