import { Model, DataTypes } from'sequelize';
import db from '../../config/database';

class UserDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.UUID,
                    primaryKey: true,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4
                },
                firstname: DataTypes.STRING,
                lastname: DataTypes.STRING,
                phone: DataTypes.INTEGER,
                
                email: {
                    type: DataTypes.STRING,
                },
                
                password: DataTypes.STRING,
             
            },
            { sequelize, modelName: 'UserDao' }
        );
    }
    static associate(models) {
        return this;
    }
}
UserDao.init(db.sequelize);

export default  UserDao;



