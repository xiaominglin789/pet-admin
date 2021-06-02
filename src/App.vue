<template>
  <router-view />
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import usePerantStore from "@/hooks/usePerantStore";
import { useProviders } from '@/plugins/store';
import { useVueI18n } from './hooks/useVueI18n';

useProviders(usePerantStore, useVueI18n);

</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
a {
	display: inline-block;
	text-decoration: none;
}
</style>