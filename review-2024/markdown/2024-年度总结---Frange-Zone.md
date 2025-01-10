Toggle navigation [Frange Zone](/)

-   [Home](/)
-   [About](/about/)
-   [Archive](/archive/)
-   [](javascript:void\(0\))

// Drop Bootstarp low-performance Navbar // Use customize navbar with high-quality material design animation // in high-perf jank-free CSS3 implementation var $body = document.body; var $toggle = document.querySelector('.navbar-toggle'); var $navbar = document.querySelector('#huxblog\_navbar'); var $collapse = document.querySelector('.navbar-collapse'); var \_\_HuxNav\_\_ = { close: function () { $navbar.className = " "; // wait until animation end. setTimeout(function () { // prevent frequently toggle if ($navbar.className.indexOf('in') < 0) { $collapse.style.height = "0px" } }, 400) }, open: function () { $collapse.style.height = "auto" $navbar.className += " in"; } } // Bind Event $toggle.addEventListener('click', function (e) { if ($navbar.className.indexOf('in') > 0) { \_\_HuxNav\_\_.close() } else { \_\_HuxNav\_\_.open() } }) /\*\* \* Since Fastclick is used to delegate 'touchstart' globally \* to hack 300ms delay in iOS by performing a fake 'click', \* Using 'e.stopPropagation' to stop 'touchstart' event from \* $toggle/$collapse will break global delegation. \* \* Instead, we use a 'e.target' filter to prevent handler \* added to document close HuxNav. \* \* Also, we use 'click' instead of 'touchstart' as compromise \*/ document.addEventListener('click', function (e) { if (e.target == $toggle) return; if (e.target.className == 'icon-bar') return; \_\_HuxNav\_\_.close(); })

header.intro-header{ position: relative; background-image: url('/img/home-bg-frange.jpg'); background: ; }

[个人](/archive/?tag=%E4%B8%AA%E4%BA%BA "个人") [生活](/archive/?tag=%E7%94%9F%E6%B4%BB "生活")

# 2024 年度总结

## 2024 summary

Posted by frange on December 30, 2024

好久没写博客了，我几乎是快要抛弃掉这个记录的习惯，但想来还是觉得很有必要抽空还记录一下，不管是记录过去发生了什么，还是只记录当下的感悟和心境，都意义非凡。

2023年是我没有开始在网络上活跃的一年，没有打游戏，没有看书，没有听播客，在即刻上也几乎没有浏览和互动。主要是因为我在23年找了一份工作后又被辞退了，而之后在找工作的过程中处处碰壁，几乎找不到原行业合适对口的工作，于是无奈只能转而去考公，所以从23年下半年到24年上半年我一直在忙于学习和备考，奔波于各种事业单位招聘、国考、省考中，在每次等待笔试面试的结果的过程中，一直无比的焦虑，晚上也经常睡不着觉，思考着自己的未来和前途。

所幸的是，经过努力，我在24省考顺利上岸了，为此还欣喜了很长一段时间，家人也为我高兴，在他们看来这是一份很好的工作，这辈子都不用担心了。但我的心境和他们不一样，我只觉得这是一份普通工作，在这个大环境下能找到的还不错的能够养活自己的一份工作，事实上工作的定义也就是这样，为了生计而工作。

从24年8月份入职到现在，上班也近四个月了，还是谈谈自己上班的一些想法，由于工作性质没法说很多工作细节，只能大概谈谈感受和想法。这几个月来给我最大的感觉就是累了，倒不是那种身体上的累，而是心灵上的疲惫，疲惫于各种制度、检查、人际关系。很难用一句话传达我的感受，但基层的压力是巨大的，不身处其中是体会不到的。很多晚上我都经常做梦，梦见自己在工作，然后因为工作没有做好而担惊受怕。电话接多了，耳朵也会有一些幻听，经常以为自己电话响了，实际上并没有。每天都处于巨大的压力和精神内耗上，不时地会感觉到焦虑和迷茫。

从工作节奏上说，有时候不忙，有时候加起班来的话就很忙，这个时候就是精神和身体上的双重疲惫，所以导致基本上没有自己的生活，或者空闲时间基本都拿来补觉和休息了。

这差不多就是我目前工作的精神状态和感受，还没有完全适应，或许还带有一些批判的眼光，但终究还是要去适应它，只能边看边做了。

### 生活的心态

我现在的微信签名是“欲买桂花同载酒，终不似，少年游”，主要是觉得自由是一件很奢侈的事情，年轻的时候没有疯狂过，没有做很多自己想去做的事情，等以后有机会有能力做了，也再也体会不到年轻时候的那种感觉了。就像我今年6月份自己一个人背着包去香港玩了一天，感觉心情舒爽自在，有一种无忧无虑的毕业旅行的感觉，这种年轻去探索的感觉很棒，我博客的照片也换成了我在维多利亚港拍的一张自拍，很喜欢这种自由的心情。如果等我老了再去游览，或许就没有这样的感觉和心态了。

所以我很矛盾，心理上向往自由但现实中却没那么自由，无处不在的报备制度，一定程度上就剥夺了部分自由的权利。这句话是我大部分时候面对现实的无奈而发自内心的嗟叹。

### 写在最后

2025 对于自己是一个新的开始，就目前来说，人生的路径已经和之前不一样了，是在新的赛道上行走，一切都还要自己去摸索和学习。我不希望我的人生是固定的，所以尽可能在有限的框架下活出自我来。

### 2025 年的一些展望

-   希望能够面对工作更加从容，不再焦虑。
-   通过法考，让职业路径有更多向上的选择。
-   提升自己的社交能力，不仅是为了工作，而且也是改变自己。
-   希望能够做好生活和工作的平衡，有分配给爱好的事情。
-   发掘更多值得自己努力活下去的美好瞬间。

---

-   [上一篇  
    成为数字游民需要的一些准备](/2023/03/24/digital-nomad/ "成为数字游民需要的一些准备")

---

---

##### [CATALOG](#)

---

##### [FEATURED TAGS](/archive/)

[产品](/archive/?tag=%E4%BA%A7%E5%93%81 "产品") [个人](/archive/?tag=%E4%B8%AA%E4%BA%BA "个人") [生活](/archive/?tag=%E7%94%9F%E6%B4%BB "生活") [安利](/archive/?tag=%E5%AE%89%E5%88%A9 "安利") [社交](/archive/?tag=%E7%A4%BE%E4%BA%A4 "社交") [Newsletter](/archive/?tag=Newsletter "Newsletter")

---

##### FRIENDS

-   [Yellow Page](https://jike.city/frange)
-   [千古壹号](https://www.qianguyihao.com)
-   [Power's Wiki](https://wiki-power.com/blog)
-   [太隐](https://www.wangyurui.top)
-   [三十年河東](http://ssnhd.com)
-   [Arthur](https://artori.us)

function async(u, c) { var d = document, t = 'script', o = d.createElement(t), s = d.getElementsByTagName(t)\[0\]; o.src = u; if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); } s.parentNode.insertBefore(o, s); } async("//cdnjs.cloudflare.com/ajax/libs/anchor-js/1.1.1/anchor.min.js",function(){ anchors.options = { visible: 'hover', placement: 'right', // icon: '#' }; anchors.add().remove('.intro-header h1').remove('.subheading').remove('.sidebar-container h5'); }) /\* place left on bigger screen \*/ @media all and (min-width: 800px) { .anchorjs-link{ position: absolute; left: -0.75em; font-size: 1.1em; margin-top : -0.1em; } }

-   [](/feed.xml)
-   [*知*](https://www.zhihu.com/people/risingsun-5)
-   [](https://github.com/frangezone)

Copyright © Frange Zone 2024  
Powered by [Hux Blog](http://huangxuan.me) |

function async(u, c) { var d = document, t = 'script', o = d.createElement(t), s = d.getElementsByTagName(t)\[0\]; o.src = u; if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); } s.parentNode.insertBefore(o, s); } async("//cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js", function () { var $nav = document.querySelector("nav"); if ($nav) FastClick.attach($nav); }) window.dataLayer = window.dataLayer || \[\]; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VGPQ55J2KM'); // dynamic User by Hux var \_baId = '00ee830f61cb9c3306b107157b552378'; // Originial var \_hmt = \_hmt || \[\]; (function () { var hm = document.createElement("script"); hm.src = "//hm.baidu.com/hm.js?" + \_baId; var s = document.getElementsByTagName("script")\[0\]; s.parentNode.insertBefore(hm, s); })(); function generateCatalog(selector) { // interop with multilangual if ('' == 'true') { \_containerSelector = 'div.post-container.active' } else { \_containerSelector = 'div.post-container' } // init var P = $(\_containerSelector), a, n, t, l, i, c; a = P.find('h1,h2,h3,h4,h5,h6'); // clean $(selector).html('') // appending a.each(function () { n = $(this).prop('tagName').toLowerCase(); i = "#" + $(this).prop('id'); t = $(this).text(); c = $('<a href="' + i + '" rel="nofollow">' + t + '</a>'); l = $('<li class="' + n + '\_nav"></li>').append(c); $(selector).append(l); }); return true; } generateCatalog(".catalog-body"); // toggle side catalog $(".catalog-toggle").click((function (e) { e.preventDefault(); $('.side-catalog').toggleClass("fold") })) /\* \* Doc: https://github.com/davist11/jQuery-One-Page-Nav \* Fork by Hux to support padding \*/ async("/js/jquery.nav.js", function () { $('.catalog-body').onePageNav({ currentClass: "active", changeHash: !1, easing: "swing", filter: "", scrollSpeed: 700, scrollOffset: 0, scrollThreshold: .2, begin: null, end: null, scrollChange: null, padding: 80 }); }); // https://stackoverflow.com/questions/1912501/unescape-html-entities-in-javascript function htmlDecode(input) { var e = document.createElement('textarea'); e.innerHTML = input; // handle case of empty input return e.childNodes.length === 0 ? "" : e.childNodes\[0\].nodeValue; } SimpleJekyllSearch({ searchInput: document.getElementById('search-input'), resultsContainer: document.getElementById('search-results'), json: '/search.json', searchResultTemplate: '<div class="post-preview item"><a href="{url}"><h2 class="post-title">{title}</h2><h3 class="post-subtitle">{subtitle}</h3><hr></a></div>', noResultsText: 'No results', limit: 50, fuzzy: false, // a hack to get escaped subtitle unescaped. for some reason, // post.subtitle w/o escape filter nuke entire search. templateMiddleware: function (prop, value, template) { if (prop === 'subtitle' || prop === 'title') { if (value.indexOf("code")) { return htmlDecode(value); } else { return value; } } } }); $(document).ready(function () { var $searchPage = $('.search-page'); var $searchOpen = $('.search-icon'); var $searchClose = $('.search-icon-close'); var $searchInput = $('#search-input'); var $body = $('body'); $searchOpen.on('click', function (e) { e.preventDefault(); $searchPage.toggleClass('search-active'); var prevClasses = $body.attr('class') || ''; setTimeout(function () { $body.addClass('no-scroll'); }, 400) if ($searchPage.hasClass('search-active')) { $searchClose.on('click', function (e) { e.preventDefault(); $searchPage.removeClass('search-active'); $body.attr('class', prevClasses); // from closure }); $searchInput.focus(); } }); }); ![](/img/icon_wechat.png)