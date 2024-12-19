import router from "@/router";
import { useLoginUserStore } from "@/store/user/useLoginUserStore";
import { message } from "ant-design-vue";

router.beforeEach((to, from, next) => {
  const loginUser = useLoginUserStore().loginUser;
  const path = to.fullPath;
  if (path.startsWith("/admin/") && (!loginUser || loginUser.userRole !== 1)) {
    message.error("没有权限");
    next("/user/login?redirectTo=" + path);
    return;
  }
  next();
});
