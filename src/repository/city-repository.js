const { City } = require('../models/index')


class CityRepository {

    async createCity({ CityName }) {

        try {
            await City.create({
                name: CityName
            });
        } catch (error) {
            throw error;
        }
    }

    async deleteCity(CityId) {

        try {
            await City.destroy({
                where: {
                    id: CityId
                }
            });
        } catch (error) {
            throw error;
        }


    }
}

module.exports = CityRepository;
