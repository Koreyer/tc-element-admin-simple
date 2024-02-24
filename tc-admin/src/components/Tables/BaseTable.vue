<template>
    <div style="display: flex;height: 32px;line-height: 32px;">
        <el-input v-model="search.name" :style="{ 'width': '150px' }" class="w-50 m-2" :placeholder="$t('data.placeholder')"
            style="margin-right: 30px;" />
        <slot name="search">
        </slot>
        <el-button style="margin-left: 30px;" type="primary">{{ $t('data.search') }}</el-button>
    </div>
    <el-table :data="datas" class="tableStyle">
        <el-table-column type="index" width="50" />
        <el-table-column v-for="column in columns" :prop="column.name" :label="$t(column.label)"
            :min-width="column.width || 120" />
        <el-table-column fixed="right" :label="$t('column.operations')" min-width="120">
            <template #default>
                <el-button link type="primary" size="small" @click="handleClick">{{ $t('data.edit') }}</el-button>
                <el-button link type="primary" size="small">{{ $t('data.delete') }}</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination style="padding-top: 30px;" background layout="total, sizes, prev, pager, next, jumper"
        :total="page.total" :page-sizes="[10, 30, 50, 100]" v-model:page-size="page.pageSize" @size-change="sizeChange"
        @current-change="currentChange" />
</template>


<script setup>

import { ref } from 'vue'
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
const page = ref({
    total: 100,
    pageIndex: 1,
    pageSize: 10
})

const search = ref({
    name: ''
})

//修改页数
const sizeChange = (value) => {
    console.log(value)
}
//翻页
const currentChange = (value) => {
    console.log('currentChange', value)

}




</script>


<style>
.tableStyle {
    width: 100%;
    height: 60vh;
}
</style>