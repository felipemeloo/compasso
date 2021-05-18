const City = require("../models/city");
const Descending_Mode = -1;

class CityController {
    async store(req, res) {
        const box = await City.create({ title: req.body.title })

        return res.json(box);
    }

    async show(req,res){
        const box = await City.findById(req.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: Descending_Mode}}
        });

        return res.json(box);
    }
}

module.exports = new CityController();