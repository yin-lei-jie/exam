import { observable, action } from 'mobx';
import { managerGrade,
  mangerGradeUpdate,
  mangerGradetNew,
  mangerRoom,
  mangerStudent,
  mangerRoomAdd,
  mangerRoomDelete,
  managerGradeAdd,
  mangerStudentDelete
 } from '@/service';
import { ClassList, StudentList } from '@/utils/interface';

export default class Grade {
  @observable
  // 已经分配教室的班级列表
  classList: ClassList[] = [];
  // 没有分配教室的班级
  @observable
  gradeListNew: any = [];
  // 获取全部教室接口
  @observable
  roomList: any = [];
  // 已经分班学生接口
  studentList: StudentList[] = []


  // 获取已经分配教室的班级的接口
  @action
  async managerGradeAction(){
    let result: any = await managerGrade();
    if(result.data.code === 1){
      this.classList = result.data.data;
    }
    return result;
  }

  // 添加班级
  @action
  async managerGradeAddAction(grade_name: string, subject_id: string, room_id?: string) {
    let result = await managerGradeAdd(grade_name, subject_id, room_id);
    return result;
  }
  
  // 更新班级信息接口
  @action
  async mangerGradeUpdateAction(grade_id: string, grade_name?: string, subject_id?: string, room_id?: string) {
    let result = await mangerGradeUpdate(grade_id, grade_name, subject_id, room_id);
    return result;
  }

  // 获取没有分配教室的班级
  @action
  async mangerGradetNewAction(){
    let result: any = await mangerGradetNew();
    if(result.data.code === 1) {
      this.gradeListNew = result.data.data;
    }
    return result;
  }

  // 获取全部教室接口
  @action
  async mangerRoomAction() {
    let result: any = await mangerRoom();
    if(result.data.code === 1) {
      this.roomList = result.data.data;
    }
    return result;
  }

  // 添加教室
  async mangerRoomAddAction(room_text: string) {
    let result = await mangerRoomAdd(room_text);
    return result;
  }

  // 删除教室
  @action
  async mangerRoomDeleteAction(room_id: string) {
    let result = await mangerRoomDelete(room_id);
    return result;
  }


  // 已经分班学生接口
  @action
  async mangerStudentAction() {
    let result: any = await mangerStudent();
    if(result.data.code === 1) {
      this.studentList = result.data.data;
    }
    return result;
  }

  // 删除学生接口
  @action
  async mangerStudentDeleteAction(student_id: string) {
    let result: any = await mangerStudentDelete(student_id);
    if (result.data.code === 1) {
      this.studentList = result.data.data;
    }
    return result;
  }
}