/*
function showContent(sectionId) {
	var contentSections = document.getElementsByClassName("content-section");
	for (var i = 0; i < contentSections.length; i++) {
		contentSections[i].style.display = "none";
	}
	document.getElementById(sectionId).style.display = "block";
}

function showSectionFromURL() {
	const urlParams = new URLSearchParams(window.location.search);
	const section = urlParams.get('section');
	if (section) {
		showContent(section);
	} else {
		showContent("supervising");
	}
}
document.addEventListener("DOMContentLoaded", showSectionFromURL);
*/

window.onscroll = function() {
      const scrollBtn = document.getElementById("scrollToTopBtn");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
};

// 버튼 클릭 시 최상위로 이동
document.getElementById("scrollToTopBtn").onclick = function() {
window.scrollTo({ top: 0, behavior: 'smooth' });
};
