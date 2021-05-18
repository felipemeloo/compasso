const Client = require("../models/client");

class ClientController {

    async saveClient(req, res) {
        const payloadClient = {
            fullName: req.body.fullName,
            gender: req.body.gender,
            birthDate: req.body.birthDate,
            age: req.body.age,
            cityWhereLive: req.body.cityWhereLive
        }

        const saveClient = await Client.create(payloadClient)
            .then(client => {
                res.status(200).json(client)
            })
            .catch(err => {
                console.log(err)
                return res.status(400).json({message: 'Not was possible save the client. Try again later.', err})
            })
    }

    async findBydIdClient(req, res) {
        const findClient = await Client.findById({_id: req.params.id})
            .then(client => {
                if (!client) res.status(404).json({message: 'Client was not found'})
                res.status(200).json(client)
            })
            .catch(err => {
                res.status(404).json({message: 'Client not found', err})
            })
    }

    async findByNameClient(req, res) {
        const findClient = await Client.findOne({fullName: req.params.fullName})
            .then(client => {
                if (!client) res.status(404).json({message: 'Client was not found'})
                res.status(200).json(client)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({message: 'Error, try again later.', err})
            })
    }

    async deleteClient(req, res) {
        const clientToRemove = await Client.deleteOne({_id: req.params.id})
            .then(clientRemoved => {
                res.status(200).json(clientRemoved)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({message: 'Error, try again later', err})
            })
    }

    async updateClientName(req, res) {
        if (!req.body || !req.body.fullName) {
            res.status(400).json({message: 'Missing fields required'})
        }

        const updateClient = await Client.updateOne({_id: ObjectId(req.body.id), fullName: req.body.fullName})
            .then(client => {
                res.status(200).json(client)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({message: 'Not was possible updated the client, try again.', err})
            })
    }
}

module.exports = new ClientController();