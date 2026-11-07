const dns = require('node:dns');
dns.setServers(['8.8.8.8']);

const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);

        console.log('base de datos conectada a mongoDB atlas exitosamente');
    }catch (error){
        console.log(error);
        throw new Error('error a la hora de inicializar base de datos');
    }
};

module.exports = {
    dbConnection
}