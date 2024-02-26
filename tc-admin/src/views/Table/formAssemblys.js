import { ref } from 'vue'
const data = ref({
    name: '小明',
    class: 'class1',
    checkbox: [],
    radio: 'false',
    // password: '',
    // textarea: '',
    sex: '男'
})

const assemblys = ref([
    {
        name: 'input',
        value: data.value.name,
        label: 'common.name',
        text: 'data.placeholder',
        type: 'input',
        prop: 'name',
        col: 2
    }, {
        name: 'select',
        value: data.value.class,
        label: 'common.class',
        text: 'data.select',
        prop: 'class',
        col: 2,
        selectOptions: [{
            value: 'class1',
            label: '一班'
        }, {
            value: 'class2',
            label: '二班'
        }]
    }, {
        name: 'checkBox',
        value: data.value.checkbox,
        label: 'data.checkBox',
        text: 'common.empty',
        prop: 'checkbox',
        col: 1,
        checkOptions: [
            {
                label: '吃饭',
                value: '吃饭'
            }, {
                label: '睡觉',
                value: '睡觉'
            }
        ]
    }, {
        name: 'radio',
        value: data.value.sex,
        label: 'column.sex',
        prop: 'sex',
        col: 2,
        radioOptions: [{
            label: '男',
            value: '男'
        }, {
            label: '女',
            value: '女'
        }]
    }, {
        name: 'radio',
        value: data.value.radio,
        label: 'data.radio',
        prop: 'radio',
        col: 2,
        radioOptions: [{
            label: '是',
            value: 'true'
        }, {
            label: '否',
            value: 'false'
        }]
    },
    // {
    //     name: 'input',
    //     value: data.value.textarea,
    //     label: 'column.description',
    //     text: 'data.placeholder',
    //     type: 'textarea',
    //     col: 2
    // }, {
    //     name: 'input',
    //     value: data.value.password,
    //     label: 'login.password',
    //     text: 'data.placeholder',
    //     type: 'password',
    //     col: 2
    // },
])

export default {
    assemblys, data
}