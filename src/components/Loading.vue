
<script lang="ts" setup>
const props = defineProps({
  isLoading: Boolean,
});
</script>
<style lang="scss">
  .bazzi-loading {
    background-image: url('@/assets/images/Loading.gif');
    background-repeat: no-repeat;
    background-attachment: 100%;
    width: 200px;
    height: 200px;
  }
</style>
<template>
  <div class="bazzi-loading" v-if="props.isLoading || true">
    
  </div>
</template>