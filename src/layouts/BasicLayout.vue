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
</script>

<style scoped>
#basicLayout .footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: #efefef;
}

#basicLayout .content {
  padding: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to left, lightblue, #fff);
}

#basicLayout .header {
  background: #ffffff;
  color: unset;
  padding-inline: 20px;
  margin-bottom: 16px;
}
</style>
