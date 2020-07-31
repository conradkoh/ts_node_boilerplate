import models from '../models';
import { makeUserController } from './user';
const user = makeUserController({ models, services: null });
export default {
    user,
};
