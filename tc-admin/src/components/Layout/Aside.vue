<template>
  <el-menu :default-active="asiderStore.activeIndex" class="el-menu-vertical-demo" :collapse="asiderStore.isCollapse"
    @open="handleOpen" router @close="handleClose" :collapse-transition="false">
    <div class="logo">
      <el-image style="width: 32px; height: 32px" :src="url" fit="fill" />
      <div class="logo-title" v-if="!asiderStore.isCollapse">{{ title }}</div>
    </div>
    <template v-for="menu in menus">
      <el-sub-menu v-if="menu.children?.length" :index="menu.name">
        <template #title>
          <!-- 使用svg -->
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="menu.icon"></use>
          </svg>
          <span>&nbsp;&nbsp;{{ $t(menu.title) }}</span>
        </template>
        <el-menu-item-group>
          <!-- 循环children -->
          <el-menu-item v-for="item in menu.children" :index="item.name"
            @click="itemChange([menu.name, item.name], [menu.title, item.title])"><svg class="icon el-icon"
              aria-hidden="true">
              <use :xlink:href="item.icon"></use>
            </svg>&nbsp;
            <span>{{ $t(item.title) }}</span></el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <!-- 没有children的情况 -->
      <el-menu-item v-else :index="menu.name" @click="itemChange([menu.name], [menu.title])">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="menu.icon"></use>
        </svg>&nbsp;
        <template #title>{{ $t(menu.title) }}</template></el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

import useEnv from '@/hooks/useEnv';
const title = useEnv.VITE_APP_TITLE

import { useAsiderStore } from '../../stores/asider'
const asiderStore = useAsiderStore()
//logo
// const url = ref('../assets/logo.svg')
import url from '@/assets/logo.svg'

import '@/assets/iconfont.js'


import rouApi from "@/api/routerApi"
import findHelp from '@/utils/findHelp.js'

//菜单集合
const menus = ref(rouApi.getRouter())

// 点击item
/***
 * 左侧菜单点击，传入name和title
 */
const itemChange = (array, title) => {
  const name = array[array.length - 1]
  //添加标签页，i18n的title和route的name
  asiderStore.addTableTab({ title: findHelp.findTitleRecursive(menus.value, name), name: name })
  asiderStore.activeIndex = name
  //导航赋值为i18n
  asiderStore.breadcrumbs = title
}







import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style  lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  //   min-height: 60vh;
}

@media screen and (min-width: 480px) {
  .el-menu-vertical-demo {
    height: 86vh;
  }

  @media screen and (min-width: 807px) {
    .el-menu-vertical-demo {
      height: 92vh;
    }
  }


}

.icon {
  width: 18px;
  height: 18px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.logo {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  height: 32px;
  border-bottom: rgba($color: #409eff, $alpha: .3) 1px solid;

  .logo-title {
    width: 60%;
    line-height: 32px;
    color: #409eff;
  }
}
</style>