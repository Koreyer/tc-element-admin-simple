
<template>
    <BaseSearch :assemblys="assemblys" />
    <BaseTable :datas="datas" :columns="columns">
    </BaseTable>
    <BasePagination @pageIndex="pageIndex" @pageSize="pageSize" />
    <!-- {{ GLOBAL.titleName }} -->

    <BaseForm :buttons="buttons" :assemblys="formAssemblys" :formType="formType" :dialogVisible='dialogVisible'
        @close='formClose'></BaseForm>
</template>


<script setup>
import { getCurrentInstance } from 'vue'
const {
    proxy: { $global },
} = getCurrentInstance();
const { ctx } = getCurrentInstance();

import { ref } from 'vue'


//查询组件

import { useI18n } from 'vue-i18n';

const { t } = useI18n();



const assemblys = ref([
    {
        name: 'input',
        value: 'name',
        label: 'common.name',
        text: 'data.placeholder'
    }, {
        name: 'input',
        value: 'name',
        label: 'column.sex',
        text: 'data.placeholder'
    }, {
        name: 'select',
        value: 'value1',
        label: 'common.class',
        text: 'data.select',
        options: [{
            value: 'value1',
            label: 'label1'
        }, {
            value: 'value2',
            label: 'label2'
        }]
    },
    {
        name: 'button',
        change: () => searchChange(),
        text: 'data.search',
        label: 'data.search'
    }, {
        name: 'button',
        change: () => showDialog(),
        text: 'data.add',
        label: 'data.add'
    }
])

const searchChange = () => {
    datas.value = datas.value.filter(x => x.name.includes(assemblys.value.find(x => x.label == 'column.name').value))
    console.log(datas.value)
}

const showDialog = () => {
    dialogVisible.value = true
    console.log('dialogVisible', dialogVisible)
}

//表格组件
const datas = ref([{
    name: '小明',
    city: '广州'
}, {
    name: '小黄',
    city: '深圳'
}])
const columns = ref([
    {
        name: 'name',
        label: 'column.fullName'
    }, {
        name: 'city',
        label: 'column.city'
    }
])

//分页组件

const page = ref({
    total: 100,
    pageIndex: 1,
    pageSize: 10

})

const pageIndex = (pageIndex) => {
    page.value.pageIndex = pageIndex
}

const pageSize = (pageSize) => {
    page.value.pageSize = pageSize
}


//表单组件

const dialogVisible = ref(false)

const formClose = (value) => {
    dialogVisible.value = value
}

const buttons = ref([
    {
        name: 'button',
        text: 'data.add',
        type: 'add',
        color: 'white',
        bgColor: '#409EFF',
        width: '100px',
        change: () => {
            formClose(false)
        }

    }, {
        name: 'button',
        text: 'data.edit',
        type: 'edit',
        color: 'white',
        bgColor: '#409EFF',
        width: '100px',
        change: () => {
            formClose(false)
        }

    }, {
        name: 'button',
        text: 'data.cancel',
        type: 'cancel',
        color: '',
        bgColor: '',
        width: '100px',
        change: () => {
            formClose(false)
        }
    }
])

const data = ref({
    name: 'name',
    isCheck: true,
    selectValue: 'value1',
    checkbox: [],
    radio: '',
    password: '',
    textarea: ''
})

const formAssemblys = ref([
    {
        name: 'input',
        value: data.value.name,
        label: 'common.name',
        text: 'data.placeholder',
        type: 'input',
        col: 2
    }, {
        name: 'select',
        value: data.value.selectValue,
        label: 'common.class',
        text: 'data.select',
        col: 2,
        selectOptions: [{
            value: 'value1',
            label: 'label1'
        }, {
            value: 'value2',
            label: 'label2'
        }]
    }, {
        name: 'checkBox',
        value: data.value.checkbox,
        label: 'data.checkBox',
        text: 'common.empty',
        col: 1,
        checkOptions: [
            {
                label: 'checkName1',
                value: 'check1'
            }, {
                label: 'checkName2',
                value: 'check2'
            }
        ]
    }, {
        name: 'radio',
        value: data.value.radio,
        label: 'data.radio',
        radioOptions: [{
            label: 'radio1'
        }, {
            label: 'radio2'
        }]
    },
    {
        name: 'input',
        value: data.value.textarea,
        label: 'common.name',
        text: 'data.placeholder',
        type: 'textarea',
        col: 2
    }, {
        name: 'input',
        value: data.value.password,
        label: 'login.password',
        text: 'data.placeholder',
        type: 'password',
        col: 2
    },
])


//表单属性
const formType = ref({
    type: 'add',
    title: 'data.add', width: '600'
})


// const sizeChange = ()
// sizeChange = (value) => {
//     console.log(value)
// }
// //翻页
// const currentChange


import BaseForm from '@/components/Tables/BaseForm.vue';
import BaseSearch from '@/components/Tables/BaseSearch.vue';

import BaseTable from '../components/Tables/BaseTable.vue';
import BasePagination from '@/components/Tables/BasePagination.vue';


</script>