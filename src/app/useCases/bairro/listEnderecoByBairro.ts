import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

//Separa os produtos de acordo com suas categorias 
export async function listEnderecoByBairro(req: Request, res: Response) {
	try {
		const {categoryId} = req.params;

		const products = await Endereco.find().where('Bairro').equals(categoryId);

		res.json(products);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}

}