import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

//Amazena os produtos em um json
export async function listEndereco(req: Request, res: Response) {
	try {
		const products = await Endereco.find();

		res.json(products);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}

}