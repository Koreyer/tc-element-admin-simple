<template>
    <p style="font-size: 20px;font-weight: 400;margin-bottom: 10px;">{{ $t(title) }}</p>
    <BaseSearch :assemblys="searchAssembly" />
    <BaseTable :datas="datas" :columns="columns" @editData="editShow">
    </BaseTable>
    <BasePagination @pageIndexChange="pageIndexChange" @pageSizeChange="pageSizeChange" :total="page.total" />
    <!-- {{ GLOBAL.titleName }} -->

    <BaseForm :buttons="buttons" :assemblys="formAssembly" :formType="formType" :dialogVisible='dialogVisible'
        @close='formClose' :formData="formAssemblys.data" :newData='formAssemblys.newData' :submit='formSubmit'>
    </BaseForm>
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
const dialogVisible = ref(false)

import searchAssemblys from './searchAssemblys'
const searchAssembly = ref(searchAssemblys.assemblys)

console.log('searchAssembly', searchAssembly)

searchAssembly.value.find(x => x.type == 'search').change = () => {
    searchChange()
}

searchAssembly.value.find(x => x.type == 'add').change = () => {
    formType.value.title = 'data.add'
    formType.value.type = 'add'
    formAssemblys.assemblys.value.forEach(assembly => {
        if ((typeof assembly.value) == 'object') {
            assembly.value = []
            formAssemblys.newData.value[assembly.prop] = []
        } else {
            assembly.value = ''
            formAssemblys.newData.value[assembly.prop] = ''
        }
    })
    showDialog()
}

const searchChange = () => {
    console.log('searchAssembly', searchAssembly)
}

const showDialog = () => {
    dialogVisible.value = true
}
const closeDialog = () => {
    dialogVisible.value = false
}

//表格组件
//表格组件
import tableAssembly from './tableAssemblys'

const datas = tableAssembly.datas
const columns = ref(tableAssembly.columns)




//分页组件

const page = ref({
    total: 13,
    pageIndex: 1,
    pageSize: 10

})

const pageIndexChange = (pageIndex) => {
    page.value.pageIndex = pageIndex
}

const pageSizeChange = (pageSize) => {
    page.value.pageSize = pageSize
}


//表单组件








//表单
import formAssemblys from './formAssemblys'
const formAssembly = formAssemblys.assemblys

const editShow = (data) => {
    formType.value.title = 'data.edit'
    formType.value.type = 'edit'
    formAssemblys.data = JSON.parse(JSON.stringify(data))
    formAssemblys.assemblys.value.forEach(assembly => {
        assembly.value = data[assembly.prop]
    })
    console.log('formAssemblys.data ', formAssemblys.assemblys.value)
    showDialog()
}

//表单数据
const formClose = (data) => {
    formAssemblys.data.value = data
}


//表单按钮
import buttonAssemblys from './buttonAssemblys'
const buttons = buttonAssemblys.buttons

const formSubmit = ref(false)

//重写按钮


buttons.value.find(x => x.type === 'add').change = () => {
    formSubmit.value = true
    closeDialog()
    console.log('新增数据', formAssemblys.data)

}
buttons.value.find(x => x.type == 'edit').change = () => {
    formSubmit.value = true
    // 找到要替换的数据的索引
    const index = datas.value.findIndex(item => item.name === formAssemblys.data.name);
    // 如果找到了匹配的索引，则替换原始数据列表中的对应位置
    if (index !== -1) {
        datas.value.splice(index, 1, formAssemblys.data);
    }
    closeDialog()
}


buttons.value.find(x => x.type === 'cancel').change = () => {
    closeDialog()
}


// if (formType.value.type == 'add') {
//     datas.value.push(data)
// } else if (formType.value.type == 'edit') {
//     // 找到要替换的数据的索引
//     const index = datas.value.findIndex(item => item.name === data.name);
//     // 如果找到了匹配的索引，则替换原始数据列表中的对应位置
//     if (index !== -1) {
//         datas.value.splice(index, 1, data);
//     }
// }


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