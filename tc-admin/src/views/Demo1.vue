
<template>
    <BaseSearch :assemblys="assemblys" />
    <BaseTable :datas="datas" :columns="columns">
    </BaseTable>
    <BasePagination @pageIndex="pageIndex" @pageSize="pageSize" />
    <!-- {{ GLOBAL.titleName }} -->
</template>


<script setup>
import { getCurrentInstance } from 'vue'
const {
    proxy: { $global },
} = getCurrentInstance();
const { ctx } = getCurrentInstance();
console.log(ctx)

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
        label: 'common.sex',
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
        change: () => { },
        text: 'data.add',
        label: 'data.add'
    }
])

const searchChange = () => {
    datas.value = datas.value.filter(x => x.name.includes(assemblys.value.find(x => x.label == 'column.name').value))
    console.log(datas.value)
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

// const sizeChange = ()
// sizeChange = (value) => {
//     console.log(value)
// }
// //翻页
// const currentChange



import BaseSearch from '@/components/Tables/BaseSearch.vue';

import BaseTable from '../components/Tables/BaseTable.vue';
import BasePagination from '@/components/Tables/BasePagination.vue';


</script>