const { City } = require('../models/index')


class CityRepository {

    async createCity({ name }) { //destructuring object using {}

        try {
            const city = await City.create({
                name: name
            });
            return city;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }

    }

    async updateCity(cityId, { name }) {

        try {
            const city = await City.update({ name: name }, {
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


    async getAllCities() {
        try {
            const city = await City.findAll();
            return city;
        } catch (err) {
            console.log("something went wrong in repository layer");
            throw { err };
        }
    }
}

module.exports = CityRepository;
