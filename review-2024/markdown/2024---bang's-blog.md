[bang's blog](/)

[APPs](http://app.cnbang.net) [存档](/archives) [作品](/works) [关于](/about)

function $(id) { return document.getElementById(id) } function resize() { if (document.body.offsetWidth < 500) { $("logo").style.cssText = "width:" + (document.body.offsetWidth - 40) + "px;" $("nav").style.cssText = "width:" + (document.body.offsetWidth) + "px;" + "background:#555" } else { $("logo").style.cssText = "width:auto" $("nav").style.cssText = "width:auto;background:none" } } if (window.addEventListener) { window.addEventListener("resize", resize, false) resize() }

# 2024

2024-12-31

又到了 31 号这天，回想起来 24 年过得很快，回顾过去一些事，有的感觉就前几周的事，一看原来已经过去四五个月。照例在这天写篇生活记录。

### 学习

去年说今年要学下AI，总算有点进展，虽然进度不理想，但也算迈开了步伐。

学习如果没有一些事项引导，就很难进行，最好的学习方式是直接在做的过程中学，真正进去做这个事的过程中会不断遇到一些问题，解决这些问题过程就是很自然的逐渐学习和深入的过程。

没这个条件的话，就退而求其次，用分享输出的方式引导学习，所以我时隔四五年不写博客，今年又开始写了，主要就是让我的学习有个地方做完整的记录，有相应的引导。

在软件工程时代，一个功能能不能实现，原理链路大概是怎样，基本都能知道，上一轮以推荐为主的 AI 也大致能了解原理。而这次的生成式 AI 太魔法了，应用范围和影响力也远超过去，完全不了解它是怎么回事很让人难受，有种跟不上时代的感觉，学一些皮毛后感觉好一些。

不过最好还是机会边做边学，希望25年能多一些深入实践，让自己在创造的状态里学习。

今年 AI 继续快速发展，有几个时刻对 AI 的能力和带来的体验还是很震惊的：

1.  AI Coding：第一次用 cursor 的补全能力、compose 创建多个文件能力，第一次用 windsurf 直接创建项目跑起来，都让人震惊。虽然一些微调和 bug AI 还不能解决得很好，但做一个 demo 完全没问题，对程序员来说，也可以完全忽略不同编程语言/平台特性前期学习的障碍，无差别上手码代码。AI Coding 是今年完全跑出来的赛道，大家都看到了它的机会，以后没有一个程序员不需要 AI 辅助 Coding，而且 AI Coding 还能不断转换非程序员群体进来构建任意软件交互功能，想象空间很大，可以预料 25 年这个赛道会比百团大战更热闹。
2.  Prompt 的能力：看到 [Glif](https://glif.app/glifs) 的 AI [梗图](https://news.qq.com/rain/a/20240627A03ZGT00)生成很惊讶，只需要输入工种比如“程序员”，LLM 就能生成信息量极大的针对这个工种的梗，当时感觉自己确实是 LLM 小白，LLM 本身存储压缩的信息量是巨大的。
3.  视频生成：年初的 sora 震惊许多人，但第一次上手用视频生成才会真实感受到冲击，第一次用即梦的视频S2.0模型时，超高清和稳定的人脸运动属实惊艳，很容易做画面感很好的视频，一直想给小说《十日终焉》配个AI生成的小片，终于圆了这个念想。
4.  NotebookLM：生成的真实对话声音的真实性实在太强，一点AI味都没有。文字/图片/音频/视频，以后 AI 可以自由在多个模态之间自由切换，只要有源头内容，各种形态的展示都不会是问题。

### 播客

前两天小宇宙推送年度总结，看到今年我在上面听的总时长时很惊讶，166个小时，我已经成为播客的忠实用户了。想想也合理，一年200多个工作日，如果每个工作日上下班开车一小时听一小时，也有200多个小时。

网络上高质量内容一直在切换形态，从最开始的 blog，到后来的公众号知乎，在公众号和知乎泛化后，高质量的内容逐渐转移到播客上了，在海外更是这样，特别是AI前沿信息基本都在播客上，国内也逐渐是这个趋势，今年特别明显。

除了听几个AI相关的博客，听得最多的是半拿铁，内容做得太好了，有几个很喜欢的系列，包括任天堂往事、日漫史、改革开放系列。

改革开放系列让人看到整个路径的曲折，路线反复的历史背景，一大波有担当的政府官员推动历史，克服极大的困难才让改革开放走下去，听到最近一期成事后的片尾曲《春天的故事》时，竟有些动容。

日漫史和任天堂往事，也跟着它回忆了一下这些从小到大的精神粮食，任天堂不断把游戏欢乐带给更广泛的人，强大的创新能力，至暗时刻也能翻身，不愧是游戏界的神。日本漫画家没日没夜奋斗完成作品的干劲，这种投入强度和一根筋的热情，也只有日本能把漫画行业做出来。

### 游戏

今年玩过最好的游戏当然是《黑神话悟空》，远超预期，独有的中国文化之美，光看画面就是很大的享受，尤其是小西天，剧情音乐也都很顶，黄风岭陕西说唱、《壁上观》都很美，能玩到这样的游戏真好。不足的是难度没有循序渐进，开头的白衣居士卡得我差点放弃，后面反而障碍不多，但偶尔被 boss 卡还是挺难受。另外玩游戏过程中几乎感受不到剧情，这么顶的剧情全靠外部解说，也不知是不是个传播策略。

看了黑神话悟空相关的访谈，一个体制以外冒出来的好的作品，都是极具个人色彩的，精品是靠一小撮人投入极大的热情和毅力创造出来的。有黑神话悟空，国产 3A 大作有希望，但5年-10年内还会不会有其他精品出来，不太乐观，只能肯定的是大公司不会有。

### 物品

1.  九号电动车，体验超预期，一线互联网水准的 APP 体验，停车自动锁，坐上自动解锁，二轮电动也跟上了智能电动汽车的步伐，生活中再也没有钥匙这个东西了。
2.  Vision Pro，年初在同事那里体验了一波 Vision Pro，效果很震撼，特别是演示的恐龙视频，3D 全景高分辨率带来真正身临其境的感觉，但它更像是一个概念机，长板很长，短板很短，希望苹果能坚持继续解决佩戴舒适度、成本价格问题，真正把这个领域做起来，还是很期待 Vision Pro 的体验能成为日常的时代，不知道10年后能不能达成，掐指一算 Google glass 都已经12年了，穿戴式设备的进度十分缓慢。
3.  meta 眼镜，Vision Pro 没那么快普及，但可以预见的是类 meta 眼镜接下来一年会爆发，可能是今年最吸引人的硬件，随时抓拍记录生活，叠加AI对话的概念，除了拍摄和AI，还有望部分代替掉 Airpods，绝对的爆款，期待国产卷出性价比体验都更高的版本，迫不及待想买了。
4.  Airpods 非入耳式的降噪，在飞机上效果极佳，至今每一代的Airpods 基本都买了，仍是非常值得入手的产品。
5.  米家智能家居，今年终于出了独立的电动窗帘，让我这没留充电位置的窗帘也能支持电动了，外加捣鼓了玄关灯、灯带，可惜楼盘自带的“智能“系统阻止了我进一步捣鼓，如果有机会装修房子，一定让全家都配好米家。

### 旅游

去了银川中卫，香格里拉，西双版纳，哈尔滨雪乡，成都(团建)，中山，长沙。

银川中卫沙漠星星酒店，感受非常好，就算在五一假期，也是一片片空旷的沙漠没什么人，小朋友骑骑骆驼玩玩沙，很惬意。

雪乡在我印象中是前几年坑人口碑很差的形象，实际上超预期，雪景小镇很美，游玩设施也不错，没遇到什么坑人的场景，体验不错，可惜的是时间太短了，有机会可以再去。

香格里拉没想象中美，可能因为天气一直是阴天和下雨，偶尔的蓝天惊鸿一瞥是很漂亮，另外带着小孩没法去徒步，也没去雪山，就小小感受下藏族的风格。西双版纳很有泰国风味，热带雨林的感觉很明显，云南这两个地方的差异太大了。

成都的毕棚沟和香格里拉海拔都3000米以上，感觉没什么高原反应，明年可以去西藏了。

对成都和长沙印象都挺好，长沙五一广场方圆一大片人山人海，走哪都是商店大商场，都是茶颜悦色，夜夜笙歌，真是娱乐之都。

25年希望继续解锁世界地图。

### 小孩

跟同事聊娃，经常会聊出焦虑，不鸡娃不上奥数和考KET就上不了好的初中，而我们什么都没准备，让我有点担心是不是对娃太佛系了，到时会后悔，但每次想来想去最终还是不想让小孩太卷。大娃三年级作业开始变多，偶尔拖拉和烦躁，但总体上学习还是比较自觉的，成绩也不错，只要保持这个感觉，应该不至于太落后？

小娃5岁了，3-4岁有段时间专门气人，回看以前大娃也是一样有这样的时期，然后今年某个时候突然间感觉就长大了，讲理、能沟通，情绪控制也好一点了，甚至惊奇发现他学习也是挺认真的，超出预期的成长，很欣慰。

再次推荐洪恩系列 APP，小娃玩着玩着就学会了很多汉字/拼音/英文单词，以前大娃也是，这过程就是在不断玩游戏，玩的过程中学，好的学习就应该是这样。

一些喜欢的瞬间：

1.  跟小娃的玩马里奥惊奇，一不小心挂了，小屁孩嫌弃地说“你会不会的，我来给你示范一下”
2.  某次玩黑猴时卡在 boss 上，我吐槽打不过好烦，小娃在旁边一本正经纠正我说：“玩游戏是享受”
3.  我的朋友圈开始收到来自大娃的评论，微信开始用得溜了，长大了，不想她那么快长大。
4.  大娃二娃在家日常的吵吵闹闹。每当这时候就想起《IQ博士》里小云和小吉在屋子里翻天覆地吵闹的画面，真是太像了。以后我一定会怀念这样的场景。

### 其他

身体好了很多，中招咳嗽也就两次，健身断断续续，没坚持上。

今年大环境不太好，但困难总会过去，希望能保持乐观和学习心态，希望25年大家都能过得好~

分类:[生活](https://blog.cnbang.net/category/living/)

[上一篇：带文字的 AI 图片生成是怎么做的？](https://blog.cnbang.net/tech/4094/)

评论

Name: 

Email: 

 

Δdocument.getElementById( "ak\_js\_1" ).setAttribute( "value", ( new Date() ).getTime() );

![](https://secure.gravatar.com/avatar/371386df3ebfe61b74968012cfa070fa?s=50&d=mm&r=g)

jasonfu

2025年1月2日 11:25

很充实，一直在进步

![](https://secure.gravatar.com/avatar/?s=50&d=mm&r=g)

匿名

2025年1月6日 14:16

pasion

#### 分类目录

-   [生活](https://blog.cnbang.net/category/living/) (222)
-   [技术文章](https://blog.cnbang.net/category/tech/) (89)
-   [随记](https://blog.cnbang.net/category/writting/) (86)
-   [作品](https://blog.cnbang.net/category/works/) (50)
-   [互联网](https://blog.cnbang.net/category/internet/) (35)
-   [懒得分类](https://blog.cnbang.net/category/uncategorized/) (11)

#### 标签云

[AI](https://blog.cnbang.net/tag/ai/) [as3](https://blog.cnbang.net/tag/as3/) [flash](https://blog.cnbang.net/tag/flash/) [ios](https://blog.cnbang.net/tag/ios/) [iphone](https://blog.cnbang.net/tag/iphone/) [javascript](https://blog.cnbang.net/tag/javascript/) [jquery](https://blog.cnbang.net/tag/jquery/) [JSPatch](https://blog.cnbang.net/tag/jspatch/) [NBA](https://blog.cnbang.net/tag/nba/) [node.js](https://blog.cnbang.net/tag/nodejs/) [twitese](https://blog.cnbang.net/tag/twitese/) [twitter](https://blog.cnbang.net/tag/twitter/) [互联网](https://blog.cnbang.net/tag/internet/) [历程](https://blog.cnbang.net/tag/journey/) [回忆](https://blog.cnbang.net/tag/memory/) [大学](https://blog.cnbang.net/tag/university/) [大学](https://blog.cnbang.net/tag/%e5%a4%a7%e5%ad%a6/) [学习](https://blog.cnbang.net/tag/study/) [实习](https://blog.cnbang.net/tag/practice/) [家](https://blog.cnbang.net/tag/home/) [微博](https://blog.cnbang.net/tag/%e5%be%ae%e5%8d%9a/) [总结](https://blog.cnbang.net/tag/summarize/) [成长](https://blog.cnbang.net/tag/growing/) [所想](https://blog.cnbang.net/tag/thinking/) [旅游](https://blog.cnbang.net/tag/%e6%97%85%e6%b8%b8/) [游戏](https://blog.cnbang.net/tag/game/) [源码解析](https://blog.cnbang.net/tag/%e6%ba%90%e7%a0%81%e8%a7%a3%e6%9e%90/) [牙](https://blog.cnbang.net/tag/tooth/) [现象](https://blog.cnbang.net/tag/phenomenon/) [病](https://blog.cnbang.net/tag/illness/) [社团](https://blog.cnbang.net/tag/organization/) [编程](https://blog.cnbang.net/tag/coding/) [腾讯](https://blog.cnbang.net/tag/tencent/) [观点](https://blog.cnbang.net/tag/view/) [设计](https://blog.cnbang.net/tag/design/) [评论](https://blog.cnbang.net/tag/comment/) [音乐](https://blog.cnbang.net/tag/music/) [饭否](https://blog.cnbang.net/tag/fanfou/) [高中](https://blog.cnbang.net/tag/hight-school/) [高考](https://blog.cnbang.net/tag/gaokao/)

Powered by Wordpress | Copyright bang 2006-2015

var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www."); document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")); try { var pageTracker = \_gat.\_getTracker("UA-1895639-4"); pageTracker.\_trackPageview(); } catch(err) {}