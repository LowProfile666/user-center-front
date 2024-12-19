<template>
  <div id="managementView">
    <a-input-search
      style="width: 300px; margin-bottom: 20px"
      v-model:value="searchValue"
      placeholder="输入用户昵称"
      @search="getData(searchValue)"
      enter-button
    />
    <a-table :columns="columns" :data-source="data">
      <!--列头-->
      <template #headerCell="{ column }">
        <template v-if="column.dataIndex === 'nickname'">
          <span>
            <smile-outlined />
            {{ column.title }}
          </span>
        </template>
      </template>

      <!--表格数据-->
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'avatar'">
          <a-image :width="80" :src="record.avatar" />
        </template>
        <template v-else-if="column.dataIndex === 'userRole'">
          <span>
            <a-tag color="gold" v-if="record.userRole === 1"> 管理员 </a-tag>
            <a-tag color="green" v-else> 普通用户 </a-tag>
          </span>
        </template>
        <template v-else-if="column.dataIndex === 'gender'">
          <a-tag v-if="record.gender === 1">男</a-tag>
          <a-tag v-else>女</a-tag>
        </template>
        <template v-else-if="column.dataIndex === 'action'">
          <a-button type="primary" danger ghost @click="del(record.id)"
            >删除</a-button
          >
        </template>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts" setup>
import { SmileOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { deleteUser, searchUsers } from "@/api/user/user";
import { message } from "ant-design-vue";

const searchValue = ref<any>("");

const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "用户名",
    dataIndex: "nickname",
  },
  {
    title: "账号",
    dataIndex: "userAccount",
  },
  {
    title: "头像",
    dataIndex: "avatar",
  },
  {
    title: "性别",
    dataIndex: "gender",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "用户角色",
    dataIndex: "userRole",
  },
  {
    title: "操作",
    dataIndex: "action",
  },
];

const data = ref<any>([]);

const del = async (id: string) => {
  let res = await deleteUser(id);
  message.success(res.data.msg);
  getData();
};

const getData = async (username = "") => {
  let res = await searchUsers(username);
  if (res.data.code === 2000) {
    data.value = res.data.data;
  }
};

getData();
</script>
