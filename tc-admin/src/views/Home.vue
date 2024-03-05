<template>
  <div class="common-layout">

    <el-container>
      <el-aside :width="asiderStore.width" class="aside">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <Main />
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>



    <!-- <el-container>
          <el-header>
            <Header />
          </el-header>
          <el-container>
            <el-aside :width="asiderStore.width" class="aside">
              <Aside />
            </el-aside>
            <el-container>
              <el-main>
                <Main />
              </el-main>
              <el-footer>
                <Footer />
              </el-footer>
            </el-container>
          </el-container>
        </el-container> -->

  </div>
</template>


<script setup>
//菜单
import { useAsiderStore } from '../stores/asider';
const asiderStore = useAsiderStore()
import Aside from '../components/Layout/Aside.vue'

// 主页
import Main from '../components/Layout/Main.vue';

//页头
import Header from '../components/Layout/Header.vue';
// 页脚
import Footer from '../components/Layout/Footer.vue';




</script>

<style lang="scss">
// @media screen and (min-width: 480px) {
//   .aside {
//     height: 86vh;
//   }

//   @media screen and (min-width: 807px) {
//     .aside {
//       height: 92vh;
//     }
//   }
// }</style>
