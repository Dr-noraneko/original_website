// $(".openbtn").click(function () {
//     $(this).toggleClass('active');
// });

// スクロールイベントを監視
window.addEventListener('scroll', function() {
    const image = document.querySelector('.room1');
    const imagePosition = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // 画像が表示エリアに入ったらアニメーションをトリガー
    if (imagePosition < windowHeight - 100) { 
        image.classList.add('show');
    }else {
        image.classList.remove('show'); // 画像が画面外に出たらアニメーションをリセット
    }
});

// スクロールイベントを監視
window.addEventListener('scroll', function() {
    const image = document.querySelector('.room2');
    const imagePosition = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // 画像が表示エリアに入ったらアニメーションをトリガー
    if (imagePosition < windowHeight - 100) { 
        image.classList.add('show');
    }else {
        image.classList.remove('show'); // 画像が画面外に出たらアニメーションをリセット
    }
});

// スクロールイベントを監視
window.addEventListener('scroll', function() {
    const image = document.querySelector('.outside-img');
    const imagePosition = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // 画像が表示エリアに入ったらアニメーションをトリガー
    if (imagePosition < windowHeight - 100) { 
        image.classList.add('show');
    }else {
        image.classList.remove('show'); // 画像が画面外に出たらアニメーションをリセット
    }
});

document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // スムーズなスクロールを実現
    });
});