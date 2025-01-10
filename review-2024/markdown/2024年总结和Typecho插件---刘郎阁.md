 [![刘郎阁](https://vjo.cc/usr/uploads/logo.jpeg)](https://vjo.cc/)刘郎阁

-   [](https://vjo.cc/admin "踏足阁内")踏足阁内
-   [](https://vjo.cc/link "左邻右舍")左邻右舍
-   [](https://vjo.cc/archive "文章归档")文章归档
-   [](https://vjo.cc/message "三言两语")三言两语
-   [](https://vjo.cc/about "关于本站")关于本站

-   切换模式
-   返回顶部 <!--滑动返回顶部的Js代码，于2024.3.8添加--> // 定义 jasmine 对象，如果它还不存在 var jasmine = jasmine || {}; // 实现 backtop 函数 jasmine.backtop = function() { // 使用 window 对象的 scrollTo 方法来平滑滚动到顶部 window.scrollTo({ top: 0, // 目标位置（顶部） behavior: 'smooth' // 滚动行为设置为平滑 }); };

-   [首页](https://vjo.cc/ "首页")
-   [闲言碎语](https://vjo.cc/chat "闲言碎语")
-   [学习笔记](https://vjo.cc/notes "学习笔记")
-   [资源共享](https://vjo.cc/resource "资源共享")
-   [源码分享](https://vjo.cc/code "源码分享")

-    
    

-    [![刘郎阁](https://vjo.cc/usr/uploads/logo.jpeg)](https://vjo.cc/)刘郎阁
    

-    
    

-   [首页](https://vjo.cc/ "首页")
-   [闲言碎语](https://vjo.cc/chat "闲言碎语")
-   [学习笔记](https://vjo.cc/notes "学习笔记")
-   [资源共享](https://vjo.cc/resource "资源共享")
-   [源码分享](https://vjo.cc/code "源码分享")

-   [踏足阁内](https://vjo.cc/admin "踏足阁内")
-   [左邻右舍](https://vjo.cc/link "左邻右舍")
-   [文章归档](https://vjo.cc/archive "文章归档")
-   [三言两语](https://vjo.cc/message "三言两语")
-   [关于本站](https://vjo.cc/about "关于本站")

# 2024年总结和Typecho插件

[闲言碎语](https://vjo.cc/chat) · 2024-12-31 11:12

 [刘郎](https://vjo.cc/author/1/)

岁序常易，华章日新，今日已是 2024 年的尾声。回首这一年，时光仿若白驹过隙，匆匆而逝，不禁令人感叹岁月的流转之快。

这一年，于忙碌中前行，除了节假日，我的生活基本被工作与陪伴孩子填满。在工作上，虽深知自己离完美员工尚有距离，但始终秉持认真负责的态度，兢兢业业地完成领导交付的各项任务，且较少出现差错。当然，在期待个人成长的同时，也盼望着薪资能够有所提升，以回馈自己的辛勤付出。

家庭，是我心灵的栖息之所。工作之余，我将绝大部分的时间与精力都倾注其中。或许我还算不上是无可挑剔的好丈夫、好父亲，但至少我在努力尽到自己的责任，虽不卓越，却也问心无愧。相较于往昔岁月，闲暇时分还能与朋友相聚言欢，在家庭、事业、亲情与友情的天平上，我始终清楚地知道自己的重心所在，明白自己的职责与使命。

还好，这一年家中平安顺遂，父母身体硬朗，妻儿健康快乐，工作上也波澜不惊，一切安稳如意。如今站在新岁的起点，展望 2025，满心期许新的一年能更上一层楼。同时，也衷心祝愿阅读这篇文字的朋友们，阖家幸福、亲人安康、事业有成，在新的一年里万事胜意，皆得所愿！

## Typecho插件

其实2024年12月的中后期都是不算忙的。因为前面该忙的，该补的资料，该检查的已经基本结束了。在这个空闲之际，我自己又研究了好多新东西。当然了，都是关于个人web项目上的事。

也想过把自己研究和折腾的记录写出来和大家一起分享。但现在其实我更想做的事是，将我老早之前收集和整理的一些好东西分享给大家。总感觉要分享的东西都好多呀，哈哈。不过也没事，以后的时间还长着呢，慢慢来，慢慢分享。

此外，对于个人博客方面，其实我一直都是不太主张使用第三方的插件、文件…之类的资源的。但换个角度想想，在自身做好安全防护的情况下。偶尔适当的用一下，也很赞。毕竟这些资源可以带给我们的是无穷无尽的创造灵感和体验感受。

这种感觉就像打游戏开挂一样神奇：在没有用外置插件的时候，开局就像普普通通的小虾米，一不注意就被别人秒杀了；而在使用外置插件后，开局就像自带金盔铁甲的Bug一样，随随便便就能秒杀别人，体验感直接起飞……当然了，我这种说法有些夸张了，但事实就是如此的，用与不用，差别真的很大。

以下就是我这段时间我自己亲身尝试过，觉得整体效果都还挺不错并整理出来的一些插件，分享给大家：

1.  东方返回顶部样式
2.  为博客添加Gravatar头像墙功能
3.  标签自动生成插件
4.  自动生成缩略名
5.  自动渲染LaTeX公式
6.  自动备份插件
7.  flashmp3播放器
8.  附件下载插件
9.  为评论提供当前页面艾特功能
10.  文章类型插件
11.  博客日志列表插件
12.  在网站底部插入APlayer吸底播放器
13.  用最简单的方法墙掉垃圾评论
14.  点赞插件
15.  悬浮式公告栏插件
16.  后台管理IP白名单
17.  alexa排名显示
18.  内置嵌套评论
19.  GitHub项目挂件
20.  验证码插件
21.  贡献者可直接发布文章无需审核
22.  随机图片挂件
23.  七牛云附件上传
24.  附件上传至七牛云存储
25.  有丰富自定义选项的动态聚合线条特效插件
26.  另外一款Markdown开源编辑器
27.  文件保持上传时的文件名
28.  Typecho开发者测试插件
29.  数据备份
30.  CSDN博客导入插件
31.  腾讯云COS上传插件
32.  文章投稿插件
33.  为含有多个标题的文章生成目录
34.  评论邮件提醒插件
35.  评论通知推送多服务
36.  博客评论邮件提醒
37.  评论过滤器
38.  代码显示多样式风格
39.  主题编辑器
40.  支持上传图片功能的集成CkEditor编辑器
41.  畅言单点登录插件
42.  畅言评论回调插件
43.  首页过滤指定分类
44.  猫爪抓抓抓影视采集插件
45.  轻量级代码高亮插件
46.  文章评分
47.  为Typecho自带编辑器增加粘贴图片上传功能
48.  密码找回插件
49.  阿里云OSS上传插件
50.  Nginx fastcgi缓存
51.  后台控制前台标签智能显示
52.  外链播放器转换插件
53.  MYSQL和memcache缓存插件
54.  文章目录树
55.  根据内容标题关系自动生成目录树
56.  简易编辑器
57.  修改Markdown编辑器为左右样式
58.  把新浪微博作为附件图床
59.  评论通知找回密码插件
60.  博客登录注册页面美化插件并提供多种美化样式
61.  友情链接插件
62.  批量更改文章分类状态公开隐藏私密
63.  点赞排行插件
64.  神代綺凜式魔改主题插件
65.  为文中的指定关键词添加链接
66.  HTML5影音播放器
67.  使用api接口输出json博客数据
68.  评论滑动解锁
69.  HTML内容日志转换为Markdown语法格式
70.  Google高亮代码
71.  为博客添加弹窗效果与相册功能
72.  高亮页面中的搜索关键字
73.  虾米列表型音乐播放器插件
74.  Gravatar头像缓存插件
75.  Typecho的Google Analytics加速器
76.  随机跳转一篇文章
77.  外链改内链跳转插件
78.  github名片
79.  嵌入github用户或项目卡片
80.  在文中嵌入GitHub项目按钮
81.  评论框验证码插件
82.  谷歌身份验证器
83.  Emlog转换到Typecho
84.  Markdown编辑器
85.  页面浏览次数统计
86.  文章内部插入分页符效果
87.  搜索增强插件
88.  博客飘雪插件
89.  为博客添加图片表情功能
90.  精致小巧的灯箱效果
91.  浏览量统计部分来自xxx的xxx
92.  Google Sitemap 生成器
93.  新浪OAuth2登陆插件
94.  附件转存至新浪云储存(SCS)
95.  Typecho系统路由助手
96.  在显示404之前使用规则重写
97.  又拍云文件管理
98.  简洁BGM播放器
99.  新浪微博同步插件
100.  微信分享插件
101.  微信公众号和Typecho互联
102.  生成图片水印
103.  文章浏览数排行
104.  文章修改记录功能
105.  用户个性签名
106.  后台模板插件上传自动安装

…

以上插件资源只是其中一小部分而已，如果你对此感兴趣，或该列表中有你需要的插件，你也可以去☞ [刘郎阁\_资源库](https://app.vjo.cc/) 自行搜索所需的插件或其他资源。

[Typecho](https://vjo.cc/tag/Typecho/) [随笔](https://vjo.cc/tag/%E9%9A%8F%E7%AC%94/) [家庭](https://vjo.cc/tag/%E5%AE%B6%E5%BA%AD/) [事业](https://vjo.cc/tag/%E4%BA%8B%E4%B8%9A/) [总结](https://vjo.cc/tag/%E6%80%BB%E7%BB%93/) [插件](https://vjo.cc/tag/%E6%8F%92%E4%BB%B6/)

上一篇 : [春节倒计时 21 天](https://vjo.cc/1579 "春节倒计时 21 天")

下一篇 : [人民警察和中国军人](https://vjo.cc/1572 "人民警察和中国军人")

/\* 鼠标悬停时的样式 \*/ .sxwz:hover { box-shadow: 0 0 5px rgba(0, 0, 0, 0.4); } $(document).ready(function() { $('.sxwz').hover( function() { $(this).css('border-color', '#666'); }, function() { $(this).css('border-color', '#666'); } ); });

   

  

[取消回复](https://vjo.cc/1575#respond-post-1575) 提交评论

1.  ![](https://cravatar.cn/avatar/9b3a681168a25e910954372e468fbc91?d=mm)
    
    [满心](https://qq.mba)   Lv1
    
    [回复](https://vjo.cc/1575/comment-page-1?replyTo=3154#respond-post-1575)
    
    2025-01-06 10:33 第75楼 中国湖北省武汉市电信Windows 10 · Google Chrome
    
    真是不少啊，我用的插件也蛮少的，感觉自己太懒，我一般都是把合适的功能整合到主题里面去，能不用插件的就不用。话说不说，还是去看看有咩有合适好用的插件吧
    
    1.  ![](https://vjo.cc/usr/uploads/IMG_4013.jpeg)
        
        [刘郎](https://vjo.cc)   博主
        
        [回复](https://vjo.cc/1575/comment-page-1?replyTo=3155#respond-post-1575)
        
        2025-01-06 10:37 第76楼 中国贵州省移动Linux · Google Chrome
        
        @满心
        
        适当用用也是可以的 可以提升站点体验感 哈哈 少用的最终目的也是为了网站的安全性 如果能将插件的功能融入自己代码中 尽量不使用插件也很不错哦
        
    
2.  ![](https://cravatar.cn/avatar/2ba07723611fdd1fea41bd83336b26fe?d=mm)
    
    [三毛笔记](https://aboss.top/)   Lv1
    
    [回复](https://vjo.cc/1575/comment-page-1?replyTo=3152#respond-post-1575)
    
    2025-01-05 22:21 第73楼 中国福建省厦门市移动Windows 10 · Google Chrome
    
    这个资源库很不错
    
    1.  ![](https://vjo.cc/usr/uploads/IMG_4013.jpeg)
        
        [刘郎](https://vjo.cc)   博主
        
        [回复](https://vjo.cc/1575/comment-page-1?replyTo=3153#respond-post-1575)
        
        2025-01-05 22:24 第74楼 中国贵州省移动Linux · Google Chrome
        
        @三毛笔记
        
        对于用得着的人来说确实挺不错的😎
        
    
3.  ![](https://cravatar.cn/avatar/766703824c03592267fb3de3670c7f19?d=mm)
    
    [lincol](https://www.lincol29.cn)   Lv1
    
    [回复](https://vjo.cc/1575/comment-page-1?replyTo=3147#respond-post-1575)
    
    2025-01-05 18:03 第70楼 中国广东省深圳市电信iPhone · Safari
    
    这插件太多了！我也整理了一些Wordpress的插件，到时候分享出来
    
    1.  ![](https://vjo.cc/usr/uploads/IMG_4013.jpeg)
        
        [刘郎](https://vjo.cc)   博主
        
        [回复](https://vjo.cc/1575/comment-page-1?replyTo=3148#respond-post-1575)
        
        2025-01-05 19:38 第71楼 中国贵州省移动Linux · Google Chrome
        
        @lincol
        
        遇到合适的就留着备用了
        
    
4.  ![](https://cravatar.cn/avatar/679666f7bd1af3e55f0e51dd70ed161c?d=mm)
    
    [老张博客](https://laozhang.org)   访客
    
    [回复](https://vjo.cc/1575/comment-page-1?replyTo=3143#respond-post-1575)
    
    2025-01-05 14:37 第68楼 中国江苏省宿迁市移动Windows 10 · Google Chrome
    
    106个，只是一小部分，你这整理收录的也够全的。
    
    1.  ![](https://vjo.cc/usr/uploads/IMG_4013.jpeg)
        
        [刘郎](https://vjo.cc)   博主
        
        [回复](https://vjo.cc/1575/comment-page-1?replyTo=3144#respond-post-1575)
        
        2025-01-05 15:23 第69楼 中国贵州省移动Linux · Google Chrome
        
        @老张博客
        
        要玩就玩的花里胡哨的 哈哈 （但我本人更喜欢简洁一点的 这些就留做备用了）
        
    
5.  ![](https://cravatar.cn/avatar/98f20282cce089709710bd1ec4fd9e79?d=mm)
    
    [小帕鲁](https://www.master-jsx.top)   访客
    
    [回复](https://vjo.cc/1575/comment-page-1?replyTo=3140#respond-post-1575)
    
    2025-01-03 23:35 第65楼 中国北京市移动Windows 10 · FireFox
    
    我去，大佬牛逼！
    
    1.  ![](https://vjo.cc/usr/uploads/IMG_4013.jpeg)
        
        [刘郎](https://vjo.cc)   博主
        
        [回复](https://vjo.cc/1575/comment-page-1?replyTo=3142#respond-post-1575)
        
        2025-01-04 09:04 第67楼 中国贵州省移动Linux · Google Chrome
        
        @小帕鲁
        
        插件搬运工而已 哈哈
        
    
6.  ![](https://cravatar.cn/avatar/734954ff99adb4ff1f6b3b0699ba872b?d=mm)
    
    [Huo](https://9sb.net)   Lv1
    
    [回复](https://vjo.cc/1575/comment-page-1?replyTo=3139#respond-post-1575)
    
    2025-01-03 22:18 第64楼 中国河北省邢台市电信iPhone · Safari
    
    哇塞，第一次见这么全面的，真充足！  
    需要了来你这取就行，不错！
    
    1.  ![](https://vjo.cc/usr/uploads/IMG_4013.jpeg)
        
        [刘郎](https://vjo.cc)   博主
        
        [回复](https://vjo.cc/1575/comment-page-1?replyTo=3141#respond-post-1575)
        
        2025-01-04 09:03 第66楼 中国贵州省移动Linux · Google Chrome
        
        @Huo
        
        哈哈 欢迎😂
        
    
7.  ![](https://cravatar.cn/avatar/0705c0dac8bb17334beb3c8001f948f2?d=mm)
    
    [胖氪笔记](https://windowsplus.cn/)   Lv1
    
    [回复](https://vjo.cc/1575/comment-page-1?replyTo=3137#respond-post-1575)
    
    2025-01-03 19:09 第62楼 中国安徽省安庆市电信Windows 10 · Google Chrome
    
    优秀如你啊👍
    
    1.  ![](https://vjo.cc/usr/uploads/IMG_4013.jpeg)
        
        [刘郎](https://vjo.cc)   博主
        
        [回复](https://vjo.cc/1575/comment-page-1?replyTo=3138#respond-post-1575)
        
        2025-01-03 19:31 第63楼 中国贵州省移动Linux · Google Chrome
        
        @胖氪笔记
        
        吾一般 插件优秀😂
        
    
8.  ![](https://cravatar.cn/avatar/68a5888bc574e17a12865d915823e32d?d=mm)
    
    [Jeffer.Z](https://www.jeffer.xyz/)   访客
    
    [回复](https://vjo.cc/1575/comment-page-1?replyTo=3135#respond-post-1575)
    
    2025-01-03 14:45 第60楼 亚太地区iPhone · Google Chrome
    
    这么多插件都搞一遍吗，你的折腾也不轻啊。
    
    1.  ![](https://vjo.cc/usr/uploads/IMG_4013.jpeg)
        
        [刘郎](https://vjo.cc)   博主
        
        [回复](https://vjo.cc/1575/comment-page-1?replyTo=3136#respond-post-1575)
        
        2025-01-03 14:46 第61楼 中国贵州省移动Linux · Google Chrome
        
        @Jeffer.Z
        
        感兴趣的搞 不感兴趣的备用
        
    
9.  ![](https://cravatar.cn/avatar/5227ee83f9f62c28edeed5554923d09c?d=mm)
    
    [Mr.Chou](https://zhou.ge)   访客
    
    [回复](https://vjo.cc/1575/comment-page-1?replyTo=3130#respond-post-1575)
    
    2025-01-02 23:07 第57楼 中国广东省惠州市联通Android · Google Chrome
    
    同一个程序，安装几个必要的足矣～
    
    1.  ![](https://vjo.cc/usr/uploads/IMG_4013.jpeg)
        
        [刘郎](https://vjo.cc)   博主
        
        [回复](https://vjo.cc/1575/comment-page-1?replyTo=3131#respond-post-1575)
        
        2025-01-02 23:36 第58楼 中国贵州省移动Linux · Google Chrome
        
        @Mr.Chou
        
        是的 安装的多了显得花里胡哨 反而不好
        
    
10.  ![](https://cravatar.cn/avatar/43ae227d52ab10398333d1d6a2ba9772?d=mm)
    
    [swiper](https://www.wniui.com)   访客
    
    [回复](https://vjo.cc/1575/comment-page-1?replyTo=3127#respond-post-1575)
    
    2025-01-02 22:26 第56楼 中国贵州省移动Windows 10 · Google Chrome
    
    新年快乐！
    
    1.  ![](https://vjo.cc/usr/uploads/IMG_4013.jpeg)
        
        [刘郎](https://vjo.cc)   博主
        
        [回复](https://vjo.cc/1575/comment-page-1?replyTo=3133#respond-post-1575)
        
        2025-01-02 23:37 第59楼 中国贵州省移动Linux · Google Chrome
        
        @swiper
        
        同乐呀
        
    

-   [1](https://vjo.cc/1575/comment-page-1#comments)
-   [2](https://vjo.cc/1575/comment-page-2#comments)
-   ...
-   [4](https://vjo.cc/1575/comment-page-4#comments)
-   [›](https://vjo.cc/1575/comment-page-2#comments)

window.TypechoComment = { dom: function (id) { return document.getElementById(id) }, create: function (tag, attr) { var el = document.createElement(tag); for (var key in attr) { el.setAttribute(key, attr\[key\]) } return el }, reply: function (cid, coid) { console.log(cid); var comment = this.dom(cid), response = this.dom("respond-post-1575"), input = this.dom("comment-parent"), form = "form" == response.tagName ? response : response.getElementsByTagName("form")\[0\], textarea = response.getElementsByTagName("textarea")\[0\]; if (null == input) { input = this.create("input", {"type": "hidden", "name": "parent", "id": "comment-parent"}); form.appendChild(input) } input.setAttribute("value", coid); console.log(form); if (null == this.dom("comment-form-place-holder")) { var holder = this.create("div", {"id": "comment-form-place-holder"}); response.parentNode.insertBefore(holder, response) } comment.appendChild(response); this.dom("cancel-comment-reply-link").style.display = ""; this.dom("cancel-comment-reply-link").className += "btn btn-dark btn-sm"; if (null != textarea && "text" == textarea.name) { textarea.focus() } return false }, cancelReply: function () { var response = this.dom("respond-post-1575"), holder = this.dom("comment-form-place-holder"), input = this.dom("comment-parent"); if (null != input) { input.parentNode.removeChild(input) } if (null == holder) { return true } this.dom("cancel-comment-reply-link").style.display = "none"; holder.parentNode.insertBefore(response, holder); return false } };

![刘郎](https://vjo.cc/usr/uploads/IMG_4013.jpeg)

刘郎 ( 博主3小时前在线 )

敬畏生命，热爱生活！

-   90后
-   爱折腾
-   [留言板](https://vjo.cc/message)
-   [资源库](https://app.vjo.cc/)

.overlay0809 { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0); z-index: 10; /\* 保证 div 在 iframe 之上 \*/ } #container0809 { position: relative; width: 100%; height: 250px; } iframe#iframe0809 { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; /\* 使 iframe 在 overlay 之下 \*/ }

// 禁止在覆盖的 div 区域内使用右键 document.querySelectorAll('.overlay0809').forEach(function(overlay0809) { overlay0809.addEventListener('contextmenu', function(event) { event.preventDefault(); }); });

标签

-   [组件](https://vjo.cc/tag/%E7%BB%84%E4%BB%B6/ "组件")
-   [优化](https://vjo.cc/tag/%E4%BC%98%E5%8C%96/ "优化")
-   [源码分享](https://vjo.cc/tag/%E6%BA%90%E7%A0%81%E5%88%86%E4%BA%AB/ "源码分享")
-   [Typecho](https://vjo.cc/tag/Typecho/ "Typecho")
-   [随笔](https://vjo.cc/tag/%E9%9A%8F%E7%AC%94/ "随笔")
-   [GIF图](https://vjo.cc/tag/GIF%E5%9B%BE/ "GIF图")
-   [宝塔面板](https://vjo.cc/tag/%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF/ "宝塔面板")
-   [特效](https://vjo.cc/tag/%E7%89%B9%E6%95%88/ "特效")
-   [命令](https://vjo.cc/tag/%E5%91%BD%E4%BB%A4/ "命令")
-   [评论](https://vjo.cc/tag/%E8%AF%84%E8%AE%BA/ "评论")
-   [Loading动画](https://vjo.cc/tag/Loading%E5%8A%A8%E7%94%BB/ "Loading动画")
-   [在线体验](https://vjo.cc/tag/%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C/ "在线体验")
-   [家庭](https://vjo.cc/tag/%E5%AE%B6%E5%BA%AD/ "家庭")
-   [事业](https://vjo.cc/tag/%E4%BA%8B%E4%B8%9A/ "事业")
-   [Linux](https://vjo.cc/tag/Linux/ "Linux")
-   [主题](https://vjo.cc/tag/%E4%B8%BB%E9%A2%98/ "主题")
-   [标准](https://vjo.cc/tag/%E6%A0%87%E5%87%86/ "标准")
-   [CDN](https://vjo.cc/tag/CDN/ "CDN")
-   [雨](https://vjo.cc/tag/%E9%9B%A8/ "雨")
-   [安全](https://vjo.cc/tag/%E5%AE%89%E5%85%A8/ "安全")

联系

-   商务合作
-   [vjocc@qq.com](mailto:vjocc@qq.com?subject=testing&body=刘郎阁)
-   [黔ICP备2024020400号](https://beian.miit.gov.cn/)
  
Test [![Not By AI](https://vjo.cc/usr/uploads/img/2024/04/Written-By-Human-Not-By-AI-Badge-white@2x.png)](https://notbyai.fyi/ "Not By AI")

<!-- Begin copyright=new Date(); update=copyright.getFullYear(); document.write("Copyright © "+ update + " 刘郎阁 "); | [黔ICP备2024020400号 |](https://beian.miit.gov.cn/) [萌ICP备20246777号](https://icp.gov.moe/?keyword=20246777) | function updateSiteRunningTime() { var startTime = new Date("2024-02-23 13:30:30"); var currentTime = new Date(); var diff = currentTime - startTime; var days = Math.floor(diff / (1000 \* 60 \* 60 \* 24)); var hours = Math.floor((diff % (1000 \* 60 \* 60 \* 24)) / (1000 \* 60 \* 60)); var minutes = Math.floor((diff % (1000 \* 60 \* 60)) / (1000 \* 60)); var seconds = Math.floor((diff % (1000 \* 60)) / 1000); var siteRunningTime = document.getElementById("siteRunningTime"); siteRunningTime.innerHTML = "<span class='site-time'>" + "<span class='time-label'>小站已运行</span>" + "<span class='" + (days > 0 ? "red" : "") + "'>" + days + "</span>" + "<span class='time-label'>天</span>" + "<span class='" + (hours > 0 ? "red" : "") + "'>" + hours + "</span>" + "<span class='time-label'>小时</span>" + "<span class='" + (minutes > 0 ? "red" : "") + "'>" + minutes + "</span>" + "<span class='time-label'>分钟</span>" + "<span class='" + (seconds > 0 ? "red" : "") + "'>" + seconds + "</span>" + "<span class='time-label'>秒</span>" + "</span>"; } setInterval(updateSiteRunningTime, 1000); | 当前有 3 人在线 |

[![本站已加入BLOGS·CN](https://photo.xiangming.site/img/blogscn_icon.png)](https://blogscn.fun/ "BLOGS·CN")

[![订阅](https://vjo.cc/usr/uploads/img/2024/04/rss.png)](https://vjo.cc/feed/ "订阅")

[![Sitemap](https://vjo.cc/usr/uploads/img/2024/Sitemap.png)](https://vjo.cc/sitemap.xml "Sitemap")

[![博友圈 星球穿梭](https://www.boyouquan.com/assets/images/sites/logo/logo-small.png)](https://www.boyouquan.com/planet-shuttle "博友圈 星球穿梭")

[![开往-友链接力](https://vjo.cc/usr/uploads/img/2024/logo.gif)](https://www.travellings.cn/go.html "开往-友链接力")

[![](https://img.foreverblog.cn/wormhole_3_tp.gif "穿梭虫洞-随机访问十年之约友链博客")](https://www.foreverblog.cn/go.html)

[![](https://vjo.cc/usr/uploads/img/2024/04/又拍云_logo5.png)](https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral "本网站由“又拍云”提供CDN加速/云存储服务")

 window.XConf = { 'options': { 'pluginUrl': 'https://vjo.cc/usr/plugins/AAEditor/', 'playerUrl': 'https://vjo.cc/usr/plugins/AAEditor/Libs/Player.php?url=', }, 'i18n': { 'view-repository': '查看项目', 'download-as-zip': '下载源码 zip 包', 'unknown-github-link': '未识别的 Github 链接', 'tab-title': '标题%s', } }; ![](https://vjo.cc/usr/plugins/BackToTop/images/TOP.PNG " ") $(function(){ $("#BackToTop").click(function() { $("html,body").animate({scrollTop:0}, 500); }); }) function GetOauthUrl(site){ let xhr = new XMLHttpRequest(); xhr.open('post', 'https://vjo.cc/user/api'); xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded') xhr.onreadystatechange = function () { if (xhr.readyState === 4) { let res = JSON.parse(xhr.responseText); if(res.code == 1){ let height = res.height; let width = res.width; let url = res.url; let iTop = (window.screen.availHeight - 30 - height) / 2; let iLeft = (window.screen.availWidth - 10 - width) / 2; let open = window.open(url, '\_blank', 'height=' + height + ',innerHeight=' + height + ',width=' + width + ',innerWidth=' + width + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no'); if(!open){ window.location.href = url; } }else{ } } } let from = encodeURIComponent(window.location.href); xhr.send('action=url&site='+site+'&from='+from); } function GetOauthIcon(){ let obj = '#OauthIcon'; if(window.OauthIconData){ let ico = window.OauthIconData; let html = ''; for(let i = 0; i < ico.length; i++){ html += '<a onclick="GetOauthUrl(\\''+ico\[i\].site+'\\')" class="btn btn-rounded btn-sm btn-icon btn-default" data-toggle="tooltip" data-placement="bottom" data-original-title="'+ico\[i\].name+'账号登陆">'+ico\[i\].ico+'</a>'; } document.querySelectorAll(obj).forEach(e => { e.innerHTML = html; }); console.log('第三方登录按钮加载完成'); return; } let xhr = new XMLHttpRequest(); xhr.open('post', 'https://vjo.cc/user/api'); xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded') xhr.onreadystatechange = function () { if (xhr.readyState === 4) { let res = JSON.parse(xhr.responseText); if(res.code == 1){ window.OauthIconData = res.data; let html = ''; for(let i = 0; i < res.data.length; i++){ html += '<a onclick="GetOauthUrl(\\''+res.data\[i\].site+'\\')" class="btn btn-rounded btn-sm btn-icon btn-default" data-toggle="tooltip" data-placement="bottom" data-original-title="'+res.data\[i\].name+'账号登陆">'+res.data\[i\].ico+'</a>'; } document.querySelectorAll(obj).forEach(e => { e.innerHTML = html; }); console.log('第三方登录按钮加载完成'); }else{ console.log('第三方登录按钮加载失败'); } } } let from = encodeURIComponent(window.location.href); xhr.send('action=icon'); }GetOauthIcon(); $(function() { try { console.log('%c 3D标签云 https://gitee.com/HoeXhe/Svg3dTagCloud %c www.hoehub.com 😊 Svg3dTagCloud By Hoe ', 'font-family:\\'Microsoft YaHei\\',\\'SF Pro Display\\',Roboto,Noto,Arial,\\'PingFang SC\\',sans-serif;color:white;background:#ffa099;padding:5px 0;', 'font-family:\\'Microsoft YaHei\\',\\'SF Pro Display\\',Roboto,Noto,Arial,\\'PingFang SC\\',sans-serif;color:#ffa099;background:#404040;padding:5px 0;'); // 你能留下我的信息, 我会很高兴的 ^\_^ var settings = {"divName":"#tag-cloud","target":"\_self","limit":"50","width":"98%","height":"98%","radius":"98%","radiusMin":"98%","bgColor":"Transparent","opacityOver":"1","opacityOut":"0.12","opacitySpeed":"15","speed":"0.55","fontFamily":"Oswald, Arial, sans-serif","fontSize":"15","fontColor":"#8C8C8C","fontWeight":"normal","fontStyle":"normal","fontToUpperCase":0}; settings.entries = \[{"label":"\\u6625\\u8282","url":"\\/tag\\/\\u6625\\u8282","target":"\_self"},{"label":"\\u63d2\\u4ef6","url":"\\/tag\\/\\u63d2\\u4ef6","target":"\_self"},{"label":"\\u603b\\u7ed3","url":"\\/tag\\/\\u603b\\u7ed3","target":"\_self"},{"label":"\\u6807\\u8bc6","url":"\\/tag\\/\\u6807\\u8bc6","target":"\_self"},{"label":"\\u5f85\\u9047","url":"\\/tag\\/\\u5f85\\u9047","target":"\_self"},{"label":"\\u519b\\u8854","url":"\\/tag\\/\\u519b\\u8854","target":"\_self"},{"label":"\\u8b66\\u8854","url":"\\/tag\\/\\u8b66\\u8854","target":"\_self"},{"label":"\\u519b\\u4eba","url":"\\/tag\\/\\u519b\\u4eba","target":"\_self"},{"label":"\\u8b66\\u5bdf","url":"\\/tag\\/\\u8b66\\u5bdf","target":"\_self"},{"label":"\\u6cb9\\u8017","url":"\\/tag\\/\\u6cb9\\u8017","target":"\_self"},{"label":"\\u7a7a\\u8c03","url":"\\/tag\\/\\u7a7a\\u8c03","target":"\_self"},{"label":"\\u6c7d\\u8f66","url":"\\/tag\\/\\u6c7d\\u8f66","target":"\_self"},{"label":"\\u70e4\\u9c7c","url":"\\/tag\\/\\u70e4\\u9c7c","target":"\_self"},{"label":"\\u516b\\u97f3\\u76d2","url":"\\/tag\\/\\u516b\\u97f3\\u76d2","target":"\_self"},{"label":"\\u57df\\u540d","url":"\\/tag\\/\\u57df\\u540d","target":"\_self"},{"label":"\\u65b0\\u95fb","url":"\\/tag\\/\\u65b0\\u95fb","target":"\_self"},{"label":"Wifi","url":"\\/tag\\/Wifi","target":"\_self"},{"label":"Alist","url":"\\/tag\\/Alist","target":"\_self"},{"label":"\\u5468\\u672b","url":"\\/tag\\/\\u5468\\u672b","target":"\_self"},{"label":"\\u513f\\u7ae5\\u4e50\\u56ed","url":"\\/tag\\/\\u513f\\u7ae5\\u4e50\\u56ed","target":"\_self"},{"label":"\\u5403\\u5e2d","url":"\\/tag\\/\\u5403\\u5e2d","target":"\_self"},{"label":"\\u56fd\\u5e86\\u5047\\u671f","url":"\\/tag\\/\\u56fd\\u5e86\\u5047\\u671f","target":"\_self"},{"label":"\\u9732\\u8425","url":"\\/tag\\/\\u9732\\u8425","target":"\_self"},{"label":"\\u5185\\u7f51\\u7a7f\\u900f","url":"\\/tag\\/\\u5185\\u7f51\\u7a7f\\u900f","target":"\_self"},{"label":"Cloudflare","url":"\\/tag\\/Cloudflare","target":"\_self"},{"label":"\\u4e8b\\u4e1a","url":"\\/tag\\/\\u4e8b\\u4e1a","target":"\_self"},{"label":"\\u5bb6\\u5ead","url":"\\/tag\\/\\u5bb6\\u5ead","target":"\_self"},{"label":"\\u70e7\\u70e4","url":"\\/tag\\/\\u70e7\\u70e4","target":"\_self"},{"label":"\\u5e7c\\u513f\\u56ed","url":"\\/tag\\/\\u5e7c\\u513f\\u56ed","target":"\_self"},{"label":"\\u5f00\\u5b66\\u5b63","url":"\\/tag\\/\\u5f00\\u5b66\\u5b63","target":"\_self"},{"label":"iOS","url":"\\/tag\\/iOS","target":"\_self"},{"label":"Bug","url":"\\/tag\\/Bug","target":"\_self"},{"label":"iPhone","url":"\\/tag\\/iPhone","target":"\_self"},{"label":"CMD","url":"\\/tag\\/CMD","target":"\_self"},{"label":"\\u6d3b\\u52a8","url":"\\/tag\\/\\u6d3b\\u52a8","target":"\_self"},{"label":"\\u62fc\\u591a\\u591a","url":"\\/tag\\/\\u62fc\\u591a\\u591a","target":"\_self"},{"label":"\\u7f51\\u76d8","url":"\\/tag\\/\\u7f51\\u76d8","target":"\_self"},{"label":"HTML","url":"\\/tag\\/HTML","target":"\_self"},{"label":"\\u8df3\\u8f6c","url":"\\/tag\\/\\u8df3\\u8f6c","target":"\_self"},{"label":"\\u5b89\\u5168","url":"\\/tag\\/\\u5b89\\u5168","target":"\_self"},{"label":"\\u7f51\\u7ad9","url":"\\/tag\\/\\u7f51\\u7ad9","target":"\_self"},{"label":"\\u4eba\\u5de5\\u667a\\u80fd","url":"\\/tag\\/\\u4eba\\u5de5\\u667a\\u80fd","target":"\_self"},{"label":"\\u89c6\\u9891Ai","url":"\\/tag\\/\\u89c6\\u9891Ai","target":"\_self"},{"label":"\\u7535\\u4fe1\\u8bc8\\u9a97","url":"\\/tag\\/\\u7535\\u4fe1\\u8bc8\\u9a97","target":"\_self"},{"label":"\\u6a21\\u5757","url":"\\/tag\\/\\u6a21\\u5757","target":"\_self"},{"label":"\\u7559\\u8a00","url":"\\/tag\\/\\u7559\\u8a00","target":"\_self"},{"label":"\\u4e8b\\u6545","url":"\\/tag\\/\\u4e8b\\u6545","target":"\_self"},{"label":"\\u96e8","url":"\\/tag\\/\\u96e8","target":"\_self"},{"label":"img","url":"\\/tag\\/img","target":"\_self"},{"label":"SSH","url":"\\/tag\\/SSH","target":"\_self"}\]; $('#tag-cloud').html("").svg3DTagCloud(settings); } catch (e) { console.error("3D标签云出现错误: 请联系www.hoehub.com"); } });