import TestService from "../services/TestService"

module.exports.delete = async (req, res) => {
  let response = await TestService.delete(req, res);
  if (response.error) return res.status(response.statusCode).send(response);
  return res.status(201).send(response);
}

module.exports.update = async (req, res) => {
  let response = await TestService.update(req, res);
  if (response.error) return res.status(response.statusCode).send(response);
  return res.status(201).send(response);
}

module.exports.findOne = async (req, res) => {
  let response = await TestService.findOne(req, res);
  if (response.error) return res.status(response.statusCode).send(response);
  return res.status(201).send(response);
}

module.exports.findAll = async (req, res) => {
  let response = await TestService.findAll(req, res);
  if (response.error) return res.status(response.statusCode).send(response);
  return res.status(201).send(response);
}

module.exports.create = async (req, res) => {
  let response = await TestService.create(req, res);
  if (response.error) return res.status(response.statusCode).send(response);
  return res.status(201).send(response);
}