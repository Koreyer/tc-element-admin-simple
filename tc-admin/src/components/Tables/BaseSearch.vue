<template>
    <div class="search-box">
        <div v-for="assembly in props.assemblys">
            <span v-show="assembly.name != 'button'" style="font-size: 16px;">{{ $t(assembly.label)
            }}:&nbsp;</span>
            <el-input v-if="assembly.name == 'input'" :style="{ 'width': '150px' }" class="w-50 m-2 ml30"
                :placeholder="$t(assembly.text)" v-model="assembly.value"></el-input>
            <el-select v-else-if="assembly.name == 'select'" v-model="assembly.value" class="m-2 ml30"
                :placeholder="$t(assembly.text)" style="width: 240px;">
                <el-option v-for="item in assembly.options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-button v-else-if="assembly.name == 'button'" class="ml30" type="primary" @click="assembly.change">{{
                $t(assembly.label)

            }}</el-button>


        </div>
    </div>
</template>


<script setup>

const props = defineProps(['assemblys'])






</script>


<style lang="scss">
.ml30 {
    margin-right: 30px;
}

.search-box {
    display: flex;
    height: 40px;
    line-height: 40px;
}
</style>