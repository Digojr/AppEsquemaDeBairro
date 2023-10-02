import {model, Schema } from 'mongoose';

export const Bairro = model('Bairro', new Schema({
	name: {
		type: String,
		required: true,
	},

}));