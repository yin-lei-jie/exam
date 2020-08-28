import User from './modules/user';
import Consumer from './modules/consumer';
import Grade from './modules/grade';
import Question from './modules/question';
import Util  from './modules/utils';
import Lang from './modules/lang';

export default {
    user: new User(),
    consumer: new Consumer(),
    grade: new Grade(),
    question: new Question(),
    util: new Util(),
    lang: new Lang()
}