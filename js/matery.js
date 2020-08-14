import {initModel, showMessage} from "/live2d/waifu-tips.js";
// SessionStorage localStorage 操作
export const setSS = (k, v) => {
    try {
        sessionStorage.setItem(k, v);
    } catch (e) {
    }
}
export const removeSS = (k) => {
    try {
        sessionStorage.removeItem(k);
    } catch (e) {
    }
}
export const getSS = (k) => {
    try {
        return sessionStorage.getItem(k);
    } catch (e) {
        return null
    }
}
export const setLS = (k, v) => {
    try {
        localStorage.setItem(k, v);
    } catch (e) {
    }
}
export const removeLS = (k) => {
    try {
        localStorage.removeItem(k);
    } catch (e) {
    }
}
export const getLS = (k) => {
    try {
        return localStorage.getItem(k);
    } catch (e) {
        return null
    }
}

/* 添加文章卡片 hover 效果 */
const articleCardHover = function () {
    const animateClass1 = 'animated';
    const animateClass2 = 'pulse';
    for (let el of document.querySelectorAll('article .article')) {
        el.addEventListener('mouseover', () => {
            el.classList.add(animateClass1);
            el.classList.add(animateClass2);
        })
        el.addEventListener('mouseleave', () => {
            el.classList.remove(animateClass1);
            el.classList.remove(animateClass2);
        })
    }
};
if (window.innerWidth >= 1040) articleCardHover();

/* 修复文章卡片 div 的宽度. */
let fixPostCardWidth = function (srcId, targetId) {
    let srcDiv = document.getElementById(srcId);
    if (!srcDiv) {
        return;
    }
    let w = srcDiv.style.width;
    if (w >= 450) {
        w = w + 21;
    } else if (w >= 350 && w < 450) {
        w = w + 18;
    } else if (w >= 300 && w < 350) {
        w = w + 16;
    } else {
        w = w + 14;
    }
    const target = document.getElementById(targetId);
    if (target) target.style.width = w;
};

/* 修复 footer 部分的位置，使得在内容比较少时，footer也会在底部 */
let fixFooterPosition = function () {
    document.getElementsByClassName('content')[0].style.minHeight = window.innerHeight - 165;
};

/* 修复样式 */
let fixStyles = function () {
    fixPostCardWidth('navContainer', 'articles');
    fixPostCardWidth('artDetail', 'prenext-posts');
    fixFooterPosition();
};
fixStyles();

/* 调整屏幕宽度时重新设置文章列的宽度，修复小间距问题 */
window.addEventListener('resize', () => fixStyles());

/* 初始化瀑布流布局 */
if (document.getElementById('articles')) {
    const msnry = new Masonry(document.getElementById('articles'), {
        itemSelector: '.article'
    });
}
/* 文章内容详情的一些初始化特性 */
let articleInit = function () {
    const articleA = document.querySelectorAll('#articleContent a')[0];
    if (articleA) articleA.setAttribute('target', '_blank');
    const artcleimg = document.querySelectorAll('#articleContent img');
    for (let el of artcleimg) {
        const imgPath = el.getAttribute('src');
        el.innerHTML = `<div class="img-item" data-src="${imgPath}" data-sub-html=".caption">${el.innerHTML}</div>`
        // 图片添加字幕
        let alt = el.getAttribute('alt');
        let title = el.getAttribute('title');
        let captionText = "";
        // 如果alt为空，title来替
        if (alt === undefined || alt === "") {
            if (title !== undefined && title !== "") {
                captionText = title;
            }
        } else {
            captionText = alt;
        }
        // 字幕不空，添加之
        if (captionText !== "") {
            let captionDiv = document.createElement('div');
            captionDiv.className = 'caption';
            let captionEle = document.createElement('b');
            captionEle.className = 'center-caption';
            captionEle.innerText = captionText;
            captionDiv.appendChild(captionEle);
            el.insertAdjacentElement('afterend', captionDiv);
        }
    }
};
articleInit();
const modalInstance = M.Modal.init(document.querySelectorAll('.modal'));

/* 回到顶部 */
const backToTopBtn = document.getElementById('backTop');
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    showMessage("飞到顶啦", 1300, true);
    return false;
})

/* 监听页面滚动 */
window.onscroll = () => {
    if (window.scrollY < 100) {
        backToTopBtn.classList.add('btnHide');
    } else {
        backToTopBtn.classList.remove('btnHide');
    }
}

/* 是否显示看板娘 */
const showLive2Dbtn = document.getElementById('show-live2d');
const checkLive2DHide = () => {
    if (getSS('waifuHide') === '1') {
        showLive2Dbtn.classList.remove('btnHide');
        document.querySelector('.waifu').classList.add('hide');
    }
}

showLive2Dbtn.addEventListener('click', () => {
    if (getSS('waifuHide') === '1') {
        removeSS('waifuHide');
        document.querySelector('.waifu').classList.remove('hide');
        showLive2Dbtn.classList.add('btnHide');
        showMessage("想我了吗？^_^", 1300, true);
        initModel("/live2d/waifu-tips.json");
    }
})
// 音频 url 列表
const musicList = [
    "/media/Music8_2_index.opus",
    "/media/DawnWineryTheme.ogg",
    "/media/Music0_1_index.ogg",
    "/media/HappyJourney.ogg",
    "/media/Music0_5_index.ogg",
    "/media/Music5_3_index.ogg",
    "/media/Music31_6_index.ogg",
    "/media/Music15_4_index.ogg",
    "/media/Music26_1_index.ogg",
    "/media/Music19_5_index.ogg",
    "/media/Music5_2_index.ogg",
    "/media/Music1_2_index.ogg",
    "/media/Music14_1.ogg",
    "/media/PureSky.ogg",
    "/media/Music27_3_index.ogg",
    "/media/Music13_1_index.ogg",
    "/media/Music26_9_index.ogg"
];
let currentTrack = 0;
const audioObj = new Audio();
// 根据 sessionStorage 或者给定曲目得到音频 url
const getAudioUrl = (trackNo) => {
    const t = getSS('track');
    if (t !== null && t >= 0 && t <= musicList.length - 1) {
        currentTrack = t;
        return musicList[t]
    } else {
        return musicList[trackNo || 0];
    }
}
// 读取音量值
const getVolume = () => {
    const vol = getSS('volume');
    if (vol !== null && vol >= 0 && vol <= 1) {
        return vol;
    } else {
        setVolume(0.7);
        return 0.7;
    }
}
// 设置音量值
const setVolume = (vol) => {
    setSS('volume', vol);
}
// 音量淡入
const volumeFadein = () => {
    console.log('fadein')
    const targetVol = getVolume();
    const step = targetVol / 10;
    const intervalId = setInterval(() => {
        if (audioObj.volume + step < 1)
            audioObj.volume = audioObj.volume + step;
        if (Math.abs(targetVol - audioObj.volume) < 0.05) {
            audioObj.volume = targetVol;
            clearInterval(intervalId);
        }
    }, 30);
}
// 读取播放位置
const getAudioTime = () => {
    const t = getSS('audioTime');
    if (t !== null) {
        removeSS('audioTime');
        return t;
    } else {
        return 0;
    }
}
// 存储播放位置
const setAudioTime = () => {
    setInterval(() => {
        if (audioObj.played.length !== 0) {
            setSS('audioTime', audioObj.currentTime)
        }
    }, 700);
}
// 切换下一首
const nextTrack = () => {
    if (currentTrack >= musicList.length - 1)
        currentTrack = 0;
    else
        currentTrack++;
    setSS('track', currentTrack);
    setSS('audioTime', 0);
    audioObj.addEventListener("canplay", audioCanplay);
    audioObj.src = getAudioUrl(currentTrack);
}
// 不能自动播放 设置监听器
const canNotAutoplay = (e) => {
    console.log('canAutoplay: False');
    console.log(e);
    // 触摸播放
    document.addEventListener("touchstart", clickPlay, false);
    // 点击播放
    document.addEventListener("click", clickPlay, false);
    // 指针移动播放
    document.addEventListener('mousemove', clickPlay, false);
}
// 通过事件播放
const clickPlay = () => {
    if (audioObj.played.length === 0)
        audioObj.play().then(() => {
            console.log('clickPlay');
            // 成功播放 移除监听器
            audioObj.removeEventListener('canplay', audioCanplay); // 移除 canplay 监听器的原因：跳转到指定位置时也会触发 canplay 事件，造成循环
            document.removeEventListener("touchstart", clickPlay, false);
            document.removeEventListener("click", clickPlay, false);
            document.removeEventListener('mousemove', clickPlay, false);
            audioObj.currentTime = getAudioTime();
            volumeFadein();
            setMuteImg();
        }).catch();
}
// 首次播放函数 缓冲足够时调用
const audioCanplay = () => {
    console.log('audio canplay ' + audioObj.src);
    audioObj.play().then(() => {
        // if (audioObj.played.length === 0 && window.navigator.userAgent.indexOf('Firefox') > 0 && audioObj.allowedToPlay === false)
        //     throw new Error('fake autoplay'); // 部分 Firefox 在没有自动播放仍然执行了 then ，再判断一下
        console.log('canAutoplay: True');
        audioObj.removeEventListener('canplay', audioCanplay); // 移除 canplay 监听器的原因：跳转到指定位置时也会触发 canplay 事件，造成循环
        audioObj.currentTime = getAudioTime();
        volumeFadein();
        setMuteImg();
    }).catch(e => canNotAutoplay(e));
}
// 初始化播放器
const initPlayer = () => {
    audioObj.volume = 0;
    audioObj.src = getAudioUrl();
    if (getSS('mute') !== '1') { // 之前已经静音的情况下不会自动播放
        audioObj.addEventListener("canplay", audioCanplay);
    }
}
initPlayer();
// 监听当前曲目结束
audioObj.addEventListener("ended", () => {
    nextTrack();
});
// 开始播放时监听
// audioObj.addEventListener('playing', setAudioTime);
// 暂停时将音量设为0
audioObj.addEventListener('pause', () => (audioObj.volume = 0));
// 静音按钮图标切换
const setMuteImg = () => {
    const unmuteBtn = document.getElementById("audioOff");
    const muteBtn = document.getElementById("audioOn");
    muteBtn.style.display = "block";
    unmuteBtn.style.display = "none";
}
const setUnmuteImg = () => {
    const unmuteBtn = document.getElementById("audioOff");
    const muteBtn = document.getElementById("audioOn");
    muteBtn.style.display = "none";
    unmuteBtn.style.display = "block";
}
// 为静音按钮添加事件
const addMuteBtnListener = () => {
    const unmuteBtn = document.getElementById("audioOff");
    const muteBtn = document.getElementById("audioOn");
    if (audioObj.paused === false) setMuteImg();
    muteBtn.addEventListener("click", () => {
        audioObj.pause();
        setSS('mute', 1);
        setUnmuteImg();
        audioObj.removeEventListener('canplay', audioCanplay);
    });
    unmuteBtn.addEventListener("click", () => {
        setMuteImg();
        setSS('mute', 0);
        audioCanplay();
    });
}
// 音量调整按钮
document.querySelector('.waifu-tool .fui-volume').addEventListener('click', () => {
    const vol = audioObj.volume;
    const volInt = ((vol + 0.1) * 100).toFixed(0);
    if (vol <= 0.9) {
        audioObj.volume = vol + 0.1;
        setVolume(vol + 0.1);
        showMessage("音量增大到" + volInt + "%了哦", 1300, true);
    } else {
        audioObj.volume = 1;
        setVolume(1);
        showMessage("声音不能再大啦", 1300, true);
    }
})
document.querySelector('.waifu-tool .fui-mute').addEventListener('click', () => {
    const vol = audioObj.volume;
    const volInt = ((vol - 0.1) * 100).toFixed(0);
    if (vol > 0.11) {
        audioObj.volume = vol - 0.1;
        setVolume(vol - 0.1);
        showMessage("音量减小到" + volInt + "%了哦", 1300, true);
    } else {
        audioObj.volume = 0;
        setVolume(0);
        showMessage("声音不能再小啦", 1300, true);
    }
})
const initSidebarNav = () => {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);
}

// 检查页面加载状态
if (document.readyState === "interactive") {
    console.log('interactive')
    initSidebarNav()
    checkLive2DHide();
    addMuteBtnListener();
} else if (document.readyState === "complete") {
    console.log('complete')
} else {
    window.addEventListener("DOMContentLoaded", checkLive2DHide);
    window.addEventListener("DOMContentLoaded", addMuteBtnListener);
    window.addEventListener("DOMContentLoaded", initSidebarNav);
}

// 页面切换前将音频时间存储到 SessionStorage
window.onbeforeunload = () => {
    if (audioObj.played.length !== 0) {
        setSS('audioTime', audioObj.currentTime)
    }
}