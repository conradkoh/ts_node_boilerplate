import { Sequelize, Model, DataTypes } from 'sequelize/types';
class User extends Model {}
export function makeUserModel(sequelize: Sequelize) {
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      deleted: DataTypes.BOOLEAN,
    },
    { sequelize, modelName: 'user', indexes: [{ fields: ['username'] }] }
  );

  let model = {
    findAll: User.findAll,
  };
  return model;
}
