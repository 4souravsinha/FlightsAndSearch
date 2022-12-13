const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig.js')

const setupAndStartServer = async => {
    app.listen(PORT, () => {
        console.log(`server started at port ${PORT}`);
    })
}
setupAndStartServer();
