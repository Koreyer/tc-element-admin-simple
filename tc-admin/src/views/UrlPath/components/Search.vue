<template>
    <el-row>
        <el-col :span="2"><el-button type="primary" @click="addShow">{{ $t('data.add') }}</el-button></el-col>
    </el-row>
</template>

<script setup>
const emits = defineEmits(['add'])
const addShow = () => {
    emits('add')
}

</script>


<style lang="scss"></style>