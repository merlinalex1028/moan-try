<script setup lang="ts">
import { EHeaderSource } from '@/enums/layout'
import Header from './Header.vue'
</script>

<template>
  <Header :source="EHeaderSource.portal" />
</template>
