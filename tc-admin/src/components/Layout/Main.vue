<template>
    <el-tabs v-model="asiderStore.activeIndex" type="card" closable class="demo-tabs" @edit="handleTabsEdit"
        @tab-click="tabClick">
        <el-tab-pane v-for="item in asiderStore.editableTabs" :key="item.name" :label="$t(item.title)" :name="item.name">
            <RouterView />
        </el-tab-pane>
    </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabPaneName } from 'element-plus'

import { useAsiderStore } from '@/stores/asider.js';
const asiderStore = useAsiderStore()

import { useRouter } from 'vue-router'
const router = useRouter()
const tabClick = (TabsPaneContext,) => {
    asiderStore.activeIndex = TabsPaneContext.paneName
    console.log('name', TabsPaneContext.paneName)
    router.push(TabsPaneContext.paneName)
}

const handleTabsEdit = (
    targetName: TabPaneName | undefined
) => {


    let res = asiderStore.removeTab(targetName)
    if (res) {
        let activeName = asiderStore.activeIndex
        if (activeName === targetName) {
            asiderStore.editableTabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                    const nextTab = asiderStore.editableTabs[index + 1] || asiderStore.editableTabs[index - 1]
                    if (nextTab) {
                        activeName = nextTab.name
                    }
                }
            })
        }
        asiderStore.activeIndex = activeName
    }
}
</script>
<style>
.demo-tabs>.el-tabs__content {
    /* padding: 32px; */
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>
