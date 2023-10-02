import {model, Schema } from 'mongoose';

export const Cidade = model('Cidade', new Schema({
	name: {
		type: String,
		required: true,
	},
	},
));