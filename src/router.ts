import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { listBairro } from './app/useCases/bairro/listBairro';
import { createBairro } from './app/useCases/bairro/createBairro';
import { listEndereco } from './app/useCases/endereco/listEndereco';
import { createEndereco } from './app/useCases/endereco/createEndereco';
import { listEnderecoByBairro } from './app/useCases/bairro/listEnderecoByBairro';
import { listCity } from './app/useCases/cidade/listCity';
import { createCity } from './app/useCases/cidade/createCity';
import { changeCityStatus } from './app/useCases/cidade/changeCityStatus';
export const router = Router();

//configuração do multer
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback){
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback){
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	})

});

//List categories
router.get('/bairro', listBairro);

//Create category
router.post('/bairro', createBairro);

//List products
router.get('/endereco', listEndereco);

//Create products
router.post('/endereco', createEndereco);

//Get products by category
router.get('/bairro/:categoryId/products', listEnderecoByBairro);

//List orders
router.get('/cidade', listCity);

//Create orders
router.post('/cidade', createCity);

//Change orders status/ patch e nao put por ser uma alteração parcial
router.patch('/cidade/:orderId', changeCityStatus);

