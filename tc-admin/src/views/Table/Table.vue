
<template>
    <p style="font-size: 20px;font-weight: 400;margin-bottom: 10px;">{{ $t(title) }}</p>
    <BaseSearch :assemblys="searchAssembly" />
    <BaseTable :datas="datas" :columns="columns">
    </BaseTable>
    <BasePagination @pageIndex="pageIndex" @pageSize="pageSize" />
    <!-- {{ GLOBAL.titleName }} -->

    <BaseForm :buttons="buttons" :assemblys="formAssembly" :formType="formType" :dialogVisible='dialogVisible'
        @close='formClose' :formData="formAssemblys.data"></BaseForm>
</template>


<script setup>
import { getCurrentInstance } from 'vue'
const {
    proxy: { $global },
} = getCurrentInstance();
const { ctx } = getCurrentInstance();

import { ref } from 'vue'

const title = 'menu.table'


//查询组件

import { useI18n } from 'vue-i18n';

const { t } = useI18n();


import searchAssemblys from './searchAssemblys'
const searchAssembly = ref(searchAssemblys.assemblys)

searchAssembly.value.find(x => x.type == 'search').change = () => {
    searchChange()
}

searchAssembly.value.find(x => x.type == 'add').change = () => {
    showDialog()
}

const searchChange = () => {
    datas.value = datas.value.filter(x => x.name.includes(assemblys.value.find(x => x.label == 'column.name').value))
    console.log(datas.value)
}

const showDialog = () => {
    dialogVisible.value = true
    console.log('dialogVisible', dialogVisible)
}

//表格组件
//表格组件
import tableAssembly from './tableAssemblys'

const datas = ref(tableAssembly.datas)
const columns = ref(tableAssembly.columns)

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

const formClose = (data) => {
    if (formType.value.type == 'add') {

    } else {

    }
    console.log('data', data)
}




//表单
import formAssemblys from './formAssemblys'
const formAssembly = formAssemblys.assemblys
//表单数据



//表单按钮
import buttonAssemblys from './buttonAssemblys'
const buttons = buttonAssemblys.buttons

//重写按钮

buttons.value.forEach(x => x.change = () => {
    dialogVisible.value = false
})


//表单属性
const formType = ref({
    type: 'add',
    title: 'data.add', width: '600', labelWidth: '100px'
})


// const sizeChange = ()
// sizeChange = (value) => {
//     console.log(value)
// }
// //翻页
// const currentChange


import BaseForm from '@/components/Tables/BaseForm.vue';
import BaseSearch from '@/components/Tables/BaseSearch.vue';
import BaseTable from '@/components/Tables/BaseTable.vue';
import BasePagination from '@/components/Tables/BasePagination.vue';


</script>