const lightModePref = window.matchMedia("(prefers-color-scheme: light)"); function getUserPref() { const storedTheme = typeof localStorage !== "undefined" && localStorage.getItem("theme"); return storedTheme || (lightModePref.matches ? "light" : "dark"); } function setTheme(newTheme) { if (newTheme !== "light" && newTheme !== "dark") { return console.warn( \`Invalid theme value '${newTheme}' received. Expected 'light' or 'dark'.\`, ); } const root = document.documentElement; // root already set to newTheme, exit early if (newTheme === root.getAttribute("data-theme")) { return; } root.setAttribute("data-theme", newTheme); const colorThemeMetaTag = document.querySelector("meta\[name='theme-color'\]"); const bgColour = getComputedStyle(document.body).getPropertyValue("--theme-bg"); colorThemeMetaTag.setAttribute("content", \`hsl(${bgColour})\`); if (typeof localStorage !== "undefined") { localStorage.setItem("theme", newTheme); } } // initial setup setTheme(getUserPref()); // View Transitions hook to restore theme document.addEventListener("astro:after-swap", () => setTheme(getUserPref())); // listen for theme-change custom event, fired in src/components/ThemeToggle.astro document.addEventListener("theme-change", (e) => { setTheme(e.detail.theme); }); // listen for prefers-color-scheme change. lightModePref.addEventListener("change", (e) => setTheme(e.matches ? "light" : "dark")); [skip to content](#main)

 [![usubeni fantasy logo](/logo-mobile.png) Usubeni Fantasy](/)

[Archive](/archive/) [Tags](/tags/) [About](/about/) [Links](/links/) [虫洞](https://www.foreverblog.cn/go.html)

Close

Dark Theme

## Table of Contents

-   [#依然焦虑](#依然焦虑)
-   [#音乐不能缺席](#音乐不能缺席)
-   [#拥抱 AI](#拥抱-ai)
-   [#稍有起色的缅 A](#稍有起色的缅-a)
-   [#赛博 ED 治疗](#赛博-ed-治疗)
-   [#展望](#展望)

# 2024 年终总结

2024/12/31 / 10 min read

[diary](/tag/diary/) , [年终总结](/tag/年终总结/)

## 依然焦虑

今年最后两个月充满了我迄今为止最难熬的日子。因为虽然做成了一件很重要的事，但是又搞砸了一件很重要的事，细节就不提了，反正就是 30 岁这个年纪在世俗上的“任务”那些事儿。再叠上本来就严重的程序员年龄焦虑，就组成了今年难受的一年。虽然现在跟父母一起住的“中年人”也越来越多了，每个人人生的关键时间点都逐渐跟以前变得不同，但也不代表那些任务不会再烦着我们，哎，感觉离自由和松弛这两个词越来越远了。

这一堆事真的把我心智占满了。睡觉更睡不好了，尤其表现在半夜醒了就辗转反侧，难以再次入眠。于是这两个月感觉过得很魔幻，真可以说有点行尸走肉了。这种消耗也让我不没有心情写总结。

也是因为内卷加焦虑，现在根本闲不下来，总是同时干 N 件事情。我正在怀疑我脑子上下文太短以及睡觉时不和时宜的闪回都是多任务大脑的后遗症。因此**拯救多任务大脑刻不容缓啊**。

作为“缓解焦虑”的方法，这年完成了微信读书一年挑战，没难度，甚至都不需要用到补卡。不过老是开坑，看完的真的不多，记住的更不多。**也就是实际是缓解了焦虑，但是没有什么效果**。明年要花点时间即使蒸馏一下值得记住的内容。

![微信读书年挑战](https://img.ssshooter.com/img/2024-summary/weread.png)

顺便在这里打自己一巴掌，上年说搞音乐，已经搁置了，因为今年突然觉得搞音乐会被 suno 完爆，还不如省点时间干别的事吧。虽然这么说，上年学的乐理还是记得一点的，必要时可以用上，大概就够了吧。

## 音乐不能缺席

尽管在极度悲伤的情况下很难听进歌，甚至越听心情越差，但是大多数情况下，音乐绝不能缺席我的生活。

![](https://img.ssshooter.com/img/2024-summary/music.jpg)

前半年都在用 Spotify，后面开始用两个国产应用免费听日推，所以这个排名其实不太准，听了才几次的歌都能上榜了。

不过《勿听》和《风的形状》确实也是今年非常非常喜欢的两首歌。讲讲《勿听》，以前笑中国乐坛只会唱情情爱爱，结果黑悟空整张专辑最爱的还是情情爱爱的《勿听》，有亿点讽刺。这首歌作词虽不能说十分欣赏，因为本来我就会古风不太感冒，不过还是很佩服冯骥的多才多艺，这首歌跟过关动画配起来真的呈现了一个凄美的爱情故事。

## 拥抱 AI

上年还没什么感觉，今年开始**重度使用 AI** 了，编程时省去了大量查文档的时间。且今年 AI 也不限于文字，文生图（甚至生视频）、AI + 编辑器也开始好用起来，甚至年末在用了 windsurf 之后还真就有点依赖了，跟 copilot 那孱弱的补全比起来，直接编辑多个文件实现功能实在太强了。也确确实实可以直接使用 AI 实现一些简单的前端组件和后端 CRUD 需求，而且不需要太多时间。现在 windsurf 试用真的有点不习惯，真的变得有点享受 AI 自动写 side project 的感觉了……如果明年不升价的话应该会订阅 windsurf。

不过当然，在 AI 编码上真的要代替真人还是很有难度的，因为真实世界的软件（尤其是祖传代码）的复杂度可不像周末项目那么简单。AI 理解不了（常常是因为 context 不够长），自然也不能正确地给你加功能。不过估计我 35 岁的时候，就差不多了吧，与其让我被年龄打败，不如大家都被 AI 打败吧（无奈）。

## 稍有起色的缅 A

好消息，2024 年，基金终于在连跌 3 年之后回本了，但是这真的没什么好得意的， 4 年投资仅仅回本。不知道是不是还有很多兄弟还套着，但是起码看到一些曙光，政策也给得挺足得，不像之前看不到底地一直跌。最近听的理财播客，大多数博主都“再次”看好 2024，不过我吧，还是逐渐减 A 股比例吧，转移一点到纳斯达克和**黄金**。

如果纳斯达克真的被我定投到暴跌，那就当我毒奶吧。

P.S. 24 年最后一天给沪深 300 绿 1.6%，创业板绿 3%，真不愧是缅 A，哈哈。

## 赛博 ED 治疗

哥们借的 SteamDeck 稍稍治疗了悲剧中年男人的赛博 ED。上年说有打 FF 白金，结果今年好像是真的打完了就**从来没开过 PS4**，中间也就一直打打手游，直到黑神话发售借到 SteamDeck。8 月到现在用了几个月，真的觉得不追求摄影级别的画质，**SteamDeck 除了续航没有短板**，热门游戏都能流畅运行，睡前趴在床上玩真的十分方便。

手游在玩的还挺多，永劫无间手游、ZZZ、学园偶像大师、TCGP，弃了无期迷途、明日方舟。另外最近很久没玩的黎明杀机手游宣布关服了，又熬死一个手游。一大堆血点裂片真就到关服都没用完，绑定到端游版也就补偿这么一点。

![](https://img.ssshooter.com/img/2024-summary/bye-dbdm.jpg)

手游跟主机游戏的区别就像短视频和电影，一个是杀时间，一个是真的感受剧情或者追求刺激。虽然现在手游都全平台了，可以当半个主机游戏，但是从手游的氪金属性和重复劳作的特性还是很容易分辨出两者区别。但是通勤时间还是无可避免的想要杀时间，来回两个多小时的通勤时间真的难顶，这里多嘴劝各位一句真的不要轻易买房，尤其是别买离公司聚集地老远的房子。

## 展望

那就这样了，感觉今年真的没有什么感想，都被麻木的思绪屏蔽了，稍稍有点明白“成年人”怎么一步一步沦为社会没有感情的齿轮。

今年比上年好，但也没好多少，希望明年会再好一点吧——这句话说出来我都没有底气，毕竟我是个悲观主义者。

今年也送自己 3 句话吧：

-   身体健康依然是第一位
-   愤怒会传染，控制好自己情绪
-   被误解是表达者的宿命，但是人类就是想要逆转宿命的生物啊

再加 3 个行动建议：

-   尝试更依赖 AI
-   拯救多任务大脑
-   看完书记得总结

各位，新年快乐，祝大家 2025 生活美好。

P.S. 该去打生化危机 4 重制版了

astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event("astro:visible"));})();;(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o\]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let\[l,e\]=t;return l in i?i\[l\](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e\])=>\[l,o(e)\]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr\]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template\]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"\]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"\]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export ${v})\`),console.error(\`\[hydrate\] Error parsing props for component ${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c\]===void 0){window.addEventListener(\`astro:${c}\`,()=>this.start(),{once:!0});return}try{await Astro\[c\](async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}\]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}\]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u\];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f\]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`\[astro-island\] Error hydrating ${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"\]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

评论组件加载中……

© SSShooter 2025. 🚀 Astro Cactus

[Archive](/archive/) [Tags](/tags/) [About](/about/) [Links](/links/) [虫洞](https://www.foreverblog.cn/go.html)

window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } gtag("js", new Date()); gtag("config", "G-1TM2RNL48D");