import { UserOutlined, LaptopOutlined, NotificationOutlined, BellOutlined, CommentOutlined } from "@ant-design/icons";

// 试题
import AddQuestion from '../views/main/question/AddQuestion';
import ClassifyQuestion from '../views/main/question/ClassifyQuestion';
import QuestionDetail from '../views/main/question/QuestionDetail';
import ViewQuestion from '../views/main/question/ViewQuestion';
// 个人中心
import AddConsumer from '../views/main/consumer/AddConsumer';
import ShowConsumer from '../views/main/consumer/ShowConsumer';
// 试卷
import AddExam from '../views/main/paper/AddExam';
import PaperDetail from '../views/main/paper/PaperDetail';
import PaperList from '../views/main/paper/PaperList';
import AddPaper from '../views/main/paper/AddPaper';
// 教室
import ClassManager from '../views/main/class/ClassManager';
import RoomManager from '../views/main/class/RoomManager';
import StudentManager from '../views/main/class/StudentManager';
// 待批卷
import MarkingDetail from '../views/main/marking/MarkingDetail';
import MarkingList from '../views/main/marking/MarkingList';
import MarkingStudentList from '../views/main/marking/MarkingStudentList';

const menus = [{
    name: 'menu.question',
    meta: {
        icon: UserOutlined,
        title: '试题管理',
        show: true
    },
    children: [{
        path: '/main/addQuestion',
        name: 'menu.question.addQuestion',
        meta: {
            title: '添加试题',
            show: true,
            component: AddQuestion
        },
    },{
        path: '/main/classifyQuestion',
        name: 'menu.question.classifyQuestion',
        meta: {
            title: '试题分类',
            show: true,
            component: ClassifyQuestion
        },
    },{
        path: '/main/questionDetail',
        name: 'menu.question.questionDetail',
        meta: {
            title: '试题详情',
            show: false,
            component: QuestionDetail
        },
    },{
        path: '/main/viewQuestion',
        name: 'menu.question.viewQuestion',
        meta: {
            title: '查看试题',
            show: true,
            component: ViewQuestion
        },
    }]
},{
    name: 'menu.user',
    meta: {
        icon: LaptopOutlined,
        title: '用户管理',
        show: true
    },
    children: [{
        path: '/main/addConsumer',
        name: 'menu.user.addUser',
        meta: {
            title: '添加用户',
            show: true,
            component: AddConsumer
        },
    },{
        path: '/main/showConsumer',
        name: 'menu.user.showUser',
        meta: {
            title: '用户展示',
            show: true,
            component: ShowConsumer
        },
    }]
},{
    name: 'menu.exam',
    meta: {
        icon: NotificationOutlined,
        title: '',
        show: true
    },
    children: [{
        path: '/main/addExam',
        name: 'menu.exam.addExam',
        meta: {
            title: '添加考试',
            show: true,
            component: AddExam
        },
    },{
        path: '/main/paperDetail',
        name: 'menu.exam.paperDetail',
        meta: {
            title: '考试详情',
            show: false,
            component: PaperDetail
        },
    },{
        path: '/main/paperList',
        name: 'menu.exam.examList',
        meta: {
            title: '试卷列表',
            show: true,
            component: PaperList
        },
    },{
        path: '/main/addPaper',
        name: 'menu.exam.addPaper',
        meta: {
            title: '添加试卷',
            show: true,
            component: AddPaper
        },
    }]
},{
    name: 'menu.grade',
    meta: {
        icon: BellOutlined,
        title: '班级管理',
        show: true
    },
    children: [{
        path: '/main/classManager',
        name: 'menu.grade.gradePage',
        meta: {
            title: '班级管理',
            show: true,
            component: ClassManager
        },
    },{
        path: '/main/roomManager',
        name: 'menu.grade.roomPage',
        meta: {
            title: '教室管理',
            show: true,
            component: RoomManager
        },
    },{
        path: '/main/studentManager',
        name: 'menu.grade.studentPage',
        meta: {
            title: '学生管理',
            show: true,
            component: StudentManager
        },
    }]
},{
    name: 'menu.marking',
    meta: {
        icon: CommentOutlined,
        title: '',
        show: true
    },
    children: [{
        path: '/main/markingDetail',
        name: 'menu.marking.markingDetail',
        meta: {
            title: '批卷',
            show: false,
            component: MarkingDetail
        },
    },{
        path: '/main/markingList',
        name: 'menu.marking.markingList',
        meta: {
            title: '待批班级',
            show: true,
            component: MarkingList
        },
    },{
        path: '/main/markingStudentList',
        name: 'menu.marking.markingStudent',
        meta: {
            title: '学生试卷列表',
            show: true,
            component: MarkingStudentList
        },
    }]
}];

export default menus;