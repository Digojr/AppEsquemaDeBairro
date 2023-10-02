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
		required: true,
		type:[{
			bairro: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'Bairro',
			},
		}],
	},
	cidade: {
		required: true,
		type:[{
			cidade: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'Cidade',
			},
		}],
	},
}));