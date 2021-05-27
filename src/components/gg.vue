<template class="gg">
  ok {{ ggType.count }}
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import type { PropType } from "vue";
import type { GGType } from "../utils/interface-type";

defineProps({
  ggType: {
    type: Object as PropType<GGType>,
    required: true
  }
})

const coun = ref(99);
</script>

<style lang="scss" scoped>
</style>