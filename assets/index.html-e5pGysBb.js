import{_ as h}from"./cover-BadZ7aH7.js";import{_ as i,r as n,o as c,c as s,a as d,b as l,w as r,d as t,e as o}from"./app-D29-FYvd.js";const u={},m=o('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><img src="'+h+'" style="width:28%;"><p>这本书是关于软件设计的：如何将复杂的软件系统分解成模块（如类和方法），以便这些模块可以相对独立地实现。首先，这本书介绍了软件设计的基本问题，也就是对复杂性的管理。然后，它讨论了关于如何处理软件设计过程的一些哲学问题，并提出了一系列可以在软件设计过程中应用的设计原则。本书还介绍了一些可用来识别设计问题的危险信号。您可以通过应用本书中的想法来减少大型软件系统的复杂性，以便您可以更快和更低成本地编写软件。</p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>',4),p=d("h2",{id:"翻译说明",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#翻译说明"},[d("span",null,"翻译说明")])],-1),_={href:"https://github.com/yingang/aposd-zh",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/yingang/aposd-zh/tree/main/docs#%E7%BF%BB%E8%AF%91%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"},g={href:"https://web.stanford.edu/~ouster/cgi-bin/book.php",target:"_blank",rel:"noopener noreferrer"},b=o('<p>如果您在阅读过程中，发现有翻译不当的地方，或者有其他建议，欢迎提交相应的 PR 或 Issue。</p><p>另外，繁体中文的翻译版本是基于 <code>opencc</code> 使用 Python 脚本自动生成的，如果发现有处理不当的内容，请针对该脚本或对应的简体内容提交 PR 或 Issue。</p><h2 id="术语翻译" tabindex="-1"><a class="header-anchor" href="#术语翻译"><span>术语翻译</span></a></h2><p>翻译是个比较困难的事情，除了个人水平有限，也有很多见仁见智的地方，所以这里先列出一些术语的翻译选择和背后的考虑因素，以供参考，并至少在本书籍的翻译过程中保持相对统一，也欢迎提 Issue 探讨。</p><table><thead><tr><th>英文</th><th>中文</th><th>说明</th></tr></thead><tbody><tr><td>bug</td><td>缺陷 / 代码缺陷</td><td>没有用“错误”是希望避免与 error 等术语的翻译混淆</td></tr><tr><td>change</td><td>变更</td><td>针对代码的时候，更多使用“变更”而不是“改变”，但根据实际的上下文而定</td></tr><tr><td>change amplification</td><td>变更放大</td><td>同前</td></tr><tr><td>classitis</td><td>多类症</td><td></td></tr><tr><td>cognitive load</td><td>认知负荷</td><td></td></tr><tr><td>complexity</td><td>复杂性</td><td>没有用“复杂度”</td></tr><tr><td>conjoined methods</td><td>连体方法</td><td></td></tr><tr><td>deep module / class</td><td>深模块 / 深类</td><td>没有用“深层”是希望避免与 layer 和 level 等术语的翻译混淆</td></tr><tr><td>define error out of existence</td><td>通过定义来规避错误</td><td></td></tr><tr><td>dependency / dependencies</td><td>依赖性 / 依赖项</td><td></td></tr><tr><td>dispatcher</td><td>分发器</td><td>没有用“调度器”是希望避免与 scheduler 等术语的翻译混淆</td></tr><tr><td>exception masking</td><td>异常屏蔽</td><td></td></tr><tr><td>exception aggregation</td><td>异常聚合</td><td></td></tr><tr><td>formal / informal</td><td>形式化的 / 非形式化的</td><td></td></tr><tr><td>GUI</td><td>图形界面 / 图形用户界面</td><td></td></tr><tr><td>hierarchical</td><td>层次化的</td><td></td></tr><tr><td>information leakage</td><td>信息泄露</td><td>没有用“泄漏”</td></tr><tr><td>layer / level</td><td>层 / 层级</td><td></td></tr><tr><td>mindset</td><td>思维方式 / 思维</td><td></td></tr><tr><td>obscurity</td><td>模糊性/模糊项</td><td></td></tr><tr><td>pass-through</td><td>透传</td><td>用于“透传方法”、“透传变量”、“透传参数”等场景</td></tr><tr><td>public method / variables</td><td>公有方法 / 公有变量</td><td>没有用“公开”是希望与 expose 和 exposure 等术语的翻译混淆</td></tr><tr><td>red flag</td><td>危险信号</td><td></td></tr><tr><td>selection</td><td>区域选择 / 选择的区域 / 所选区域</td><td>图像界面文本编译器中的示例，直接翻译成“选择”会不太清晰</td></tr><tr><td>shallow module / class</td><td>浅模块 / 浅类</td><td>没有用“浅层”，和 deep 的翻译选择是同样的原因</td></tr><tr><td>strategic programming / approach</td><td>战略式编程 / 战略式方法</td><td></td></tr><tr><td>tactical programming / approach</td><td>战术式编程 / 战术式方法</td><td></td></tr><tr><td>taking it too far</td><td>做过头了</td><td></td></tr><tr><td>unknown unknowns</td><td>未知的未知</td><td></td></tr><tr><td>waterfall method / model</td><td>瀑布式方法 / 瀑布式模型</td><td></td></tr><tr><td>web browser / server</td><td>Web 浏览器 / Web 服务器</td><td>没有用“网络”或“网页”是希望避免与 network 和 web page 等术语的翻译混淆，就保留英文了</td></tr></tbody></table>',5);function k(x,v){const e=n("RouteLink"),a=n("ExternalLinkIcon");return c(),s("div",null,[m,d("ul",null,[d("li",null,[l(e,{to:"/preface.html"},{default:r(()=>[t("前言")]),_:1})]),d("li",null,[l(e,{to:"/ch01.html"},{default:r(()=>[t("第 1 章 介绍")]),_:1})]),d("li",null,[l(e,{to:"/ch02.html"},{default:r(()=>[t("第 2 章 复杂性的本质")]),_:1})]),d("li",null,[l(e,{to:"/ch03.html"},{default:r(()=>[t("第 3 章 能工作的代码是不够的")]),_:1})]),d("li",null,[l(e,{to:"/ch04.html"},{default:r(()=>[t("第 4 章 模块应该是深的")]),_:1})]),d("li",null,[l(e,{to:"/ch05.html"},{default:r(()=>[t("第 5 章 信息隐藏和信息泄露")]),_:1})]),d("li",null,[l(e,{to:"/ch06.html"},{default:r(()=>[t("第 6 章 通用的模块是更深的")]),_:1})]),d("li",null,[l(e,{to:"/ch07.html"},{default:r(()=>[t("第 7 章 不同的层级，不同的抽象")]),_:1})]),d("li",null,[l(e,{to:"/ch08.html"},{default:r(()=>[t("第 8 章 下沉复杂性")]),_:1})]),d("li",null,[l(e,{to:"/ch09.html"},{default:r(()=>[t("第 9 章 在一起更好还是分开更好？")]),_:1})]),d("li",null,[l(e,{to:"/ch10.html"},{default:r(()=>[t("第 10 章 通过定义来规避错误")]),_:1})]),d("li",null,[l(e,{to:"/ch11.html"},{default:r(()=>[t("第 11 章 设计两次")]),_:1})]),d("li",null,[l(e,{to:"/ch12.html"},{default:r(()=>[t("第 12 章 不写注释的四个借口")]),_:1})]),d("li",null,[l(e,{to:"/ch13.html"},{default:r(()=>[t("第 13 章 注释应该描述代码中不明显的内容")]),_:1})]),d("li",null,[l(e,{to:"/ch14.html"},{default:r(()=>[t("第 14 章 选取名称")]),_:1})]),d("li",null,[l(e,{to:"/ch15.html"},{default:r(()=>[t("第 15 章 先写注释")]),_:1})]),d("li",null,[l(e,{to:"/ch16.html"},{default:r(()=>[t("第 16 章 修改现有的代码")]),_:1})]),d("li",null,[l(e,{to:"/ch17.html"},{default:r(()=>[t("第 17 章 一致性")]),_:1})]),d("li",null,[l(e,{to:"/ch18.html"},{default:r(()=>[t("第 18 章 代码应该是显而易见的")]),_:1})]),d("li",null,[l(e,{to:"/ch19.html"},{default:r(()=>[t("第 19 章 软件发展趋势")]),_:1})]),d("li",null,[l(e,{to:"/ch20.html"},{default:r(()=>[t("第 20 章 性能设计")]),_:1})]),d("li",null,[l(e,{to:"/ch21.html"},{default:r(()=>[t("第 21 章 决定什么是重要的")]),_:1})]),d("li",null,[l(e,{to:"/ch22.html"},{default:r(()=>[t("第 22 章 结论")]),_:1})]),d("li",null,[l(e,{to:"/summary.html"},{default:r(()=>[t("总结")]),_:1})])]),p,d("p",null,[t("原书第二版相对于第一版的内容变更不多，此翻译版本是在"),d("a",_,[t("第一版翻译"),l(a)]),t("的基础上增量更新而来的，而后者的历史可参见其"),d("a",f,[t("翻译说明"),l(a)]),t("。")]),d("p",null,[t("第二版的主要变更如下，翻译自"),d("a",g,[t("原作者网站的说明"),l(a)]),t("：")]),d("ul",null,[d("li",null,[l(e,{to:"/ch06.html"},{default:r(()=>[t("第 6 章")]),_:1}),t("（“通用的模块是更深的”）的内容有相对较多的更新。作者自述在第一版出版后，对选择通用设计的重要性有了更清晰的认识。第 6 章同时也吸收了第一版中第 9.7 节和第 10.9 节的内容。")]),d("li",null,[l(e,{to:"/ch09.html"},{default:r(()=>[t("第 9 章")]),_:1}),t("和"),l(e,{to:"/ch12.html"},{default:r(()=>[t("第 12 章")]),_:1}),t("增加了一些内容，主要对比了 Robert Martin 所著《代码整洁之道》中的设计哲学。作者自述在诸如方法的长度和注释的作用等方面与对方的观点有显著的分歧。")]),d("li",null,[l(e,{to:"/ch21.html"},{default:r(()=>[t("第 21 章")]),_:1}),t("（“决定什么是重要的”）是新增的章节，主要介绍好的软件设计如何将重要的事情和不重要的事情区分开，并更多关注在重要的事情上。")])]),b])}const E=i(u,[["render",k],["__file","index.html.vue"]]),B=JSON.parse('{"path":"/","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"翻译说明","slug":"翻译说明","link":"#翻译说明","children":[]},{"level":2,"title":"术语翻译","slug":"术语翻译","link":"#术语翻译","children":[]}],"git":{"updatedTime":1712048482000},"filePathRelative":"README.md"}');export{E as comp,B as data};
