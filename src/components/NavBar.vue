<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import { HomeOutlined, CrownOutlined } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";

const current = ref<string[]>(["mail"]);
const items = ref<MenuProps["items"]>([
  {
    key: "index",
    icon: () => h(HomeOutlined),
    label: "主页",
    title: "主页",
  },
  {
    key: "login",
    label: "用户登录",
    title: "用户登录",
  },
  {
    key: "register",
    label: "用户注册",
    title: "用户注册",
  },
  {
    key: "management",
    icon: () => h(CrownOutlined),
    label: "用户管理",
    title: "用户管理",
  },
]);
</script>
