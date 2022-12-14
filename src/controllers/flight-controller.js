const { FlightService } = require('../services/index')

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        res.status(201).json({
            data: flight,
            success: true,
            message: "flight created successfully",
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "flight creation failed",
            err: error
        })
    }

};

module.exports = {
    create
}
