const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareDateTime } = require('../utils/helper')
class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            if (!compareDateTime(data.arrivalTime, data.departureTime)) {
                throw { error: "arrival time can't be less than departure time" };
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("problem in flight service layer");
            throw { error };
        }
    }
}

module.exports = FlightService;
