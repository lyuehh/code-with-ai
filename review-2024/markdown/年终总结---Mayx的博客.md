# [Mayx的博客](/)

![Logo](https://avatars0.githubusercontent.com/u/17966333)

Mayx's Home Page

 

[View My GitHub Profile](https://github.com/Mabbs)

[About Me](/Mabbs/)

-   [Download **ZIP File**](https://github.com/Mabbs/mabbs.github.io/zipball/master)
-   [Download **TAR Ball**](https://github.com/Mabbs/mabbs.github.io/tarball/master)
-   [View On **GitHub**](https://github.com/Mabbs/mabbs.github.io)

1 January 2025 - 字数统计：1218 - 阅读大约需要4分钟 - Hits: Loading...

# 年终总结

by [mayx](//github.com/Mabbs)

---

这是一篇创建于 天前的文章，其中的信息可能已经有所发展或是发生改变。  
  

BirthDay = new Date("01/01/2025 00:00:00"); today = new Date(); timeold = (today.getTime() - BirthDay.getTime()); secondsold = Math.floor(timeold / 1000); e\_daysold = timeold / (24 \* 60 \* 60 \* 1000); daysold = Math.floor(e\_daysold); if (daysold > 90) { document.getElementById("outdate").style.display = "block"; document.getElementById("outime").innerHTML = daysold; }

---

**AI摘要**

正在生成中……

async function sha(str) { const encoder = new TextEncoder(); const data = encoder.encode(str); const hashBuffer = await crypto.subtle.digest("SHA-256", data); const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array const hashHex = hashArray .map((b) => b.toString(16).padStart(2, "0")) .join(""); // convert bytes to hex string return hashHex; } async function ai\_gen(){ var postContent = "文章标题：" + "年终总结" + "；文章内容：" + "All Systems Operational.2024年的状态在过去的一年里，其实相比之前感觉好了一些，工作了一年多感觉什么事情都没有发生。这么看来在上学期间确实是痛苦啊，有人说出了学校会更加痛苦，至少在我看来并没有发生这种事情。不过也正是没有发生什么大事，所以感觉稍微有点无聊，但是我不讨厌，因为我知道刺激的生活并不会有趣，虽然可能会错过一些机会和有趣的事情，但是也降低了碰上危险和讨厌的事情的风险，还是安稳一些比较好。2024年发生的事情虽然这一年里没发生什么大事，不过小事肯定还是有些的。其实我的记忆能力还是一如既往的差，和去年一样，什么都想不起来，现在我顶多能记起半年左右的事情。令我记忆比较深刻的事情大概就是国庆节前后发生的事情，那段时间A股突然大涨，我受到家里人和自己的贪心以及在那之前手头的债券基金跌了一些等影响，入了一点进去，然后第二天就吃了跌停🤣。随后我就退出股市，不打算再玩了。还好之后的A股就再没有起来过（尤其是一年的最后一天再来一次大跌🤣），要不是我当机立断退出，可能就永无天日吧😅（虽然还是亏了不少😥，不过影响不大）。 我平时还是挺节俭的，虽然我知道节约并不能让我更有钱，但节约一点至少可以用的多一些。而自从我上次一天就消费掉几千块钱，什么都没换来之后，我知道了这简直毫无意义，省吃俭用也不如一次大跌。不过我知道了，如果想达成目标，就不要瞎搞，不要考虑投资的事情。但是市场环境仍然需要考虑，不能因为其他人的行为影响到了我的目标，也许换成黄金是最好的选择，只是我仍然没法下定决心，也许只有什么契机才可以吧。在那之前我仍然不会改变我的行为，我还是不会提高我的消费水平😂。 除此之外令我印象比较深刻的事情还是AI，这一年里LLM发展的比我想象的更加厉害，现在各行各业已经全面在用了，成本也比之前低得多，不像之前用AI的成本还稍微有些高，现在基本上都是免费的，而且效果也比之前好很多，像知名AI直播主Neuro-sama的表现相比之前也好多了，逻辑性和整活能力也更强了（虽然我只看切片可能判断上还是有些片面）。至于我因为AI的广泛发展也给我的博客加上了AI摘要，知识库问答 以及相似文章推荐，另外从我做完之后也进行了大力推广让其他站长也用上了我写的AI摘要，也算是对AI发展的回应了。2025年的计划既然2024年没有发生什么特别的事情，那我希望2025年也不要发生什么事情，就像我在2023年的年终总结所说，未来10年都要如一日，工作日上班，下班了玩电脑，休息日睡觉，节假日回家，不要做多余的事情，只要环境没有什么变化，就不要进行多余的操作，这样才能安稳的到达马拉松的终点。 至于其他事情，有趣的研究如果碰上了我依然会去做，做完之后就写篇博客😊。虽然说写多了之前写的我自己可能都忘了，不过总有些有用的东西，可以在我需要的时候进行参考，而且写多了之后拿来训练AI说不定能做一个和我想法一样的AI呢，到时候就可以代替我想问题了😆。"; var postContentSign = await sha(postContent); var outputContainer = document.getElementById("ai-output"); $.get(BlogAPI + "/is\_uploaded?id=/2025/01/01/summary.html&sign=" + postContentSign, function (data) { if (data == "yes") { $.get(BlogAPI + "/get\_summary?id=/2025/01/01/summary.html&sign=" + postContentSign, function (data2) { outputContainer.textContent = data2; }); } else { $.post(BlogAPI + "/upload\_blog?id=/2025/01/01/summary.html", postContent, function (data) { $.get(BlogAPI + "/get\_summary?id=/2025/01/01/summary.html&sign=" + postContentSign); const evSource = new EventSource(BlogAPI + "/summary?id=/2025/01/01/summary.html"); outputContainer.textContent = ""; evSource.onmessage = (event) => { if (event.data == "\[DONE\]") { evSource.close(); return; } else { const data = JSON.parse(event.data); outputContainer.textContent += data.response; } } }); } }); } ai\_gen();

---

-   [2024年的状态](#2024年的状态)
-   [2024年发生的事情](#2024年发生的事情)
-   [2025年的计划](#2025年的计划)

All Systems Operational.

# 2024年的状态

在过去的一年里，其实相比之前感觉好了一些，工作了一年多感觉什么事情都没有发生。这么看来在上学期间确实是痛苦啊，有人说出了学校会更加痛苦，至少在我看来并没有发生这种事情。不过也正是没有发生什么大事，所以感觉稍微有点无聊，但是我不讨厌，因为我知道刺激的生活并不会有趣，虽然可能会错过一些机会和有趣的事情，但是也降低了碰上危险和讨厌的事情的风险，还是安稳一些比较好。

# 2024年发生的事情

虽然这一年里没发生什么大事，不过小事肯定还是有些的。其实我的记忆能力还是一如既往的差，和去年一样，什么都想不起来，现在我顶多能记起半年左右的事情。令我记忆比较深刻的事情大概就是国庆节前后发生的事情，那段时间A股突然大涨，我受到家里人和自己的贪心以及在那之前手头的债券基金跌了一些等影响，入了一点进去，然后第二天就吃了跌停🤣。随后我就退出股市，不打算再玩了。还好之后的A股就再没有起来过（尤其是一年的最后一天再来一次大跌🤣），要不是我当机立断退出，可能就永无天日吧😅（虽然还是亏了不少😥，不过影响不大）。  
我平时还是挺节俭的，虽然我知道节约并不能让我更有钱，但节约一点至少可以用的多一些。而自从我上次一天就消费掉几千块钱，什么都没换来之后，我知道了这简直毫无意义，省吃俭用也不如一次大跌。不过我知道了，如果想达成目标，就不要瞎搞，不要考虑投资的事情。但是市场环境仍然需要考虑，不能因为其他人的行为影响到了我的目标，也许换成黄金是最好的选择，只是我仍然没法下定决心，也许只有什么契机才可以吧。在那之前我仍然不会改变我的行为，我还是不会提高我的消费水平😂。  
除此之外令我印象比较深刻的事情还是AI，这一年里LLM发展的比我想象的更加厉害，现在各行各业已经全面在用了，成本也比之前低得多，不像之前用AI的成本还稍微有些高，现在基本上都是免费的，而且效果也比之前好很多，像知名AI直播主[Neuro-sama](https://www.twitch.tv/vedal987)的表现相比之前也好多了，逻辑性和整活能力也更强了（虽然我只看切片可能判断上还是有些片面）。至于我因为AI的广泛发展也给我的博客加上了[AI摘要](/2024/07/03/ai-summary.html)，[知识库问答](/2024/09/27/rag.html) 以及[相似文章推荐](/2024/10/01/suggest.html)，另外从我做完之后也进行了大力推广让其他站长也用上了我写的AI摘要，也算是对AI发展的回应了。

# 2025年的计划

既然2024年没有发生什么特别的事情，那我希望2025年也不要发生什么事情，就像我在[2023年的年终总结](/2024/01/01/summary.html)所说，未来10年都要如一日，工作日上班，下班了玩电脑，休息日睡觉，节假日回家，不要做多余的事情，只要环境没有什么变化，就不要进行多余的操作，这样才能安稳的到达马拉松的终点。  
至于其他事情，有趣的研究如果碰上了我依然会去做，做完之后就写篇博客😊。虽然说写多了之前写的我自己可能都忘了，不过总有些有用的东西，可以在我需要的时候进行参考，而且写多了之后拿来训练AI说不定能做一个和我想法一样的AI呢，到时候就可以代替我想问题了😆。

tags: *总结*  
  

var blogurl = "/2025/01/01/summary.html"; var suggest = $("#suggest-container")\[0\]; suggest.innerHTML = "Loading..."; $.get(BlogAPI + "/suggest?id=" + blogurl + "&update=" + lastUpdated.valueOf(), function (data) { if (data.length) { getSearchJSON(function (search) { suggest.innerHTML = '<b>推荐文章</b><hr style="margin: 0 0 5px"/>'; const searchMap = new Map(search.map(item => \[item.url, item\])); const merged = data.map(suggestObj => { const searchObj = searchMap.get(suggestObj.id); return searchObj ? { ...searchObj } : null; }); merged.forEach(element => { if (element) { suggest.innerHTML += "<a href=" + element.url + ">" + element.title + "</a> - " + element.date + "<br />"; } }); }); } else { suggest.innerHTML = "暂无推荐文章……"; } });

[上一篇：ESXi和PVE的使用体验与对比](/2024/12/29/vm.html)  

if (window.location.host != "mabbs.github.io") { var gitalk = new Gitalk({ clientID: '098934a2556425f19d6e', clientSecret: '0bd44eed8425e5437ce43c4ba9b2791fbc04581d', repo: 'mabbs.github.io', owner: 'Mabbs', admin: \['Mabbs'\], id: '/2025/01/01/summary', // Ensure uniqueness and length less than 50 distractionFreeMode: false, // Facebook-like distraction free mode proxy: "https://cors-anywhere.mayx.eu.org/?https://github.com/login/oauth/access\_token" }) } else { var gitalk = new Gitalk({ clientID: '36557aec4c3cb04f7ac6', clientSecret: 'ac32993299751cb5a9ba81cf2b171cca65879cdb', repo: 'mabbs.github.io', owner: 'Mabbs', admin: \['Mabbs'\], id: '/2025/01/01/summary', // Ensure uniqueness and length less than 50 distractionFreeMode: false, // Facebook-like distraction free mode proxy: "https://cors-anywhere.mayx.eu.org/?https://github.com/login/oauth/access\_token" }) } gitalk.render('gitalk-container')

   想问这篇文章

 发送

召唤伊斯特瓦尔

Made with ❤ by Mayx  
Last updated at document.write(lastUpdated.toLocaleString());  
总字数：57 万 6047 - 文章数：158 - [Atom](/atom.xml) - [About](/README.html)