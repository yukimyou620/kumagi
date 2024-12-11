// ハンバーガーメニュー
const menuAlt = document.querySelector('.menu_alt');
const menuToggle = document.querySelector('.menu_toggle');
const menuToggleTexts = document.querySelectorAll('.menu_toggle_text');
const menuToggleNav = document.querySelector('.menu_alt_nav');
const menuToggleNavItems = document.querySelectorAll('.nav_toggle');
const menuToggleNavItemBlocks = document.querySelectorAll('.menu_alt_nav_item_block');
const menuFooter = document.querySelector('.alt_menu_footer');
const overlay = document.querySelector('.menu_overlay');

// ハンバーガーのクリックイベント
menuToggle.addEventListener('click', () => {
  menuAlt.classList.toggle('active');
  menuToggle.classList.toggle('active');
  menuToggleTexts.forEach((text) => text.classList.toggle('active'));
  menuToggleNav.classList.toggle('active');
  menuFooter.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('menu_open');
});

// ＋のクリックイベント
menuToggleNavItems.forEach((toggle, index) => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menuToggleNavItemBlocks[index].classList.toggle('active');
  });
});

// ヴェールをクリックしてメニューを閉じる
overlay.addEventListener('click', () => {
  menuAlt.classList.remove('active');
  menuToggle.classList.remove('active');
  menuToggleTexts.forEach((text) => text.classList.toggle('active'));
  menuToggleNav.classList.remove('active');
  menuToggleNavItems.forEach((item) => item.classList.remove('active'));
  menuToggleNavItemBlocks.forEach((block) => block.classList.remove('active')); 
  menuFooter.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('menu_open');
});

// ハンバーガー開いている時の画面幅チェック
function checkWidthAndRemoveClass() {
  if (window.innerWidth > 1050 && menuToggleNav.classList.contains('active')) {
    menuAlt.classList.remove('active');
    menuToggle.classList.remove('active');
    menuToggleTexts.forEach((text) => text.classList.toggle('active'));
    menuToggleNav.classList.remove('active');
    menuToggleNavItems.forEach((item) => item.classList.remove('active'));
    menuToggleNavItemBlocks.forEach((block) => block.classList.remove('active')); 
    menuFooter.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('menu_open');
  }
}
// 画面サイズ変更時にチェック
window.addEventListener('resize', checkWidthAndRemoveClass);


//スライドショー
$(document).ready(function() {
    let currentSlide = 0;
    const slides = $(".slideshow div");
    const dots = $(".dot");
    const slideDuration = 4000; // スライドの表示時間
    const fadeDuration = 100;   // フェードアニメーションの時間
    let slideInterval;          // 自動スライドのタイマー
  
    function nextSlide() {
      const nextSlideIndex = (currentSlide + 1) % slides.length;
  
      slides.eq(currentSlide).stop(true, true).fadeOut(fadeDuration, function() {
        slides.removeClass("active");
        slides.eq(nextSlideIndex).fadeIn(fadeDuration).addClass("active");
        currentSlide = nextSlideIndex;
        dots.removeClass("active").eq(currentSlide).addClass("active");
      });
    }
  
    function startSlideShow() {
      // 自動スライドのセット
      slideInterval = setInterval(nextSlide, slideDuration);
    }
  
    function resetSlideShow() { // 現在の自動スライドを停止して、新しく開始
      clearInterval(slideInterval);
      startSlideShow();
    }
  
    // インジケーターをクリックしたときの動作
    dots.each(function(index) {
      $(this).click(function() {
        // クリック時にスライドショーをリセット
        resetSlideShow();
        if (index !== currentSlide) {
          slides.eq(currentSlide).stop(true, true).fadeOut(fadeDuration, function() {
            slides.removeClass("active");
            slides.eq(index).fadeIn(fadeDuration).addClass("active");
            currentSlide = index;
            dots.removeClass("active").eq(currentSlide).addClass("active");
          });
  

        }
      });
    });
  
    // 自動スライドショーを開始
    startSlideShow();
  });
  