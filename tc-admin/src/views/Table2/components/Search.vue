<template>
    <el-row><el-col :span="3">
            <el-text>名称：</el-text><el-input v-model="props.search.name" :placeholder="$t('data.placeholder')"
                style="width: 120px;">
            </el-input></el-col>
        <el-col :span="3"><el-text>名称：</el-text><el-input v-model="props.search.fullName"
                :placeholder="$t('data.placeholder')" style="width: 120px;"></el-input>
        </el-col>
        <el-col :span="2"><el-button type="primary" @click="props.searchChange">{{ $t('data.search')
                }}</el-button></el-col>
        <el-col :span="2"><el-button type="primary" @click="props.add">{{ $t('data.add') }}</el-button></el-col>
    </el-row>
</template>

<script setup>
const props = defineProps(['search', 'searchChange', 'add'])
</script>


<style lang="scss"></style>