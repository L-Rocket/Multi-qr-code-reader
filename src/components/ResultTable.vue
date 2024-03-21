<template>
  <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                label="序号"
                width="80">
                <template  #default="scope">{{ scope.$index + 1 }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="扫描结果"
                >
                <template  #default="scope">{{scope.row.data}}</template>
                </el-table-column>
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="deleteRow(scope.$index)"
        >
          Remove
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px; display: flex;  justify-content: center;">
    <el-button type="success" round  @click="CopyBtn">复制所选</el-button>
  </div>
  
</template>

<script lang="ts" setup>
// import { defineProps } from 'vue';

// const props = defineProps({
//   message: [], // 声明子组件的属性
// });
import { onMounted } from "vue";

import { useStore } from 'vuex';

const store = useStore();


import { ref } from 'vue'
import { ElMessage,ElMessageBox  } from 'element-plus'

interface User {
  data: string
}

let Getdata = store.state.data

let tableData = ref<User[]>([
   
])

onMounted(async() => {
  console.log("Getdata", store.state.data)
  tableData.value = Getdata.map((item: string) => ({ data: item }))
  console.log("tableData", tableData)
});
const multipleSelection = ref<User[]>([])

const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

const deleteRow = async (index: number) => {
  ElMessageBox.confirm(
    '确定要删除该行数据吗？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      // 用户点击了确定按钮，执行删除操作
      tableData.value.splice(index, 1)
      ElMessage.success('删除成功')
    })
    .catch(() => {
      // 用户点击了取消按钮，不执行任何操作
      ElMessage.info('取消删除')
    })
}


const CopyBtn = () => {
  if (multipleSelection.value.length === 0) {
    ElMessage.warning('请选择要复制的行')
    return
  }

  const clipboardData = multipleSelection.value.map(item => item.data).join('\n')

  navigator.clipboard.writeText(clipboardData)
    .then(() => {
      ElMessage.success('已成功复制所选行数据到剪贴板')
    })
    .catch(err => {
      ElMessage.error('复制失败: ' + err)
    })
}

</script>
