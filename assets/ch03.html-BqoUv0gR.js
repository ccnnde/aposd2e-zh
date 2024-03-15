import{_ as e}from"./00011-DvQp1yFW.js";import{_ as t,o,c as a,e as i}from"./app-llmTPQX_.js";const s={},n=i('<h1 id="chapter-3-working-code-isn-t-enough-strategic-vs-tactical-programming" tabindex="-1"><a class="header-anchor" href="#chapter-3-working-code-isn-t-enough-strategic-vs-tactical-programming"><span>Chapter 3 Working Code Isn’t Enough(Strategic vs. Tactical Programming)</span></a></h1><p>One of the most important elements of good software design is the mindset you adopt when you approach a programming task. Many organizations encourage a tactical mindset, focused on getting features working as quickly as possible. However, if you want a good design, you must take a more strategic approach where you invest time to produce clean designs and fix problems. This chapter discusses why the strategic approach produces better designs and is actually cheaper than the tactical approach over the long run.</p><h2 id="_3-1-tactical-programming" tabindex="-1"><a class="header-anchor" href="#_3-1-tactical-programming"><span>3.1 Tactical programming</span></a></h2><p>Most programmers approach software development with a mindset I call tactical programming. In the tactical approach, your main focus is to get something working, such as a new feature or a bug fix. At first glance this seems totally reasonable: what could be more important than writing code that works? However, tactical programming makes it nearly impossible to produce a good system design.</p><p>The problem with tactical programming is that it is short-sighted. If you’re programming tactically, you’re trying to finish a task as quickly as possible. Perhaps you have a hard deadline. As a result, planning for the future isn’t a priority. You don’t spend much time looking for the best design; you just want to get something working soon. You tell yourself that it’s OK to add a bit of complexity or introduce a small kludge or two, if that allows the current task to be completed more quickly.</p><p>This is how systems become complicated. As discussed in the previous chapter, complexity is incremental. It’s not one particular thing that makes a system complicated, but the accumulation of dozens or hundreds of small things. If you program tactically, each programming task will contribute a few of these complexities. Each of them probably seems like a reasonable compromise in order to finish the current task quickly. However, the complexities accumulate rapidly, especially if everyone is programming tactically.</p><p>Before long, some of the complexities will start causing problems, and you will begin to wish you hadn’t taken those early shortcuts. But, you will tell yourself that it’s more important to get the next feature working than to go back and refactor existing code. Refactoring may help out in the long run, but it will definitely slow down the current task. So, you look for quick patches to work around any problems you encounter. This just creates more complexity, which then requires more patches. Pretty soon the code is a mess, but by this point things are so bad that it would take months of work to clean it up. There’s no way your schedule can tolerate that kind of delay, and fixing one or two of the problems doesn’t seem like it will make much difference, so you just keep programming tactically.</p><p>If you have worked on a large software project for very long, I suspect you have seen tactical programming at work and have experienced the problems that result. Once you start down the tactical path, it’s difficult to change.</p><p>Almost every software development organization has at least one developer who takes tactical programming to the extreme: a tactical tornado. The tactical tornado is a prolific programmer who pumps out code far faster than others but works in a totally tactical fashion. When it comes to implementing a quick feature, nobody gets it done faster than the tactical tornado. In some organizations, management treats tactical tornadoes as heroes. However, tactical tornadoes leave behind a wake of destruction. They are rarely considered heroes by the engineers who must work with their code in the future. Typically, other engineers must clean up the messes left behind by the tactical tornado, which makes it appear that those engineers (who are the real heroes) are making slower progress than the tactical tornado.</p><h2 id="_3-2-strategic-programming" tabindex="-1"><a class="header-anchor" href="#_3-2-strategic-programming"><span>3.2 Strategic programming</span></a></h2><p>The first step towards becoming a good software designer is to realize that <strong>working code isn’t enough</strong>. It’s not acceptable to introduce unnecessary complexities in order to finish your current task faster. The most important thing is the long-term structure of the system. Most of the code in any system is written by extending the existing code base, so your most important job as a developer is to facilitate those future extensions. Thus, you should not think of “working code” as your primary goal, though of course your code must work. Your primary goal must be to produce a great design, which also happens to work. This is <em>strategic programming</em>.</p><p>Strategic programming requires an investment mindset. Rather than taking the fastest path to finish your current project, you must invest time to improve the design of the system. These investments will slow you down a bit in the short term, but they will speed you up in the long term, as illustrated in Figure 3.1.</p><p>Some of the investments will be proactive. For example, it’s worth taking a little extra time to find a simple design for each new class; rather than implementing the first idea that comes to mind, try a couple of alternative designs and pick the cleanest one. Try to imagine a few ways in which the system might need to be changed in the future and make sure that will be easy with your design. Writing good documentation is another example of a proactive investment.</p><p>Other investments will be reactive. No matter how much you invest up front, there will inevitably be mistakes in your design decisions. Over time, these mistakes will become obvious. When you discover a design problem, don’t just ignore it or patch around it; take a little extra time to fix it. If you program strategically, you will continually make small improvements to the system design. This is the opposite of tactical programming, where you are continually adding small bits of complexity that cause problems in the future.</p><h2 id="_3-3-how-much-to-invest" tabindex="-1"><a class="header-anchor" href="#_3-3-how-much-to-invest"><span>3.3 How much to invest?</span></a></h2><p>So, what is the right amount of investment? A huge up-front investment, such as trying to design the entire system, won’t be effective. This is the waterfall method, and we know it doesn’t work. The ideal design tends to emerge in bits and pieces, as you get experience with the system. Thus, the best approach is to make lots of small investments on a continual basis. I suggest spending about 10–20% of your total development time on investments. This amount is small enough that it won’t impact your schedules significantly, but large enough to produce significant benefits over time. Your initial projects will thus take 10–20% longer than they would in a purely tactical approach. That extra time will result in a better software design, and you will start experiencing the benefits within a few months. It won’t be long before you’re developing at least 10–20% faster than you would if you had programmed tactically. At this point your investments become free: the benefits from your past investments will save enough time to cover the cost of future investments. You will quickly recover the cost of the initial investment. Figure 3.1 illustrates this phenomenon.</p><p><img src="'+e+'" alt=""></p><p>Figure 3.1: At the beginning, a tactical approach to programming will make progress more quickly than a strategic approach. However, complexity accumulates more rapidly under the tactical approach, which reduces productivity. Over time, the strategic approach results in greater progress. Note: this figure is intended only as a qualitative illustration; I am not aware of any empirical measurements of the precise shapes of the curves.</p><p>Conversely, if you program tactically, you will finish your first projects 10–20% faster, but over time your development speed will slow as complexity accumulates. It won’t be long before you’re programming at least 10–20% slower. You will quickly give back all of the time you saved at the beginning, and for the rest of system’s lifetime you will be developing more slowly than if you had taken the strategic approach. If you haven’t ever worked in a badly degraded code base, talk to someone who has; they will tell you that poor code quality slows development by at least 20%.</p><p>The term <em>technical debt</em> is often used to describe the problems caused by tactical programming. By programming tactically you are borrowing time from the future: development will go more quickly now, but more slowly later on. As with financial debt, the amount you pay back will exceed the amount you borrowed. Unlike financial debt, most technical debt is never fully repaid: you’ll keep paying and paying forever.</p><p>Figure 3.1 raises an important question: where is the crossover point between the strategic and tactical curves? In other words, how long does it take before the strategic approach has paid for itself? Unfortunately I am not aware of any data on this topic, and it would be difficult to perform the kind of controlled experiment needed to answer the question in a convincing fashion. My personal opinion is that the time to payback is somewhere in the range of 6–18 months. This has a lot to do with developers’ memory: by the time a piece of code is a few months old, developers have forgotten most of what was in their minds when they wrote it, so development will slow down significantly if the code is complex. These additional costs quickly compensate for any initial gains from strategic programming. Again, this is just my opinion, and I don’t have any data to back it up.</p><h2 id="_3-4-startups-and-investment" tabindex="-1"><a class="header-anchor" href="#_3-4-startups-and-investment"><span>3.4 Startups and investment</span></a></h2><p>In some environments there are strong forces working against the strategic approach. For example, early-stage startups feel tremendous pressure to get their early releases out quickly. In these companies, it might seem that even a 10–20% investment isn’t affordable. As a result, many startups take a tactical approach, spending little effort on design and even less on cleanup when problems pop up. They rationalize this with the thought that, if they are successful, they’ll have enough money to hire extra engineers to clean things up.</p><p>If you are in a company leaning in this direction, you should realize that once a code base turns to spaghetti, it is nearly impossible to fix. You will probably pay high development costs for the life of the product. Furthermore, the payoff for good (or bad) design comes pretty quickly, so there’s a good chance that the tactical approach won’t even speed up your first product release.</p><p>Another thing to consider is that one of the most important factors for success of a company is the quality of its engineers. The best way to lower development costs is to hire great engineers: they don’t cost much more than mediocre engineers but have tremendously higher productivity. However, the best engineers care deeply about good design. If your code base is a wreck, word will get out, and this will make it harder for you to recruit. As a result, you are likely to end up with mediocre engineers. This will increase your future costs and probably cause the system structure to degrade even more.</p><p>Facebook is an example of a startup that encouraged tactical programming. For many years the company’s motto was “Move fast and break things.” New engineers fresh out of college were encouraged to dive immediately into the company’s code base; it was normal for engineers to push commits into production in their first week on the job. On the positive side, Facebook developed a reputation as a company that empowered its employees. Engineers had tremendous latitude, and there were few rules and restrictions to get in their way.</p><p>Facebook has been spectacularly successful as a company, but its code base suffered because of the company’s tactical approach; much of the code was unstable and hard to understand, with few comments or tests, and painful to work with. Over time the company realized that its culture was unsustainable. Eventually, Facebook changed its motto to “Move fast with solid infrastructure” to encourage its engineers to invest more in good design. It remains to be seen whether Facebook can successfully clean up the problems that accumulated over years of tactical programming.</p><p>In fairness to Facebook, I should point out that Facebook’s code probably isn’t much worse than average among startups. Tactical programming is commonplace among startups; Facebook just happens to be a particularly visible example.</p><p>Fortunately, it is also possible to succeed in Silicon Valley with a strategic approach. Google and VMware grew up around the same time as Facebook, but both of these companies embraced a more strategic approach. Both companies placed a heavy emphasis on high quality code and good design, and both companies built sophisticated products that solved complex problems with reliable software systems. The companies’ strong technical cultures became well known in Silicon Valley. Few other companies could compete with them for hiring the top technical talent.</p><p>These examples show that a company can succeed with either approach. However, it’s a lot more fun to work in a company that cares about software design and has a clean code base.</p><h2 id="_3-5-conclusion" tabindex="-1"><a class="header-anchor" href="#_3-5-conclusion"><span>3.5 Conclusion</span></a></h2><p>Good design doesn’t come for free. It has to be something you invest in continually, so that small problems don’t accumulate into big ones. Fortunately, good design eventually pays for itself, and sooner than you might think.</p><p>It’s crucial to be consistent in applying the strategic approach and to think of investment as something to do today, not tomorrow. When you get in a crunch it will be tempting to put off cleanups until after the crunch is over. However, this is a slippery slope; after the current crunch there will almost certainly be another one, and another after that. Once you start delaying design improvements, it’s easy for the delays to become permanent and for your culture to slip into the tactical approach. The longer you wait to address design problems, the bigger they become; the solutions become more intimidating, which makes it easy to put them off even more. The most effective approach is one where every engineer makes continuous small investments in good design.</p>',33),r=[n];function l(c,h){return o(),a("div",null,r)}const u=t(s,[["render",l],["__file","ch03.html.vue"]]),d=JSON.parse('{"path":"/en/ch03.html","title":"Chapter 3 Working Code Isn’t Enough(Strategic vs. Tactical Programming)","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"3.1 Tactical programming","slug":"_3-1-tactical-programming","link":"#_3-1-tactical-programming","children":[]},{"level":2,"title":"3.2 Strategic programming","slug":"_3-2-strategic-programming","link":"#_3-2-strategic-programming","children":[]},{"level":2,"title":"3.3 How much to invest?","slug":"_3-3-how-much-to-invest","link":"#_3-3-how-much-to-invest","children":[]},{"level":2,"title":"3.4 Startups and investment","slug":"_3-4-startups-and-investment","link":"#_3-4-startups-and-investment","children":[]},{"level":2,"title":"3.5 Conclusion","slug":"_3-5-conclusion","link":"#_3-5-conclusion","children":[]}],"git":{"updatedTime":1710486913000},"filePathRelative":"en/ch03.md"}');export{u as comp,d as data};
