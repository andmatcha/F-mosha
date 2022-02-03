// pagenation
const PAGE_LENGTH = document.querySelectorAll('.js_page').length;

function changeColor(pageNum) {
    document.getElementById(`page${pageNum}_btn`).style.color = '';
}

function checkPage() {
    //一旦全てのボタンを黒くする
    document.querySelectorAll('.page_btns li').forEach(element => {
        element.style.color = '#000';
    });
    //現在のページを取得
    document.querySelectorAll('.js_page').forEach(element => {
        if (element.classList.contains('is_show')) {
            nowPageNum = Number(element.getAttribute('data-page'));
        }
    });
}

function changePage(pageNum) {
    document.querySelectorAll('.js_page').forEach(element => {
        element.classList.remove('is_show');
    });
    document.getElementById(`page${pageNum}`).classList.add('is_show');
}

function clickBtn(btn) {
    document
    if (btn === 'prev') {
        checkPage();
        if (nowPageNum <= 1) {
            return;
        }
        changePage(nowPageNum - 1);
    } else if (btn === 'next') {
        checkPage();
        if (nowPageNum >= PAGE_LENGTH) {
            return;
        }
        changePage(nowPageNum + 1);
    }
    changePage(btn);
}