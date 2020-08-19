import Login from '../views/login/Login';
import Main from '../views/main/Main';

import AddQuestion from '../views/main/question/AddQuestion';
import TypeQuestion from '../views/main/question/TupeQuestion';
import ListQuestion from '../views/main/question/ListQuestion';
import AddUser from '../views/main/user/AddUser';
import ListUser from '../views/main/user/ListUser';
import AddExam from '../views/main/exam/AddExam';
import ListExam from '../views/main/exam/ListExam';
import ClassManage from '../views/main/class/ClassManage';
import GradeManage from '../views/main/class/GradeManage';
import StudentManage from '../views/main/class/StudentManage';
import AwaitClass from '../views/main/paper/AwaitClass';

export interface RouterItem{
    path:string,
    component?:any,
    redirect?:any,
    children?:RouterItem[]
}

const routes: RouterItem[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/main',
        component: Main,
        children: [
            {
                path: '/main/addQuestion',
                component: AddQuestion
            },
            {
                path: '/main/typeQuestion',
                component: TypeQuestion
            },
            {
                path: '/main/listQuestion',
                component: ListQuestion
            },
            {
                path: '/main/addUser',
                component: AddUser
            },
            {
                path: '/main/listUser',
                component: ListUser
            },
            {
                path: '/main/addExam',
                component: AddExam
            },
            {
                path: '/main/listExam',
                component: ListExam
            },
            {
                path: '/main/classManage',
                component: ClassManage
            },
            {
                path: '/main/gradeManage',
                component: GradeManage
            },
            {
                path: '/main/studentManage',
                component: StudentManage
            },
            {
                path: '/main/awaitClass',
                component: AwaitClass
            }
        ]
    }
]

export default routes;