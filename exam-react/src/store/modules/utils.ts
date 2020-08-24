import { observable, action } from 'mobx';
import { ITag } from '@/utils/interface';

class Util{
    @observable
    tags: ITag[] = [];
    @observable
    active = 0;

    @action
    addTag(tag: ITag) {
        let index = this.tags.findIndex((item: ITag) => item.path === tag.path);
        if(index === -1) {
            this.tags.push(tag);
        } else {
            this.active = index;
        }
    }

    @action
    changeTag(index: number) {
        this.active = index;
    }

    @action
    removeTag(tag: ITag) {
        let index = this.tags.findIndex((item: ITag) => item.path === tag.path);
        if(index !== -1){
            this.tags.splice(index, 1);
        }
    }
}

export default Util;