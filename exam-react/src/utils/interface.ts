export interface IMenuItem{
    name: string,
    meta?: {
        icon: any,
        title: string,
        show: boolean
    },
    children: Array<{
        path: string,
        name: string,
        component?: any,
        meta: {
            title: string,
            show: boolean,
            component: any
        }
    }>
}

export interface IRouterItem{
    path: string,
    name: string,
    redirect?: string,
    component?: any,
    children: IRouterItem[],
    meta: {
        title: string,
        show: boolean,
        component: any
    }
}

export interface RouterConfig{
    path:string;
    component?:any;
    redirect?:string;
    children?: RouterConfig[]
}

// 添加试题类型接口
export interface IInsertQuestionsType{
    text:string;
    sort:string;
}

// 添加试题接口
export interface IAddQuestions{
    questions_type_id: string;
    questions_stem: string;
    subject_id: string;
    exam_id: string;
    user_id: string;
    questions_answer: string;
    title: string;
}

// 按条件获取试题
export interface ICondtion{
    questions_id:string;
    questions_type_id:string;
    subject_id:string;
    exam_id:string;
}

// 更新试题
export interface IUpdate{
    questions_id: string;
    title: string;
    questions_stem: string;
    questions_answer: string;
    subject_id: string;
    questions_type_id: string;
    exam_id: string;
}

// 添加用户
export interface IAdduser{
    user_name: string;
    user_pwd: string;
    identity_id: string;
}

// 添加身份
export interface IIdentify{
    identity_text:string;
}
// 添加视图权限
export interface IAuthorityView{
    view_authority_text:string;
    view_id:string;
}
// 添加api接口权限
export interface IAuthorityApi{
    api_authority_text:string;
    api_authority_url:string;
    api_authority_method: string;
}

// 更新用户信息(用户名，用户密码，用户身份)
export interface IUpdateuser{
    user_id: string;
    user_name: string;
    user_pwd: string;
    identity_id: string;
    avatar: string;
}

// 给身份设定api接口权限
export interface ISetIdentityApi{
    identity_id: string;
    api_authority_id: string;
}

// 登录接口
export interface Ilogin{
    user_name: string;
    user_pwd: string;
}

// 给身份设定视图权限
export interface IsetIdentityView{
    identity_id: string;
    view_authority_id: string;
}

// 获取所有学生的列表
export interface StudentList{
    grade_id: string;
    grade_name: string;
    room_id: string;
    room_text: string;
    student_id: string;
    student_name: string;
    student_pwd: string;
    subject_id: string;
    subject_text: string;
}

// 添加学生接口
export interface IAddStudent{
    student_id: string;
    student_name: string;
    student_pwd: string;
    grade_id: string;
}

// 更新学生信息接口
export interface IUpdateStudent{
    student_id: string;
    student_name: string;
    student_pwd: string;
    grade_id: string;
}

// 删除学生接口
export interface IDeleteStudent{
    id:string;
}

// 已经分配教室的班级的接口
export interface ClassList{
    grade_id: string;
    grade_name: string;
    room_id: string;
    room_text: string;
    subject_id: string;
    subject_text: string;
}

// 添加教室接口
export interface IAddRoom{
    room_text: string;
}

// 更新教室接口
export interface IUpdateRoom{
    room_text: string;
    room_id: string;
}

// 删除教室接口
export interface IDeleteRoom{
    room_id: string;
}

// 添加班级接口
export interface IAddGrade{
    grade_name: string;
    room_id: string;
    subject_id: string;
}

// 更新班级信息
export interface IUpdateGrade{
    grade_name: string;
    room_id: string;
    subject_id: string;
}

// 删除班级接口
export interface IDeleteGrade{
    grade_id: string;
}

// 
export interface IUpdateExam{
    question_ids: string;
}

// 创建试卷接口
export interface ICrateExam {
    subject_id: string;
    exam_id: string;
    title: string;
    number: number;
    start_time: number;
    end_time: number;
}

// 获取试卷列表接口
export interface IGetExamList{
    exam_exam_id: string;
    subject_id: string;
    title: string;
    number: number;
    start_time: number;
    end_time: number;
    page: number;
    pageSize: number;
}

// 学生登录接口
export interface IStudentLogin {
    student_id: string;
    student_pwd: string;
}

// 提交试卷接口
export interface IGetExam{
    exam_exam_id: string;
    questions: any[];
    start_time: number;
    end_time: number;
}

// 获取学生试卷列表接口
export interface IGetStudent{
    exam_exam_id: string;
    student_id: string;
    grade_id: string;
    status: number;
    start_time: number;
    end_time: number;
    page: number;
    pageSize: number;
}

// 获取学生试卷列表接口
export interface IGetStudentExam{
    score: number;
}

export interface ITag{
    name: string;
    path: string;
}