import{_ as h,c as u,a as t,d as l,b as n,w as o,r as s,o as c}from"./app-D22hn0pO.js";const a={},_=t("h1",{id:"总结",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#总结"},[t("span",null,"总结")])],-1),i=t("h2",{id:"设计原则小结",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#设计原则小结"},[t("span",null,"设计原则小结")])],-1),d=t("p",null,"这些是本书中讨论的最重要的软件设计原则：",-1),r=t("h2",{id:"危险信号小结",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#危险信号小结"},[t("span",null,"危险信号小结")])],-1),m=t("p",null,"这些是本书中讨论的一些最重要的危险信号。系统中任何这些症状的存在都表明系统的设计存在问题：",-1),f=t("strong",null,"浅模块",-1),p=t("strong",null,"信息泄露",-1),g=t("strong",null,"时间分解",-1),k=t("strong",null,"过度暴露",-1),x=t("strong",null,"透传方法",-1),v=t("strong",null,"重复",-1),C=t("strong",null,"通用专用混合体",-1),y=t("strong",null,"连体方法",-1),b=t("strong",null,"注释重复了代码",-1),B=t("strong",null,"实现文档污染了接口",-1),N=t("strong",null,"模糊的名称",-1),O=t("strong",null,"难以选取名称",-1),A=t("strong",null,"难以描述",-1),L=t("strong",null,"难以理解的代码",-1),M=t("h2",{id:"关于作者",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#关于作者"},[t("span",null,"关于作者")])],-1),R=t("p",null,"John Ousterhout 是斯坦福大学的 Bosack Lerner 计算机科学教授。他当前的研究重点是新的软件堆栈层，以允许数据中心应用程序利用具有微秒级延迟的通信和存储技术。Ousterhout 之前的 14 年经历在工业界，并创办了 Scriptics 和 Electric Cloud 这两家公司，再之前的 14 年则是加州大学伯克利分校的计算机科学教授。他是 Tcl 脚本语言的创建者，并且以在分布式操作系统和存储系统中的工作而闻名。Ousterhout 在耶鲁大学获得了物理学学士学位，并在卡内基梅隆大学获得了计算机科学博士学位。他是美国国家工程院院士，并获得了无数奖项，包括 ACM 软件系统奖、ACM Grace Murray Hopper 奖、美国国家科学基金会总统年轻研究者奖和 UC Berkeley 杰出教学奖。",-1);function T(V,w){const e=s("RouteLink");return c(),u("div",null,[_,i,d,t("ol",null,[t("li",null,[l("复杂性是增量产生的：您必须努力处理小事情（请参阅 "),n(e,{to:"/ch02.html"},{default:o(()=>[l("第 2.4 节")]),_:1}),l("）。")]),t("li",null,[l("能工作的代码是不够的（请参阅 "),n(e,{to:"/ch03.html"},{default:o(()=>[l("第 3.2 节")]),_:1}),l("）。")]),t("li",null,[l("持续进行小额投资以改善系统设计（请参阅 "),n(e,{to:"/ch03.html"},{default:o(()=>[l("第 3.3 节")]),_:1}),l("）。")]),t("li",null,[l("模块应该是深的（请参阅 "),n(e,{to:"/ch04.html"},{default:o(()=>[l("第 4.4 节")]),_:1}),l("）")]),t("li",null,[l("接口的设计应尽可能简化其最常见的用法（请参阅 "),n(e,{to:"/ch04.html"},{default:o(()=>[l("第 4.7 节")]),_:1}),l("）。")]),t("li",null,[l("让模块的接口简单比让其实现简单更为重要（请参阅 "),n(e,{to:"/ch08.html"},{default:o(()=>[l("第 8 章")]),_:1}),l(" 和 "),n(e,{to:"/ch09.html"},{default:o(()=>[l("第 9.7 节")]),_:1}),l("）。")]),t("li",null,[l("通用模块是更深的（请参阅 "),n(e,{to:"/ch06.html"},{default:o(()=>[l("第 6 章")]),_:1}),l("）。")]),t("li",null,[l("分开通用代码和专用代码（请参阅 "),n(e,{to:"/ch06.html"},{default:o(()=>[l("第 6.6 节")]),_:1}),l(" 和 "),n(e,{to:"/ch09.html"},{default:o(()=>[l("第 9.4 节")]),_:1}),l("）。")]),t("li",null,[l("不同的层级应具有不同的抽象（请参阅 "),n(e,{to:"/ch07.html"},{default:o(()=>[l("第 7 章")]),_:1}),l("）。")]),t("li",null,[l("下沉复杂性（请参阅 "),n(e,{to:"/ch08.html"},{default:o(()=>[l("第 8 章")]),_:1}),l("）。")]),t("li",null,[l("通过定义来规避错误（请参阅 "),n(e,{to:"/ch10.html"},{default:o(()=>[l("第 10.3 节")]),_:1}),l("）。")]),t("li",null,[l("设计两次（请参阅 "),n(e,{to:"/ch11.html"},{default:o(()=>[l("第 11 章")]),_:1}),l("）。")]),t("li",null,[l("注释应该描述代码中不明显的内容（请参阅 "),n(e,{to:"/ch13.html"},{default:o(()=>[l("第 13 章")]),_:1}),l("）。")]),t("li",null,[l("软件应被设计成易于阅读而不是易于编写（请参阅 "),n(e,{to:"/ch18.html"},{default:o(()=>[l("第 18.2 节")]),_:1}),l("）。")]),t("li",null,[l("软件开发的增量应该是抽象而不是功能（请参阅 "),n(e,{to:"/ch19.html"},{default:o(()=>[l("第 19.2 节")]),_:1}),l("）。")]),t("li",null,[l("区分重要的和不重要的事情，并强调重要的事情（请参阅 "),n(e,{to:"/ch21.html"},{default:o(()=>[l("第 21 章")]),_:1}),l("）。")])]),r,m,t("ul",null,[t("li",null,[f,l("：类或方法的接口并不比其实现简单得多（请参阅 "),n(e,{to:"/ch04.html"},{default:o(()=>[l("第 4.5 节")]),_:1}),l(" 和 "),n(e,{to:"/ch13.html"},{default:o(()=>[l("第 13.5 节")]),_:1}),l("）。")]),t("li",null,[p,l("：设计决策反映在多个模块中（请参阅 "),n(e,{to:"/ch05.html"},{default:o(()=>[l("第 5.2 节")]),_:1}),l("）。")]),t("li",null,[g,l("：代码结构基于执行操作的顺序，而不是基于信息隐藏的原则（请参阅 "),n(e,{to:"/ch05.html"},{default:o(()=>[l("第 5.3 节")]),_:1}),l("）。")]),t("li",null,[k,l("：API 强迫调用者在使用常用功能的时候还需要去了解那些很少使用的功能（请参阅 "),n(e,{to:"/ch05.html"},{default:o(()=>[l("第 5.7 节")]),_:1}),l("）。")]),t("li",null,[x,l("：一种几乎不执行任何操作的方法，只是将其参数传递给具有相似签名的另一个方法（请参阅 "),n(e,{to:"/ch07.html"},{default:o(()=>[l("第 7.1 节")]),_:1}),l("）。")]),t("li",null,[v,l("：一遍又一遍的重复代码（请参阅 "),n(e,{to:"/ch09.html"},{default:o(()=>[l("第 9.4 节")]),_:1}),l("）。")]),t("li",null,[C,l("：专用代码与通用代码没有整洁地分开（请参阅 "),n(e,{to:"/ch09.html"},{default:o(()=>[l("第 9.5 节")]),_:1}),l("）。")]),t("li",null,[y,l("：两个方法之间的依赖很多，以至于很难在不理解一个方法的实现的情况下理解另一个方法的实现（请参阅 "),n(e,{to:"/ch09.html"},{default:o(()=>[l("第 9.8 节")]),_:1}),l("）。")]),t("li",null,[b,l("：注释中的所有信息在旁边的代码里显而易见（请参阅 "),n(e,{to:"/ch13.html"},{default:o(()=>[l("第 13.2 节")]),_:1}),l("）。")]),t("li",null,[B,l("：接口注释描述了其用户不需要了解的实现细节（请参阅 "),n(e,{to:"/ch13.html"},{default:o(()=>[l("第 13.5 节")]),_:1}),l("）。")]),t("li",null,[N,l("：变量或方法的名称过于不精确，以至于它不能传递太多有用的信息（请参阅 "),n(e,{to:"/ch14.html"},{default:o(()=>[l("第 14.3 节")]),_:1}),l("）。")]),t("li",null,[O,l("：很难为实体提供一个精确而直观的名称（请参阅 "),n(e,{to:"/ch14.html"},{default:o(()=>[l("第 14.3 节")]),_:1}),l("）。")]),t("li",null,[A,l("：为了得到完整的描述，变量或方法的文档必须很长（请参阅 "),n(e,{to:"/ch15.html"},{default:o(()=>[l("第 15.3 节")]),_:1}),l("）。")]),t("li",null,[L,l("：一段代码的行为或含义不容易被理解（请参阅 "),n(e,{to:"/ch18.html"},{default:o(()=>[l("第 18.2 节")]),_:1}),l("）。")])]),M,R])}const J=h(a,[["render",T],["__file","summary.html.vue"]]),P=JSON.parse('{"path":"/summary.html","title":"总结","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"设计原则小结","slug":"设计原则小结","link":"#设计原则小结","children":[]},{"level":2,"title":"危险信号小结","slug":"危险信号小结","link":"#危险信号小结","children":[]},{"level":2,"title":"关于作者","slug":"关于作者","link":"#关于作者","children":[]}],"git":{"updatedTime":1721721127000},"filePathRelative":"summary.md"}');export{J as comp,P as data};
