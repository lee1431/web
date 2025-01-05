<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top pt-4 shadow-sm bg-light">
    <div class="container">
      <!-- 로고 및 회사명 -->
      <a class="navbar-brand fw-bold" href="/">
        <img src="/logo.png" alt="회사 로고" width="40" height="40" class="me-2" />
        (주)기장엔지니어링
      </a>

      <!-- 토글 버튼 -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 메뉴 항목 -->
      <div class="collapse navbar-collapse justify-content-end fw-semibold" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/about">회사소개</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              사업분야
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/business#supervising">- 소방공사 감리업</a></li>
              <li><a class="dropdown-item" href="/business#design">- 소방시설 설계업</a></li>
              <li><a class="dropdown-item" href="/business#diagnosis">- 에너지진단 사업</a></li>
              <li><a class="dropdown-item" href="/business#esco">- ESCO 사업</a></li>
              <li><a class="dropdown-item" href="/business#planning">- 에너지사용계획 사업</a></li>
              <li><a class="dropdown-item" href="/business#tabcom">- T.A.B커미셔닝 사업</a></li>
              <li><a class="dropdown-item" href="/business#firetab">- 소방제연T.A.B 사업</a></li>
              <li><a class="dropdown-item" href="/business#inspection">- 기계설비 성능점검 사업</a></li>
              <li><a class="dropdown-item" href="/business#verification">- 터널 제연설비 성능검증 사업</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/performance">주요실적</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">고객지원</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>