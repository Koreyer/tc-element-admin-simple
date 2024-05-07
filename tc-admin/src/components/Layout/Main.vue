<template>
    <el-tabs v-model="asiderStore.activeIndex" type="card" closable class="demo-tabs" @edit="handleTabsEdit"
        @tab-click="tabClick">
        <el-tab-pane v-for="item in asiderStore.editableTabs" :key="item.name" :label="$t(item.title)"
            :name="item.name">
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
import rouApi from "@/api/routerApi.js"
import findHelp from '@/utils/findHelp.js'
const menus = ref(rouApi.getRouter())
const tabClick = (TabsPaneContext) => {
    asiderStore.activeIndex = TabsPaneContext.paneName
    asiderStore.breadcrumbs = findHelp.findTitles(menus.value, findHelp.findTitleRecursive(menus.value, TabsPaneContext.paneName))
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
/* .demo-tabs>.el-tabs__content {
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
} */
</style>
