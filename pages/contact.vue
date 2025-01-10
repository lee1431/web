<template>
    <TheHeader />
    <div>
        <!-- 1) Header 컴포넌트 불러오기 -->
        <!-- 2) 메인 섹션 -->
        <section id="about">
            <div class="container position-relative">
                <img src="/business.png" class="img-fluid cropped-main-img" alt="main_12" />
                <!-- Text overlay with animation -->
                <div class="text-overlay">
                    <h1 class="fade-in fw-bold">기장 엔지니어링</h1>
                    <p class="fade-in delay">사람과 자연이 공존하는 세상을 추구합니다.</p>
                </div>
            </div>
        </section>
        <!-- 공지사항 섹션 -->
        <section id="notice2" class="section py-5">
            <div class="container">
                <h2 class="text-center mb-4">공지사항2</h2>
                <div class="row" id="data-container">
                    <!-- 같은 notices를 반복, 혹은 다른 데이터/로직을 적용 가능 -->
                    <div v-for="(notice, i) in notices" :key="notice.uid || `n2-${i}`" class="col-md-6 mb-4">
                        <div class="card card-header">
                            <div class="card-body">
                                <h5 class="card-title">{{ notice.title }}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">
                                    {{ notice.date }}
                                </h6>
                                <p class="card-text">{{ notice.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="pagination"><!-- 페이징 UI 필요 시 구현 --></div>
            </div>
        </section>

        <!-- 5) 새 공지사항 추가 섹션 -->
        <section id="add-notice" class="section" v-if="isAdmin">
            <div class="notices-form p-3 border rounded shadow">
                <h5 class="mb-3">공지사항 추가</h5>
                <form @submit.prevent="handleSubmit">
                    <div class="mb-3">
                        <label for="notice-title" class="form-label">제목</label>
                        <input v-model="newNotice.title" type="text" id="notice-title" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="notice-content" class="form-label">내용</label>
                        <textarea v-model="newNotice.content" id="notice-content" class="form-control" rows="3"
                            required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary w-100 mb-3">추가</button>
                </form>
                <button @click="handleLogout" class="btn btn-danger w-100">로그아웃</button>
            </div>
        </section>
        <section v-else>
            <AdminLogin />
        </section>
        <!-- 6) Footer 컴포넌트 불러오기 -->
        <!-- 맨 위로 이동 버튼 -->
        <button id="scrollToTopBtn" class="btn btn-light border position-fixed bottom-0 end-0 m-3">
            <i class="bi bi-arrow-up"></i>
        </button>
    </div>
    <TheFooter />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCookie } from '#app';
import AdminLogin from '~/components/AdminLogin.vue';
import { useNotices } from '~/composables/useNotices';

const { notices, sha, fetchNotices, addNotice } = useNotices();

// 공지사항 데이터
const newNotice = ref({
    title: '',
    content: ''
});

// 관리자 상태 및 쿠키
const isAdmin = useCookie('isAdmin', {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
});

/**
 * 4) 컴포넌트 마운트 시점에 공지사항 로드
 */
onMounted(() => {
    isAdmin.value = isAdmin.value == null ? localStorage.getItem('isAdmin') === 'true' : isAdmin.value;
    fetchNotices()
})

// 공지사항 추가 처리
async function handleSubmit() {
    if (!isAdmin.value) {
        alert('관리자만 공지사항을 추가할 수 있습니다.');
        return;
    }

    console.log('title : ' + newNotice.value.title);
    console.log('content : ' + newNotice.value.content);

    await addNotice({ title: newNotice.value.title, content: newNotice.value.content });
}

// 로그아웃 처리
function handleLogout() {
    isAdmin.value = null; // isAdmin 상태 초기화
    localStorage.removeItem('isAdmin'); // localStorage에서 제거
    document.cookie = 'isAdmin=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;';

    alert('로그아웃되었습니다.');
}
</script>

<style scoped>
/* 
    기존 main.css에서 필요한 부분을 가져오거나,
    전역 CSS로 처리할 수도 있습니다.
  */

.text-overlay {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    text-align: center;
}

.fade-in {
    animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.delay {
    animation-delay: 0.5s;
}

.section {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.notices-form {
    max-width: 400px;
    margin: auto;
}
</style>