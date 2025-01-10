<template>
    <TheHeader />
    <div>
        <!-- 헤더 컴포넌트 삽입 -->
        <!-- 메인 컨텐츠: 상단 섹션 -->
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

        <!-- Business Section -->
        <section class="section mt-5 mb-5">
            <div class="container">
                <div class="business-section d-flex">
                    <!-- Left Menu -->
                    <nav class="left-menu me-4">
                        <h3>사업분야</h3>
                        <ul>
                            <li><a href="#supervising">- 소방공사 감리업</a></li>
                            <li><a href="#design">- 소방시설 설계업</a></li>
                            <li><a href="#diagnosis">- 에너지진단 사업</a></li>
                            <li><a href="#esco">- ESCO 사업</a></li>
                            <li><a href="#planning">- 에너지사용계획 사업</a></li>
                            <li><a href="#tabcom">- T.A.B커미셔닝 사업</a></li>
                            <li><a href="#firetab">- 소방제연T.A.B 사업</a></li>
                            <li><a href="#inspection">- 기계설비 성능점검 사업</a></li>
                            <li><a href="#verification">- 터널 제연설비 성능검증 사업</a></li>
                        </ul>
                    </nav>

                    <!-- Right Content -->
                    <div class="right-content flex-grow-1">
                        <h3>내일의 풍요로운 미래를 위해 땀 흘려온 기업이 있습니다.</h3>
                        <hr />
                        <p class="lh-lg">
                            (주)기장엔지니어링은 1998년 창립 이래 사람과 자연이 공존하고,
                            미래에 고갈되어 질 유한한 자원들을 잘 관리하고 지혜롭게 사용하는
                            것이 앞으로 후손들에게 물려주어야 할 사명임을 인식하고 그 일환으로써
                            에너지 절약사업에 바탕을 두고 환경친화적 기업으로 지금까지 성장,
                            발전, 노력하여 왔습니다.
                        </p>

                        <p class="lh-lg">
                            금번 업종의 다양화 및 전문화로서 새로운 도약의 시점을 맞이하여,
                            각 시설의 성능확보 및 효율성은 물론 화재안전을 뒷받침하여
                            국민의 생명과 안전 지킴을 최우선하는 기업으로 성실과 열정
                            그리고 다양한 기술력을 바탕으로 고객만족을 최우선 정책 추진으로
                            함께 발전하는 기업이 되도록 노력하겠습니다.
                        </p>

                        <p class="lh-lg">
                            항상 저희 (주)기장엔지니어링을 격려해 주심을 감사 드리오며,
                            더욱 큰 서비스와 노력하는 모습으로 감사에 보답하도록 하겠습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <TheFooter />
</template>

<style scoped>
/* 기존 main.css에서 필요한 부분만 선택적으로 가져오거나, 전역 CSS에 적용해주세요. */

/* 예: 이미지 오버레이 관련 스타일 */
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

/* Layout for left-menu & right-content */
.business-section {
    display: flex;
}

.left-menu {
    min-width: 200px;
    border-right: 1px solid #ddd;
    padding-right: 1rem;
}

.left-menu ul {
    list-style: none;
    padding: 0;
}

.left-menu li a {
    display: block;
    padding: 0.5rem 0;
    text-decoration: none;
    color: #333;
}

.right-content {
    padding-left: 1rem;
}

.lh-lg {
    line-height: 1.8;
}
</style>