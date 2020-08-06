import { IUserRepo } from '../../domain/interfaces/repositories/UserRepo';
import { User } from '../../domain/entities/User';
export class UserRepository implements IUserRepo {
  async createUser(firstName: string, lastName: string, email: string): Promise<User> {
    return {
      userId: 'database-generated-id',
      firstName,
      lastName,
      email,
    };
  }
}
