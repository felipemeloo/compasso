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

        await Client.create(payloadClient)
            .then(client => {
                res.status(200).json(client)
            })
            .catch(err => {
                console.log(err)
                return res.status(400).json({message: 'Not was possible save the client. Try again later.', err})
            })
    }

    async findBydIdClient(req, res) {
        await Client.findById({_id: req.params.id})
            .then(client => {
                if (!client) res.status(404).json({message: 'Client was not found'})
                res.status(200).json(client)
            })
            .catch(err => {
                res.status(404).json({message: 'Client not found', err})
            })
    }

    async findByNameClient(req, res) {
        await Client.findOne({fullName: {$regex: `${req.params.name}`}})
            .then(client => {
                if (!client) throw ({message: 'Client was not found', statusCode: 404})
                res.status(200).json(client)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({message: 'Error, try again later.', err})
            })
    }

    async deleteClient(req, res) {
        await Client.deleteOne({_id: req.params.id})
            .then(clientRemoved => {
                clientRemoved.n == 1 && clientRemoved.ok == 1 ? res.status(200).json({message: "Client deleted"}) :
                    res.status(400).json({message: "Error trying delete the client"})
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({message: 'Error, try again later', err})
            })
    }

    async updateClientName(req, res) {

        if (!req.body || !req.body.fullName || !req.params.id) {
            res.status(400).json({message: 'Missing fields required'})
        }

        await Client.updateOne({_id: req.params.id}, {$set: {fullName: req.body.fullName}})
            .then(client => {
                client.n == 1 && client.ok == 1 ? res.status(200).json({message: "Client updated"}) :
                    res.status(400).json({message: "Error trying updated the client"})
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({message: 'Not was possible updated the client, try again.', err})
            })
    }
}

module.exports = new ClientController();