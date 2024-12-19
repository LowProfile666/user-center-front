<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header">
        <NavBar />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="http://www.zsm666.cn">用户中心 by ZSM</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import { useLoginUserStore } from "@/store/user/useLoginUserStore";

const loginUserStore = useLoginUserStore();
loginUserStore.fetchLoginUser();
</script>

<style scoped>
#basicLayout .content {
  padding: 20px;
  margin-bottom: 60px;
  background-color: #efefef;
  margin-top: 60px;
}

#basicLayout .header {
  position: fixed; /* 固定在页面顶部 */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* 确保 header 位于最上层 */
  background: #ffffff;
  color: unset;
  padding-inline: 20px;
}

#basicLayout .footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: #efefef;
  height: 60px;
}
</style>
