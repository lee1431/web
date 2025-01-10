<template>

</template>

<script setup>
import { ref } from 'vue';
import { useCookie } from '#app'; // Nuxt의 쿠키 헬퍼 사용

// 공지사항 데이터
const newNotice = ref({
  title: '',
  content: ''
});

const props = defineProps({
  addNotice: Function, // SHA 값
  required: true
});

// console.log('sha : ' + sha);

</script>

<style scoped>
.notices-form {
  max-width: 400px;
  margin: auto;
}
</style>