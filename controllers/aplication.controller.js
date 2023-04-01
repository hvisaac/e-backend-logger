'use strinct';

const aplicationService = require("../services/aplication.service");

class AplicationController {

	async all(req, res, next) {
		const response = await aplicationService.all()
		res.json({ message: response });
		next();
	}

	async create(req, res, next) {
		const response = await aplicationService.create(req.body)
		res.json({ message: response });
		next();
	}

	async info(req, res, next) {
		const response = await aplicationService.info(req.params.id)
		res.json({ message: response });
		next();
	}

	async update(req, res, next) {
		const response = await aplicationService.update(req.params.id, req.body)
		res.json({ message: response });
		next();
	}

	async delete(req, res, next) {
		const response = await aplicationService.delete(req.params.id)
		res.json({ message: response });
		next();
	}
}

module.exports = new AplicationController();
