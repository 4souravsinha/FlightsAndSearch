const { CityService } = require('../services/index')

const cityService = new CityService();

//POST
const create = async (req, res) => {

    try {
        const city = await cityService.createCity(req.body);
        res.status(201).json({
            data: city,
            success: true,
            message: " City created successfully ",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: " Not able to create city ",
            error: error
        });
    }
}

//DELETE -
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        res.status(201).json({
            deleted: response,
            message: "successfully deleted a city",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            deleted: response,
            message: "unable to delete city",
            error: error
        })
    }
}

//Patch - data will be recieved from req.body
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        res.status(201).json({
            data: city,
            success: true,
            message: "Succesefully updated the city",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Unable to update city",
            error: error
        })
    }
}


//Get request
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        res.status(201).json({
            data: city,
            success: true,
            message: "Succesefully fetched the city",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Unable to get city",
            error: error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}
