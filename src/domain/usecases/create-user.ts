import { IUserRepo } from '../interfaces/repositories/UserRepo';
import { User } from '../entities/User';

export default (userRepo: IUserRepo) => {
  return async (firstName: string, lastName: string, email: string) => {
    return await userRepo.createUser(firstName, lastName, email);
  };
};
