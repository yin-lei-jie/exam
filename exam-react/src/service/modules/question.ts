import request from '@/utils/request';

// 获取所有的试题类型
export const examGetQuestionsType = () => {
    return request.get('/exam/getQuestionsType')
}

// 添加试题类型
export const examInsertQuestionsType = (questions_type_text: string, questions_type_sort: string) => {
    return request.put('/exam/insertQuestionsType', {params: {questions_type_text, questions_type_sort}})
}

// 删除指定的试题类型
export const examDelQuestionsType = (questions_type_id: string) => {
    return request.delete('/exam/delQuestionsType', {data: {questions_type_id}})
}