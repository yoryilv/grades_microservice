const mongoose = require('mongoose');

// Reemplaza 'your-elastic-ip' y 'your-db-name' con tu IP elástica y el nombre de tu base de datos
const uri = 'mongodb://your-elastic-ip:27017/your-db-name';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexión a MongoDB exitosa');
    })
    .catch((error) => {
        console.error('Error de conexión a MongoDB:', error);
    });
