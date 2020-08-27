import React from 'react';
import { useObserver } from 'mobx-react-lite';
import '@/App.scss';

function AddQuestion() {
    return useObserver(()=> <div>
        <h1 className="style_h1">添加试题</h1>
        <div>
            <p>题目信息</p>
            <p></p>
        </div>
    </div>)
}

export default AddQuestion;