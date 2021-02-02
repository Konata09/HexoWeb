(()=>{"use strict";const e={modelUrl:"/model",tipsMessage:"/live2d/waifu-tips.json",modelName:"paimon",modelStorage:!0,modelRandMode:!1,preLoadMotion:!1,tryWebp:!0,showToolMenu:!0,canCloseLive2d:!0,canSwitchModel:!0,canSwitchHitokoto:!0,canTakeScreenshot:!0,canTurnToHomePage:!0,canTurnToAboutPage:!0,showVolumeBtn:!0,showHitokoto:!0,hitokotoAPI:"",showWelcomeMessage:!0,showCopyMessage:!0,showF12OpenMsg:!0,live2dHeight:680,live2dWidth:500,waifuMinWidth:"1040px",waifuEdgeSide:"right:0",debug:!0,debugMousemove:!1,logMessageToConsole:!0,l2dVersion:"2.0.0",homePageUrl:"auto",aboutPageUrl:"https://github.com/Konata09/Live2dOnWeb/",screenshotCaptureName:"bronyaMoe.png"},t=[{name:"paimon",message:"应急食品 bilibili@根瘤菌rkzj",version:3},{name:"klee2",message:"可莉 bilibili@根瘤菌rkzj",version:3},{name:"klee",message:"可莉 bilibili@根瘤菌rkzj",version:3,position:"left"},{name:"bronyaXinZhiHua",message:"布洛妮娅心之花 @GhastRiv",version:2},{name:"houmuya",message:"吼姆布洛妮娅 bilibili@呦克里斯汀娜呦",version:3},{name:"bronya",message:"Valkyrie System 启动",version:2},{name:"Kiana",message:"终于轮到我了么！",version:2},{name:"Mei",message:"烦死了，家里还有两个吃闲饭的等着我回去做晚餐呢",version:2},{name:"Lita",message:"丽塔·洛丝薇瑟",version:2},{name:"Sakura",message:"已经很久没有出场了呢",version:2},{name:"Theresa",message:"要和德丽莎一起睡午觉吗?",version:2},{name:"Himeko",message:"话说~休伯利安本来的舰长可是我呦 ~",version:2},{name:"Seele",message:"舰长是来和希儿一起玩儿的吗?",version:2},{name:"xilin2.1",message:"西琳小天使",version:2},{name:"SakuraQ",message:"信浓的春野已经开满了樱花了吧……",version:2},{name:"Sin",message:"杏·玛尔",version:2},{name:"kiro",message:"时雨绮罗",version:2},{name:"lingyiniang",message:"灵依娘",version:2},{name:"houraiji",message:"蓬莱寺九霄",version:2},{name:"kaguya",message:"耀夜姬",version:2},{name:"keluoyi",message:"柯罗伊",version:2},{name:"kika",message:"无色辉火",version:2},{name:"Nina",message:"妮娜",version:2},{name:"yiselin",message:"伊瑟琳·利维休斯",version:2},{name:"Nindi",message:"宁蒂·阿波卡利斯",version:2}],o=(e,t)=>{try{sessionStorage.setItem(e,t)}catch(e){}},n=e=>{try{return sessionStorage.getItem(e)}catch(e){return null}},a=e=>{try{return localStorage.getItem(e)}catch(e){return null}};String.prototype.render=function(e){return this.replace(/(\\)?{([^{}\\]+)(\\)?}/g,(function(t,o,n,a){if(o||a)return t.replace("\\","");const i=n.replace(/\s/g,"").split(".");let s,r,l,d=e;for(s=0,r=i.length;s<r;++s)if(l=i[s],d=d[l],null==d)return"";return d}))};const i=e=>{try{const t=document.querySelectorAll(e);return 1===t.length?t[0]:Array.from(t)}catch(e){return console.error(e),null}},s=/x/;console.log(s);const r=i("#waifu-message"),l=i("#waifu");function d(e){return Array.isArray(e)?e[Math.floor(Math.random()*e.length+1)-1]:e}let c;function u(t,a,i){(i||""===n("waifu-text")||null===n("waifu-text"))&&(c&&window.clearTimeout(c),Array.isArray(t)&&(t=t[Math.floor(Math.random()*t.length+1)-1]),e.logMessageToConsole&&console.log("[WaifuTips]",t.replace(/<[^<>]+>/g,"")),i&&o("waifu-text",t),r.style.opacity=1,r.innerHTML=t,void 0===a&&(a=5e3),function(e){void 0===e&&(e=5e3),c=window.setTimeout((function(){(e=>{try{sessionStorage.removeItem("waifu-text")}catch(e){}})(),r.style.opacity=0}),e)}(a))}function m(){if(w(f),"1"===n("waifuHide"))return void l.classList.add("hide");l.classList.remove("hide"),console.log("く__,.ヘヽ.　　　　/　,ー､ 〉\n　　　　　＼ ', !-─‐-i　/　/´\n　　　 　 ／｀ｰ'　　　 L/／｀ヽ､\n　　 　 /　 ／,　 /|　 ,　 ,　　　 ',\n　　　ｲ 　/ /-‐/　ｉ　L_ ﾊ ヽ!　 i\n　　　 ﾚ ﾍ 7ｲ｀ﾄ　 ﾚ'ｧ-ﾄ､!ハ|　 |\n　　　　 !,/7 '0'　　 ´0iソ| 　 |　　　\n　　　　 |.从\"　　_　　 ,,,, / |./ 　 |\n　　　　 ﾚ'| i＞.､,,__　_,.イ / 　.i 　|\n　　　　　 ﾚ'| | / k_７_/ﾚ'ヽ,　ﾊ.　|\n　　　　　　 | |/i 〈|/　 i　,.ﾍ |　i　|\n　　　　　　.|/ /　ｉ： 　 ﾍ!　　＼　|\n　　　 　 　 kヽ>､ﾊ 　 _,.ﾍ､ 　 /､!\n　　　　　　 !'〈//｀Ｔ´', ＼ ｀'7'ｰr'\n　　　　　　 ﾚ'ヽL__|___i,___,ンﾚ|ノ\n　　　　　 　　　ﾄ-,/　|___./\n　　　　　 　　　'ｰ'　　!_,.:\nLive2D 看板娘 v"+e.l2dVersion+" / Konata"),i("#live2d2").setAttribute("height",e.live2dHeight),i("#live2d2").setAttribute("width",e.live2dWidth),i("#live2d4").setAttribute("height",e.live2dHeight),i("#live2d4").setAttribute("width",e.live2dWidth),e.showToolMenu||i(".waifu-tool").classList.add("hide"),e.canCloseLive2d||i(".waifu-tool .icon-cross").classList.add("hide"),e.canSwitchModel||i(".waifu-tool .icon-next").classList.add("hide"),e.canSwitchHitokoto||i(".waifu-tool .icon-message").classList.add("hide"),e.canTakeScreenshot||i(".waifu-tool .icon-camera").classList.add("hide"),e.canTurnToHomePage||i(".waifu-tool .icon-home").classList.add("hide"),e.canTurnToAboutPage||i(".waifu-tool .icon-about").classList.add("hide"),e.showVolumeBtn||i(".waifu-tool .icon-volumeup").classList.add("hide")||i(".waifu-tool .icon-volumedown").classList.add("hide"),i(".waifu-tool .icon-next").addEventListener("click",(()=>function(){const o=(i="modelName",e.modelStorage?a(i):n(i));var i;let s=0;e.modelRandMode?s=Math.floor(Math.random()*t.length+1)-1:(s=t.findIndex((e=>e.name===o)),s<t.length-1?s++:s=0),t[s].message&&u(t[s].message,3e3,!0),g(t[s].name)}())),i(".waifu-tool .icon-home").addEventListener("click",(()=>window.location=e.homePageUrl)),i(".waifu-tool .icon-about").addEventListener("click",(()=>window.open(e.aboutPageUrl))),i(".waifu-tool .icon-camera").addEventListener("click",(()=>{3===window.live2dCurrentVersion?window.live2dv4.CaptureCanvas():window.live2dv2.captureFrame=!0})),i(".waifu-tool .icon-cross").addEventListener("click",(()=>{sessionStorage.setItem("waifuHide","1"),window.setTimeout((function(){l.classList.add("hide"),document.getElementById("show-live2d").classList.remove("btnHide")}),1e3)})),window.waifuResize=()=>{"1"!==n("waifuHide")&&(window.innerWidth<=Number(e.waifuMinWidth.replace("px",""))?l.classList.add("hide"):l.classList.remove("hide"))},"disable"!==e.waifuMinWidth&&(waifuResize(),window.addEventListener("resize",waifuResize)),e.homePageUrl="auto"===e.homePageUrl?window.location.protocol+"//"+window.location.hostname+"/":e.homePageUrl,e.tipsMessage&&window.fetch(e.tipsMessage).then((e=>e.json())).then((t=>function(t){window.waifu_tips=t;const o=(e,t)=>{e.addEventListener("mouseenter",(()=>{let o=d(t.text);o.indexOf("{text}")>0&&(o=o.replace(/{text}/,e.innerText)),u(o,3e3)}))},n=()=>{for(let n of t.mouseover){const t=i(n.selector);Array.isArray(t)?t.forEach((e=>o(e,n))):t?o(t,n):e.debug&&console.warn(`[WaifuTips] can not found element: ${n.selector}`)}},a=()=>{for(let o of t.click){const t=i(o.selector);Array.isArray(t)?t.forEach((e=>e.addEventListener("click",(()=>{u(d(o.text),3e3,!0)})))):t?t.addEventListener("click",(()=>{u(d(o.text),3e3,!0)})):e.debug&&console.warn(`[WaifuTips] can not found element: ${o.selector}`)}};for(let e of t.seasons){const t=new Date,o=e.date.split("-")[0],n=e.date.split("-")[1]||o;if(o.split("/")[0]<=t.getMonth()+1&&t.getMonth()+1<=n.split("/")[0]&&o.split("/")[1]<=t.getDate()&&t.getDate()<=n.split("/")[1]){let o=d(e.text);o.indexOf("{year}")>0&&(o=o.replace(/{year}/,t.getFullYear())),u(o,6e3,!0)}}e.showF12OpenMsg&&(s.toString=function(){return u(d(t.waifu.console_open_msg),5e3,!0),""});const r=()=>{0!==i("#articleContent").length&&i("#articleContent").addEventListener("copy",(()=>u(d(t.waifu.copy_message),5e3,!0)))};window.showWelcomeMessage=function(t){let o;if(window.location.href===e.homePageUrl){const e=(new Date).getHours();o=d(e>23||e<=5?t.waifu.hour_tips["t23-5"]:e>5&&e<=7?t.waifu.hour_tips["t5-7"]:e>7&&e<=11?t.waifu.hour_tips["t7-11"]:e>11&&e<=14?t.waifu.hour_tips["t11-14"]:e>14&&e<=17?t.waifu.hour_tips["t14-17"]:e>17&&e<=19?t.waifu.hour_tips["t17-19"]:e>19&&e<=21?t.waifu.hour_tips["t19-21"]:e>21&&e<=23?t.waifu.hour_tips["t21-23"]:t.waifu.hour_tips.default)}else{const e=t.waifu.referrer_message;if(""!==document.referrer){const n=document.createElement("a");n.href=document.referrer;const a=n.hostname.split(".")[1];if(window.location.hostname===n.hostname)o=e.localhost[0]+document.title.split(e.localhost[2])[0]+e.localhost[1];else if("baidu"===a)o=e.baidu[0]+n.search.split("&wd=")[1].split("&")[0]+e.baidu[1];else if("so"===a)o=e.so[0]+n.search.split("&q=")[1].split("&")[0]+e.so[1];else if("google"===a)o=e.google[0]+document.title.split(e.google[2])[0]+e.google[1];else{o=e.default[0]+n.hostname+e.default[1];for(let e in t.waifu.referrer_hostname)if(e===n.hostname){o=d(t.waifu.referrer_hostname[e]);break}}}else o=e.none[0]+document.title.split(e.none[2])[0]+e.none[1]}u(o,6e3)},e.showWelcomeMessage&&showWelcomeMessage(t);const l=t.waifu;e.showHitokoto&&(window.getActed=!1,window.hitokotoTimer=0,window.hitokotoInterval=!1,setInterval((function(){getActed?(getActed=hitokotoInterval=!1,window.clearInterval(hitokotoTimer)):hitokotoInterval||(hitokotoInterval=!0,hitokotoTimer=window.setInterval(m,3e4))}),1e3));const c=()=>{document.addEventListener("mousemove",(()=>getActed=!0)),document.addEventListener("keydown",(()=>getActed=!0))};function m(){"visible"===document.visibilityState&&g()}function g(){switch(e.hitokotoAPI){case"lwl12.com":window.fetch("https://api.lwl12.com/hitokoto/v1?encode=realjson").then((e=>e.json())).then((e=>{if(!e.source){let t=l.hitokoto_api_message["lwl12.com"][0];e.author||(t+=l.hitokoto_api_message["lwl12.com"][1]),t=t.render({source:e.source,creator:e.author}),window.setTimeout((function(){u(t+l.hitokoto_api_message["lwl12.com"][2],3e3,!0)}),5e3)}u(e.text,5e3,!0)}));break;case"fghrsh.net":window.fetch("https://api.fghrsh.net/hitokoto/rand/?encode=jsc&uid=3335").then((e=>e.json())).then((e=>{if(!e.source){let t=l.hitokoto_api_message["fghrsh.net"][0];t=t.render({source:e.source,date:e.date}),window.setTimeout((function(){u(t,3e3,!0)}),5e3),u(e.hitokoto,5e3,!0)}}));break;case"jinrishici.com":window.fetch("https://v2.jinrishici.com/one.json").then((e=>e.json())).then((e=>{if(!e.data.origin.title){let t=l.hitokoto_api_message["jinrishici.com"][0];t=t.render({title:e.data.origin.title,dynasty:e.data.origin.dynasty,author:e.data.origin.author}),window.setTimeout((function(){u(t,3e3,!0)}),5e3)}u(e.data.content,5e3,!0)}));break;default:window.fetch("https://v1.hitokoto.cn").then((e=>e.json())).then((e=>{if(!e.from){let t=l.hitokoto_api_message["hitokoto.cn"][0];t=t.render({source:e.from,creator:e.creator}),window.setTimeout((function(){u(t,3e3,!0)}),5e3)}u(e.hitokoto,5e3,!0)}))}}"interactive"===document.readyState||"complete"===document.readyState?(n(),a(),e.showCopyMessage&&r(),e.showHitokoto&&c()):(window.addEventListener("DOMContentLoaded",n),window.addEventListener("DOMContentLoaded",a),e.showCopyMessage&&window.addEventListener("DOMContentLoaded",r),e.showHitokoto&&window.addEventListener("DOMContentLoaded",c)),i(".waifu-tool .icon-message").addEventListener("click",(()=>g()))}(t)));let o=a("modelName");e.modelStorage&&null!=o||(o=e.modelName),window.live2dv4.setPreLoadMotion(e.preLoadMotion),window.live2dv2.debug=e.debug,window.live2dv4.debug=e.debug,window.live2dv2.debugMousemove=e.debug&&e.debugMousemove,window.live2dv4.debugMousemove=e.debug&&e.debugMousemove,e.tryWebp?new Promise((e=>{const t=new Image;t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",t.onload=t.onerror=()=>{e(2===t.height)}})).then((e=>window.webpReady=e)).then((()=>{!0===window.webpReady?console.log("[WaifuTips] Your browser support WebP format. Try to load WebP texture first."):console.log("[WaifuTips] Your browser do not support WebP format."),g(o)})):g(o)}function g(n){e.modelStorage?((e,t)=>{try{localStorage.setItem("modelName",t)}catch(e){}})(0,n):o("modelName",n),e.debug&&console.log(`[WaifuTips] load model: ${n}`);let a=2;for(let o of t)if(o.name===n){a=o.version,"left"===(s=o.position)?(i(".waifu-tool").style.right="unset",i(".waifu-tool").style.left="10px",l.style.right="unset",l.style.left=e.waifuEdgeSide.split(":")[1]):"right"===s?(i(".waifu-tool").style.left="unset",i(".waifu-tool").style.right="10px",l.style.left="unset",l.style.right=e.waifuEdgeSide.split(":")[1]):(i(".waifu-tool").style.left="",i(".waifu-tool").style.right="",l.style.left="",l.style.right="");break}var s;window.live2dCurrentVersion!==a&&(2===window.live2dCurrentVersion?(window.live2dv2.release(),i("#live2d2").style.display="none"):(window.live2dv4.release(),i("#live2d4").style.display="none")),2===a?(i("#live2d2").style.display="block",window.live2dv2.load("live2d2",`${e.modelUrl}/${n}/model.json`)):window.live2dCurrentVersion===a?window.live2dv4.change(`${e.modelUrl}/${n}`,`${n}.model3.json`):(i("#live2d4").style.display="block",window.live2dv4.load("live2d4",`${e.modelUrl}/${n}`,`${n}.model3.json`)),window.live2dCurrentVersion=a}const w=(()=>{const e=document.createElement("style");return document.head.append(e),t=>e.textContent=t})(),f=`\n#waifu {\n${e.waifuEdgeSide}px;\nposition:fixed;\nbottom:0;\nz-index:998;\nfont-size:0\n}\n\n#waifu-message {\nfont-size:1rem;\nwidth:-moz-fit-content;\nwidth:fit-content;\nheight:auto;\nleft:2rem;\ntop:20px;\nopacity:0;\nz-index:998;\nmargin:auto;\npadding:5px 10px;\nborder:1px solid rgba(104,216,255,0.62);\nborder-radius:12px;\nbackground-color:rgba(76,191,255,0.8);\nbox-shadow:0 3px 15px 2px rgba(16,51,49,0.3);\ntext-overflow:ellipsis;\noverflow:hidden;\nposition:relative;\nanimation-delay:5s;\nanimation-duration:50s;\nanimation-iteration-count:infinite;\nanimation-name:shake;\nanimation-timing-function:ease-in-out;\ntransition:opacity .3s ease\n}\n\n#waifu-message>a {\ncolor:#7500b7;\n}\n\n#live2d2,#live2d4 {\nposition:relative;\ndisplay:none;\nz-index:997\n}\n\n.waifu-tool {\ndisplay:none;\ncolor:#d73b66;\ntop:130px;\n${e.waifuEdgeSide.split(":")[0]}:10px;\nposition:absolute;\nz-index:998\n}\n\n#waifu:hover > .waifu-tool {\ndisplay:block\n}\n\n.waifu-tool > span {\nfont-family:"waifuico"!important;\ndisplay:block;\ncursor:pointer;\ncolor:#0396FF;\ntransition:.2s;\nfont-size:18px;\nfont-style:normal;\n-webkit-font-smoothing:antialiased;\n-moz-osx-font-smoothing:grayscale\n}\n\n.waifu-tool > span:hover {\ncolor:#43CBFF\n}\n\n.waifu-tool > .icon-next:before{padding-left:1px;content:"\\e6ba"}.waifu-tool > .icon-message:before{content:"\\e632"}.waifu-tool > .icon-cross:before{content:"\\e606"}.waifu-tool > .icon-about:before{content:"\\e60c"}.waifu-tool > .icon-home:before{content:"\\e604"}.waifu-tool > .icon-camera:before{content:"\\e635"}.waifu-tool > .icon-volumedown:before{content:"\\e6c2"}.waifu-tool > .icon-volumeup:before{content:"\\e6c3"}#waifu.hide,.waifu-tool > span.hide{display:none}@font-face{font-family:"waifuico";src:url(data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWcAAsAAAAAC0gAAAVNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEAgqIVIcCATYCJAMkCxQABCAFhG0HchuYCVGUT06K7OeB7R6lCBOgbWnZzIYDWz+EMHANCwis4uG/tdf7dmbx/wC6VAGqgCuhAwBFIEwVsNJVwEb21LKO3q1lyz+tCZvx3+UrWlPV795l73pusllKVXgcRqIMCNk9wkGaA/IP1K2mWg6WmlnR1Qqa7lwLoaYD/FpfOAE/f7i06QU2n2W5rPV/cy2K44ACGrcnLqDD0wI/YTkL68xspUBnvQo9T6CzQkdr1/bhCczKuDJQdj1LDMwmDHIFPTTqquDavDGelJricfGKl+7w8d98zFIoE/6iA9e2Ylj9lX1P9TmTXns0nA3bm0jYCGTiTaHjmRQkNprQnXOzC8C4sE0w1P4qQ/OWvPO97zOkb72kik5d+CcPlJKsUAm1hqhw1ZCot5MNv7LiUvKr4pL4NVSqQvPQKYCWoNQMvYNOAH2DTg30HQ0a0JprJoEpEPsB4i2ON7lEyOJpoGWF9Uoz6iBtQmEZSR0YgyVVYPFeOIPN3GSY5uUOTjKmlLks4xwO30ihSfCIyrtB4/PlZurwHsUBoelpYahQGMsORi9mnmOcZ53Fz4BQ8IuaCKZRdi7BW+cZ52Szpw+ehI6b5uVwWNcZJrl5XEaG4Bld+DyO/5TGe5LbP7LAWhojkRiji8z5YcW4eTbOYXEZBO3YphYFXCQmlfO4fOOcAZytB5LH1+1A0uQ5B/DIGQ0gj8ejLuvzhMI4gSALZBJK9MFFEGbOK1D72SB4ZF2DPLFhL3v8OkqZ3MwXCOi1BHU/icfLYxIMLouDs5sWjxhRQR6VjJ+FINpJiKW8dBgVnzyUAzNnYNNHlnYjV2upFMVP6IFi1tXVmW8ihqPPJMWLn3H3seGju3ci3kxPEJTA0jrAQ0fD8Bh6dl1hXf0jKHdKaRsxTzcO0JWMCoNpvbEutxBvrD4E64xscguymJWl87Zjuz13sbN3o1/REc9hj2HPEfRfUA14VOUN+7FLSlHD9gF0AN/dJbxQrsdqTB3bWeDw0/XbbtrtD/xvuymCYSI3VzoM07Joq6QFcq1EreSY1AupY67wGmL52IowWn008LOtnCa+PdJrVOzu58O13kDd54MrhoRV1HZxf/zUr1jBGrG7pF/6h14kOo20kntvDF6kSO5t+TgvfqwJSQ/VSg0rQ5KRsjB/bGg60jQ9Ai1DI9N26w1XrItJXd3kYnKRURRvBJG8CHy8T2KLtC/qq2WL2gJ6vtlO77JfPuylAcBR1HTZpJf91SwxeD4oigJToj4caJer06uTaZep061vZt/78dVJJWe2AnU4gB5PDpTgyF6yu7ScXvf3eIak4yE/dIofEGczzzlM3ABqvZvHHD39P3t+ZdNyM/gthH9c/L6TBMMoWrqXvkajeBuRb7kuP60g/JddpNzY5pNEGfo/hx8k0VMSdQi2thsxVqATC3y7PZM+hsUzjVX+THgmgkJtDpLGSmKmboTSwCJUGluhs8HOzQNTxITILdZ7ZBDGvUBh1GdIxr0RM/UdSrN+oTIeE9A5FlP3HFgd2fxOIaMUo73CLOLaSbPO+/IjSkJpJC51jDMSn4Vx2Buk0ztUkwxxgT9PRqoOnXCF2+xlVJaMjXBOkfZS1Wbc77uib+pFXMG8nQQxFIkh6wrKRFjNmeVqPrP/IyQRlAyp6HvmPUOEl62PhnoGDYg7qrpR36XUeucSI0oxB7ltKaugbbKRUiQYaoqPypGI6kk7xBpjfZrnmqp60+PqsV6BDv+YNopIkaOMKupooo1OvkmXOnODvDcJTV0W9tVTFy0Hnb6Xmpwrmr5sqjtz7PwxLkNFMV/Us6E/NAAAAAA=) format("woff2"),url(/live2d/waifuico.woff) format("woff")}@keyframes shake{2%{transform:translate(0.5px,-1.5px) rotate(-0.5deg)}4%{transform:translate(0.5px,1.5px) rotate(1.5deg)}6%{transform:translate(1.5px,1.5px) rotate(1.5deg)}8%{transform:translate(2.5px,1.5px) rotate(0.5deg)}10%{transform:translate(0.5px,2.5px) rotate(0.5deg)}12%{transform:translate(1.5px,1.5px) rotate(0.5deg)}14%{transform:translate(0.5px,0.5px) rotate(0.5deg)}16%{transform:translate(-1.5px,-0.5px) rotate(1.5deg)}18%{transform:translate(0.5px,0.5px) rotate(1.5deg)}20%{transform:translate(2.5px,2.5px) rotate(1.5deg)}22%{transform:translate(0.5px,-1.5px) rotate(1.5deg)}24%{transform:translate(-1.5px,1.5px) rotate(-0.5deg)}26%{transform:translate(1.5px,0.5px) rotate(1.5deg)}28%{transform:translate(-0.5px,-0.5px) rotate(-0.5deg)}30%{transform:translate(1.5px,-0.5px) rotate(-0.5deg)}32%{transform:translate(2.5px,-1.5px) rotate(1.5deg)}34%{transform:translate(2.5px,2.5px) rotate(-0.5deg)}36%{transform:translate(0.5px,-1.5px) rotate(0.5deg)}38%{transform:translate(2.5px,-0.5px) rotate(-0.5deg)}40%{transform:translate(-0.5px,2.5px) rotate(0.5deg)}42%{transform:translate(-1.5px,2.5px) rotate(0.5deg)}44%{transform:translate(-1.5px,1.5px) rotate(0.5deg)}46%{transform:translate(1.5px,-0.5px) rotate(-0.5deg)}48%{transform:translate(2.5px,-0.5px) rotate(0.5deg)}50%{transform:translate(-1.5px,1.5px) rotate(0.5deg)}52%{transform:translate(-0.5px,1.5px) rotate(0.5deg)}54%{transform:translate(-1.5px,1.5px) rotate(0.5deg)}56%{transform:translate(0.5px,2.5px) rotate(1.5deg)}58%{transform:translate(2.5px,2.5px) rotate(0.5deg)}60%{transform:translate(2.5px,-1.5px) rotate(1.5deg)}62%{transform:translate(-1.5px,0.5px) rotate(1.5deg)}64%{transform:translate(-1.5px,1.5px) rotate(1.5deg)}66%{transform:translate(0.5px,2.5px) rotate(1.5deg)}68%{transform:translate(2.5px,-1.5px) rotate(1.5deg)}70%{transform:translate(2.5px,2.5px) rotate(0.5deg)}72%{transform:translate(-0.5px,-1.5px) rotate(1.5deg)}74%{transform:translate(-1.5px,2.5px) rotate(1.5deg)}76%{transform:translate(-1.5px,2.5px) rotate(1.5deg)}78%{transform:translate(-1.5px,2.5px) rotate(0.5deg)}80%{transform:translate(-1.5px,0.5px) rotate(-0.5deg)}82%{transform:translate(-1.5px,0.5px) rotate(-0.5deg)}84%{transform:translate(-0.5px,0.5px) rotate(1.5deg)}86%{transform:translate(2.5px,1.5px) rotate(0.5deg)}88%{transform:translate(-1.5px,0.5px) rotate(1.5deg)}90%{transform:translate(-1.5px,-0.5px) rotate(-0.5deg)}92%{transform:translate(-1.5px,-1.5px) rotate(1.5deg)}94%{transform:translate(0.5px,0.5px) rotate(-0.5deg)}96%{transform:translate(2.5px,-0.5px) rotate(-0.5deg)}98%{transform:translate(-1.5px,-1.5px) rotate(-0.5deg)}0%,100%{transform:translate(0,0) rotate(0)}}\n`;m(),window.downloadCap=t=>{"object"==typeof t&&t instanceof Blob&&(t=URL.createObjectURL(t));const o=document.createElement("a");let n;o.href=t,o.download=e.screenshotCaptureName||"live2d.png",window.MouseEvent?n=new MouseEvent("click"):(n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null)),o.dispatchEvent(n)},window.initModel=m;const p=(e,t,o)=>{window.fetch(e).then((e=>e.text())).then((e=>(new window.DOMParser).parseFromString(e,"text/xml"))).then((e=>{const n=[];for(let t of e.getElementsByTagName("entry"))n.push({title:t.getElementsByTagName("title")[0].textContent,content:t.getElementsByTagName("content")[0].textContent,url:t.getElementsByTagName("url")[0].textContent});const a=document.getElementById(t),i=document.getElementById(o);a.addEventListener("input",(function(){var e='<ul class="search-result-list">',t=this.value.trim().toLowerCase().split(/[\s\-]+/);i.innerHTML="",this.value.trim().length<=0||(n.forEach((function(o){var n=!0,a=o.title.trim().toLowerCase(),i=o.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),s=o.url,r=-1,l=-1,d=-1;if(""!=a&&""!=i&&t.forEach((function(e,t){r=a.indexOf(e),l=i.indexOf(e),r<0&&l<0?n=!1:(l<0&&(l=0),0==t&&(d=l))})),n){e+="<li><a href='"+s+"' class='search-result-title'>"+a+"</a>";var c=o.content.trim().replace(/<[^>]+>/g,"");if(d>=0){var u=d-20,m=d+80;u<0&&(u=0),0==u&&(m=100),m>c.length&&(m=c.length);var g=c.substr(u,m);t.forEach((function(e){var t=new RegExp(e,"gi");g=g.replace(t,'<em class="search-keyword">'+e+"</em>")})),e+='<p class="search-result">'+g+"...</p>"}e+="</li>"}})),e+="</ul>",i.innerHTML=e)}))}))},h=(e,t)=>{try{sessionStorage.setItem(e,t)}catch(e){}},v=e=>{try{sessionStorage.removeItem(e)}catch(e){}},A=e=>{try{return sessionStorage.getItem(e)}catch(e){return null}};window.innerWidth>=1040&&function(){const e="animated",t="pulse";for(let o of document.querySelectorAll("article .article"))o.addEventListener("mouseover",(()=>{o.classList.add(e),o.classList.add(t)})),o.addEventListener("mouseleave",(()=>{o.classList.remove(e),o.classList.remove(t)}))}();let x=function(e,t){let o=document.getElementById(e);if(!o)return;let n=o.style.width;n+=n>=450?21:n>=350&&n<450?18:n>=300&&n<350?16:14;const a=document.getElementById(t);a&&(a.style.width=n)},y=function(){x("navContainer","articles"),x("artDetail","prenext-posts"),document.getElementsByClassName("content")[0].style.minHeight=window.innerHeight-165};y(),window.addEventListener("resize",(()=>y())),document.getElementById("articles")&&new Masonry(document.getElementById("articles"),{itemSelector:".article"}),function(){const e=document.querySelectorAll("#articleContent a")[0];e&&e.setAttribute("target","_blank");const t=document.querySelectorAll("#articleContent img");for(let e of t){const t=e.getAttribute("src");e.innerHTML=`<div class="img-item" data-src="${t}" data-sub-html=".caption">${e.innerHTML}</div>`;let o=e.getAttribute("alt"),n=e.getAttribute("title"),a="";if(void 0===o||""===o?void 0!==n&&""!==n&&(a=n):a=o,""!==a){let t=document.createElement("div");t.className="caption";let o=document.createElement("b");o.className="center-caption",o.innerText=a,t.appendChild(o),e.insertAdjacentElement("afterend",t)}}}(),M.Modal.init(document.querySelectorAll(".modal"));const b=document.getElementById("backTop");b.addEventListener("click",(()=>(window.scrollTo({top:0,behavior:"smooth"}),u("飞到顶啦",1300,!0),!1))),window.onscroll=()=>{window.scrollY<100?b.classList.add("btnHide"):b.classList.remove("btnHide")};const L=document.getElementById("show-live2d"),E=()=>{"1"===A("waifuHide")&&(L.classList.remove("btnHide"),document.querySelector("#waifu").classList.add("hide"))};L.addEventListener("click",(()=>{"1"===A("waifuHide")&&(v("waifuHide"),document.querySelector("#waifu").classList.remove("hide"),L.classList.add("btnHide"),u("想我了吗？^_^",1300,!0),m())}));const T=["/media/Music8_2_index.opus","/media/DawnWineryTheme.ogg","/media/Music0_1_index.ogg","/media/HappyJourney.ogg","/media/Music0_5_index.ogg","/media/Music5_3_index.ogg","/media/Music31_6_index.ogg","/media/Music15_4_index.ogg","/media/Music26_1_index.ogg","/media/Music19_5_index.ogg","/media/Music5_2_index.ogg","/media/Music1_2_index.ogg","/media/Music14_1.ogg","/media/PureSky.ogg","/media/Music27_3_index.ogg","/media/Music13_1_index.ogg","/media/Music26_9_index.ogg"];let k=0;const C=new Audio,I=e=>{const t=A("track");return null!==t&&t>=0&&t<=T.length-1?(k=t,T[t]):T[e||0]},S=e=>{h("volume",e)},H=()=>{console.log("fadein");const e=(()=>{const e=A("volume");return null!==e&&e>=0&&e<=1?e:(S(.7),.7)})(),t=e/10,o=setInterval((()=>{C.volume+t<1&&(C.volume=C.volume+t),Math.abs(e-C.volume)<.05&&(C.volume=e,clearInterval(o))}),30)},B=()=>{const e=A("audioTime");return null!==e?(v("audioTime"),e):0},O=()=>{0===C.played.length&&C.play().then((()=>{console.log("clickPlay"),C.removeEventListener("canplay",j),document.removeEventListener("touchstart",O,!1),document.removeEventListener("click",O,!1),document.removeEventListener("mousemove",O,!1),C.currentTime=B(),H(),U()})).catch()},j=()=>{console.log("audio canplay "+C.src),C.play().then((()=>{console.log("canAutoplay: True"),C.removeEventListener("canplay",j),C.currentTime=B(),H(),U()})).catch((e=>(e=>{console.log("canAutoplay: False"),console.log(e),document.addEventListener("touchstart",O,!1),document.addEventListener("click",O,!1),document.addEventListener("mousemove",O,!1)})(e)))};let P,D;C.volume=0,C.src=I(),"1"!==A("mute")&&C.addEventListener("canplay",j),C.addEventListener("ended",(()=>{k>=T.length-1?k=0:k++,h("track",k),h("audioTime",0),C.addEventListener("canplay",j),C.src=I(k)})),C.addEventListener("playing",(()=>{setInterval((()=>{0!==C.played.length&&h("audioTime",C.currentTime)}),1500)})),C.addEventListener("pause",(()=>C.volume=0));const U=()=>{D.style.display="block",P.style.display="none"},W=()=>{P=document.getElementById("audioOff"),D=document.getElementById("audioOn"),P.setAttribute("src","data:image/png;base64,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"),D.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAB5lBMVEUKCgoAAAD////39/f///8MDAwUFBRHcEz6+voNDQ339/cKCgodHR0YGBgXFxcMDAwWFhYLCwv///8VFRX///8TExM/Pz8ZGRn///9ISEgLCwsfHx8aGhr////w8PAbGxv///8tLS3///97e3vh4eHw8PD///8AAAD///////////////////////+np6ceHh4cHBz///8gICAJCQn///+xsbESEhIvLy+7u7vDw8P///9tbW1paWnU1NTa2todHR0RERESEhIeHh7////09PT19fWPj48RERG3t7fAwMBRUVHy8vJkZGTT09P6+vr4+Pj6+vojIyP39/fw8PDs7OxWVlbs7Oza2trq6uqRkZFTU1Py8vLu7u7Q0ND09PSSkpInJyenp6dOTk7w8PDw8PDW1tbu7u7g4ODT09Ps7Oz39/fX19fNzc3IyMiFhYU0NDT4+Pjq6uq8vLzc3NwYGBjY2Ni3t7fw8PDp6emXl5cJCQnm5ubIyMjX19c+Pj7///8AAADk5OTy8vJ9fX319fWlpaXc3NzU1NRpaWnm5uaioqJFRUWqqqrv7+/ExMTy8vLs7Oz4+PgjIyPh4eGqqqqurq56enokJCTz8/MfHx/39/eoqKjR0dHr6+v4+PgiIiLj4+O1tbUBW7mVAAAAonRSTlMZGiEjIBQZANATIhgaFRYVFxcfGBcaHB4UHBYgHQMjHB4cDB0jIgEZEh0cEBsIICEbBB8aEyEcGyIiAhwdJCMjHRsiFsDCPh4gXhy5MHTOz88kxLCnL6V+oEErt65yv0IgTCqxr3esjXWiy4BxbDsnyqNcfx9wUrKcRRuSY3opBRuRtTnESoR+NZ5QLFqydr6kzSuJYE84Krkox0p1qcsljFd+4J8aAAAC/UlEQVQ4y5WVZXPjMBCGFUdWbcd20jjYcBpmaFJm5vaYmZmZmZn5/ulJhsRJezN3+8mzfmZfebX7GrQ0RDY9mklarcmMLZ1tfAN0z8VEClIcZ8TBcRRMJYqrgr4OK+QGcr0O3m7nHb25AQ5aO3wrwXAQ+iszcQNQ41Z8puKHwXATGHNBqqtTo8rDw9XqlbKhs4uCrpge7LHBaLuCmQCyV6uT5yaHhsvA0B6Fth4daIMRh8y1tlkkVPB6Ri6cHxoqA2BwRKCtDrpgJCRjomBBAc/Jy8dPM4e9dkRyoQh0aWCYirpJro2lLXxp59GLCwzDXHIioY1k3VEqrIC+IEXOZzKztIh2XT/CyHHWKdGs2YTV26mgTwY7YDc5n5nFBQvXFIw5NVGw0Cxrxi8M3UQctBSt/pCsS8DAVYUbP4OVcYYl6iG/tYjBBKwQYVYB7y8yiy+fP7zrRCJNUiwRr8BEC4ilOLcijENE+QfM63dvlmucLO7mUjGQhf1x3BglS0vep7PM9895XuNYthWAeD/MgjSVM2gFWVpApd9LzLwexCUNOSoNRrk+fEItTYt8/i3z5YNXEjSQxqfs40ZBxuhQP0UOQQrMfWJ+eXQlMegwZkDSyNeOKJdEpfc/Fr56kaA7JG9MAqvR3gAKknf5G/NqRO63BtqN1iYQc3zp58fHzHSpVlIFG6SxcCD/6MmzF0t3bgS0kqq0/mMw5zxx+558icc8Wkn1Y2y69gjIuXmHOhVj69WSSnts+obTYmFuK6PFoZJE6xuuu0Jacs7XOOZAXtHWrlA3FALybKqDsyMyWBsKPGZT6phhcEMd3KZUJGM2RcZMN7g0Kh2sg/vJLmiDe7NhFfDc7q5xe7eQu9GvQn25cBs9G1Vu3wQZoMblqq8r3lbP9LqxNeNrt+/x4hlvWledAVgsyOsZHBzMOwuSKLY2G0DdUsomCfE4EJIsJoI1WYrOpMrAjuwIqba2wqSabE/DVtqeZqTuupEa4u7VjPQ/rPnfzV79fdj+8vv4A1Aef7RpmdATAAAAAElFTkSuQmCC"),!1===C.paused&&U(),D.addEventListener("click",(()=>{C.pause(),h("mute",1),D.style.display="none",P.style.display="block",C.removeEventListener("canplay",j)})),P.addEventListener("click",(()=>{U(),h("mute",0),j()}))};document.querySelector(".waifu-tool .icon-volumeup").addEventListener("click",(()=>{const e=100*C.volume,t=(e+10).toFixed(0);e<=90?(C.volume=C.volume+.1,S(e+10),u("音量增大到"+t+"%了哦",1300,!0)):(C.volume=1,S(100),u("声音不能再大啦",1300,!0))})),document.querySelector(".waifu-tool .icon-volumedown").addEventListener("click",(()=>{const e=100*C.volume,t=(e-10).toFixed(0);e>10?(C.volume=C.volume-.1,S(e-10),u("音量减小到"+t+"%了哦",1300,!0)):(C.volume=0,S(0),u("声音不能再小啦",1300,!0))}));const R=()=>{const e=document.querySelectorAll(".sidenav");M.Sidenav.init(e)},z=()=>{let e=document.createElement("script");e.type="text/javascript",e.src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",document.head.append(e)},N=()=>{let e=document.createElement("script");function t(){dataLayer.push(arguments)}e.type="text/javascript",e.src="https://www.googletagmanager.com/gtag/js?id=UA-144875900-1",document.head.append(e),window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","UA-144875900-1")},q=()=>{document.getElementsByClassName("fa-heart")[0].addEventListener("click",(()=>{document.getElementsByClassName("bg-cover")[0].style.backgroundImage="url(/medias/banner/2.jpg)"}))};"interactive"===document.readyState?(console.log("interactive"),R(),E(),W(),p("/search.xml","searchInput","searchResult"),z(),q(),NProgress.set(.6),window.onload=()=>{N(),NProgress.done()}):"complete"===document.readyState?(console.log("complete"),N(),NProgress.done()):(window.addEventListener("DOMContentLoaded",R),window.addEventListener("DOMContentLoaded",E),window.addEventListener("DOMContentLoaded",W),window.addEventListener("DOMContentLoaded",(()=>p("/search.xml","searchInput","searchResult"))),window.addEventListener("DOMContentLoaded",z),window.addEventListener("DOMContentLoaded",q),window.onload=()=>{N(),NProgress.done()}),window.onbeforeunload=()=>{0!==C.played.length&&h("audioTime",C.currentTime)}})();
//# sourceMappingURL=bundle.js.map