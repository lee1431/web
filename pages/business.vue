<template>
  <TheHeader />
  <div>
    <!-- 메인 컨텐츠: 상단 섹션 -->
    <section id="about">
      <div class="container position-relative">
        <img src="/business.png" class="img-fluid cropped-main-img" alt="business" />
        <!-- Text overlay with animation -->
        <div class="text-overlay">
          <h1 class="fade-in fw-bold">기술의 다양화 및 전문화</h1>
          <p class="fade-in delay">탁월한 기술력으로 고객만족을 넘어선 가치를 창출합니다.</p>
        </div>
      </div>
    </section>

    <!-- Business Section -->
    <section class="section mt-5 mb-5">
      <div class="container">
        <div class="business-section d-flex">
          <!-- 왼쪽 메뉴 -->
          <nav class="left-menu me-4">
            <h3>사업분야</h3>
            <ul>
              <li>
                <a href="#" @click.prevent="selectSection('supervising')">- 소방공사 감리업</a>
              </li>
              <li>
                <a href="#" @click.prevent="selectSection('design')">- 소방시설 설계업</a>
              </li>
              <li>
                <a href="#" @click.prevent="selectSection('diagnosis')">- 에너지진단 사업</a>
              </li>
              <li>
                <a href="#" @click.prevent="selectSection('esco')">- ESCO 사업</a>
              </li>
              <li>
                <a href="#" @click.prevent="selectSection('planning')">- 에너지사용계획 사업</a>
              </li>
              <li>
                <a href="#" @click.prevent="selectSection('tabcom')">- T.A.B커미셔닝 사업</a>
              </li>
              <li>
                <a href="#" @click.prevent="selectSection('firetab')">- 소방제연T.A.B 사업</a>
              </li>
              <li>
                <a href="#" @click.prevent="selectSection('inspection')">- 기계설비 성능점검 사업</a>
              </li>
              <li>
                <a href="#" @click.prevent="selectSection('verification')">- 터널 제연설비 성능검증 사업</a>
              </li>
            </ul>
          </nav>

          <!-- 오른쪽 컨텐츠 -->
          <div class="right-content flex-grow-1">
            <!-- 각각의 섹션 내용을 conditionally render -->
            <!-- supervising -->
            <div v-if="activeSection === 'supervising'" class="content-section">
              <h4>소방공사 감리업</h4>
              <p>소방시설 설치공사 전 과정을 전문적으로 감리합니다.</p>
            </div>

            <!-- design -->
            <div v-else-if="activeSection === 'design'" class="content-section">
              <h4>소방시설 설계업</h4>
              <p>효율적이고 안전한 소방설비 설계를 제공합니다.</p>
            </div>

            <!-- diagnosis -->
            <div v-else-if="activeSection === 'diagnosis'" class="content-section">
              <h4>에너지진단 사업</h4>
              <p>에너지 사용 현황 파악 및 절감 방안을 제시합니다.</p>
            </div>

            <!-- esco -->
            <div v-else-if="activeSection === 'esco'" class="content-section">
              <h4>ESCO 사업</h4>
              <p>에너지 절약 시설 및 시스템을 제공하여 비용 절감을 실현합니다.</p>
            </div>

            <!-- planning -->
            <div v-else-if="activeSection === 'planning'" class="content-section">
              <h4>에너지사용계획 사업</h4>
              <p>에너지 합리화를 위한 최적의 사용계획을 수립합니다.</p>
            </div>

            <!-- tabcom -->
            <div v-else-if="activeSection === 'tabcom'" class="content-section">
              <h4>T.A.B커미셔닝 사업</h4>
              <p>시스템 성능시험과 커미셔닝 절차를 전문적으로 수행합니다.</p>
            </div>

            <!-- firetab -->
            <div v-else-if="activeSection === 'firetab'" class="content-section">
              <h4>소방제연T.A.B 사업</h4>
              <p>소방제연 시스템 점검 및 최적화 컨설팅을 제공합니다.</p>
            </div>

            <!-- inspection -->
            <div v-else-if="activeSection === 'inspection'" class="content-section">
              <h4>기계설비 성능점검 사업</h4>
              <p>각종 기계설비의 성능 및 안전성 점검 서비스를 제공합니다.</p>
            </div>

            <!-- verification -->
            <div v-else-if="activeSection === 'verification'" class="content-section">
              <h4>터널 제연설비 성능검증 사업</h4>
              <p>터널 제연설비 점검 및 성능검증을 통해 안전환경 구축에 기여합니다.</p>
            </div>

            <!-- 기본/기타 케이스 -->
            <div v-else class="content-section text-muted">
              <p>사업 분야를 선택하세요.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <TheFooter />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

/**
 * activeSection: 현재 표시할 사업분야 섹션을 저장
 * 처음엔 아무것도 선택 안 된 상태("") → "사업 분야를 선택하세요." 표시
 */
// 현재 활성화된 섹션명
const activeSection = ref('')

// URL 해시를 읽어와 activeSection을 업데이트
const route = useRoute()
const router = useRoute()

/**
 * 메뉴(왼쪽 클릭)로 섹션 변경
 */
function selectSection(sectionName) {
  activeSection.value = sectionName
  // 해시 변경 (주소창 업데이트)
  // - 현재 경로는 그대로 두고, hash만 새로 설정
  router.push({ hash: '#' + sectionName })
}

function updateSectionFromHash() {
  if (route.hash) {
    activeSection.value = route.hash.replace('#', '')
  } else {
    activeSection.value = ''
  }
}
/**
 * URL 쿼리 "?section=XXX" 로도 접근 가능하게
 */
onMounted(() => {
  updateSectionFromHash()
})

watch(
  () => route.hash,
  () => {
    updateSectionFromHash()
  }
)
</script>

<style scoped>
.page-imgs {
  position: relative;
  width: 100%;
  max-height: 500px;
  overflow: hidden;
}

.page-imgs img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* 텍스트 오버레이 */
.text-overlay {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-align: center;
}

/* left-menu 스타일 */
.left-menu {
  min-width: 200px;
  border-right: 1px solid #ddd;
  padding-right: 1rem;
}

.left-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.left-menu li a {
  display: block;
  padding: 0.5rem 0;
  text-decoration: none;
}

.left-menu h3 {
  margin-bottom: 1rem;
}

/* right-content */
.right-content .content-section {
  margin-bottom: 1rem;
}

/* 간단한 fade-in 예시 (선택 사항) */
.fade-in {
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
