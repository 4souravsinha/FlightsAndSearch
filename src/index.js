const express = require('express');
const { PORT } = require('./config/serverConfig.js')
const bodyParser = require("body-parser");
const apiRoutes = require('./routes/index');

// const db = require('./models/index')
const { City, Airport } = require('./models/index')
const setupAndStartServer = async => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);
    app.listen(PORT, async () => {
        console.log(`server started at port ${PORT}`);
        // db.sequelize.sync({alter: true}); ---> USE THIS TO SYNC DB(DON'T DO IT ALWAYS AS IT DOES A LOT OF OPERATIONS.)

        // const city = await City.findOne({
        //     where: {
        //         id: 23
        //     }
        // });
        // const airports = await city.getAirports();
        // console.log(city , airports);
    })
}
setupAndStartServer();
