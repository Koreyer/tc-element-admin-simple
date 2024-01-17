<template>
    <div class="header">
        <el-row class="row-demo">
            <el-col :span="1" class="fold-icon" @click="foldChange">
                <el-icon v-if="!asiderStore.isCollapse">
                    <Fold />
                </el-icon>
                <el-icon v-else>
                    <Expand />
                </el-icon>
            </el-col>
            <el-col :span="10">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item @click="replaceHome" :to="{ path: '/Demo4' }">Demo4</el-breadcrumb-item>
                    <span v-if="asiderStore.breadcrumbs.find(x => x != 'Demo4')"><el-breadcrumb-item
                            v-for="item in asiderStore.breadcrumbs">{{ item }}</el-breadcrumb-item></span>
                </el-breadcrumb></el-col>

        </el-row>

    </div>
</template>



<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()


//重置到首页
import { useAsiderStore } from '/src/stores/asider.js'
const asiderStore = useAsiderStore()
const replaceHome = () => {
    // router.replace('/Demo4')
    asiderStore.activeIndex = 'Demo4'
    asiderStore.breadcrumbs = ['Demo4']
    setTimeout(() => {
        location.reload();
    }, 200)
}


//侧栏缩展功能
const foldChange = () => {
    asiderStore.isCollapse = !asiderStore.isCollapse
    asiderStore.changeWidth()
}

</script>


<style lang="scss">
.header {
    height: 50px;

    .row-demo {
        height: 50px;
        padding-top: 10px;

        .fold-icon:hover {
            cursor: pointer;
        }

    }
}
</style>