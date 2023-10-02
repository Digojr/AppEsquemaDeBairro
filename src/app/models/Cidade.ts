import {model, Schema } from 'mongoose';

export const Cidade = model('Cidade', new Schema({
	name: {
		type: String,
		required: true,
	},
	enderecos: {
		required: true,
		type:[{
			endereco: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'Enderoço',
			},
			quantity: {
				type: Number,
				default: 1,
			},
		}],
	},
}));