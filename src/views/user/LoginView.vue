<template>
  <div id="loginView">
    <div class="title">欢迎登录用户中心</div>
    <a-form
      class="login-form"
      :model="userForm"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 18 }"
      label-align="left"
      @finish="submitLogin"
    >
      <a-form-item
        label="账号"
        name="userAccount"
        :rules="[{ required: true, message: '请输入账号' }]"
      >
        <a-input v-model:value="userForm.userAccount" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="userPassword"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <a-input-password v-model:value="userForm.userPassword" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 10, span: 14 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { userLogin } from "@/api/user/user";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useLoginUserStore } from "@/store/user/useLoginUserStore";

interface UserForm {
  userAccount: string;
  userPassword: string;
}

const router = useRouter();
const loginUserStore = useLoginUserStore();

const userForm = reactive<UserForm>({
  userAccount: "",
  userPassword: "",
});

const submitLogin = async () => {
  const res = await userLogin(userForm);
  if (res.data.code === 2000 && res.data.data) {
    message.success("登录成功");
    loginUserStore.setLoginUser(res.data.data);
    await router.replace("/index");
  } else {
    message.error(res.data.msg);
  }
};
</script>
<style scoped>
#loginView .title {
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 20px;
}

#loginView .login-form {
  width: 480px;
  margin: 0 auto;
}
</style>
