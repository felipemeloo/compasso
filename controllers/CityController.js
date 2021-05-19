const City = require("../models/city");

class CityController {

    async saveCity(req, res) {
        const payloadCity = {
            name: req.body.name,
            state: req.body.state
        }

        await City.create(payloadCity)
            .then(city => {
                res.status(200).json(city)
            })
            .catch(err => {
                console.log(err)
                return res.status(400).json({message: 'Not was possible save the city. Try again later.', err})
            })
    }

    async findByCity(req, res) {
        await City.findOne({name: req.params.city})
            .then(city => {
                if (!city) res.status(404).json({message: 'City was not found'})
                res.status(200).json(city)
            })
            .catch(err => {
                res.status(400).json({message: 'Error trying find the city, try again later', err})
            })
    }

    async findByStateCity(req, res) {
        await City.findOne({state: req.params.state})
            .then(city => {
                if (!city) res.status(404).json({message: 'City was not found'})
                res.status(200).json(city)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({message: 'Error, try again later.', err})
            })
    }
}

module.exports = new CityController();