const { Sequelize, Model, DataTypes } = require('sequelize');
class User extends Model {}
/**
 * @param {Sequelize} sequelize
 */
export function makeUserModel(sequelize) {
    User.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            username: DataTypes.STRING,
        },
        { sequelize, modelName: 'user', indexes: [{ fields: ['username'] }] }
    );

    let model = {
        findAll: User.findAll,
    };
    return model;
}
