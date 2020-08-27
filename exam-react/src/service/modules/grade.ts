import request from '@/utils/request'

// 班级
 // 获取已经分配教室的班级的接口
export const managerGrade = () => {
    return request.get('/manger/grade');
}

// 添加班级接口
export const managerGradeAdd = (grade_name: string, subject_id: string, room_id?: string) => {
    return request.post('/manger/grade', {grade_name, subject_id, room_id});
}

// 更新班级信息接口
export const mangerGradeUpdate = (grade_id: string, grade_name?: string, subject_id?: string, room_id?: string) => {
    return request.put('/manger/grade/update', {grade_id, grade_name, subject_id, room_id});
}

// 删除班级接口
export const mangerGradeDelete = (grade_id: string) => {
    return request.delete('/manger/grade/delete', {params: {grade_id}});
}

// 获取没有分配教室的班级
export const mangerGradetNew = () => {
    return request.get('/manger/grade/new')
}


// 教室
// 获取全部教室接口
export const mangerRoom = () => {
    return request.get('/manger/room')
}

// 更新教室接口
export const mangerRoomUpdate = (room_id: string, room_text?: string) => {
    return request.put('/manger/room/update',{room_id, room_text})
}

// 添加教室接口
export const mangerRoomAdd = (room_text: string) => {
    return request.post('/manger/room',{room_text})
}

// 删除教室接口
export const mangerRoomDelete = (room_id: string) => {
    return request.delete('/manger/room/delete',{data: {room_id}})
}

// 学生
// 已经分班学生接口
export const mangerStudent = () => {
    return request.get('/manger/student')
}

// 没有分班学生接口
export const mangerStudentNew = () => {
    return request.get('/manger/student/new')
}

// 添加学生接口
export const mangerStudentAdd = (student_id: string, student_name: string, student_pwd: string, grade_id?: string) => {
    return request.post('/manger/student', {student_id, student_name, student_pwd, grade_id});
}

// 更新学生信息接口
export const mangerStudentEdit = (student_id: string, student_name?: string, student_pwd?: string, grade_id?: string) => {
    return request.put('/manger/student/edit', {student_id, student_name, student_pwd, grade_id});
}

// 删除学生接口
export const mangerStudentDelete = (student_id: string) => {
    return request.delete('/manger/student/delete',{data: {student_id}})
}