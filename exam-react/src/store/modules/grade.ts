import { observable, action } from 'mobx';
import { managerGrade,
  mangerGradeUpdate,
  mangerGradetNew,
  mangerRoom,
  mangerStudent,
  mangerRoomAdd,
  mangerRoomDelete,
  managerGradeAdd
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
    let result = await managerGrade();
    console.log(result.data, '-----')
    if(result){
      this.classList = result.data.data;
    }
    return result;
  }

  // 添加班级
  @action
  async managerGradeAddAction(grade_name: string, subject_id: string, room_id?: string) {
    let result = await managerGradeAdd(grade_name, subject_id, room_id);
    console.log(result, '----');
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
    let result = await mangerGradetNew();
    console.log(result, '----new');
    if(result) {
      this.gradeListNew = result.data.data;
    }
    return result;
  }

  // 获取全部教室接口
  @action
  async mangerRoomAction() {
    let result = await mangerRoom();
    // console.log(result, '----room');
    if(result) {
      this.roomList = result.data.data;
    }
    return result;
  }

  // 添加教室
  async mangerRoomAddAction(room_text: string) {
    let result = await mangerRoomAdd(room_text);
    // console.log(result, '---addroom');
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
    let result = await mangerStudent();
    // console.log(result, '------')
    if(result) {
      this.studentList = result.data.data;
    }
    return result;
  }
}