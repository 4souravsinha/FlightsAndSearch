const { City } = require('../models/index')


class CityRepository {

    async createCity({ CityName }) {

        try {
            const city = await City.create({
                name: CityName
            });
            return city;
        } catch (error) {
            console.log("something went wrong in repository layer");
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
            return true;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }

    }

    async updateCity(cityId, data) {

        try {
            const city = await City.update({ data }, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (err) {
            console.log("something went wrong in repository layer");
            throw { err };
        }
    }

    async getCity(cityId) {

        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (err) {
            console.log("something went wrong in repository layer");
            throw { err };
        }

    }
}

module.exports = CityRepository;
