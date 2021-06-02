<template>
  <div class="letter">
    <p style="color: green;">孙子</p>
    <span>{{ info.money }}</span>
    <button @click="onSeting">use money</button>
  </div>
</template>

<script setup lang="ts">
import usePerantStore from "@/hooks/usePerantStore";
import { useVueI18n } from "@/hooks/useVueI18n";
import { useInjector } from "@/plugins/store/index";

const { info, setMoney } = useInjector(usePerantStore) as ReturnType<typeof usePerantStore>;
const { change } = useInjector(useVueI18n) as ReturnType<typeof useVueI18n>;

const onSeting = () => {
  setMoney();
  change("cn");
}

</script>

<style lang="scss" scoped>
</style>