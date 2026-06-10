import express from 'express';
import { sequelize } from './db/conexion.js';
import EquipoRouter from './router/EquipoRouter.js';
import { Equipo } from './model/EquipoModel.js'
const app = express();
const port = 3000;
app.use(express.json());
app.use('/api',EquipoRouter);

const main = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force:false});
        console.log('Conexión establecida correctamente.');

        app.listen(port, () => {
            console.log(`Servidor corriendo en el puerto  de ${port}`);
        });
    } catch (error) {
        console.error(`Error de conexión: ${error}`);
    }
};
main();