<template>
  <Suspense>
      <template #default>
        <Layout>
          <div>123</div>  
        </Layout>
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
</template>

<script lang="ts" setup>
  import Layout from '@/layout/index.vue';
  import Loading from '@/components/Loading.vue'
</script>

<style scoped></style>
