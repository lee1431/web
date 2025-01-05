<template>
  <div>
    <TheHeader />
    <!-- ======================== 전폭 슬라이드(캐러셀) ======================== -->
    <section class="mt-5 pt-5">
      <div id="companyCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"
        data-bs-wrap="true">
        <!-- 슬라이드 내용 -->
        <div class="carousel-inner">
          <div v-for="(banner, idx) in slideBanners" :key="idx" :class="['carousel-item', { active: idx === 0 }]">
            <img :src="banner.image" class="d-block w-100" :alt="banner.alt" />
            <!-- 오버레이 텍스트(원하시면 위치 조절 가능) -->
            <div class="carousel-caption d-none d-md-block">
              <h2 class="fade-in-up-1 fw-bold">{{ banner.title }}</h2>
              <p class="fade-in-up-2">{{ banner.desc }}</p>
            </div>
          </div>
        </div>

        <!-- 이전 버튼 -->
        <button class="carousel-control-prev" type="button" data-bs-target="#companyCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">이전</span>
        </button>

        <!-- 다음 버튼 -->
        <button class="carousel-control-next" type="button" data-bs-target="#companyCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">다음</span>
        </button>
      </div>
    </section>
    <!-- /전폭 슬라이드 -->

    <!-- ======================== 3개의 큰 이미지 + 캡션, 링크 ======================== -->
    <section class="container marketing py-5">
      <div class="row">
        <div v-for="(item, idx) in threeImages" :key="idx" class="col-lg-4 text-center mb-4">
          <img class="bd-placeholder-img rounded-circle" :src="item.image" :alt="item.title" width="240" height="240" />
          <h2 class="fw-normal py-2">{{ item.title }}</h2>
          <p>{{ item.desc }}</p>
          <p>
            <a class="btn btn-secondary" :href="item.link">자세히 &raquo;</a>
          </p>
        </div>
      </div>
    </section>

    <!-- ======================== 공지사항(2:1 구역) ======================== -->
    <section class="container marketing pb-5">
      <div class="row">
        <!-- 구역 제목 -->
        <h4 class="border-bottom pb-2 mb-3"><b>New & Notice</b></h4>

        <!-- 왼쪽(공지사항) : 2의 비중 -->
        <div class="col-lg-8">
          <div class="mt-3 py-3 px-3 bg-body rounded border shadow">
            <div v-if="notices.length === 0" class="text-muted">등록된 공지사항이 없습니다.</div>
            <div class="d-flex text-body-secondary pt-2" v-for="(notice, i) in notices" :key="i">
              <div class="pb-1 mb-0 small lh-sm border-bottom w-100">
                <div class="d-flex justify-content-between">
                  <strong class="text-gray-dark">{{ notice.title }}</strong>
                </div>
                <span class="d-block">{{ notice.date }}</span>
              </div>
            </div>

            <small class="d-block text-end mt-2">
              <a href="#">More</a>
            </small>
          </div>
        </div>

        <!-- 오른쪽(관련법령) : 1의 비중 -->
        <div class="col-lg-4">
          <div class="h-100 mt-3 pt-4 px-4 text-white bg-dark rounded-3">
            <h2>관계법령</h2>
            <hr />
            <div v-for="(law, idx) in laws" :key="idx" class="mb-1">
              <i class="bi bi-file-earmark-pdf-fill">
                <a :href="law.url" target="_blank" class="rawdownload text-white text-decoration-none">
                  &nbsp;{{ law.title }}
                </a>
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TheFooter />

    <!-- 맨 위로 이동 버튼 -->
    <button id="scrollToTopBtn" class="btn btn-light border" :class="{ 'd-none': !showScrollTop }" @click="scrollToTop">
      <i class="bi bi-arrow-up"></i>
    </button>
  </div>
</template>

<script setup>
/* -------------------------------------------
  1) 슬라이드(캐러셀) 예시 데이터
------------------------------------------- */
import { ref, onMounted, onUnmounted } from 'vue';

const slideBanners = ref([
  {
    image: '/slide_1.png',
    alt: '이미지 1',
    title: '환경친화적인 기업',
    desc: '사람과 자연이 공존하는 세상을 추구합니다.1'
  },
  {
    image: '/slide_2.png',
    alt: '이미지 2',
    title: '환경친화적인 기업',
    desc: '사람과 자연이 공존하는 세상을 추구합니다.2'
  },
  {
    image: '/slide_3.png',
    alt: '이미지 3',
    title: '환경친화적인 기업',
    desc: '사람과 자연이 공존하는 세상을 추구합니다.3'
  }
]);

/* -------------------------------------------
  2) 3개의 큰 이미지 + 캡션, 링크
------------------------------------------- */
const threeImages = ref([
  {
    image: '/safe.png',
    title: 'ESCO 사업',
    desc: '에너지절약 전문기업(ESCO)으로, 에너지절약 시설 및 시스템을 제공합니다.',
    link: '#'
  },
  {
    image: '/safetyenergy.png',
    title: '에너지진단사업',
    desc: '사업장의 에너지이용 현황 및 손실 요인을 진단하여 최적 개선안을 제공합니다.',
    link: '#'
  },
  {
    image: '/tab.png',
    title: 'TAB커미셔닝사업',
    desc: '시스템의 계획, 설계, 시공, 성능시험 등 종합적인 기술 서비스를 제공합니다.',
    link: '#'
  }
]);

/* -------------------------------------------
  3) 공지사항 (GitHub API Fetch 예시)
------------------------------------------- */
const notices = ref([]);

async function fetchNotices() {
  const url = 'https://api.github.com/repos/lee1431/web/contents/notices.json';
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });
    if (!response.ok)
      throw new Error(`네트워크 응답이 불량합니다. 상태 코드: ${response.status}`);

    const data = await response.json();
    // Base64 디코딩
    const decodedContent = new TextDecoder('utf-8').decode(
      Uint8Array.from(atob(data.content), (c) => c.charCodeAt(0))
    );
    notices.value = JSON.parse(decodedContent);
  } catch (error) {
    console.error('공지사항 데이터를 가져오는 중 오류가 발생했습니다:', error);
    notices.value = [];
  }
}

/* -------------------------------------------
  4) "관련법령" 목록 (정적/수동 예시)
------------------------------------------- */
const laws = ref([
  { title: '건설기술진흥법', url: '/fs/file001.pdf' },
  { title: '건설기술진흥법 시행규칙', url: '/fs/file002.pdf' },
  { title: '건설기술진흥법 시행령', url: '/fs/file003-1.pdf' },
  { title: '시설물 안전관리에 관한 시행규칙', url: '/fs/file004.pdf' },
  { title: '시설물 안전관리에 관한 시행령', url: '/fs/file005.pdf' },
  { title: '시설물 안전관리에 관한 특별법', url: '/fs/file006.pdf' },
  // 필요에 따라 추가...
]);

/* -------------------------------------------
  5) "Scroll to Top" 버튼 노출
------------------------------------------- */
const showScrollTop = ref(false);

function handleScroll() {
  showScrollTop.value = window.scrollY > 100;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* -------------------------------------------
  6) onMounted & onUnmounted
------------------------------------------- */
onMounted(() => {
  // 공지사항 가져오기
  fetchNotices();

  // 스크롤 이벤트 등록
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  // 스크롤 이벤트 해제
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 캐러셀 텍스트 오버레이 예시 */
.text-overlay {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* 가운데 정렬을 위해 좌우 중앙 이동 */
  color: #fff;
  text-align: center;
  /* 텍스트 중앙 정렬 */
  width: 80%;
  /* 필요 시 줄바꿈을 고려해 폭을 조정 */
}

/* (옵션) 전환 효과 */
.fade-in {
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(-10%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-up-1 {
  animation: fadeInUp 1s forwards;
  animation-delay: 0.5s;
}

.fade-in-up-2 {
  animation: fadeInUp 1s forwards;
  animation-delay: 0.5s;
}



@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
    /* 아래로 20px */
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay {
  animation-delay: 0.5s;
}

/* scrollToTop 버튼 숨김/보임 */
#scrollToTopBtn {
  position: fixed;
  bottom: 30px;
  right: 30px;
}

#scrollToTopBtn.d-none {
  display: none !important;
}
</style>