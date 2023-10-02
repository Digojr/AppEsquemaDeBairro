import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';

//cria as categorias, caso esteja tudo certo retorna 201, caso haja algum erro retorna 500
export async function createBairro(req: Request, res: Response) {
	try {
		//res.send('Ok post category');
		const {name} = req.body;
		const category = await Bairro.create({name});
		res.status(201).json(category);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}