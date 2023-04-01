'use strinct';

const authorizationService = require("../services/authorization.service");

class AuthorizationController {

	async all(req, res, next) {
		const response = await authorizationService.all()
		res.json({ message: response });
		next();
	}

	async create(req, res, next) {
		const response = await authorizationService.create(req.body)
		res.json({ message: response });
		next();
	}

	async info(req, res, next) {
		const response = await authorizationService.info(req.params.id)
		res.json({ message: response });
		next();
	}

	async update(req, res, next) {
		const response = await authorizationService.update(req.params.id, req.body)
		res.json({ message: response });
		next();
	}

	async delete(req, res, next) {
		const response = await authorizationService.delete(req.params.id)
		res.json({ message: response });
		next();
	}
}

module.exports = new AuthorizationController();
