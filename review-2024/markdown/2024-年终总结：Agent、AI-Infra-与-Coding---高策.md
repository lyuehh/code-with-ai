[![Blog Logo](/Blog/images/gaocegege.jpg)](/Blog)

[](#)

-   [](#)
-   [主页](/Blog/)
-   [编程](/Blog/featured)
-   [消遣](/Blog/relaxed)
-   [分类](/Blog/categories)
-   [关于我](/Blog/about)
-   [博客数据统计](/Blog/analytics)
-   [开源项目](/Blog/opensource)
-   [RSS](/Blog/rss.xml)

# 2024 年终总结：Agent、AI Infra 与 Coding

by **高策** — on [record](/Blog/tags/index.html#record "Posts tagged with record") **31 Dec 2024**

今年是我的而立之年。我们的产品今年开始有了第一个付费客户，深深感到创业不易，身边的同事包括我都很辛苦。

今年我的文章明显变少了，博客上所有的文章都是为了工作写的，但其实并不是表达欲望减少了，而是世界变化太快了，真正的空闲时间变得稀缺，我也更倾向于花更多时间在锻炼和陪伴家人上面。我的爱人经历了一些身体上的问题，身边好友的家人也有一些不幸的事情。这让我第一次真切地感受到了生活的无常。8 月份因为 TFCC 中断了三个月的锻炼，现在恢复后每周坚持 5 练。虽然能做的重量越来越大，但是体重和身形的变化并不显著。但很明显身体状态和精力都比之前好很多，现在每天 40 分钟的健身时间是我每天的 happy hour，休息日那天反而浑身难受。

其他的时间里，相比写作，我更需要时间（也可能是更有兴趣）去学习 LLM 的新变化。跟去年相比我觉得这个领域更加好玩了，让我有点重新找到大一时候学习 Hello world 的那种新鲜感。

## Agent

早在两年前的 2023 年，我就在文章 [AI 应用层的壁垒在哪里](https://gaocegege.com/Blog/genai/ai-hype)里分享过我对 Agent 的观点：

> 从更长远的时间来看，Agent 才是 AI 更值得期待的未来。如果说高效利用数据迭代模型的能力是 AI 时代的 TCP/IP，Agent 就是互联网本身。

当初的那个比喻有点抽象，不过这个观点我到现在还是认为成立的。关于到底什么是 Agent，我最近有了一个更容易理解的答案（比喻太抽象不如不比喻）。

我是 [poe.com](https://poe.com/) 重度用户，我会用 poe 来访问 GPT 和 Claude 来进行对话，多是问它一些编程问题。那么在这样的场景下，poe 就像是我的老师，它教给我怎么样去写代码来解决我的问题，但是它不能帮我直接写代码。LLM 是我的老师，但多数情况下我并不想做它的学生，我只是想做它的 executor。

对于我想学习的知识，很多时候确实是 Claude 老师教我的我要认真学习。不过很多时候我的问题我不想知道答案，我只想 Claude 老师能帮我解决。比如我提问如何写一个 URL shortener，来把一个长的 URL 转换成短的 URL。这个问题我并不想知道答案，我只想知道怎么样用代码来实现这个功能。

但是目前对话应用不能帮我写代码，那么我需要理解 Claude 教我的知识，然后通过自己的手来实现。这个过程我就在执行 Claude 的指令，在 VSCode 里写代码，然后在终端里运行代码，根据报错再次提问，然后再次循环。在这个过程里，我是 LLM 的智能版 executor。不仅在写代码这件事情上是这样，其他场景下也是这样。

比如我想请 GPT 老师帮忙设计一个从上海到北京的旅行计划。在这些场景下我需要的是一个帮我解决问题的 executor，不仅要告诉我怎么做，更重要的是帮我做。帮我设定计划，预定机票，预定酒店，甚至帮我在旅行中解决我想不到的问题。

通过与环境的交互，不断地学习和优化自己的行为，帮助我解决一个具体的问题而不是做我的军师，这就是 Agent。它把 LLM 当作大脑，把各种互联网应用当作工具，就如同我在使用 GPT 和 Claude 时的做法一样。所以 Agent 相当于是一个个硅基版的“人类”，提高了自动化水平。AI 的发展方向一直以来都是提高自动化水平，用 AI 替代人工和需要人的地方。那么 Agent 本身自然而然就是未来的方向。

## Coding

既然如此，我们来看看目前 Agent 进展最快的 coding 领域都发生了什么。GitHub Copilot 应该没人不知道吧，GitHub Copilot 最早只支持补全，这样的交互方式朴素一点来理解，与直接用 GPT 提问，然后把回复的代码复制粘贴到编辑器里没有太大区别（原理上类似，但肯定 Copilot 做了非常多工程工作）。这种方式没有办法进行多轮对话，通过迭代的方式来修改生成的结果。后来就有了单个文件内的 Ctrl + I 的 Modify（修改）功能。

用户可以选定一段代码，然后按 Ctrl + I，Copilot 会通过一个对话框来询问用户想要做什么修改，如果不满意可以通过多次询问来修改代码。这一交互方式的改进，就像是 GPT 从最初 Jasper AI 的补全时代，进入了 ChatGPT 的对话时代。

再后来，随着 Cursor、Windsurf 等工具的出现，多文件修改也被提出。虽然它很好用，但它仍然需要人的参与，甚至我自己觉得很多情况下，review 多文件修改内容所花费的时间比我用单文件修改一点点生成要更多一些。我需要 review 生成的代码，如果不是一次生成一个 commit 的话，如何 diff 这些变动都是一个问题。

从单文件修改到多文件修改，就像是自动驾驶的 L2 到 L3，那 Agent 是 L4 级别的自动驾驶。Coding 场景下的一个例子就是 [v0.dev](https://v0.dev/)。Agent 应该能够在我极其少量的干预下，帮助我解决复杂的需求，它来帮助我调整和 review，生成高质量的代码。

但就像自动驾驶领域一样，全自动无人驾驶谁都知道是未来的方向，但是什么时候能实现还是未知数。而且一出手就从 Agent 开始的产品（Devin 等），是不是合理的路径，我也不知道。在交互方式上，把最原始的补全的智能化水平提高，我反而觉得帮助最大。现在的补全很多时候是没什么逻辑的。举例说明，比如我写一篇文章，我在前文里写了我和家人一起去了北京和上海，在后续的段落里再次提到这件事，它会给我补全再加上很多没有被提到的城市。在代码补全里也存在这样的问题，补全在保持低延迟的同时正确识别我的意图，知道我想写的是什么，更加智能地补全，那其他形态也没有存在的必要了。

Agent 和 Coding 今年成为了共识，但我觉得这俩方向属于天生的政治正确。直觉判断 Agent 这样的形态肯定是未来了，Coding 也是最适合用来探索提升自动化水平的场景。但是真的离我们很近么。就像我 2023 年时候的判断，Agent 是未来的方向，一年过去了，我没看出有离它越来越近。

我自己比较看好的一些方向，包括为 Agent 提供更多获取数据的方式、和为 Agent 提供合适的运行环境。前者的产品有 [steel.dev/](https://steel.dev/) 等，还都非常初级。

## AI Infra

接下来想分享一下我最最感兴趣的方向。为什么放到后面来讲，还是因为虽然喜欢但是小众。我看到的很多很好的工作我感觉都没有得到应有的关注度，比如 [FlashInfer](https://github.com/flashinfer-ai/flashinfer)。Casade Inference 在工业界感觉价值很大，但是一看[知乎文章](https://zhuanlan.zhihu.com/p/681514497) 80 多个赞，[Hacker News](https://news.ycombinator.com/from?site=flashinfer.ai) 上 2 个 points。

回归正文，2022 年我们刚刚创业时候认为，AI infra 的易用性非常关键。PyTorch 就是很好的佐证，早在 2018 年刚开始学习 ML 框架的时候，Google 搜索 torch.distributed 的文章，简洁易懂。搜索一下 Tensorflow 分布式，乍一看我以为是玩抽象的。最后也证明 PyTorch 后来居上。

在 22 年的时候我们认为 AI infra 应该以人为本，最简单的原因是因为人贵。那时候训练和推理的规模都不大，在推理的时候因为一块卡算力太强了，甚至还有很强的 GPU 虚拟化需求。那时候算法工程师的模型能力更加稀缺，所以我们认为 AI infra 应该以算法工程师为核心，于是我们做了 [envd](https://github.com/tensorchord/envd) 简化开发环境的构建过程。

站在 2024 年的末尾来看，我认为易用性已经不再是绝大多数场景下的 AI infra 的核心问题。原因也很简单，以前以人为本，现在以机器为本。看看英伟达的股价，应该能够理解。现在不管是预训练、还是推理，都不是小团队需要考虑的事情了。大模型公司是新的创业公司，但是是 AI 领域极其专业的大团队了。以前之所以易用性重要，部分原因是 GPU 确实不好用。CUDA 加上容器虚拟化，会让镜像的分发，启动，调度等等都变得非常复杂，更不用说配上经常出问题的 IB。

现在这些事情，大部分 AI 公司不需要考虑那么多。需要考虑这些的公司也都很专业，他们有专业的团队来解决这些问题。所以现在的 AI infra 更多的诉求是提高机器的利用率，这就是 FlashInfer, PagedAttention, RadixAttention（RadixAttention 跟 Attention 的关系到底在哪里🤔）, LLMCache 等等工作的重点。

最近这个领域的工作，有点梦回 Hadoop 刚出来的时候。学术界动不动就有论文把 Hadoop 当作 Baseline 提高个几十几百倍的性能。系统领域有了新的场景还能产生真实的工业界价值，这是我最喜欢的地方。

与系统关系越来越深的训练与推理领域，我认为易用性变得越来越不重要。但是在 Low Code 和 No Code 领域，易用性依然是最重要的。我现在对于训练和推理场景的 AI infra 从业者的刻板印象是华人/国人系统模型双修猛男程序员。为他们做 infra 就是 flashinfer 的情况，同行拍手称快，其他人看不明白。

广义上的 AI infra 更加广大的用户群体是不会 AI 的普通人。怎么让我爸利用 AI 在工作中需要把一个网页内的数据做成 excel，这样的 Low Code 和 No Code 的场景，易用性依然是最重要的。2023 年我第一次看 dify 会觉得它的 UIUX 做的很好，但我不了解我什么场景下需要它。现在看我不是它的受众，但是**正因为我不是它的受众它才有光明的未来**。所以说 Luyu 是一个很好的产品经理，他能够看到我 2024 年才看得到的需求。

今年我最感兴趣的 AI infra 产品是 [Skypilot](https://github.com/skypilot-org/skypilot)。我一直认为 Kubernetes 对于 AI 负载来说是一个及格的产品但不是一个好用的产品。但是 build a scheduling system for AI from scratch 又有非常大的替换成本。Skypilot 相当于又在 Kubernetes 之上抽象了一层，为用户提供了更好的 UIUX。

Kubernetes 凭借着它的扩展性，让它一步步成为了公有云 PaaS 服务的标准界面。只要你会用 kubectl，你就可以在任何云上部署你的服务。而 Skypilot 为 AI 场景提供了更合理的界面（Terminal UI & CLI），未尝不能成为 PaaS 之上 AI PaaS 的标准界面。之前不存在这样的可能大部分原因是因为**过去的 AI 实在太非标**了，不同场景的模型千差万别，所以那个时候需要的是 Kubeflow、KServe。

倘若未来 LLM 全都是 Decoder only 的 Transformer，它的 pattern 非常统一，那么如果针对这一 pattern 做好抽象，支持路由层面的 prefix cache aware 的 load balance 等等最佳实践，是不是有可能呢。当然任何技术都需要 tradeoff，Skypilot 带来新抽象的同时也带来了新的复杂度。但是我是很久没有看到让我感兴趣的调度领域的工作了，Kubernetes 杀死了比赛，现在随着模型的统一化，又有了新的机会。

最后，祝大家新年快乐，如果你有什么想法或者问题，欢迎留言。

## 往年总结

-   [2023](http://gaocegege.com/Blog/%E9%9A%8F%E7%AC%94/newyear2023)
-   [2022](http://gaocegege.com/Blog/%E9%9A%8F%E7%AC%94/newyear2022)
-   [2021](http://gaocegege.com/Blog/%E9%9A%8F%E7%AC%94/newyear2021)
-   [2020](http://gaocegege.com/Blog/%E9%9A%8F%E7%AC%94/newyear2020)
-   [2019](http://gaocegege.com/Blog/%E9%9A%8F%E7%AC%94/newyear2019)
-   [2018](http://gaocegege.com/Blog/%E9%9A%8F%E7%AC%94/newyear2018)
-   [2017](http://gaocegege.com/Blog/%E9%9A%8F%E7%AC%94/newyear2017)
-   [2016](http://gaocegege.com/Blog/%E9%9A%8F%E7%AC%94/newyear2016)
-   [2015](http://gaocegege.com/Blog/%E9%9A%8F%E7%AC%94/newyear2015)
-   [2014](http://gaocegege.com/Blog/%E9%9A%8F%E7%AC%94/record)

## License

-   This article is licensed under [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/).
-   Please contact me for commercial use.

[](http://widget.renren.com/dialog/share?link=http://gaocegege.com/Blog/%E9%9A%8F%E7%AC%94/newyear2024 "Share on renren")[](https://www.facebook.com/sharer/sharer.php?u=/Blog/%E9%9A%8F%E7%AC%94/newyear2024 "Share on Facebook")[](https://plus.google.com/share?url=/Blog/%E9%9A%8F%E7%AC%94/newyear2024 "Share on Google+")

# 评论

Please enable JavaScript to view the [comments powered by Disqus.](https://disqus.com/?ref_noscript)

![高策's photo](/Blog/images/gaocegege.jpg) Author

# 高策

[gaocegege@hotmail.com](mailto:gaocegege@hotmail.com)

Done is better than perfect.

#### Friends

[女朋友肉肉](http://blog.xuruowei.com/) | [刁宝乐](http://blog.weiyiminhenqiang.com/) | 学帅 | [飞龙](http://www.flygon.net/) | [Azard](http://azard.me/blog) | [hcz](http://hczhcz.github.io/) | [羡辙](http://zhangwenli.com/blog/) | [zhou](http://s684373.github.io/) | [consiiii](http://consiiii.me/) | [at15](https://at15.dev) | [Sha Li](https://raspberryice.github.io/) | [政子哥哥](http://blog.zhengzi.me/) | [易极](http://yicodes.com/) | [木鸟杂记](https://www.qtmuniao.com/)

All content copyright [高策](/Blog/about) © 2024 • All rights reserved.

Proudly published with [Jekyll](https://jekyllrb.com/)

[](http://www.renren.com/325460067/profile)[](http://weibo.com/constructcece)[](https://plus.google.com/u/0/109707369864071328013)[](http://github.com/gaocegege)[](http://facebook.com/gaocegege)

$(document).foundation(); (function(i,s,o,g,r,a,m){i\['GoogleAnalyticsObject'\]=r;i\[r\]=i\[r\]||function(){ (i\[r\].q=i\[r\].q||\[\]).push(arguments)},i\[r\].l=1\*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)\[0\];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-54253120-1', 'auto'); ga('require', 'linkid', 'linkid.js'); ga('require', 'displayfeatures'); ga('send', 'pageview'); NProgress.start();var interval=setInterval(function(){NProgress.inc()},1000);jQuery(window).load(function(){clearInterval(interval);NProgress.done()});jQuery(window).unload(function(){NProgress.start()});