import { ref } from 'vue'

//表格组件
const datas = ref([{
    name: '小明',
    class: 'class1',
    radio: 'false',
    sex: '男',
    checkbox: ['吃饭']
}, {
    name: '小黄',
    class: 'class1',
    radio: 'false',
    sex: '男',
    checkbox: ['吃饭']
}, {
    name: '小兰',
    class: 'class2',
    radio: 'false',
    sex: '女',
    checkbox: ['吃饭', '睡觉']
}, {
    name: '小岚',
    class: 'class2',
    radio: 'false',
    sex: '女',
    checkbox: ['睡觉']
},])
const columns = ref([
    {
        name: 'name',
        label: 'column.fullName'
    }, {
        name: 'class',
        label: 'common.class'
    }, {
        name: 'sex',
        label: 'column.sex'
    }, {
        name: 'radio',
        label: 'data.radio'
    }, {
        name: 'checkbox',
        label: 'data.checkBox'
    }
])


export default {
    datas, columns
}