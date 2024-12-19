<template>
  <div id="loginView">
    <div class="title">欢迎注册用户中心</div>
    <a-form
      class="login-form"
      :model="userForm"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 18 }"
      label-align="left"
      @finish="submitRegister"
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

      <a-form-item
        label="确认密码"
        name="confirmPassword"
        :rules="[{ required: true, message: '请确认密码' }]"
      >
        <a-input-password v-model:value="userForm.confirmPassword" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 10, span: 14 }">
        <a-button type="primary" html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { userLogin, userRegister } from "@/api/user/user";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";

interface UserForm {
  userAccount: string;
  userPassword: string;
  confirmPassword: string;
}

const router = useRouter();

const userForm = reactive<UserForm>({
  userAccount: "",
  userPassword: "",
  confirmPassword: "",
});

const submitRegister = async () => {
  if (userForm.userPassword !== userForm.confirmPassword) {
    message.error("两次密码不一致");
    return;
  }

  const res = await userRegister(userForm);
  if (res.data.code === 2000) {
    message.success("注册成功");
    router.replace("/user/login");
  } else {
    message.error(res.data.msg + ", " + res.data.detail);
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
