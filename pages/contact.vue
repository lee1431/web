<template>
    <div>
        <!-- 1) Header 컴포넌트 불러오기 -->
        <TheHeader />

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

        <!-- 3) 공지사항 섹션 1 -->
        <section id="notice" class="section py-5">
            <div class="container">
                <h2 class="text-center mb-4">공지사항</h2>
                <div class="row">
                    <!-- v-for로 notices 배열을 렌더링 -->
                    <div v-for="(notice, i) in notices" :key="notice.uid || i" class="col-md-6 mb-4">
                        <div class="card card-header">
                            <div class="card-body">
                                <h5 class="card-title">{{ notice.title }}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">
                                    {{ notice.date }}
                                </h6>
                                <p class="card-text">{{ notice.content }}</p>
                                <!-- "자세히 보기" 링크는 uid 존재 여부에 따라 표시 -->
                                <a v-if="notice.uid" class="card-link"
                                    :href="`https://llsshh.com/contact.html?view=${notice.link}`">
                                    자세히 보기
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 4) 공지사항 섹션 2 (예시로 동일 데이터 사용) -->
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
        <section id="add-notice" class="section py-5">
            <div class="container">
                <h2 class="text-center mb-4">새 공지사항 추가</h2>
                <!-- v-model로 제목/내용을 바인딩 -->
                <form @submit.prevent="addNotice">
                    <div class="mb-3">
                        <label for="title" class="form-label">제목</label>
                        <input type="text" class="form-control" id="title" v-model="newNotice.title" required />
                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">내용</label>
                        <textarea class="form-control" id="content" v-model="newNotice.content" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">공지사항 추가</button>
                </form>
            </div>
        </section>

        <!-- 6) Footer 컴포넌트 불러오기 -->
        <TheFooter />

        <!-- 맨 위로 이동 버튼 -->
        <button id="scrollToTopBtn" class="btn btn-light border position-fixed bottom-0 end-0 m-3">
            <i class="bi bi-arrow-up"></i>
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

/**
 * 1) Vue 반응형 변수 정의
 */
const notices = ref([])        // 공지사항 목록
const currentSha = ref(null)   // GitHub 파일 SHA (업데이트 시 필요)
const newNotice = ref({        // 새로 추가할 공지사항 데이터
    title: '',
    content: ''
})

/**
 * 2) 공지사항 데이터 불러오기 (GitHub API)
 */
async function fetchNotices() {
    const url = 'https://api.github.com/repos/lee1431/web/contents/notices.json'
    try {
        const response = await fetch(url, {
            headers: { Accept: 'application/vnd.github.v3+json' }
        })
        if (!response.ok) {
            throw new Error(`네트워크 응답이 불량합니다. 상태 코드: ${response.status}`)
        }

        const data = await response.json()
        // Base64 디코딩
        const decodedContent = new TextDecoder('utf-8').decode(
            Uint8Array.from(atob(data.content), c => c.charCodeAt(0))
        )

        // notices 배열 업데이트
        notices.value = JSON.parse(decodedContent)
        currentSha.value = data.sha
    } catch (error) {
        console.error('공지사항 데이터를 가져오는 중 오류가 발생했습니다:', error)
        notices.value = []
        currentSha.value = null
    }
}

/**
 * 3) 새 공지사항 추가 (GitHub에 업데이트)
 */
async function addNotice() {
    // 기존 SHA가 없으면 업데이트 불가
    if (!currentSha.value) {
        alert('기존 공지사항 데이터를 가져오는 데 실패했습니다.')
        return
    }

    // 새 notice 객체 생성
    const newItem = {
        title: newNotice.value.title,
        content: newNotice.value.content,
        date: new Date().toISOString().split('T')[0],
        uid: crypto.randomUUID()
    }
    // 현존 notices에 푸시
    notices.value.push(newItem)

    // GitHub 업데이트용 데이터
    const updateData = {
        message: '공지사항 업데이트',
        content: btoa(
            unescape(encodeURIComponent(JSON.stringify(notices.value, null, 2)))
        ),
        sha: currentSha.value
    }

    // 실제 토큰은 안전한 방식으로 관리 필요
    const v = 'ghp_R62pfNEz'
    const vv = 'nXVBQx2eywNo'
    const vvv = '2veQ47EiGC3in7ek'

    try {
        const updateResponse = await fetch(
            'https://api.github.com/repos/lee1431/web/contents/notices.json',
            {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${v}${vv}${vvv}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateData)
            }
        )

        if (updateResponse.ok) {
            alert('공지사항이 성공적으로 추가되었습니다.')
            // 폼 초기화
            newNotice.value.title = ''
            newNotice.value.content = ''

            // 일정 시간 뒤 다시 목록 재로드
            setTimeout(() => {
                fetchNotices()
            }, 5000)
        } else {
            console.error(
                '공지사항 업데이트 실패:',
                updateResponse.status,
                updateResponse.statusText
            )
        }
    } catch (error) {
        console.error('공지사항 추가 중 오류 발생:', error)
    }
}

/**
 * 4) 컴포넌트 마운트 시점에 공지사항 로드
 */
onMounted(() => {
    fetchNotices()
})
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
</style>