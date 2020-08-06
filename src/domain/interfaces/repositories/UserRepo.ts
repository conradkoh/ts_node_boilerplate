import { User } from '../../entities/User';

export interface IUserRepo {
  createUser: (firstName: string, lastName: string, email: string) => Promise<User>;
}
