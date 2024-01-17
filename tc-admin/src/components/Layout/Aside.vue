<template>
  <el-menu :default-active="asiderStore.activeIndex" class="el-menu-vertical-demo" :collapse="asiderStore.isCollapse"
    @open="handleOpen" router @close="handleClose" :collapse-transition="false">
    <div class="logo">
      <el-image style="width: 32px; height: 32px" :src="url" fit="fill" />
      <div class="logo-title" v-if="!asiderStore.isCollapse">TC-Admin</div>
    </div>
    <template v-for="menu in menus">
      <el-sub-menu v-if="menu.children?.length" :index="menu.name">
        <template #title>
          <!-- 使用svg -->
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="menu.icon"></use>
          </svg>
          <span>&nbsp;&nbsp;{{ menu.name }}</span>
        </template>
        <el-menu-item-group>
          <!-- 循环children -->
          <el-menu-item v-for="item in menu.children" :index="item.name" @click="itemChange([menu.name, item.name])"><svg
              class="icon el-icon" aria-hidden="true">
              <use :xlink:href="item.icon"></use>
            </svg>&nbsp;
            <span>{{ item.name }}</span></el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <!-- 没有children的情况 -->
      <el-menu-item v-else :index="menu.name" @click="itemChange([menu.name])">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="menu.icon"></use>
        </svg>&nbsp;
        <template #title>{{ menu.name }}</template></el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

import { useAsiderStore } from '../../stores/asider'
const asiderStore = useAsiderStore()
//logo
// const url = ref('../assets/logo.svg')
import url from '/src/assets/logo.svg'

import '/src/assets/iconfont.js'



//菜单集合
const menus = ref([
  {
    name: 'Demo4',
    icon: '#icon-setting'
  },
  {
    name: 'Group',
    icon: '#icon-user',
    children: [
      {
        name: 'Demo1',
        icon: '#icon-user'
      },
      {
        name: 'Demo2',
        icon: '#icon-share'
      }
    ]
  }, {
    name: 'Demo3',
    icon: '#icon-setting'
  }
])

// 点击item
const itemChange = (array) => {
  asiderStore.breadcrumbs = array
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

  .logo-title {
    width: 60%;
    line-height: 32px;
    color: #409eff;
  }
}
</style>