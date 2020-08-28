import { action, observable } from "mobx";
import { 
    getConsumerList,
    getApiAuthority,
    getIdentifyList,
    getViewAuthority,
    getIdentityApiAuthorityRelation,
    getIdentityViewAuthorityRelation,
    addConsumer
} from '@/service/modules/consumer';

class Consumer{
    [key: string]: any

    @observable
    consumerList = [];
    @observable
    identifyList: any[] = [];
    @observable
    apiAuthorityList = [];
    @observable
    viewAuthorityList = [];
    @observable
    identityApiAuthorityRelation = [];
    @observable
    identityViewAuthorityRelation = [];

    // 展示用户数据
    @action
    async getConsumerListAction(){
        // 判断是否请求过，请求过便不再请求
        if(this.consumerList.length){
            return;
        }
        let result = await getConsumerList();
        if (result.data){
            this.consumerList = result.data.data;
        }
    }

    // 展示身份数据
    @action
    async getIdentifyListAction(){
        if(this.identifyList.length) {
            return;
        }
        let result = await getIdentifyList();
        if (result.data.code === 1){
            this.identifyList = result.data.data;
        }
    }

    // 展示api接口权限数据
    @action
    async getApiAuthorityAction(){
        if(this.apiAuthorityList.length) {
            return;
        }
        let result = await getApiAuthority();
        if (result.data){
            this.apiAuthorityList = result.data.data;
        }
    }
   
    // 展示视图权限数据
    @action
    async getViewAuthorityAction(){
        if(this.viewAuthorityList.length) {
            return;
        }
        let result = await getViewAuthority();
        if (result.data){
            this.viewAuthorityList = result.data.data;
        }
    }

    // 展示身份和api权限关系
    @action
    async getIdentityApiAuthorityRelationAction(){
        if(this.identityApiAuthorityRelation.length) {
            return;
        }
        let result = await getIdentityApiAuthorityRelation();
        if (result.data){
            this.identityApiAuthorityRelation = result.data.data;
        }
    }

    // 展示身份和视图权限关系
    @action
    async getIdentityViewAuthorityRelationAction(){
        if(this.identityViewAuthorityRelation.length) {
            return;
        }
        let result = await getIdentityViewAuthorityRelation();
        if (result.data){
            this.identityViewAuthorityRelation = result.data.data;
        }
    }

    // 添加用户
    @action
    async addConsumerAction(values: {user_name: string, user_pwd: string, identity_id: string}) {
        let result = await addConsumer(values.user_name, values.user_pwd, values.identity_id);;
        return result;
    }
}

export default Consumer;