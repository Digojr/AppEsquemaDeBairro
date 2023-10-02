import {model, Schema } from 'mongoose';

export const Cidade = model('Cidade', new Schema({
	nome: {
		type: String,
		required: true,
	},
	// status: {
	// 	type: String,
	// 	enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
	// 	default: 'WAITING',
	// },
	creatdAt: {
		type: Date,
		default: Date.now,
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