import { defineStore } from "pinia";
import { ref } from "vue";
import { getCurrentUser } from "@/api/user/user";

// 定义一个store
export const useLoginUserStore = defineStore("loginUser", () => {
  // 初始化变量
  const loginUser = ref<any>({
    username: "未登录",
  });

  // 获取变量信息的方法
  async function fetchLoginUser() {
    const res = await getCurrentUser();
    if (res.data.code === 2000 && res.data.data) {
      loginUser.value = res.data.data;
    }
  }

  // 设置变量的方法
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser;
  }

  return { loginUser, setLoginUser, fetchLoginUser };
});
