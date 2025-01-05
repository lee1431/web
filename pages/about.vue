<!-- pages/about.vue -->
<template>
    <div>
        <TheHeader />
        <!-- 메인 컨텐츠: 상단 섹션 -->
        <section id="about">
            <div class="container position-relative">
                <img src="/about/main_12.png" class="img-fluid cropped-main-img" alt="main_12" />
                <!-- Text overlay with animation -->
                <div class="text-overlay">
                    <h1 class="fade-in fw-bold">기장 엔지니어링</h1>
                    <p class="fade-in delay">사람과 자연이 공존하는 세상을 추구합니다.</p>
                </div>
            </div>
        </section>

        <!-- ===================== History Section ===================== -->
        <section class="section mt-5 mb-5">
            <div class="container">
                <div class="d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-award" viewBox="0 0 16 16">
                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 
                    1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 
                    1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 
                    1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 
                    1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 
                    6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 
                    1.126l1.356.702z" />
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 
                    13.126l-1.982-.332L4 11.794z" />
                    </svg>
                    <h3 class="m-0 ms-2">주 요 연 혁</h3>
                </div>
                <hr />
                <div class="timeline">
                    <!-- Timeline Item 1 -->
                    <div class="timeline-item">
                        <div class="timeline-date">1998.07.01</div>
                        <div class="timeline-content">
                            <h5>법인설립</h5>
                            <p>(주)기장엔지니어링 법인 설립<br />자본금 50,000,000원</p>
                        </div>
                    </div>
                    <!-- Timeline Item 2 -->
                    <div class="timeline-item">
                        <div class="timeline-date">1999.01.11</div>
                        <div class="timeline-content">
                            <h5>독일, 미국 Heimbach 社 제휴</h5>
                            <p>독일, 미국 Heimbach 社와 필터 제조 기술 및 판매 제휴</p>
                        </div>
                    </div>
                    <!-- ... 나머지 항목 동일하게 ... -->
                    <div class="timeline-item">
                        <div class="timeline-date">2024.07.12</div>
                        <div class="timeline-content">
                            <h5>기계설비공사건설업 등록</h5>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===================== 조직도 ===================== -->
        <section class="section mt-5 mb-5">
            <div class="container position-relative">
                <div class="d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-diagram-3" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 
                    1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 
                    6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 
                    0V8h-5v.5a.5.5 0 0 1-1 
                    0V8h-5v.5a.5.5 0 0 1-1 
                    0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 
                    0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 
                    .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 
                    0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM0 
                    11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 
                    1.5 0 0 1 4 
                    11.5v1A1.5 1.5 0 0 1 2.5 
                    14h-1A1.5 1.5 0 0 1 0 
                    12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 
                    0 0 0 .5.5h1a.5.5 0 0 0 
                    .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5A1.5 
                    1.5 0 0 1 7.5 
                    10h1a1.5 1.5 0 0 1 1.5 
                    1.5v1A1.5 1.5 0 0 1 8.5 
                    14h-1A1.5 1.5 0 0 1 6 
                    12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 
                    0 0 0 .5.5h1a.5.5 0 0 0 
                    .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 
                    1.5 0 0 1 1.5-1.5h1a1.5 
                    1.5 0 0 1 1.5 
                    1.5v1a1.5 1.5 0 0 1-1.5 
                    1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 
                    0 0 0-.5.5v1a.5.5 0 0 0 
                    .5.5h1a.5.5 0 0 0 
                    .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                    </svg>
                    <h3 class="m-0 ms-2">조직도</h3>
                </div>
                <hr />
                <img src="/about/ctree.png" class="img img-fluid" alt="조직도" />
            </div>
        </section>

        <!-- ===================== 인력보유현황 ===================== -->
        <section class="section mt-5 mb-5">
            <div class="container position-relative">
                <div class="d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-person-check" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 
                    3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 
                    2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 
                    0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 
                    0 1 1 .858.514M11 5a3 3 0 1 1-6 
                    0 3 3 0 0 1 6 0M8 
                    7a2 2 0 1 0 0-4 
                    2 2 0 0 0 0 4" />
                        <path d="M8.256 14a4.5 4.5 0 0 
                    1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 
                    10.68 5.711 10 8 10q.39 
                    0 .74.025c.226-.341.496-.65.804-.918Q8.844 
                    9.002 8 9c-5 0-6 
                    3-6 4s1 1 1 1z" />
                    </svg>
                    <h3 class="m-0 ms-2">인력보유현황</h3>
                </div>
                <hr />
                <img src="/about/worker.png" class="img img-fluid mb-3" alt="인력보유현황" />
                <img src="/about/skill.png" class="img img-fluid" alt="스킬" />
            </div>
        </section>

        <!-- ===================== 업면허/등록증, 인증서 ===================== -->
        <section class="section mt-5 mb-5">
            <div class="container position-relative">
                <div class="d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-file-richtext" viewBox="0 0 16 16">
                        <path d="M7 
                    4.25a.75.75 0 1 
                    1-1.5 0 .75.75 0 0 1 
                    1.5 
                    0m-.861 1.542 
                    1.33.886 1.854-1.855a.25.25 
                    0 0 1 .289-.047l1.888.974V7.5a.5.5 
                    0 0 1-.5.5H5a.5.5 
                    0 0 1-.5-.5V7s1.54-1.274 
                    1.639-1.208M5 
                    9a.5.5 0 0 0 0 
                    1h6a.5.5 0 0 0 0-1zm0 
                    2a.5.5 0 0 0 0 
                    1h3a.5.5 0 0 0 0-1z" />
                        <path d="M2 2a2 2 0 0 1 
                    2-2h8a2 2 0 0 1 
                    2 2v12a2 2 0 0 
                    1-2 2H4a2 2 0 
                    0 1-2-2zm10-1H4a1 1 0 0 0-1 
                    1v12a1 1 0 0 0 1 
                    1h8a1 1 0 0 0 1-1V2a1 1 0 
                    0 0-1-1" />
                    </svg>
                    <h3 class="m-0 ms-2">업면허 및 등록증, 인증서</h3>
                </div>
                <hr />
                <div class="row justify-content-center">
                    <div class="col-md-3 mb-3">
                        <img src="/about/about-11.png" class="img img-fluid mx-auto" alt="license1" />
                    </div>
                    <div class="col-md-3 mb-3">
                        <img src="/about/about-12.png" class="img img-fluid mx-auto" alt="license2" />
                    </div>
                    <div class="col-md-3 mb-3">
                        <img src="/about/about-13.png" class="img img-fluid mx-auto" alt="license3" />
                    </div>
                    <div class="col-md-3 mb-3">
                        <img src="/about/about-14.png" class="img img-fluid mx-auto" alt="license4" />
                    </div>
                </div>
            </div>
        </section>

        <!-- ===================== 오시는길 ===================== -->
        <section class="section mt-5 mb-5">
            <div class="container position-relative">
                <div class="d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-car-front" viewBox="0 0 16 16">
                        <path d="M4 9a1 1 0 1 1-2 
                    0 1 1 0 0 1 2 
                    0m10 
                    0a1 1 0 1 1-2 
                    0 1 1 0 0 1 2 
                    0M6 
                    8a1 1 0 0 
                    0 0 
                    2h4a1 1 0 1 0 0-2zM4.862 
                    4.276 3.906 
                    6.19a.51.51 0 0 0 
                    .497.731c.91-.073 
                    2.35-.17 
                    3.597-.17s2.688.097 
                    3.597.17a.51.51 
                    0 0 0 .497-.731l-.956-1.913A.5.5 
                    0 0 0 10.691 
                    4H5.309a.5.5 
                    0 0 0-.447.276" />
                        <path d="M2.52 
                    3.515A2.5 2.5 0 
                    0 1 4.82 
                    2h6.362c1 
                    0 1.904.596 
                    2.298 
                    1.515l.792 
                    1.848c.075.175.21.319.38.404.5.25.855.715.965 
                    1.262l.335 
                    1.679q.05.242.049.49v.413c0 
                    .814-.39 
                    1.543-1 
                    1.997V13.5a.5.5 
                    0 0 1-.5.5h-2a.5.5 
                    0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 
                    .088s-2.708-.04-4-.088V13.5a.5.5 
                    0 0 1-.5.5h-2a.5.5 
                    0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413q0-.148-.03-.294l-.335-1.68a.8.8 
                    0 0 0-.43-.563 
                    1.8 1.8 0 0 1-.853-.904l-.792-1.848A1.5 
                    1.5 0 0 0 4.82 3z" />
                    </svg>
                    <h3 class="m-0 ms-2">오시는길</h3>
                </div>
                <hr />
                <div>
                    <img src="/about/visitus_m.jpg" class="img img-fluid me-3 mb-3" alt="지도1" />
                    <img src="/about/visitus_s.gif" class="img img-fluid mb-3" alt="지도2" />
                </div>
            </div>
        </section>

        <TheFooter />

        <!-- 맨 위로 이동 버튼 -->
        <button id="scrollToTopBtn" class="btn btn-light border">
            <i class="bi bi-arrow-up"></i>
        </button>
    </div>
</template>

<script setup>
/*
    특별한 로직이 필요 없다면 비어있어도 괜찮습니다.
    onMounted 등 훅을 사용해 스크롤 이벤트 제어나
    API 호출을 할 수도 있습니다.
*/
</script>

<style scoped>
/* 필요 시, 기존 main.css 내용을 일부 여기로 가져와도 됩니다. */

/* 예시로 .text-overlay, .fade-in, .timeline 등 */
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

.timeline {
    margin-top: 2rem;
}

.timeline-item {
    display: flex;
    margin-bottom: 1rem;
}

.timeline-date {
    width: 120px;
    font-weight: bold;
}

.timeline-content {
    flex: 1;
}

/* 구분선 */
.b-divider {
    border-bottom: 1px solid #ccc;
    margin: 2rem 0;
}

/* Footer */
.footer {
    padding: 1rem;
    background-color: #f8f9fa;
}

.footer-logo img {
    width: 60px;
    height: auto;
}

.footer-content small {
    color: #666;
}

/* Scroll To Top Button */
#scrollToTopBtn {
    position: fixed;
    right: 30px;
    bottom: 30px;
}
</style>
