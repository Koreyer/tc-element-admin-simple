<template>
    <el-pagination style="padding-top: 30px;" background layout="total, sizes, prev, pager, next, jumper"
        :total="props.page.total" :page-sizes="[10, 30, 50, 100]" v-model:page-size="props.page.pageSize"
        @size-change="sizeChange" @current-change="currentChange" />
</template>


<script setup>
import { ref } from 'vue'
const props = defineProps(['page'])
const emit = defineEmits(['pageChange'])

const page = ref({
    total: 100,
    pageIndex: 1,
    pageSize: 10
})


//修改页数
const sizeChange = (value) => {
    // emit('pageSize', value)

    props.page.pageSize = value
    emit('pageChange')
}
//翻页
const currentChange = (value) => {
    // emit('pageIndex', value)
    props.page.pageIndex = value
    emit('pageChange')

}
</script>