import { observable, action } from "mobx";

class Lang{
    @observable
    local = 'zh'

    @action
    changeLocal(local: string) {
        this.local = local;
    }
}

export default Lang;