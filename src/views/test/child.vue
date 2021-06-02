<template>
  <div class="child">
    <p style="color: orange;">儿子-</p>
    <span>{{ info.money }}</span>
    <button @click="setMoney()">use money</button>
    <p>{{ lang }}</p>
  </div>
  <Letter></Letter>
</template>

<script setup lang="ts">
import usePerantStore from "@/hooks/usePerantStore";
import { useVueI18n } from "@/hooks/useVueI18n";
import { useInjector } from "@/plugins/store/index";
import Letter from "./letter.vue";

const { info, setMoney } = useInjector(usePerantStore) as ReturnType<typeof usePerantStore>;
const { lang } = useInjector(useVueI18n) as ReturnType<typeof useVueI18n>;

</script>

<style lang="scss" scoped>
</style>