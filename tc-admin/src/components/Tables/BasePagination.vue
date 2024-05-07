<template>
    <el-pagination style="padding-top: 30px;" background layout="total, sizes, prev, pager, next, jumper"
        :total="props.total" :page-sizes="[10, 30, 50, 100]" v-model:page-size="props.pageSize"
        @size-change="sizeChange" @current-change="currentChange" />
</template>


<script setup>
import { ref } from 'vue'

const emit = defineEmits(['pageIndexChange', 'pageSizeChange'])
const props = defineProps(['pageSize', 'total'])




//修改页数
const sizeChange = (value) => {
    emit('pageSizeChange', value)
    console.log(value)
}
//翻页
const currentChange = (value) => {
    emit('pageIndexChange', value)
    console.log('currentChange', value)

}
</script>