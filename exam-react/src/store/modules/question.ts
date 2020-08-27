import { observable, action } from 'mobx';
import { examGetQuestionsType, examInsertQuestionsType, examDelQuestionsType } from '@/service';
import { QuestionList } from '../../utils/interface';

export default class Question{
    // 获取所有的试题类型
    @observable
    questionList: QuestionList[] = [];


    // 获取所有的试题类型
    @action
    async examGetQuestionsTypeAction() {
        if(this.questionList){
            return;
        }
        let result: any = await examGetQuestionsType();
        if (result.code === 1) {
            this.questionList = result.data;
        }
    }

    // 添加试题类型
    @action
    async examInsertQuestionsTypeAction(questions_type_text: string, questions_type_sort: string) {
        let result: any = await examInsertQuestionsType(questions_type_text, questions_type_sort);
        if(result.code === 1){
            this.examGetQuestionsTypeAction()
        }
        return result;
    }

    // 删除指定的试题类型
    @action
    async examDelQuestionsTypeAction(questions_type_id: string) {
        let result: any = await examDelQuestionsType(questions_type_id);
        if(result.code === 1){
            this.examGetQuestionsTypeAction()
        }
        return result;
    }
}