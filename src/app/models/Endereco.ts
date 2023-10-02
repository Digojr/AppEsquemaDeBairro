import {model, Schema } from 'mongoose';

export const Endereco = model('Endereço', new Schema({
	name: {
		type: String,
		required: true,
	},
	numero: {
		type: Number,
		required: true,
	},
	complemento: {
		type: String,
		required: false,
	},
	bairro: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Bairro',
	},
	cidade: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Cidade',
	},
}));