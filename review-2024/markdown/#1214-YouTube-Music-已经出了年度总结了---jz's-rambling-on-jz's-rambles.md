[跳至内容](#main)

# [jz's ramblings](/)

-   [今天](https://ramble.imzh.me/today/ "Today")
-   [归档](https://ramble.imzh.me/all/ "Archive")
-   [类别](https://ramble.imzh.me/categories/ "Categories")
-   [链接](https://ramble.imzh.me/links/ "Links")
-   [关于](https://ramble.imzh.me/about/ "About")

[](https://ramble.imzh.me/index.xml "RSS")

const STORAGE\_KEY="user-color-scheme",defaultTheme="auto";let currentTheme,switchButton,autoDefinedScheme=window.matchMedia("(prefers-color-scheme: dark)");const autoChangeScheme=e=>{currentTheme=e.matches?"dark":"light",document.documentElement.setAttribute("data-theme",currentTheme),setThemeColor(currentTheme),updateBackgroundColor(currentTheme)};function setThemeColor(e){let t=document.querySelector('meta\[name="theme-color"\]');t||(t=document.createElement("meta"),t.name="theme-color",document.head.appendChild(t)),t.setAttribute("content",e==="dark"?"#121212":"#ffffff")}function updateBackgroundColor(e){document.body.style.backgroundColor=e==="dark"?"#121212":"#ffffff",document.body.style.color=e==="dark"?"#ffffff":"#121212"}document.addEventListener("DOMContentLoaded",function(){switchButton=document.querySelector(".theme-switcher"),currentTheme=detectCurrentScheme(),currentTheme==="dark"?(document.documentElement.setAttribute("data-theme","dark"),setThemeColor("dark")):currentTheme==="auto"?(autoChangeScheme(autoDefinedScheme),autoDefinedScheme.addListener(autoChangeScheme)):(document.documentElement.setAttribute("data-theme","light"),setThemeColor("light")),switchButton&&switchButton.addEventListener("click",switchTheme,!1),showContent()});function detectCurrentScheme(){return localStorage!==null&&localStorage.getItem(STORAGE\_KEY)?localStorage.getItem(STORAGE\_KEY):defaultTheme?defaultTheme:window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"light"}function switchTheme(){currentTheme==="dark"?(localStorage!==null&&localStorage.setItem(STORAGE\_KEY,"light"),document.documentElement.setAttribute("data-theme","light"),currentTheme="light"):(localStorage!==null&&localStorage.setItem(STORAGE\_KEY,"dark"),document.documentElement.setAttribute("data-theme","dark"),currentTheme="dark"),setThemeColor(currentTheme),updateBackgroundColor(currentTheme)}function showContent(){document.body.style.visibility="visible",document.body.style.opacity=1}autoDefinedScheme.addEventListener("change",autoChangeScheme)

#1214 YouTube Music 已经出了年度总结了

2024-11-28 15:42:28 +0800 +0800

[https://ramble.imzh.me/1214/](https://ramble.imzh.me/1214/) [John Zhang](https://ramble.imzh.me/)

-   [「图片」](https://ramble.imzh.me/categories/image/)

时间过得可真快啊，其实 11 月 20 日就已经出来了，只是今天看到 Spotify 也要出 Wrapped 了才想起来。从八月份我的 Spotify 由于车主没法继续支付后，我就转到了 YouTube Music，使用的时间不是很长，但是也听了很久了，这是我的年度报告。

![2024 Recap](https://cdn.imzh.me/webp/2024/11/d4f1790cf7d86b5e7ea7866d12cef25d.webp "2024 Recap")

![2024 Recap-Top genre](https://cdn.imzh.me/webp/2024/11/171b950388385d8c8ec6f485671ff663.webp "2024 Recap-Top genre")

![2024 Recap-Total minutes](https://cdn.imzh.me/webp/2024/11/b61f53754b076860d49529e8908837d4.webp "2024 Recap-Total minutes")

![2024 Recap-Top 5 tracks](https://cdn.imzh.me/webp/2024/11/6ae8c8af1b6df25fbac36bd4294c9f0d.webp "2024 Recap-Top 5 tracks")

![2024 Recap-Top artist](https://cdn.imzh.me/webp/2024/11/8c1195c9acae0b71ac9f0d565e24d2bf.webp "2024 Recap-Top artist")

![2024 Recap-Top artist](https://cdn.imzh.me/webp/2024/11/7c90d8b6bd07def4f8863b740af7f9fc.webp "2024 Recap-Top artist")

![2024 Recap-Top 5 artists](https://cdn.imzh.me/webp/2024/11/5f732ed19fb4a417e82d5fdfc13c2316.webp "2024 Recap-Top 5 artists")

![2024 Recap-Listening timeline](https://cdn.imzh.me/webp/2024/11/edbc4198e800a468394f8d8d8b9d5b99.webp "2024 Recap-Listening timeline")

![2024 Recap-Movie character](https://cdn.imzh.me/webp/2024/11/448ea7dd6692bdef18a7ad43e283865f.webp "2024 Recap-Movie character")

![2024 Recap-Top podcast](https://cdn.imzh.me/webp/2024/11/b35f73ebf0ad0030b606f44baa98be37.webp "2024 Recap-Top podcast")

![2024 Recap-Top 5 podcasts](https://cdn.imzh.me/webp/2024/11/5e56bb63d4b431ec4541b532f838789f.webp "2024 Recap-Top 5 podcasts")

![2024 Recap-Top album](https://cdn.imzh.me/webp/2024/11/74db6db354cf88f4b1a10a659c7ac466.webp "2024 Recap-Top album")

![2024 Recap-Top moods](https://cdn.imzh.me/webp/2024/11/a969e68899b67f09be9052cbae89f77a.webp "2024 Recap-Top moods")

![2024 Recap-Summary](https://cdn.imzh.me/webp/2024/11/b211e8762b2dd0b09eff0494d41cd132.webp "2024 Recap-Summary")

.visual-group{display:flex;width:90%;margin:0 auto;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none}.visual-group>\*{flex:none;margin-right:10px;scroll-snap-align:start}.visual-group>:last-child{margin-right:0}.prev-visual,.next-visual{position:absolute;top:50%;transform:translateY(-50%);z-index:10;border:none;cursor:pointer;width:5%;height:100%;background:0 0;padding:0;opacity:.6}.prev-visual{left:0}.next-visual{right:0}.prev-visual:disabled,.next-visual:disabled{opacity:.1}.prev-visual:not(:disabled):hover,.next-visual:not(:disabled):hover{opacity:.8}.prev-visual:not(:disabled):hover{background:radial-gradient( circle,var(--first-class-border-color),var(--bg-color) )}.next-visual:not(:disabled):hover{background:radial-gradient( circle,var(--first-class-border-color),var(--bg-color) )}.prev-visual svg,.next-visual svg{width:100%;height:3em;fill:var(--font-color)}@media(max-width:768px){.prev-visual,.next-visual{display:none}.visual-group{width:100%}}document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("g-visual-material-1214"),s=document.getElementById("LeftButton-visual-material-1214"),o=document.getElementById("RightButton-visual-material-1214");var e=n.querySelectorAll("video.img-shortcode, img.img-shortcode, iframe"),t=0;function i(){s.disabled=t<=0,o.disabled=t>=e.length-1}function a(s){var a,r,o=t+s;if(o<0||o>=e.length)return;t=o,a=e\[t\],r=a.offsetLeft-n.offsetLeft,n.scrollTo({left:r,behavior:"smooth"}),i()}s.addEventListener("click",function(){a(-1)}),o.addEventListener("click",function(){a(1)}),i(),e.forEach(function(t){t.addEventListener("play",function(){e.forEach(function(e){e!==t&&e.pause()})},!1)})})

[

最近 Recent

### #1215 J 的二三事

J 自己的破事已经很多了，但 J 还是不可避免的要面对来自己家庭的种种问题。吵架永远是 J 父母的主 …

](/1215/)

[

更早 Previous

### #1213 差别待遇只会带来更多的歧视

刷 YouTube 看到 TVB 的新闻视频，是说香港终审法院关于房委会和律政司就同性恋权利上诉的判 …

](/1213/)

import { init } from "https://unpkg.com/@waline/client@v3/dist/waline.js"; init({ dark: 'auto', lang: "zh-CN", el: "#waline", comment: true, reaction: \["/favicon.png"\], emoji: false, search: false, login: "disable", imageUploader: false, locale: { reactionTitle: "", nick: "昵称", mail: "邮箱(可选)", link: "个人网址(可选)", placeholder: "随便说点什么吧...", sofa: "还没有评论……", }, serverURL: "https:\\/\\/waline.imzh.me\\/", });

#comments-section{margin-top:5vw;margin-bottom:20px}

[John Zhang](https://ramble.imzh.me/) / [me@imzh.me](mailto:me@imzh.me) ![](/images/me.png)