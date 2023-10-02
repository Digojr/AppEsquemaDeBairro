import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';
import { Bairro } from '../../models/Bairro';
import { Cidade } from '../../models/Cidade';

//é responsavel por criar novos produtos, caso o modo de criação esteja correto retor 201,
//caso haja algum erro retorna 500 
export async function createEndereco(req: Request, res: Response) {
	try {
		const { name, numero, complemento, bairro, cidade } = req.body;//pega as informações solicitadas

		const product = await Endereco.create({//cria um produto novo com as imformações fornecidas
			name,
			numero: Number(numero),
			complemento,
			bairro:bairro ? JSON.parse(bairro): [],
			cidade:cidade ? JSON.parse(cidade): [],
		});

		res.status(201).json(product);//se caso for registrado com sucesso retorna 201
	} catch (error) {//se ouver erro retorna 500
		console.log(error);
		res.sendStatus(500);
	}
}