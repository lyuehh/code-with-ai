![avatar](https://imba97.cn/uploads/2019/08/imba97-1024-300x300.png)

[

文章

130

](/archives/)[

标签

193

](/tags/)[

分类

31

](/categories/)

[主页](/)

[生成拖拽安装](/archives/661/)

[友链](/links/)

[关于](/about/)

[开往](https://travellings.link/)

[![Logo](https://imba97.cn/uploads/2019/08/imba97-1024-300x300.png)](/)[2024 年度总结](/)

搜索

[主页](/)

[生成拖拽安装](/archives/661/)

[友链](/links/)

[关于](/about/)

[开往](https://travellings.link/)

# 2024 年度总结

发表于2024-12-31|更新于2024-12-31|[年度总结](/categories/%E5%B9%B4%E5%BA%A6%E6%80%BB%E7%BB%93/)

|浏览量:

# [](#生活 "生活")生活

继续我的

> 间歇性踌躇满志，持续性混吃等死。

年初突然动力拉满，开始学各种东西

-   吉他 学会了平凡之路
-   快板 学会了哒哒个呤哒呤叮哒
-   曲艺 学会了《同仁堂》、《挡凉》片段
-   写了俩脱口秀录了视频

我又觉得我行了

下半年辞职后 骑车从南京出发回老家，骑了 600 公里

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

# [](#工作 "工作")工作

辞职前是做点餐屏，泸溪河、赛百味之类的，有时候路过门店看到自己做的功能，还挺有成就感的

6 月 30 辞职，放了个久违的暑假，然后开始尝试数字游民，找远程工作。但并不好找，最后只找了兼职

虽然但是，不上班确实爽，没有了神经紧绷的状态，没有闹铃，每天做自己想做的事，完全是爱好驱动

年底又开始了全职坐班工作，不过理论上也是可以远程的

# [](#心理 "心理")心理

感觉越来越容易内耗，买了本《反内耗》也没看

对于有时间限制的东西会让我难受，比如闹铃、项目进度

经常发生像提前两个小时醒了，我会一直想着一会有个闹铃，就睡不着了

# [](#健康 "健康")健康

入睡时间一直挺长，半小时到两三个小时不等

醒了不困，即使没睡几个小时，很多年没有过”困得睁不开眼“的状态了

# [](#动漫 "动漫")动漫

看了《双城之战》，太爱金克斯了，必须拿出来说说

# [](#程序 "程序")程序

得益于离职，下半年做了些相对更精致的东西

1.  **iconfontx**
    
    写的第一个免安装脚本，可以直接执行 `npx iconfontx`
    
    可以将 `iconfont` 的样式和字体打包压缩成一个 CSS 文件在本地使用
    
    Github: [imba97/iconfontx](https://github.com/imba97/iconfontx)
    
    ---
    
2.  **introxd** - Intro 🤣
    
    个人简介定制项目，之前自己做了个简介，所以想着可能有同样需求的人
    
    不过没怎么推广，目前没客人
    
    Github: [introxd/web](https://github.com/introxd/web)
    
    后来把里面一些不错的组件抽出来，做了个组件库
    
    Github: [introxd/components](https://github.com/introxd/components)
    
    ---
    
3.  **initx**
    
    一个更方便的脚本引擎，一周写了个不错的匹配器和插件系统
    
    写了一堆插件，主要功能是用简单的指令完成复杂步骤的操作
    
    Github: [initx-collective/initx](https://github.com/initx-collective/initx)
    
    ---
    
4.  **个人简介**
    
    找远程的时候做了个个人简介，可以很方便的展示自己的技能，同时也是第一个 Nuxt 项目
    
    还做了个赛博朋克页面
    
    链接：[imba97.me](https://imba97.me/)
    
    Github: [imba97/me](https://github.com/imba97/me)
    

# [](#2025-目标 "2025 目标")2025 目标

去往更多的城市 💪

文章作者: [imba久期](https://imba97.cn)

文章链接: [https://imba97.cn/archives/795/](https://imba97.cn/archives/795/)

版权声明: 本博客所有文章除特别声明外，均采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议。转载请注明来源 [怠惰のコエ - imba久期 BLOG](https://imba97.cn)！

[总结](/tags/%E6%80%BB%E7%BB%93/)[2024](/tags/2024/)

[

下一篇

initx 存储模块

简单演示initx 的插件如果想在硬盘中存取数据，可以使用上下文中的 store 字段 123456789101112131415161718192021interface Store { foo: string}export default class StarterPlugin extends InitxPlugin<Store> { defaultStore = { foo: 'bar' } matchers = \[ { matching: 'start', description: 'Plugin starter' } \] async handle({ store }: InitxContext<Store>, ...others: string\[\]) { store.foo = 'baz' // ... ...





](/archives/794/ "initx 存储模块")

相关推荐

[

2019-12-31

2019总结

2019依然没目标没方向，引用“再见2019”的评论： 间歇性踌躇满志，持续性混吃等死。 干了几件事： 程序 Btools 这个算是件比较大的事了，从 2018-12-22 开始边看教程边做的，然后今年的1月16日发布到了 Chrome web store，在这之前其实我做了不少JS的小程序，都整合到了插件里，目前为止插件使用人数： 。 GitHub → とあるCMS 一个生成静态文章用的，目前的功能只有简单的生成首页、详情页、文章页，但可以高度自由定制。使用PHP框架Laravel做的，也是现学现卖。 GitHub → WdnmdApi 自己看教程撸的PHP框架，专注API开发。进度并没多少，边开发应用边完善框架。 GitHub → 网站 btools.cc Btools浏览器插件的官网。 imba97.cn ...





](/archives/478/ "2019总结")[

2022-12-31

2022 年度总结

今年的状态依然是 间歇性踌躇满志，持续性混吃等死。 去年的 Flag 日语 JLPT N1，报了也成功抢到位置了，但最后几天被通知考点取消了 系统学习数据结构和设计模式，完全没看 ¯\\\_(ツ)\_/¯ 我就不适合立 flag 工作今年一整年在做前端，从小白到入土 Vue2、Vue3 全家桶，WebPack、Vite 以及 PC 端、移动端的 UI 框架、常见的几个后台管理框架也都摸了个遍 下半年新项目是完全从零开始做了一套管理后台，封装了一些不错的组件，至少自己用起来很爽 生活依旧...





](/archives/759/ "2022 年度总结")[

2023-12-31

2023 年度总结

今年是感觉到了累的一年，更多的是精神压力。依然 间歇性踌躇满志，持续性混吃等死。 工作工作上更得心应手了，感觉现代程序猿到了后期就是手握一堆开源库，要什么功能找哪个库 换了工作，当前技术栈以 capacitor 为主，一个跨平台框架，用前端技术开发 Android、iOS 应用，也可以通过 electron 打包桌面应用 除了前端也搞一搞 nodejs 之类的，简单写写 iOS 相关的，于是变成了这样 加班略多，也学到不少新鲜东西 生活出现了严重拖延，感觉有种死循环。明知道不能睡太晚，但还是不太想睡，放下手机睡觉吧睡不着，至少得半小时一个小时才能睡着，于是就一两点了 但即使是这样感觉自己的时间还是很少，很多想做的、得做的一直排着队 以前工作之余还做做自己的项目，现在回家直接摆烂，边看 “一口气看完 XXX”...





](/archives/774/ "2023 年度总结")[

2021-12-31

留下了遗憾的 2021

又到了写年度总结的时间了，2021年状态依然 间歇性踌躇满志，持续性混吃等死。 生活年初做了近视手术，因为打算下半年当兵，4月从巴中回到了山东（但是既然你能看到这篇文章，说明我没去成，原因下面会说） 回家后不久把我的串串（猫）也托运回来了，目前丢给我妈养了 上半年跟着朋友健身，健身一段时间后无意间一摸肱二头肌，给我自己吓到了，粗了一圈 不过下半年又回归了咸鱼状态，肌肉就又没了 虽然说去年说了“越来越想把台式机换成笔记本了”，但还是真香了，入手了HUAWEI Mate Station S 不过也入手了一台笔记本，用来玩VR游戏的，VR 设备是华为VR Glass...





](/archives/750/ "留下了遗憾的 2021")[

2020-12-31

魔幻的2020

一年过得真快，2020年，我依然是延续去年的状态 间歇性踌躇满志，持续性混吃等死。 这次写篇小文章总结吧 工作过完春节，因为疫情的关系一直在家办公，我也非常喜欢这种办公模式，老宅男了。种种原因，公司的情况一直不是很好，年后没几个月，我从全职变成了兼职。兼职工资刚好够吃，再加上当时住的地方附近没有合适的工作，我就没急着找工作，自己做了做自媒体，于是就有了《每天一个JS程序》。其实从很早之前开始我也一直在做视频，只是当做一个兴趣，把做视频当正事干了之后，涨粉也算挺快（对我来说）。 但做视频的收入并不能养活我，公司的兼职到8月会最后一次发工资。这之后最现实的选择有两个，一是找工作，但因为我附近没有合适的，我又想在家附近找，所以只能搬家。二是先随便找个餐饮店、便利店之类的兼职，等合适的全职工作。当时挺佛系的，也没啥危机感，不紧不慢两边都在找。 也就在8月，出现了转机，发小突然问我要不要一起做独立游戏，经过各种探讨，最后我决定：入坑！于是我在 if(typeof dateMaker !== 'undefined') dateMaker('game');...





](/archives/735/ "魔幻的2020")

---

评论

![avatar](https://imba97.cn/uploads/2019/08/imba97-1024-300x300.png)

imba久期

あなた、怠惰ですねー

[

文章

130

](/archives/)[

标签

193

](/tags/)[

分类

31

](/categories/)

目录

1.  [1. 生活](#%E7%94%9F%E6%B4%BB)
2.  [2. 工作](#%E5%B7%A5%E4%BD%9C)
3.  [3. 心理](#%E5%BF%83%E7%90%86)
4.  [4. 健康](#%E5%81%A5%E5%BA%B7)
5.  [5. 动漫](#%E5%8A%A8%E6%BC%AB)
6.  [6. 程序](#%E7%A8%8B%E5%BA%8F)
7.  [7. 2025 目标](#2025-%E7%9B%AE%E6%A0%87)

最新文章

[2024 年度总结](/archives/795/ "2024 年度总结")2024-12-31

[initx 存储模块](/archives/794/ "initx 存储模块")2024-11-18

[initx 更方便的脚本引擎](/archives/793/ "initx 更方便的脚本引擎")2024-10-25

[initx 更方便的初始化工具](/archives/792/ "initx 更方便的初始化工具")2024-10-21

[Cloudflare Axios 请求问题](/archives/791/ "Cloudflare Axios 请求问题")2024-10-01

©2018 - 2024 By imba久期

框架 [Hexo](https://hexo.io)|主题 [Butterfly](https://github.com/jerryc127/hexo-theme-butterfly)

[](#post-comment "前往评论")

(() => { const isShuoshuo = GLOBAL\_CONFIG\_SITE.isShuoshuo const option = null const getCount = () => { const countELement = document.getElementById('twikoo-count') if(!countELement) return twikoo.getCommentsCount({ envId: 'twikoo-7gcz9sbg937cab11', region: 'ap-shanghai', urls: \[window.location.pathname\], includeReply: false }).then(res => { countELement.textContent = res\[0\].count }).catch(err => { console.error(err) }) } const init = (el = document, path = location.pathname) => { twikoo.init({ el: el.querySelector('#twikoo-wrap'), envId: 'twikoo-7gcz9sbg937cab11', region: 'ap-shanghai', onCommentLoaded: () => { btf.loadLightbox(document.querySelectorAll('#twikoo .tk-content img:not(.tk-owo-emotion)')) }, ...option, path: isShuoshuo ? path : (option && option.path) || path }) isShuoshuo && (window.shuoshuoComment.destroyTwikoo = () => { if (el.children.length) { el.innerHTML = '' el.classList.add('no-comment') } }) } const loadTwikoo = (el, path) => { if (typeof twikoo === 'object') setTimeout(() => init(el, path), 0) else btf.getScript('https://cdnjs.cloudflare.com/ajax/libs/twikoo/1.6.39/twikoo.all.min.js').then(() => init(el, path)) } if (isShuoshuo) { 'Twikoo' === 'Twikoo' ? window.shuoshuoComment = { loadComment: loadTwikoo } : window.loadOtherComment = loadTwikoo return } if ('Twikoo' === 'Twikoo' || !false) { if (false) btf.loadComment(document.getElementById('twikoo-wrap'), loadTwikoo) else loadTwikoo() } else { window.loadOtherComment = loadTwikoo } })()

document.querySelector("#footer-wrap").innerHTML = \` <a href="https://beian.miit.gov.cn" target="\_blank">鲁ICP备19030914号-1</a> ${document.querySelector("#footer-wrap").innerHTML} \`(() => { const pjaxSelectors = \["head > title","#config-diff","#body-wrap","#rightside-config-hide","#rightside-config-show",".js-pjax"\] window.pjax = new Pjax({ elements: 'a:not(\[target="\_blank"\])', selectors: pjaxSelectors, cacheBust: false, analytics: false, scrollRestoration: false }) const triggerPjaxFn = (val) => { if (!val) return Object.values(val).forEach(fn => fn()) } document.addEventListener('pjax:send', () => { // removeEventListener btf.removeGlobalFnEvent('pjaxSendOnce') btf.removeGlobalFnEvent('themeChange') // reset readmode const $bodyClassList = document.body.classList if ($bodyClassList.contains('read-mode')) $bodyClassList.remove('read-mode') triggerPjaxFn(window.globalFn.pjaxSend) }) document.addEventListener('pjax:complete', () => { btf.removeGlobalFnEvent('pjaxCompleteOnce') document.querySelectorAll('script\[data-pjax\]').forEach(item => { const newScript = document.createElement('script') const content = item.text || item.textContent || item.innerHTML || "" Array.from(item.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value)) newScript.appendChild(document.createTextNode(content)) item.parentNode.replaceChild(newScript, item) }) triggerPjaxFn(window.globalFn.pjaxComplete) }) document.addEventListener('pjax:error', e => { if (e.request.status === 404) { pjax.loadUrl('/404.html') } }) })()

搜索

数据加载中

---