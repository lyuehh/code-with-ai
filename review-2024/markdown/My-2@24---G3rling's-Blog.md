[G3rling‘s Blog](https://g3rling.top)

-   [首页](https://g3rling.top)
-   [文章](https://g3rling.top/file)
-   [友链](https://g3rling.top/friendlinks)
-   [闲言碎语](https://g3rling.top/%e9%97%b2%e8%a8%80%e7%a2%8e%e8%af%ad)
-   [留言板](https://g3rling.top/messageboard)

-   

##### 搜索

×

搜索

#banner, #banner .shape { background: transparent !important; } #content:before { content: ''; display: block; position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: -2; background: url(https://g3rling.top/random/random.php); background-position: center; background-size: cover; background-repeat: no-repeat; opacity: 0.6; transition: opacity .5s ease; } html.darkmode #content:before{ filter: brightness(0.65); } #content:after { content: ''; display: block; position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: -2; background: url(https://g3rling.top/random/random.php); background-position: center; background-size: cover; background-repeat: no-repeat; opacity: 0; transition: opacity .5s ease; } html.darkmode #content:after { opacity: 0.6; } html.darkmode #content:before { opacity: 0; } #banner:after { content: ''; width: 100vw; position: absolute; left: 0; top: 0; height: 120px; background: linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0) 100%); display: block; z-index: -1; } .banner-title { text-shadow: 0 5px 15px rgba(0, 0, 0, .2); }

夜间模式暗黑模式

字体

Sans SerifSerif

阴影

浅阴影深阴影

滤镜

关闭 日落 暗化 灰度

圆角

主题色

0%

G3rling's Blog

搜索 

-   [文章目录](#leftbar_tab_catalog)
-   [站点概览](#leftbar_tab_overview)
-   [功能](#leftbar_tab_tools)

$(function () { $(document).headIndex({ articleWrapSelector: '#post\_content', indexBoxSelector: '#leftbar\_catalog', subItemBoxClass: "index-subItem-box", itemClass: "index-item", linkClass: "index-link", offset: 80, }); })

###### G3rling

###### 终将会在焦虑中过完失败的一生……

[50 文章](https://g3rling.top/file)

9 分类

0 标签

  

function yearprogress\_refresh() { let year = new Date().getFullYear(); $("#yearprogress\_yearname").text(year); let from = new Date(year, 0, 1, 0, 0, 0); let to = new Date(year, 11, 31, 23, 59, 59); let now = new Date(); let progress = (((now - from) / (to - from + 1)) \* 100).toFixed(7); let progressshort = (((now - from) / (to - from + 1)) \* 100).toFixed(2); $("#yearprogress\_progresstext").text(progressshort + "%"); $("#yearprogress\_progresstext\_full").text(progress + "%"); $("#yearprogress\_progressbar").css("width", progress + "%"); } yearprogress\_refresh(); if (typeof yearProgressIntervalHasSet == "undefined") { var yearProgressIntervalHasSet = true; setInterval(function () { yearprogress\_refresh(); }, 500); }

#yearprogress\_text\_container { width: 100%; height: 22px; overflow: hidden; user-select: none; } #yearprogress\_text\_container > span { transition: all 0.3s ease; display: block; } #yearprogress\_text\_container:hover > span { transform: translateY(-45px); }

2025 年 1 月
| 一 | 二 | 三 | 四 | 五 | 六 | 日 |
| --- | --- | --- | --- | --- | --- | --- |
|   | 1 | 2 | 3 | 4 | 5 |
| 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| 13 | 14 | 15 | 16 | 17 | 18 | 19 |
| 20 | 21 | 22 | 23 | 24 | 25 | 26 |
| 27 | 28 | 29 | 30 | 31 |   |

[« 12 月](https://g3rling.top/date/2024/12)    

-   昨日访客: 143
-   总浏览量: 36,133
-   累计访客: 31,189
-   总浏览量: 96

##### 分类

×

[AWD 2](https://g3rling.top/category/awd)[ForALL 4](https://g3rling.top/category/forall)[三省吾身 1](https://g3rling.top/category/%e4%b8%89%e7%9c%81%e5%90%be%e8%ba%ab)[刷题笔记 4](https://g3rling.top/category/%e5%88%b7%e9%a2%98%e7%ac%94%e8%ae%b0)[单片机 1](https://g3rling.top/category/%e5%8d%95%e7%89%87%e6%9c%ba)[每日一Pwn 8](https://g3rling.top/category/%e6%af%8f%e6%97%a5%e4%b8%80pwn)[比赛WriteUp 27](https://g3rling.top/category/%e6%af%94%e8%b5%9bwriteup)[生活 3](https://g3rling.top/category/%e7%94%9f%e6%b4%bb)[首页 0](https://g3rling.top/category/homepage)

##### 标签

×

[My 2@24](https://g3rling.top/449)

[G3rling](https://g3rling.top/author/g3rling)

|

2024-12-31 20:50

|

[生活](https://g3rling.top/category/%e7%94%9f%e6%b4%bb)

|

130

|

9

|

2024-12-31 20:50

今年发生的事情太多太多，不知从何讲起，记忆也有些散乱，那就想起什么说什么罢（~口水话大合集~）……

---

# 寒假

寒假现在的印象里除了比赛就是学习，大年初一的BeginCTF里人生中的第一次抢到血，系统学习Misc相关知识……但是一直都是一个人，一个人打比赛一个人学习，当时也不知道是什么支撑着自己熬过了那段最煎熬的日子。虽然亲戚朋友不理解为什么放假还窝在房间里看着电脑，甚至会被误解成在玩游戏，但是现在看来一切都是值得的。

---

# 长城杯

这是第一次出省参加的比赛，整场下来只贡献了一个登录。但是学长们非常厉害，最终取得了三等奖，这让我希望自己能变得更强，也能够像学长们一样，在学弟们还未成长之前替他们遮风挡雨，让他们能够感受到阳光的温暖，但一切都离不开强大的实力。

---

# 巴渝杯

这是第一次没有学长带领组队线下打比赛，很幸运的是一道Misc思路全部Check正确，很顺利的拿下一血。能够在线下拿下一血，还是在和重邮那些有相关专业的竞争下，那一次的经历让我看到了努力的成果。赛后重邮嚣张的嘲讽让我更希望能变强，在未来的某天能够报仇雪恨。

---

# 加入N0wayBack

最开始参加的MiniNK培训，给予了我很大的帮助，非常感谢Cain师傅，生蚝✌，Byxs20师傅……。从参加培训到Cain师傅面试再到以MiniNK的身份加入NK再到转为正式成员，每一个阶段都是值得纪念的。在加入NK的那一刻非常激动，看着群内全是十分敬佩的大师傅。在今年认识了很多NK的师傅，也让我感受到了一起学习一起进步的梦寐以求的氛围，感谢NK和各位师傅这一年来的照顾🙏

---

# 校赛和加入C0ba1t

校赛还是蛮好玩的，当时以为得像新生赛一样熬夜打，所以那一周前几天全在早睡，结果Misc基本都以一血拿下，每天都早早的进入了梦乡。后面呢也是接到了校队面试的通知，虽然和学长们很熟但是见到视频面试的杠哥还是有些紧张，但是好在还是通过了面试，成为了23届校队的一员。在入校的时候和几个朋友都立下要加入CO的目标，后面一看全是熟人，虽然和以前的方向有些不同，但是也可以相互学习，也是非常高兴的。

---

# 混入r3kapig

承蒙学长的帮助，也是混入了连做梦都不敢想的r3。很幸运的是在刚加入的时候正巧在进行比赛，连题目描述都需要用翻译软件进行翻译的我竟然和室友能够解出一道题目，也是打消了很多我的畏难心理。非常感谢学长和r3kapig提供的宝贵机会，让我能够在国际赛场上学到很多新知识，也认识到了很多厉害的师傅🙏

---

# 新一届的新生赛

进入校队后首要任务是进行24届新生赛的筹备。因为之前有过系统性的学习，所以出题的范围和考点还是较为清晰的，在经过一个暑假的筹备筛选和优化后最终确定了题目的考点范围和难度。很高兴能看到一些有能力或者努力的同学在新生赛中脱颖而出，看到他们就仿佛看到了以前的自己。或许以后无缘成为队友，但是也能成为朋友，这一点是很不错的。

---

# 省赛血刃仇家

今年省赛很幸运拿下了两个一血，后面因为没法使用AI节奏有些受到了些影响，虽然做出来了但是没有血，但是没有拖后腿甚至能帮助队伍取得优势这也是很高兴的。最高兴的是我们和学弟超过了仇家的很多队伍，就算他们有相关专业，就算他们不遵守规则报了27支队伍，但是他们拼尽全力还是无法战胜我们，我们的校队也是好起来了！

---

# 绿叶繁茂之时

总的来说，今年是收获的一年。在竞赛方面拿下十多个省奖和两个国奖，在CTF也略有小成。最开始因为趣味性选择了Misc，但是可能未来并不会在这方面大有成就。如今的成就更多的依靠努力取得的，但是对于现状我是满足的，能在比赛中贡献自己的一份力量以及为学弟们创造一个更好的环境。

起初我想成为红花，但是现在我知道自己应该成为绿叶。虽然以后可能不会有很大的成就，但是我能够为还未成长起来的花苞遮风挡雨，这也算是自己的作用了吧。在很多时候想到了学长对自己的照顾，我也会将这份帮助传递下去，一切都在变好……

---

# 新年展望

新的一年呢，希望自己能够在竞赛方面有个更多的成就，尽可能多的学习Pwn和AI的知识，希望好好承担起肩上的责任，希望学弟们能够比我们更厉害，希望一切安好~

豆[](https://telegram.me/share/url?url=g3rling.top&text=My+2%4024)

socialShare("#share", { title : 'My 2@24', description : '今年发生的事情太多太多，不知从何讲起，记忆也有些散乱，那就想起什么说什么罢（口水话大合集）…… 寒假…', wechatQrcodeTitle : "分享到微信", wechatQrcodeHelper : '微信扫描二维码', source : 'https://g3rling.top/449' }); $("#share\_show")\[0\].onclick = function(){ $("#share\_container").addClass("opened"); }; $("#share\_copy\_link")\[0\].onclick = function(){ let input = document.createElement('input'); document.body.appendChild(input); input.setAttribute("value", window.location.href); input.setAttribute("readonly", "readonly"); input.setAttribute("style", "opacity: 0;mouse-events:none;"); input.select(); if (document.execCommand('copy')){ iziToast.show({ title: '链接已复制', message: "链接已复制到剪贴板", class: 'shadow', position: 'topRight', backgroundColor: '#2dce89', titleColor: '#ffffff', messageColor: '#ffffff', iconColor: '#ffffff', progressBarColor: '#ffffff', icon: 'fa fa-check', timeout: 5000 }); }else{ iziToast.show({ title: '复制失败', message: "请手动复制链接", class: 'shadow', position: 'topRight', backgroundColor: '#f5365c', titleColor: '#ffffff', messageColor: '#ffffff', iconColor: '#ffffff', progressBarColor: '#ffffff', icon: 'fa fa-close', timeout: 5000 }); } document.body.removeChild(input); };

## 评论

1.  ![](https://q1.qlogo.cn/g?b=qq&s=640&nk=1608153577)
    
    0
    
    rub
    
    1 周前
    
    2024-12-31 23:09:40
    
    新年快乐！平安喜乐！
    
    来自重庆
    
    新年快乐！平安喜乐！
    
    回复
    

3.  -   ![](https://cravatar.cn/avatar/c247edb64df762893516d75d8f773878?s=40&r=g&d=404)
        
        0
        
        [G3rling](https://g3rling.top/)
        
        博主
        
        rub
        
        1 周前
        
        2025-1-01 12:09:40
        
        新年快乐捏୧(๑•̀⌄•́๑)૭
        
        来自重庆
        
        新年快乐捏୧(๑•̀⌄•́๑)૭
        
        回复
        
    
4.  ![](https://q1.qlogo.cn/g?b=qq&s=640&nk=1603911469)
    
    0
    
    5en
    
    1 周前
    
    2024-12-31 23:46:05
    
    学长加油！一切都会越来越好的！ ![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)
    
    ![](https://g3rling.top/wp-content/themes/argon-theme-master/stickers/dinosaur/4.jpg)
    
    来自重庆
    
    学长加油！一切都会越来越好的！ :dinosaur-proud:
    
    回复
    

6.  -   ![](https://cravatar.cn/avatar/c247edb64df762893516d75d8f773878?s=40&r=g&d=404)
        
        0
        
        [G3rling](https://g3rling.top/)
        
        博主
        
        5en
        
        1 周前
        
        2025-1-01 12:13:38
        
        感谢🙏也希望你在新的一年心想事成，越来越好(๑•̀ㅁ•́ฅ)
        
        来自重庆
        
        感谢🙏也希望你在新的一年心想事成，越来越好(๑•̀ㅁ•́ฅ)
        
        回复
        
    
7.  ![](https://q1.qlogo.cn/g?b=qq&s=640&nk=1558977841)
    
    0
    
    在逆光中告白
    
    1 周前
    
    2025-1-01 0:32:49
    
    刀光剑影来时路，逐梦天涯踏流星。  
    少年意气风发时，荣耀之战谱传奇。
    
    来自中国
    
    刀光剑影来时路，逐梦天涯踏流星。 少年意气风发时，荣耀之战谱传奇。
    
    回复
    

9.  -   ![](https://cravatar.cn/avatar/c247edb64df762893516d75d8f773878?s=40&r=g&d=404)
        
        0
        
        [G3rling](https://g3rling.top/)
        
        博主
        
        在逆光中告白
        
        1 周前
        
        2025-1-01 12:22:16
        
        开口就知道是谁了，俺是乡里别看不懂这些捏~但是还是非常感谢泥！祝你在新的一年开开心心的，你对我说的话很多其实都是我想对你说的，不要太累了，适当放松୧(๑•̀⌄•́๑)૭
        
        来自重庆
        
        开口就知道是谁了，俺是乡里别看不懂这些捏~但是还是非常感谢泥！祝你在新的一年开开心心的，你对我说的话很多其实都是我想对你说的，不要太累了，适当放松୧(๑•̀⌄•́๑)૭
        
        回复
        
    
10.  ![](https://cravatar.cn/avatar/74fea6e195e82bccd422df230ba19bbf?s=40&r=g&d=404)
    
    0
    
    日月原
    
    1 周前
    
    2025-1-01 9:56:51
    
    一步步走过来真的很厉害！新年快乐——
    
    来自陕西
    
    一步步走过来真的很厉害！新年快乐——
    
    回复
    

12.  -   ![](https://cravatar.cn/avatar/c247edb64df762893516d75d8f773878?s=40&r=g&d=404)
        
        0
        
        [G3rling](https://g3rling.top/)
        
        博主
        
        日月原
        
        1 周前
        
        2025-1-01 12:24:45
        
        新年快乐~要向日月原老师一样厉害！向日月原老师学习！！！(๑•̀ㅁ•́ฅ)
        
        来自重庆
        
        新年快乐~要向日月原老师一样厉害！向日月原老师学习！！！(๑•̀ㅁ•́ฅ)
        
        回复
        
    
13.  ![](https://q1.qlogo.cn/g?b=qq&s=640&nk=861392975)
    
    0
    
    qiutou
    
    6 天前
    
    2025-1-04 14:44:48
    
    新年快乐！福喜尽干来！！！
    
    来自重庆
    
    新年快乐！福喜尽干来！！！
    
    回复
    

## 发送评论 编辑评论

正在回复 的评论 :

取消回复

 .post-comment-captcha-container:before{ content: attr(captcha); }

 Markdown

 悄悄话

 邮件提醒

发送 编辑 取消

|´・ω・)ノ

ヾ(≧∇≦\*)ゝ

(☆ω☆)

（╯‵□′）╯︵┴─┴

￣﹃￣

(/ω＼)

∠( ᐛ 」∠)＿

(๑•̀ㅁ•́ฅ)

→\_→

୧(๑•̀⌄•́๑)૭

٩(ˊᗜˋ\*)و

(ノ°ο°)ノ

(´இ皿இ｀)

⌇●﹏●⌇

(ฅ´ω\`ฅ)

(╯°A°)╯︵○○○

φ(￣∇￣o)

ヾ(´･ ･｀｡)ノ"

( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃

(ó﹏ò｡)

Σ(っ °Д °;)っ

( ,,´･ω･)ﾉ"(´っω･｀｡)

╮(╯▽╰)╭

o(\*////▽////\*)q

＞﹏＜

( ๑´•ω•) "(ㆆᴗㆆ)

😂

😀

😅

😊

🙂

🙃

😌

😍

😘

😜

😝

😏

😒

🙄

😳

😡

😔

😫

😱

😭

💩

👻

🙌

🖕

👍

👫

👬

👭

🌚

🌝

🙈

💊

😶

🙏

🍦

🍉

😣

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZW1vdGlvbi1sb2FkaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii04IC04IDQwIDQwIiBzdHJva2U9IiM4ODgiIG9wYWNpdHk9Ii41IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44MjggMTQuODI4YTQgNCAwIDAxLTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIvPgo8L3N2Zz4=)

Source: github.com/k4yt3x/flowerhd

颜文字

Emoji

小恐龙

花!

 

×

×

上一篇[每日一Pwn 2024/12/11](https://g3rling.top/444)

## 推荐文章

[

“长城杯”日志——贵州游记

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=)](https://g3rling.top/221)[

\[补档\]2023年度总结

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=)](https://g3rling.top/112)

/\* 核心样式 \*/ .github-badge { display: inline-block; border-radius: 4px; text-shadow: none; font-size: 13.1px; color: #fff; line-height: 15px; margin-bottom: 5px; font-family: "Open Sans", sans-serif; } .github-badge .badge-subject { display: inline-block; background-color: #4d4d4d; padding: 4px 4px 4px 6px; border-top-left-radius: 4px; border-bottom-left-radius: 4px; font-family: "Open Sans", sans-serif; } .github-badge .badge-value { display: inline-block; padding: 4px 6px 4px 4px; border-top-right-radius: 4px; border-bottom-right-radius: 4px; font-family: "Open Sans", sans-serif; } .github-badge-big { display: inline-block; border-radius: 6px; text-shadow: none; font-size: 14.1px; color: #fff; line-height: 18px; margin-bottom: 7px; } .github-badge-big .badge-subject { display: inline-block; background-color: #4d4d4d; padding: 4px 4px 4px 6px; border-top-left-radius: 4px; border-bottom-left-radius: 4px; } .github-badge-big .badge-value { display: inline-block; padding: 4px 6px 4px 4px; border-top-right-radius: 4px; border-bottom-right-radius: 4px; } .bg-orange { background-color: #ec8a64 !important; } .bg-red { background-color: #cb7574 !important; } .bg-apricots { background-color: #f7c280 !important; } .bg-casein { background-color: #dfe291 !important; } .bg-shallots { background-color: #97c3c6 !important; } .bg-ogling { background-color: #95c7e0 !important; } .bg-haze { background-color: #9aaec7 !important; } .bg-mountain-terrier { background-color: #99a5cd !important; }

备案号 [蜀ICP备2024059818号](https://beian.miit.gov.cn/) | [川公网安备51092102510984号](https://www.beian.gov.cn/portal/index?token=e547b70c-fbe1-4c80-a4a2-857b17389a71)

CDN [Aliyun](https://ecs.console.aliyun.com/) Powered [WordPress](https://cn.wordpress.org/) Copyright 2024 [@G3rling](https://g3rling.top/)[](https://g3rling.top/)

[](https://g3rling.top/)

[Running Time days H M S var blog\_running\_days = document.getElementById("blog\_running\_days"); var blog\_running\_hours = document.getElementById("blog\_running\_hours"); var blog\_running\_mins = document.getElementById("blog\_running\_mins"); var blog\_running\_secs = document.getElementById("blog\_running\_secs"); function refresh\_blog\_running\_time() { var time = new Date() - new Date(2024, 2, 7, 0, 0, 0); /\*此处日期的月份改为自己真正月份的前一个月\*/ var d = parseInt(time / 24 / 60 / 60 / 1000); var h = parseInt((time % (24 \* 60 \* 60 \* 1000)) / 60 / 60 / 1000); var m = parseInt((time % (60 \* 60 \* 1000)) / 60 / 1000); var s = parseInt((time % (60 \* 1000)) / 1000); blog\_running\_days.innerHTML = d; blog\_running\_hours.innerHTML = h; blog\_running\_mins.innerHTML = m; blog\_running\_secs.innerHTML = s; } refresh\_blog\_running\_time(); if (typeof bottomTimeIntervalHasSet == "undefined") { var bottomTimeIntervalHasSet = true; setInterval(function () { refresh\_blog\_running\_time(); }, 500); }](https://g3rling.top/)

[Theme](https://g3rling.top/) [**Argon**](https://github.com/solstice23/argon-theme)