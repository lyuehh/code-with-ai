function setTheme(e){document.body.setAttribute("theme",e),document.documentElement.className=e,document.documentElement.style.setProperty("color-scheme",e==="light"?"light":"dark"),e==="light"?document.documentElement.classList.remove("tw-dark"):document.documentElement.classList.add("tw-dark"),window.theme=e,window.isDark=window.theme!=="light"}function saveTheme(e){window.localStorage&&localStorage.setItem("theme",e)}function getMeta(e){const t=document.getElementsByTagName("meta");for(let n=0;n<t.length;n++)if(t\[n\].getAttribute("name")===e)return t\[n\];return""}if(window.localStorage&&localStorage.getItem("theme")){let e=localStorage.getItem("theme");e==="light"||e==="dark"?setTheme(e):setTheme(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}else"auto"==="light"||"auto"==="dark"?(setTheme("auto"),saveTheme("auto")):(saveTheme("auto"),setTheme(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));let metaColors={light:"#f8f8f8",dark:"#161b22"};getMeta("theme-color").content=metaColors\[document.body.getAttribute("theme")\],window.switchThemeEventSet=new Set

[](/ "This Cute World")

[阅读排行](/statistics/) [系列](/series/) [技术](/categories/tech/) [生活](/categories/life/) [标签](/tags/) [朋友们](/friends/) [此刻](/now/) [关于](/about/) Simplified Chinese Simplified Chinese 

[](/ "This Cute World")

取消

[阅读排行](/statistics/)[系列](/series/)[技术](/categories/tech/)[生活](/categories/life/)[标签](/tags/)[朋友们](/friends/)[此刻](/now/)[关于](/about/) Simplified Chinese Simplified Chinese

## 目录

-   [前言](#前言)
-   [2024 年 Highlights](#2024-年-highlights)
    -   [1\. 旅行与徒步](#1-旅行与徒步)
    -   [2\. 业余技术](#2-业余技术)
    -   [3\. 工作](#3-工作)
    -   [4\. 阅读](#4-阅读)
-   [2025 年展望](#2025-年展望)

document.getElementsByTagName("main")\[0\].setAttribute("autoTOC","true")

# 我的 2024 - 稳中求进、热爱生活

[![於清樂 avatar](/avatar/myself.webp)於清樂](https://thiscute.world/authors/ryan4yin)  收录于  类别 [Life](/categories/life/) [Tech](/categories/tech/) 和 系列 [年终总结](/series/%E5%B9%B4%E7%BB%88%E6%80%BB%E7%BB%93/)

 2025-01-07  2025-01-07  约 4075 字   预计阅读 18 分钟 

![](/posts/2024-summary/Hong-Kong-New-Year-2025_fireworks-at-Victoria-Harbour.jpg)

系列 - 年终总结

-   我的 2024 - 稳中求进、热爱生活
-   [我的 2023 - 认识更多有趣的人，见识更宽广的世界](/posts/2023-summary/)
-   [两岸猿声啼不住，轻舟已过万重山——我的四分之一人生](/posts/a-quarter-of-the-way-through-life/)
-   [2022 年年终总结](/posts/2022-summary/)
-   [2021 年年终总结](/posts/2021-summary/)
-   [2020 年年终总结](/posts/2020-summary/)
-   [2019 年年终总结](/posts/2019-summary/)

目录

-   [前言](#前言)
-   [2024 年 Highlights](#2024-年-highlights)
    -   [1\. 旅行与徒步](#1-旅行与徒步)
    -   [2\. 业余技术](#2-业余技术)
    -   [3\. 工作](#3-工作)
    -   [4\. 阅读](#4-阅读)
-   [2025 年展望](#2025-年展望)

## [](#%e5%89%8d%e8%a8%80)前言

相比跌宕起伏的 2023 年, 2024 年我少了一些焦虑与内耗, 花在技术上的时间也少了不少. 我将大量的精力转移到了徒步旅行上, 享受了诸多旅行的快乐.

可能因为 23 年写的太多，24 年少了些创作的热情，也因此这份年终一直拖着。本来想效仿去年的风格过一遍一整年中比较有意义的事情，但是不太能下手。

不过，总得写点什么给这一年画上一个句号，今天总算交差了.

## [](#2024-%e5%b9%b4-highlights)2024 年 Highlights

### [](#1-%e6%97%85%e8%a1%8c%e4%b8%8e%e5%be%92%e6%ad%a5)1\. 旅行与徒步

2024 年跟 2023 年最大的变化, 是我 3 月份抽时间办了港澳通行证跟护照, 在香港跟国内完成了多次徒步旅行, 今年的最后一天也是在香港维多利亚港的烟花中度过的. 这篇文章的封面图就是香港维多利亚港的跨年烟花(因为自己拍摄的角度不太好, 所以网上找了这张图).

我在 2024 年的徒步旅行与 City Walk 记录如下:

-   3/30 - SRE 小组第一次以户外运动的形式进行团建，一起爬了凤凰山（鲲鹏径）
-   4/4 - 跟我妹一起逛了仙湖植物园，很多奇花异草，另外回程意外爬上了梧桐山，给我俩都累坏了， 当然也很开心
    
    ![](/images/travel/2024-04-shenzhen-fairy-lake-botanical-garden/IMG20240405122141.webp)
    
-   4/14 - 第一次去香港玩，从维多利亚港沿着海岸线一路徒步到坚尼地城，然后坐地铁回家，海岸线很美，香港也有独特的风土人情在
    -   解锁成就 - 第一次出境中国大陆
        
        ![](/images/travel/2024-04-hongkong-victoria-harbour-to-kennedy-town/IMG20240414160043.webp)
        
-   5/2 ~ 5/3 - 单人刷了一遍香港麦里浩径二段，从北潭凹管理站下车开始徒步，沿着麦理浩径二段又走回到北潭凹站，算是环线，大概 20 到 30 公里的样子，中间在西湾村租帐篷露营了一晚上
    -   解锁成就 - 第一次露营、第一次在山林里孤身赶夜路
        
        ![](/images/travel/2024-05-02-hongkong-maclehose-trail/IMG20240503104509.webp)
        
        #### 不知道是谁，在牛粪上插鲜花 emmm
        
        ![](/images/travel/2024-05-02-hongkong-maclehose-trail/IMG20240503075947.webp)
        
        #### 这一段风景绝赞，全程最佳！
        
-   5/18 - 5/19 - 单人背着 17 公斤的背包重装徒步麦理浩径三段，中间还解锁了一些支线，全程走了 14 公里，走走停停近 8 个小时（体力不够所以走得很慢），夜间在水浪窝营地露营了一晚上
    -   解锁成就 - 第一次重装徒步
        
        ![](/images/travel/2024-05-18-hongkong-maclehose-trail-section-3/IMG20240518191208.webp)
        
        #### 山顶继续前行，远方城市灯火通明
        
        ![](/images/travel/2024-05-18-hongkong-maclehose-trail-section-3/IMG20240519071209.webp)
        
        #### 清晨 7 点多，解决卫生问题，顺便随处走走，发现营地标牌
        
-   5/25 - 继续单人徒步麦径四段，坐九巴 299X 路到大浪窝站下车开始徒步，从四段起点出发的时间为 13:20，到达大老山隧道站时已经是 22:20, 全程差不多 9 个小时，超过 21 公里，背的还是 16kg 的重装背包
    -   解锁成就 - 第一次重装徒步超过 20 公里，到目前为止的人生巅峰了
        
        ![](/images/travel/2024-05-25-hongkong-maclehose-trail-section-4/IMG20240525164837.webp)
        
        #### 这应该是四段风景最好的一段, 可惜雾太大
        
-   6/22 - 6/23 - 徒步至铅矿坳营地露营
    -   解锁成就 - 这次带了卡式炉气罐跟炊具，第一次户外做饭，很香
-   6/29 - 与同事四人组团麦理浩径一二段徒步
    -   从北潭凹反穿，一路走到万宜水库东坝，因为计划单日徒步，这次只背了 30 升小包，运动量相比之前几次并不大
    -   解锁成就 - 第一次与同事组团长距离徒步、第一次大雨中徒步（有风险，不建议冒雨上山）
-   08/03 - 跟老妹一起在香港维多利亚港沿海漫步，人比之前五一假期少了太多，体验非常好！可以悠闲地慢慢走，拍照，聊天
-   8/21 - 8/23 - 在香港参加为期三天的 KubeCon China 2024, 顺便跟着朋友逛香港
    
    ![](/images/kubecon-china-2024/IMG20240821084905_20240905145523.webp)
    
    #### 主会场过厅，海景不错的
    
    ![](/images/kubecon-china-2024/IMG20240821181445_20240905145522.webp)
    
    #### 冰镇饮料也可以随便喝，好哇
    
    ![](/images/kubecon-china-2024/IMG20240822102713_20240905145521.webp)
    
    #### 好多的 CNCF 贴纸，可以随便拿，我给同事也带了一些
    
    ![](/images/kubecon-china-2024/IMG20240822213416_20240905145520.webp)
    
    #### 香港夜景，相当繁华哪
    
    ![](/images/kubecon-china-2024/IMG20240823093047_20240905145520.webp)
    
    #### Linus
    
    ![](/images/kubecon-china-2024/our-selfie.webp)
    
    #### 咱的合影
    
-   10/18 - 10/19 - 公司团建，在惠州东江玩皮划艇，18 公里，挺愉快
    
    ![](/images/travel/2024-10-18-teambuilding-kayaking/IMG_20241107_163651.webp)
    
    #### 跟同事划皮划艇
    
    ![](/images/travel/2024-10-18-teambuilding-kayaking/AK1653.webp)
    
    #### 江边放点烟花，不得不说公司是会玩的
    
-   10/26 - 10/27 - 跟同事武功山徒步，10/25 提前下班坐高铁到长沙休息，10/26 早上坐高铁到萍乡再叫车送到武功山下开始徒步。我们是反穿，第一天徒步到云中峰客栈住宿，第二天上午继续徒步到武功山大门口，中间乘了两段下山索道。两天武功山都起大雾，没看到日出，视野也差了许多，但云海也还算不错，在山脊线上走，两边都是悬崖，而且还好大的风，还是有点刺激的
    
    ![](/images/travel/2024-10-26-wugong-mountains/IMG20241027053935_20241107155625.webp)
    
    #### 10/27 凌晨, 喝着热水欣赏早晨四五点的山景
    
    ![](/images/travel/2024-10-26-wugong-mountains/IMG20241027055431_20241107155625.webp)
    
    #### 10/27 快清晨六点了，对面山上的早餐叫卖声隔这么远都听得到
    
    ![](/images/travel/2024-10-26-wugong-mountains/IMG20241027070222_20241107155625.webp)
    
    #### 10/27 从云中峰客栈再次出发
    
-   11/23 - SRE 小组深圳梅林登山徒步, 路程大概 14 公里, 早上 9 点 30 从梅林水库大坝出发，下午 14 点 50 到终点, 全程 5 个多小时
-   11/24 - 到香港招商局码头看海南舰(075 两栖攻击舰), 不过没拿到门票上船参观
    
    ![](/images/now-2024/photo_2025-01-01_22-53-13.jpg)
    
    ![](/images/now-2024/photo_2025-01-01_22-53-15.jpg)
    
-   11/30 - 陪朋友香港办银行卡, 顺便在皇后大道跟维多利亚港一直 City Walk 到晚上九点
    
    ![](/images/now-2024/photo_2025-01-01_22-52-57.jpg)
    
    #### 沿着皇后大道走到了一条市集小街，节日氛围浓厚
    
    ![](/images/now-2024/photo_2025-01-01_22-52-37.jpg)
    
    #### K11 商场海边的圣诞树布景，好多人拍照
    
    ![](/images/now-2024/photo_2025-01-02_00-32-37.jpg)
    
    #### 维港渡轮上回头，能看到标志性的摩天轮
    
-   12/31 - 2024 年最后一天, 在香港 City Walk, 晚上到维多利亚港看跨年烟花，人山人海，很有氛围
    
    ![](/images/now-2024/photo_2025-01-01_22-48-36.jpg)
    
    #### 我拍的烟花，位置不好效果差挺多
    
    ![](/images/now-2024/photo_2025-01-01_22-52-17.jpg)
    
    #### 我拍的烟花 - 2
    
    ![](/images/now-2024/photo_2025-01-01_22-52-19.jpg)
    
    #### 我拍的烟花 - 3
    

关于香港徒步旅行的细节, 我之前专门写过篇文章, 有兴趣的可以看看:

-   [2024 年香港徒步旅行记录（一） - This Cute World](/posts/hong-kong-travel-notes-in-2024/)

总的来说, 我 2024 年的运动量远超 2023 年, 这是一个很好的开始.

### [](#2-%e4%b8%9a%e4%bd%99%e6%8a%80%e6%9c%af)2\. 业余技术

今年业余技术上的进展比较符合去年底的期望.

首先是在我 Homelab 上更深入地使用了 NixOS 系统, 其次也发表了一些不错的 NixOS 文章, 还给 Nixpkgs 提了一些 PR, 另外去年做的几个 Nix 相关开源项目的 stars 也持续增长.

其次是在 Linux 系统编程跟 Rust 语言方面取得了不错的进展, 学习这些技术的过程中, 对过去遇到的许多 Linux 系统故障也有了更深的理解. 算是年底两个月最有价值的技术突破.

2024 年我写过的一些技术文章:

-   [个人数据安全不完全指南](/posts/an-incomplete-guide-to-data-security/)
    -   这是我 2023 年 5 月开始的一个长期计划，到 2024 年中时这份计划基本落地，写了这篇博客总结我当前的方案。
-   [Kubernetes 集群伸缩组件 - Karpenter](/posts/kubernetes-cluster-autoscaling-1-karpenter/)
    -   这篇文章来自我过去几年工作中对 Karpenter 的研究与改造经验.
-   [KubeCon China 2024 之旅](/posts/kubecon-china-2024/)
    -   参加 KubeCon China 2024 的一些感受, 技术跟旅行结合的一篇文章.
-   [OS as Code - 我的 NixOS 使用体会](/posts/my-experience-of-nixos/)
    -   在知乎上回答了一个关于 NixOS 的问题写的文章, 英文版还得到了 NixOS 官方的推特转发.
-   [NixOS 在 Lichee Pi 4A 上是如何启动的](/posts/how-nixos-start-on-licheepi4a/)
    -   这篇实际是 23 年的存货.

24 年我写的文章相较 23 年少了不少, 不过整体质量是有所提高的. 考虑到 24 年我在旅行徒步以及关心家人上花了许多时间, 这个成绩也可以接受.

最后再对比下从 2024 年 12 月 31 日到现在，我的 GitHub Metrics 统计数据：

![](/images/2023-summary/2023-12-31-github-metrics.svg)

[2023/12/31 GitHub 统计数据](https://github.com/ryan4yin/ryan4yin/blob/master/metrics.classic.svg)

![](/images/now-2024/github-metrics-2025-01-01.svg)

[2025/01/01 GitHub 统计数据](https://github.com/ryan4yin/ryan4yin/blob/master/metrics.classic.svg)

2024 年我没有开什么新的项目, 上述成绩基本都是 2023 年的旧项目 Stars 稳步增长带来的.

### [](#3-%e5%b7%a5%e4%bd%9c)3\. 工作

工作上, 2024 也仍然是按部就班的一年, 我有做一些新技术的尝试, 但总体来说变化不多.

与往年不同的是, 今年在工作上遇到的更多是技术之外的问题. 一些团队协作、沟通、管理等问题, 让我认识到了公司与各个团队的另一面, 以及人的复杂性.

单纯从工作内容的角度看, 工作越来越得心应手, 相对的也就越来越难以激发我的兴趣与动力, 对 ADHDer 而言要按部就班地把这类工作做好, 挑战很大.

总之多方因素影响下, 我在 24 年底不想干了, 遂向 leader 提出了辞职, 目前已经确定 last day 是 2025 年 1 月底, 正在交接工作中.

我 2021 年入职这家公司, 到离开大概是 3 年零 10 个月, 一段说长不长说短不短的时光.

这是我从业生涯的第二份工作, 回过头看, 21 年刚入职时我还是萌新一个, 做事情都很小心翼翼, 当时[我对公司的评价](https://thiscute.world/posts/life-is-just-like-a-dream/)是

> 梦幻般的待遇，不限量的三餐供应，窗明几净的落地窗工位，这一切都像是在做梦

还有 22 年初发过的推文也是相当正面的:

> 新办公区真好呐～  
>   
> 值此良辰美景，好想整个榻榻米坐垫，坐在角落的落地窗边工作🤣  
> 那种使用公共设施工（mo）作（yu）的乐趣，以及平常工位见不到的景色交相辉映，是不太好表述的奇妙体验 [pic.twitter.com/FASffzw8N3](https://t.co/FASffzw8N3)
> 
> — ryan4yin | 於清樂 (@ryan4yin) [January 17, 2022](https://twitter.com/ryan4yin/status/1482891448731070466?ref_src=twsrc%5Etfw)

从入职一直到 24 年上半年, 我在这里的工作体验都是很不错的.

只能说很感慨吧, 三年多的时间, 我在这里学到了很多. 我很感谢我的两任 leader, 他们都给我了很多机会, 让我能够在工作中不断成长. 也很感谢 SRE 的其他同事, 在我遇到困难时给予了我很多帮助.

后会有期!

### [](#4-%e9%98%85%e8%af%bb)4\. 阅读

2024 年我在阅读方面, 最大的亮点应该是终于读完了《Linux/Unix 系统编程手册（上册）》, 并且使用 Rust 做了不少习题.

2024 年完整的已读书目:

-   《户外旅行终极指南：基础装备、露营技能、交通方式、饮食、环境和急救》：内容很多，但都比较入门级，好处是图很多，读着很轻松，几个小时就能走马观花全过一遍。
-   [Programming Kubernetes - Developing Cloud Native Applications](https://programming-kubernetes.info/): 2022 年开始读的书，但当时没啥兴趣。最近在照猫画虎写 karpenter provider，有了些编程经验后又对它产生了兴趣。书不厚，花了三个小时走马观花全读了一遍，代码内容大都跳过了（不少也过时了，譬如还在介绍 dep），做了些笔记。挺有帮助，帮我系统地梳理了最近折腾 karpenter 学到的 operator 编程相关知识。
-   [走出荒野](https://book.douban.com/subject/27623508/)
    -   2021 年 2 月读此书的评价：「没读书的内容前，我完全没预料到作者的人生曾如此不堪。 最近刚离职，毕业后的第一份工作就这样结束了。心里好多想法，也好想多看看这个世界。 嗯，有点想来上一次徒步旅行了哈哈。」
    -   2024 年 7 月重读评价：「今年我爱上了徒步，重读此书，又有新知。我想徒步也类似跑步，也存在村上春树所言的跑者蓝调。今年已经在香港麦理浩径上完成了 5 次徒步，越发上瘾。我想我也该带老妹体验下，见山见水见自我。」
-   [Linux/Unix 系统编程手册（上册）](https://man7.org/tlpi/)

未读完书目:

-   《Educated - A Memoir（中文名：你当像鸟飞往你的山）》
-   [Linux/Unix 系统编程手册（下册）](https://man7.org/tlpi/)
-   《这才是心理学 - 看穿伪科学的批判性思维 第 11 版》

年初定的目标是每月一本书, 但实际上只读完了 4 本, 25 年再接再厉吧!

## [](#2025-%e5%b9%b4%e5%b1%95%e6%9c%9b)2025 年展望

我在去年年终总结的文末写了, 我对自己 2024 年的期许是「**工作与业余爱好上稳中求进，生活上锻炼好身体、多关心家人**」，感觉确实应验了。由衷地喜欢与感谢这一年来乐观、开朗、积极的自己， 也感谢身边的亲人、朋友、同事.

人的一生, 尤其是 ADHDer 的一生要怎么过才能拥有鲜活、快乐且充实的人生? 我们天生只有在自己喜欢的事情上才能摆脱拖延症并获得足够的专注力, 这就注定了我们无法适应「稳定、枯燥」的工作与生活.

2025 年, 我不急着找下一份工作, 计划先 gap 几个月, 调整下自己的心态, 重新审视自己的职业生涯, 以及未来的规划.

世界那么大, 我想去看看, 也许在旅行中能找到一些答案.

因此, 我给自己定的 2025 年目标是:

> **深入浅出 Linux, 徒步中国、徒步世界**

作为一名从未出过国的 IT 农民工, 我对世界上其他国家的认识仅仅停留在书本与各种网络资料上. 为了能够亲眼见识下中国以外的世界, 我计划在 2025 年开始走出国门, 亲身体验不同国家的文化与风景.

我已经办好了日本签证, 正在办韩国签证, 打算先去这两个国家徒步旅行.

如果签证顺利的话, 我在日韩之后还想去尼泊尔、马来西亚、澳洲跟欧洲旅行. 但这个并没有那么急, 如果 2025 年 gap 的这几个月不够用的话, 未来还有很多机会.

除了去国外旅行满足我对「外国」的好奇心, 我也很想在 2025 年去亲眼见证 960 万平方公里的中国大地, 亲眼看看这片土地上的鬼斧神工. 不过暂时还没有很明确的计划, 中国的风景太多太美, 也许我会先去青海, 又或者是广西?

**路还很长, 2025 年, 让我用双脚去丈量这个世界**～

> Carpe Diem. Seize The Day, Boys. Make Your Lives Extraordinary. – [《死亡诗社》](https://movie.douban.com/subject/1291548/)

## 相关内容

[![](/posts/2023-summary/2023-ryan4yin-github-oss-insight.webp)](/posts/2023-summary/)

## [我的 2023 - 认识更多有趣的人，见识更宽广的世界](/posts/2023-summary/)

[![](/posts/a-quarter-of-the-way-through-life/2023-08-20_github-projects.webp)](/posts/a-quarter-of-the-way-through-life/)

## [两岸猿声啼不住，轻舟已过万重山——我的四分之一人生](/posts/a-quarter-of-the-way-through-life/)

[![](/posts/2022-summary/github-profile-2022-ryan4yin.webp)](/posts/2022-summary/)

## [2022 年年终总结](/posts/2022-summary/)

![](/avatar/myself.webp)

*如果你觉得这篇文章对你有所帮助，欢迎评论、分享、打赏~*

[赞赏](https://afdian.com/a/ryan4yin "Sponsor")

更新于 2025-01-07

function shareOnMastodon(e,t){const o="share\_mastodon\_domain",i=localStorage.getItem(o)??"mastodon.social",n=prompt("Enter your Mastodon domain",i);if(n===null)return;localStorage.setItem(o,n);const a=e+\` \`+t,s=new URL("https://"+n);s.pathname="share",s.searchParams.append("text",a),window.open(s,"\_blank","width=500,height=500,left=500,toolbar=0,status=0")}

 [总结](/tags/%E6%80%BB%E7%BB%93/)

返回 | [主页](/)

[KubeCon China 2024 之旅](/posts/kubecon-china-2024/ "KubeCon China 2024 之旅")

Please enable JavaScript to view the comments powered by [Utterances](https://utteranc.es/).

 [![](https://img.foreverblog.cn/logo_en_default.png)](https://www.foreverblog.cn/)[![](https://img.foreverblog.cn/wormhole_3.gif "穿梭虫洞-随机访问十年之约友链博客")](https://www.foreverblog.cn/go.html)

由 [Hugo](https://gohugo.io/ "Hugo 0.136.5") 强力驱动 | 托管在 [Vercel](https://vercel.com/ "Vercel") 上 | 主题 - [DoIt](https://github.com/HEIGE-PCloud/DoIt "DoIt 0.4.0")

2021 - 2025 [](/) |  [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)

[](#back-to-top "回到顶部")[](#comments "查看评论")

window.config={"algoliasearch.min.js":"/lib/algoliasearch/algoliasearch-lite.umd.min.js","autocomplete.min.js":"/lib/autocomplete/autocomplete.min.js",comment:{utterances:{darkTheme:"github-dark",issueTerm:"pathname",label:"",lightTheme:"github-light",repo:"ryan4yin/thiscute.world"}},data:{"desktop-header-typeit":"This Cute World","mobile-header-typeit":"This Cute World"},math:{delimiters:\[{display:!0,left:"$$",right:"$$"},{display:!0,left:"\\\\\[",right:"\\\\\]"},{display:!1,left:"$",right:"$"},{display:!1,left:"\\\\(",right:"\\\\)"}\],strict:!1},search:{algoliaAppID:"747LJ10EI7",algoliaIndex:"ryan-space",algoliaSearchKey:"658db5f2bf056f83458cacf5dd58ec80",highlightTag:"em",maxResultLength:10,noResultsFound:"没有找到结果",snippetLength:50,type:"algolia"},sharerjs:!0,typeit:{cursorChar:null,cursorSpeed:null,data:{"desktop-header-typeit":\["desktop-header-typeit"\],"mobile-header-typeit":\["mobile-header-typeit"\]},duration:null,speed:null}}window.dataLayer=window.dataLayer||\[\];function gtag(){dataLayer.push(arguments)}gtag("js",new Date),gtag("config","G-4V93QVSNFW",{anonymize\_ip:!0}) { "prerender": \[ { "where": { "href\_matches": "/\*" }, "eagerness": "moderate" } \] }