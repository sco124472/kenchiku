'use strict';
//テキストのfadeIn fadeOutに関する
AOS.init();
//終了

/*
  swiper option
*/
const swiper = new Swiper(".swiper-container", {
  speed: 1500, // スライドとスライドの遷移時間
  effect: "fade", // フェード効果
  fadeEffect: {
    // エフェクト詳細
    crossFade: true, // 次のスライドと画像が重なった時にフェードする
  },
  loop: true, // ループ
  autoplay: {
    // 自動再生
    delay: 4500, // 遷移間の遅延

  },

});




//ローディング画面
// クラス変更

window.onload = function () {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
};


//safari対策
window.onpageshow = function (event) {
  if (event.persisted) {
    window.location.reload();
  }
};
