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
import AddPaper from '../views/main/paper/AddPaper';
import PaperDetail from '../views/main/paper/PaperDetail';
import PaperList from '../views/main/paper/PaperList';
// 教室
import ClassManager from '../views/main/class/ClassManager';
import RoomManager from '../views/main/class/RoomManager';
import StudentManager from '../views/main/class/StudentManager';
// 待批卷
import MarkingDetail from '../views/main/marking/MarkingDetail';
import MarkingList from '../views/main/marking/MarkingList';
import MarkingStudentList from '../views/main/marking/MarkingStudentList';

const menus = [{
    name: '试题管理',
    meta: {
        icon: UserOutlined,
        title: '',
        show: true
    },
    children: [{
        path: '/main/addQuestion',
        name: '添加试题',
        meta: {
            title: '添加试题',
            show: true,
            component: AddQuestion
        },
    },{
        path: '/main/classifyQuestion',
        name: '试题分类',
        meta: {
            title: '试题分类',
            show: true,
            component: ClassifyQuestion
        },
    },{
        path: '/main/questionDetail',
        name: '试题详情',
        meta: {
            title: '试题详情',
            show: false,
            component: QuestionDetail
        },
    },{
        path: '/main/viewQuestion',
        name: '查看试题',
        meta: {
            title: '查看试题',
            show: true,
            component: ViewQuestion
        },
    }]
},{
    name: '用户管理',
    meta: {
        icon: LaptopOutlined,
        title: '用户管理',
        show: true
    },
    children: [{
        path: '/main/addConsumer',
        name: '添加用户',
        meta: {
            title: '添加用户',
            show: true,
            component: AddConsumer
        },
    },{
        path: '/main/showConsumer',
        name: '用户展示',
        meta: {
            title: '用户展示',
            show: true,
            component: ShowConsumer
        },
    }]
},{
    name: '考试管理',
    meta: {
        icon: NotificationOutlined,
        title: '',
        show: true
    },
    children: [{
        path: '/main/addPaper',
        name: '添加考试',
        meta: {
            title: '添加考试',
            show: true,
            component: AddPaper
        },
    },{
        path: '/main/paperDetail',
        name: '考试详情',
        meta: {
            title: '考试详情',
            show: false,
            component: PaperDetail
        },
    },{
        path: '/main/paperList',
        name: '试卷列表',
        meta: {
            title: '试卷列表',
            show: true,
            component: PaperList
        },
    }]
},{
    name: '班级管理',
    meta: {
        icon: BellOutlined,
        title: '班级管理',
        show: true
    },
    children: [{
        path: '/main/classManager',
        name: '班级管理',
        meta: {
            title: '班级管理',
            show: true,
            component: ClassManager
        },
    },{
        path: '/main/roomManager',
        name: '教室管理',
        meta: {
            title: '教室管理',
            show: true,
            component: RoomManager
        },
    },{
        path: '/main/studentManager',
        name: '学生管理',
        meta: {
            title: '学生管理',
            show: true,
            component: StudentManager
        },
    }]
},{
    name: '阅卷管理',
    meta: {
        icon: CommentOutlined,
        title: '',
        show: true
    },
    children: [{
        path: '/main/markingDetail',
        name: '批卷',
        meta: {
            title: '批卷',
            show: false,
            component: MarkingDetail
        },
    },{
        path: '/main/markingList',
        name: '待批班级',
        meta: {
            title: '待批班级',
            show: true,
            component: MarkingList
        },
    },{
        path: '/main/markingStudentList',
        name: '学生试卷列表',
        meta: {
            title: '学生试卷列表',
            show: true,
            component: MarkingStudentList
        },
    }]
}];

export default menus;