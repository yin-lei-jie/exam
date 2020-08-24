import User from './modules/user';
import Consumer from './modules/consumer';
import Grade from './modules/grade';
import Util  from './modules/utils';

export default {
    user: new User(),
    consumer: new Consumer(),
    grade: new Grade(),
    util: new Util()
}