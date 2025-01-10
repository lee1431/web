<template>
  <div class="admin-login text-center">
    <!-- 접었다 펼 수 있는 버튼 -->
    <button 
      class="btn btn-link text-decoration-none text-primary p-0" 
      @click="toggleLoginForm"
      aria-label="관리자 로그인 토글">
      관리자로그인
    </button>

    <!-- 로그인 폼 -->
    <form v-if="!isAdmin&&showLogin" @submit.prevent="handleLogin" class="border p-4 rounded shadow">
      <h5 class="mb-3">관리자 로그인</h5>
      <div class="mb-3">
        <label for="username" class="form-label">아이디</label>
        <input
          id="username"
          type="text"
          class="form-control"
          v-model="loginCredentials.username"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">비밀번호</label>
        <input
          id="password"
          type="password"
          class="form-control"
          v-model="loginCredentials.password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">로그인</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCookie } from '#app';

// 상태 및 로그인 정보
const isAdmin = useCookie('isAdmin', {
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'Strict',
});

const loginCredentials = ref({
  username: '',
  password: ''
});

const showLogin = ref(false); // 로그인 폼 표시 여부

function toggleLoginForm() {
  showLogin.value = !showLogin.value;
}

// 로그인 처리 함수
async function handleLogin() {
  try {
    const { username, password } = loginCredentials.value;

    // API 호출
    const response = await $fetch('/api/login', {
      method: 'POST',
      body: { username, password }
    });

    if (response.success) {
      // 로그인 성공 시 처리
      isAdmin.value = true;

      // 쿠키 설정
      const adminCookie = useCookie('isAdmin', {
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict'
      });
      adminCookie.value = 'true';

      alert('로그인에 성공했습니다.');
    } else {
      alert('로그인 정보가 올바르지 않습니다. 다시 시도해주세요.');
    }
  } catch (error) {
    console.error('로그인 중 오류 발생:', error);
    alert('로그인 중 문제가 발생했습니다.');
  }
}

</script>

<style scoped>
.admin-login {
  max-width: 400px;
  margin: 0 auto;
}
</style>
