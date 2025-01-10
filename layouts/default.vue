<!-- layouts/default.vue -->
<template>
    <div>
        <TheHeader />
        <NuxtPage />
        <TheFooter />
        <div class="text-center mt-3">
        <AdminLogin /> <!-- 관리자 로그인 컴포넌트 추가 -->
        </div>
    </div>
</template>

<script setup>
import TheHeader from '~/components/TheHeader.vue';
import TheFooter from '~/components/TheFooter.vue';
import AdminLogin from '~/components/AdminLogin.vue';
</script>
