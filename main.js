// pagenation
const PAGE_LENGTH = document.querySelectorAll('.js_page').length;

function changeColor(pageNum) {
    //一旦全てのボタンを黒くする
    document.querySelectorAll('.page_btns li').forEach(element => {
        element.style.color = '#000';
    });
    if(pageNum <= 1) {
        document.getElementById('prev_btn').style.color = '#aaa';
    } else if(pageNum >= PAGE_LENGTH) {
        document.getElementById('next_btn').style.color = '#aaa';
    }
    document.getElementById(`page${pageNum}_btn`).style.color = '#aaa';
}

function checkPage() {
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
    checkPage();
    if (btn === 'prev') {
        if (nowPageNum <= 1) {
            return;
        }
        changePage(nowPageNum - 1);
    } else if (btn === 'next') {
        if (nowPageNum >= PAGE_LENGTH) {
            return;
        }
        changePage(nowPageNum + 1);
    } else {
        changePage(btn);
    }

    checkPage();
    changeColor(nowPageNum);
}

checkPage();
changeColor(nowPageNum);