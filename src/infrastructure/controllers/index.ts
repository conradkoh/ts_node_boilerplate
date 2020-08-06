import models from '../models';
import { makeUserController } from './user';
import repositories from '../repository';
const user = makeUserController({ userRepo: repositories.user });
export default {
  user,
};
