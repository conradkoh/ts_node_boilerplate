const { Sequelize, Model, DataTypes } = require('sequelize');
class User extends Model {}
/**
 * @param {Sequelize} sequelize
 */
export function makeUserModel(sequelize) {
    User.init(
        {
            first_name: DataTypes.STRING,
            username: DataTypes.STRING,
            // birthday: DataTypes.DATE,
        },
        { sequelize, modelName: 'user' }
    );

    (async () => {
        await sequelize.sync();
        // const users = await User.findAll({ where: {} });
        // console.log(users);
    })();

    let model = {
        findAll: User.findAll,
    };
    return model;
}
