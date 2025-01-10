[

Frost's Blog

](/)

[

主页

](/)[

归档

](/archive/)[

关于

](/about/)[

友情链接

](/blogroll/)

astro-island,astro-slot,astro-static-slot{display:contents}(self.Astro||(self.Astro={})).load=async t=>{await(await t())()},window.dispatchEvent(new Event("astro:load")),(()=>{var t=Object.defineProperty,e=(e,r,n)=>((e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e\[r\]=n)(e,"symbol"!=typeof r?r+"":r,n);{let t={0:t=>s(t),1:t=>n(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(n(t)),5:t=>new Set(n(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>1/0\*t},r=e=>{let\[r,n\]=e;return r in t?t\[r\](n):void 0},n=t=>t.map(r),s=t=>"object"!=typeof t||null===t?t:Object.fromEntries(Object.entries(t).map(((\[t,e\])=>\[t,r(e)\])));class i extends HTMLElement{constructor(){super(...arguments),e(this,"Component"),e(this,"hydrator"),e(this,"hydrate",(async()=>{var t;if(!this.hydrator||!this.isConnected)return;let e=null==(t=this.parentElement)?void 0:t.closest("astro-island\[ssr\]");if(e)return void e.addEventListener("astro:hydrate",this.hydrate,{once:!0});let r,n=this.querySelectorAll("astro-slot"),i={},o=this.querySelectorAll("template\[data-astro-template\]");for(let t of o){let e=t.closest(this.tagName);null!=e&&e.isSameNode(this)&&(i\[t.getAttribute("data-astro-template")||"default"\]=t.innerHTML,t.remove())}for(let t of n){let e=t.closest(this.tagName);null!=e&&e.isSameNode(this)&&(i\[t.getAttribute("name")||"default"\]=t.innerHTML)}try{r=this.hasAttribute("props")?s(JSON.parse(this.getAttribute("props"))):{}}catch(t){let e=this.getAttribute("component-url")||"<unknown>",r=this.getAttribute("component-export");throw r&&(e+=\` (export ${r})\`),console.error(\`\[hydrate\] Error parsing props for component ${e}\`,this.getAttribute("props"),t),t}await this.hydrator(this)(this.Component,r,i,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))})),e(this,"unmount",(()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))}))}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(this.hasAttribute("await-children")&&"interactive"!==document.readyState&&"complete"!==document.readyState){let t=()=>{document.removeEventListener("DOMContentLoaded",t),e.disconnect(),this.childrenConnectedCallback()},e=new MutationObserver((()=>{var e;(null==(e=this.lastChild)?void 0:e.nodeType)===Node.COMMENT\_NODE&&"astro:end"===this.lastChild.nodeValue&&(this.lastChild.remove(),t())}));e.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",t)}else this.childrenConnectedCallback()}async childrenConnectedCallback(){let t=this.getAttribute("before-hydration-url");t&&await import(t),this.start()}async start(){let t=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(void 0!==Astro\[e\])try{await Astro\[e\]((async()=>{let t=this.getAttribute("renderer-url"),\[e,{default:r}\]=await Promise.all(\[import(this.getAttribute("component-url")),t?import(t):()=>()=>{}\]),n=this.getAttribute("component-export")||"default";if(n.includes(".")){this.Component=e;for(let t of n.split("."))this.Component=this.Component\[t\]}else this.Component=e\[n\];return this.hydrator=r,this.hydrate}),t,this)}catch(t){console.error(\`\[astro-island\] Error hydrating ${this.getAttribute("component-url")}\`,t)}else window.addEventListener(\`astro:${e}\`,(()=>this.start()),{once:!0})}attributeChangedCallback(){this.hydrate()}}e(i,"observedAttributes",\["props"\]),customElements.get("astro-island")||customElements.define("astro-island",i)}})()

亮色 暗色 跟随系统

[

主页

](/)[

归档

](/archive/)[

关于

](/about/)[

友情链接

](/blogroll/)

(self.Astro||(self.Astro={})).only=async t=>{await(await t())()},window.dispatchEvent(new Event("astro:only"))

!async function(){const i=await import("/pagefind/pagefind.js");await i.options({excerptLength:20}),i.init(),window.pagefind=i,i.search("")}()

[

![Profile Image of the Author](https://github.com/frostming.png)

](/about/)

Frost Ming

🐍Python developer / PyPA member / Creator of @pdm\_project

[](https://twitter.com/frostming90)[](https://t.me/fming_weekly)[](https://github.com/frostming)[](https://mas.to/@frostming)[](https://www.instagram.com/frostming90)

标签

[django](/tag/django/) [drf](/tag/drf/) [Flask](/tag/Flask/) [friendly python](/tag/friendly python/) [github](/tag/github/) [howdoesitwork](/tag/howdoesitwork/) [logseq](/tag/logseq/) [Packaging](/tag/Packaging/) [PDM](/tag/PDM/) [PyCon](/tag/PyCon/) [Python](/tag/Python/) [Python3](/tag/Python3/) [Requests](/tag/Requests/) [SQLite](/tag/SQLite/) [talk](/tag/talk/) [Vue](/tag/Vue/) [Web](/tag/Web/) [入门](/tag/入门/) [最佳实践](/tag/最佳实践/) [博客](/tag/博客/) [历史](/tag/历史/) [吐槽](/tag/吐槽/) [总结](/tag/总结/) [感悟](/tag/感悟/) [散文](/tag/散文/) [数学](/tag/数学/) [数据](/tag/数据/) [日志](/tag/日志/) [正则表达式](/tag/正则表达式/) [源码阅读](/tag/源码阅读/) [爬虫](/tag/爬虫/) [碎碎念](/tag/碎碎念/) [社区](/tag/社区/) [算法](/tag/算法/) [编程](/tag/编程/) [翻译](/tag/翻译/) [阅读](/tag/阅读/) [雕虫小技](/tag/雕虫小技/)

更多

738 字

4 分钟

我的 2024

2024-12-24

[总结](/tag/总结/)

![](https://webp.frostming.com/images/2024-art.webp)

## 工作与技术[#](#工作与技术)

-   在 BentoML lead 了几个重要的 feature，包括 1.3 和 1.4 两个大版本，以及 Codespaces 和 Comfy-Pack。
    
-   11 月参与 PyCon China 2024，见了许多网友，参加了代码厨房的活动，很开心。做了关于 Pydantic 的演讲。
    
    -   ![20241224101143](https://webp.frostming.com/images/20241224101143.png)
    -   [slides](https://slides.fming.dev/pydantic/)
    -   [视频](https://www.bilibili.com/video/BV1xUzRYTEBG?spm_id_from=333.1387.homepage.video_card.click)
-   11 月参与了 NebulaGraph 深圳的线下活动，做了关于 BentoML 的分享。
    
-   5 月份有荣幸[与 Paul Romer 见面交流](https://frostming.com/2024/meet-with-paul/)，并造就了 2024 年我最受关注的一篇文章。但于我来说会总结为**机缘巧合**，不必赋与我其他的光环。事实上从那以后我试图联系过 Romer 先生都没有得到回应。
    
-   开源了 [FxZhihu](https://www.fxzhihu.com) 被很多人使用，感受到贡献了一些价值。
    
-   写作博客文章 15 篇。
    
-   由于 uv 的横空出世，PDM 无疑受到了一些冲击，发展明显变缓。 ![star-history-20241224](https://webp.frostming.com/images/star-history-20241224.png)
    
    但我不是那么狭隘，人不能沉湎在过去的辉煌中举步不前。好用的工具得用，我自己平时也会用用 uv。PDM 也在 2.19 中加入了[对 uv 的支持](https://pdm-project.org/en/latest/usage/uv/)。
    
-   开源了 [Tetos](https://github.com/frostming/tetos/)，一个 TTS 的统一 SDK 库。
    
-   其他的一些娱乐项目比如：
    
    -   [TG 猜成语机器人](https://github.com/frostming/picguessr)
    -   [给照片添加边框的工具](https://github.com/frostming/Watermarker)
-   2024 依然目睹了 GenAI 和 LLM 的火爆，我个人也体验了 Cursor 最后又回到了 VSCode。
    

## 出行[#](#出行)

今年继续去了挺多地方。

1 月份汕尾

![IMG_4111.HEIC_compressed](https://webp.frostming.com/images/IMG_4111.HEIC_compressed.JPEG)

2 月珠海——中山

![20241224103554](https://webp.frostming.com/images/20241224103554.png)

春节马六甲——吉隆坡

![20241224103332](https://webp.frostming.com/images/20241224103332.png)

清明节广西梧州

![20241224103801](https://webp.frostming.com/images/20241224103801.png)

4 月份上海

![20241224104551](https://webp.frostming.com/images/20241224104551.png)

五一普者黑——弥勒

![20241224104641](https://webp.frostming.com/images/20241224104641.png)![20241224104722](https://webp.frostming.com/images/20241224104722.png)

6 月份泉州

![20241224104824](https://webp.frostming.com/images/20241224104824.png)

8 月份太原

![20241224104920](https://webp.frostming.com/images/20241224104920.png)

国庆日本九州

![jiuzhou_027.jpeg](https://webp.msmiao.me/images/jiuzhou_027.jpeg)![jiuzhou_088.jpeg](https://webp.msmiao.me/images/jiuzhou_088.jpeg)

11 月潮汕

![20241224105516](https://webp.frostming.com/images/20241224105516.png)

PyCon China 上海 Again

![20241224105552](https://webp.frostming.com/images/20241224105552.png)

12 月香港

![20241224105633](https://webp.frostming.com/images/20241224105633.png)

## 生活[#](#生活)

-   房子做了几次提前还款，减少了一些负担。
-   把手上相机卖了，换了个新的，富家子弟又支棱起来了。
-   买了 Mac Mini M4，用来做开发机，体验还不错。
-   被保险代理忽悠去香港考了个 IIQE（保险中介资格考试），很容易就过了，但不知道有什么用。
-   呃啊我的高才明年就要续了，还不知道怎么搞，很焦虑。
-   [去年提到的精神内耗状况](/2024/2023-review/#%E7%94%9F%E6%B4%BB)减轻了许多，在外界因素变化不大的情况下，我开始更多地放松和和解。

## 书影音[#](#书影音)

[2024 年的书影音](https://frostming.notion.site/Frost-s-Home-bc46e4cd47d34eea94f2337c34ba2085)

最喜欢的书是《隳三都》,在历史非虚构里属于非常优秀的了。另外还有刘震云的《我叫刘跃进》，高级的黑色幽默。 电影没有最喜欢的，相对好的是《走走停停》《从 21 世纪安全撤离》和《死侍与金刚狼》。

只是 10 月份以后就没有看书和电影了，提不起兴趣来。

明年会怎么样，我也不知道。2025 是个平方数，希望是个好年。

2025\=452\=34×522025 = 45^2 = 3^4 \\times 5^22025\=452\=34×52

*本文题图由 Ideogram 生成，其余图片，除 PyCon China 合影，均为本人拍摄。*

我的 2024

[https://frostming.com/2024/review/](https://frostming.com/2024/review/)

作者

Frost Ming

发布于

2024-12-24

许可协议

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[

一个 monkeypatch 引起的循环引用问题



](/2024/circular-ref-monkeypatch/)

© 2024 Frost Ming. All Rights Reserved.  
Powered by [Fuwari](https://github.com/saicaca/fuwari)

function backToTop(){window.scroll({top:0,behavior:"smooth"})}function scrollFunction(){let o=document.getElementById("back-to-top-btn");document.body.scrollTop>600||document.documentElement.scrollTop>600?o.classList.remove("hide"):o.classList.add("hide")}window.onscroll=scrollFunction