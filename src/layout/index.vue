<template>
  <div class="min-w-full">
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
  </div>
</template>
<script lang="ts" setup>
  import Header from './Header.vue'
  import Footer from './Footer.vue'
  import { onMounted } from 'vue'
  onMounted(() => {
    console.log('mounted')
  })
</script>