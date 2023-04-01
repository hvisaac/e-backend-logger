'use strinct';

const logsService = require("../services/logs.service");

class LogsController {

	async all(req, res, next) {
		const response = await logsService.all()
		res.json({ message: response });
		next();
	}

	async create(req, res, next) {
		const response = await logsService.create(req.body)
		res.json({ message: response });
		next();
	}

	async info(req, res, next) {
		const response = await logsService.info(req.params.id)
		res.json({ message: response });
		next();
	}

	async update(req, res, next) {
		const response = await logsService.update(req.params.id, req.body)
		res.json({ message: response });
		next();
	}

	async delete(req, res, next) {
		const response = await logsService.delete(req.params.id)
		res.json({ message: response });
		next();
	}
}

module.exports = new LogsController();
