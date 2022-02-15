import Sequelize from "sequelize";
import config from './env';



const sequelize = new Sequelize( config.db_name, config.db_user, config.db_password,
    {
        host: config.db_port,
        dialect: "mysql"
    });
    
    const associateAll = async (models) => {
        await Object.values(models).map((model) => model.associate(models));
    };
    const db = { sequelize, associateAll, Sequelize };
//     try {
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

// global.sequelize = sequelize;

export default db;