<template>
  <ComLauguageDropdown />
  <!-- 测试一 -->
  <div class="block">
    <span class="demonstration">时间选择器</span>
    <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :disabled-date="disabledDate"
      :shortcuts="shortcuts"
    >
    </el-date-picker>
  </div>
  <!-- 测试二 分页 -->
  <el-calendar v-model="value">
  </el-calendar>
</template>

<script setup lang="ts">
import { ref  } from "vue";
import ComLauguageDropdown from "@/components/public/ComLauguageDropdown.vue";

const value = ref(new Date());
const value1 = ref("");
const value2 = ref("");
const shortcuts = ref([{
        text: 'Today',
        value: new Date(),
      }, {
        text: 'Yesterday',
        value: (() => {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24)
          return date
        })(),
      }, {
        text: 'A week ago',
        value: (() => {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
          return date
        })(),
      }]);


const disabledDate = (time: Date) => {
	return time.getTime() > Date.now();
}

</script>

<style lang="scss" scoped>
</style>