<template>
  <a-row :wrap="false">
    <a-col flex="120px">
      <img src="../assets/logo.png" alt="logo" class="logo" />
      <span class="title">用户中心</span>
    </a-col>
    <a-col flex="auto">
      <a-menu
        v-model:selectedKeys="current"
        mode="horizontal"
        :items="items"
        @click="doMenuCLick"
      />
    </a-col>
    <a-col flex="80px">
      <a-button type="primary">登录</a-button>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import { HomeOutlined, CrownOutlined } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
import { useRouter } from "vue-router";

const router = useRouter();

const current = ref<string[]>([]);
const items = ref<MenuProps["items"]>([
  {
    key: "/index",
    icon: () => h(HomeOutlined),
    label: "主页",
    title: "主页",
  },
  {
    key: "/login",
    label: "用户登录",
    title: "用户登录",
  },
  {
    key: "/register",
    label: "用户注册",
    title: "用户注册",
  },
  {
    key: "/management",
    icon: () => h(CrownOutlined),
    label: "用户管理",
    title: "用户管理",
  },
]);

router.afterEach((to, from, failure) => {
  current.value = [to.path];
});

const doMenuCLick = ({ key }: { key: string }) => {
  router.push({ path: key });
};
</script>

<style scoped>
.logo {
  width: 36px;
  margin-right: 10px;
}

.title {
  line-height: 36px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
</style>
