<template>
    <el-pagination style="padding-top: 30px;" background layout="total, sizes, prev, pager, next, jumper"
        :total="page.total" :page-sizes="[10, 30, 50, 100]" v-model:page-size="page.pageSize" @size-change="sizeChange"
        @current-change="currentChange" />
</template>


<script setup>
import { ref } from 'vue'

const emit = defineEmits(['pageIndex', 'pageSize'])

const page = ref({
    total: 100,
    pageIndex: 1,
    pageSize: 10
})


//修改页数
const sizeChange = (value) => {
    emit('pageSize', value)
    console.log(value)
}
//翻页
const currentChange = (value) => {
    emit('pageIndex', value)
    console.log('currentChange', value)

}
</script>