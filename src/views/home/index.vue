<script setup lang="ts">
import { EHeaderSource } from '@/enums/layout'
import Header from '../layout/Header.vue'
</script>

<template>
  <Header :source="EHeaderSource.portal" />
</template>
