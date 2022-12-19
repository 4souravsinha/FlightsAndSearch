const { Flight } = require('../models/index')
// const { Op } = require('sequelize')

class FlightRepository {

    async createFlight(data) { //destructuring object using {}

        try {
            // console.log(name);
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }
    }
}

module.exports = FlightRepository;



