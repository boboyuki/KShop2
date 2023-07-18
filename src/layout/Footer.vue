<template>
  <footer class="w-full h-56 p-4 flex flex-col justify-center">
    <div class="footer-link flex flex-row py-2">
      <a href="https://www.facebook.com/kartriderTW/" target="_blank">
        <Icon icon="formkit:facebook"></Icon>
      </a>
      <a href="https://kartinfo.me/" target="_blank">
        <img src="@/assets/images/kartinfo.png" />
      </a>
      <a href="https://twitter.com/KartRiderDrift" target="_blank">
        <Icon icon="formkit:twitter"></Icon>
      </a>
    </div>
    <div class="text-white font-bold tracking-wider">
      <p class="m-0">此網站為個人作品，並非商業用途</p>
      <p class="m-0 flex items-center justify-center">
        以上素材為
        <a href="https://tw.nexon.com/main/zh" target="_blank">
          <img src="@/assets/images/nexon.png" alt="nexon website" />
        </a> 所有
      </p>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
<style lang="scss" scoped>
  .footer {
    &-link {
      justify-content: center;
      align-items: center;
      a {
        display: inline-block;
        margin: 0 10px;
        width: 50px;
        height: 50px;
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
        svg {
          color: #1493E3;
          width: 100%;
          height: 100%;
        }
      }
    }
    &-copyright {
      font-weight: 100;
      letter-spacing: 5px;
    }
  }
</style>
