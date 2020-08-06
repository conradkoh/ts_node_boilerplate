import { IUserRepo } from '../../domain/interfaces/repositories/UserRepo';
import createUser from '../../domain/usecases/create-user';

interface UserControllerProps {
  userRepo: IUserRepo;
}
export function makeUserController(props: UserControllerProps) {
  const { userRepo } = props;
  return {
    createUser: async (firstName: string, lastName: string, email: string) => {
      let user = await createUser(userRepo)(firstName, lastName, email);
      return user;
    },
  };
}
