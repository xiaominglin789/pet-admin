<template>
  <div class="yeye">
    <p>财产: {{ info.money }}</p>
    <Child />
    <button @click="onShow">show</button>
  </div>
</template>

<script setup lang="ts">
import usePerantStore from "@/hooks/usePerantStore";
import { useInjector } from "@/plugins/store";
import Child from "./child.vue";


const { info } = useInjector(usePerantStore, "optional");

const onShow = function() {
  console.log(info);
}
</script>

<style lang="scss" scoped>
</style>