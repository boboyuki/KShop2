<template>
  <Suspense>
      <template #default>
        <div>123</div>  
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Loading from '@/components/Loading.vue' 
  const isLoading = ref(true);
</script>

<style scoped></style>
