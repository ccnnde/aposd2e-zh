import{_ as e,o as t,c as a,e as o}from"./app-CS3o9vnc.js";const i={},s=o('<h1 id="chapter-8-pull-complexity-downwards" tabindex="-1"><a class="header-anchor" href="#chapter-8-pull-complexity-downwards"><span>Chapter 8 Pull Complexity Downwards</span></a></h1><p>This chapter introduces another way of thinking about how to create deeper classes. Suppose that you are developing a new module, and you discover a piece of unavoidable complexity. Which is better: should you let users of the module deal with the complexity, or should you handle the complexity internally within the module? If the complexity is related to the functionality provided by the module, then the second answer is usually the right one. Most modules have more users than developers, so it is better for the developers to suffer than the users. As a module developer, you should strive to make life as easy as possible for the users of your module, even if that means extra work for you. Another way of expressing this idea is that it is more important for a module to have a simple interface than a simple implementation.</p><p>As a developer, it’s tempting to behave in the opposite fashion: solve the easy problems and punt the hard ones to someone else. If a condition arises that you’re not certain how to deal with, the easiest thing is to throw an exception and let the caller handle it. If you are not certain what policy to implement, you can define a few configuration parameters to control the policy and leave it up to the system administrator to figure out the best values for them.</p><p>Approaches like these will make your life easier in the short term, but they amplify complexity, so that many people must deal with a problem, rather than just one person. For example, if a class throws an exception, every caller of the class will have to deal with it. If a class exports configuration parameters, every system administrator in every installation will have to learn how to set them.</p><h2 id="_8-1-example-editor-text-class" tabindex="-1"><a class="header-anchor" href="#_8-1-example-editor-text-class"><span>8.1 Example: editor text class</span></a></h2><p>Consider the class that manages the text of a file for a GUI text editor, which was discussed in Chapters 6 and 7. The class provides methods to read a file from disk into memory, query and modify the in-memory copy of the file, and write the modified version back to disk. When students had to implement this class, many of them chose a line-oriented interface, with methods to read, insert, and delete whole lines of text. This resulted in a simple implementation for the class, but it created complexity for higher level software. At the level of the user interface, operations rarely involve whole lines. For example, keystrokes cause individual characters to be inserted within an existing line; copying or deleting the selection can modify parts of several different lines. With the line-oriented text interface, higher-level software had to split and join lines in order to implement the user interface.</p><p>A character-oriented interface such as the one described in Section 6.3 pulls complexity downward. The user interface software can now insert and delete arbitrary ranges of text without splitting and merging lines, so it becomes simpler. The implementation of the text class probably becomes more complex: if it represents the text internally as a collection of lines, it will have to split and merge lines to implement the character-oriented operations. This approach is better because it encapsulates the complexity of splitting and merging within the text class, which reduces the overall complexity of the system.</p><h2 id="_8-2-example-configuration-parameters" tabindex="-1"><a class="header-anchor" href="#_8-2-example-configuration-parameters"><span>8.2 Example: configuration parameters</span></a></h2><p>Configuration parameters are an example of moving complexity upwards instead of down. Rather than determining a particular behavior internally, a class can export a few parameters that control its behavior, such as the size of a cache or the number of times to retry a request before giving up. Users of the class must then specify appropriate values for the parameters. Configuration parameters have become very popular in systems today; some systems have hundreds of them.</p><p>Advocates argue that configuration parameters are good because they allow users to tune the system for their particular requirements and workloads. In some situations it is hard for low-level infrastructure code to know the best policy to apply, whereas users are much more familiar with their domains. For instance, a user might know that some requests are more time-critical than others, so it makes sense for the user to specify a higher priority for those requests. In situations like this, configuration parameters can result in better performance across a broader variety of domains.</p><p>However, configuration parameters also provide an easy excuse to avoid dealing with important issues and pass them on to someone else. In many cases, it’s difficult or impossible for users or administrators to determine the right values for the parameters. In other cases, the right values could have been determined automatically with a little extra work in the system implementation. Consider a network protocol that must deal with lost packets. If it sends a request but doesn’t receive a response within a certain time period, it resends the request. One way to determine the retry interval is to introduce a configuration parameter. However, the transport protocol could compute a reasonable value on its own by measuring the response time for requests that succeed and then using a multiple of this for the retry interval. This approach pulls complexity downward and saves users from having to figure out the right retry interval. It has the additional advantage of computing the retry interval dynamically, so it will adjust automatically if operating conditions change. In contrast, configuration parameters can easily become out of date.</p><p>Thus, you should avoid configuration parameters as much as possible. Before exporting a configuration parameter, ask yourself: “will users (or higher-level modules) be able to determine a better value than we can determine here?” When you do create configuration parameters, see if you can provide reasonable defaults, so users will only need to provide values under exceptional conditions. Ideally, each module should solve a problem completely; configuration parameters result in an incomplete solution, which adds to system complexity.</p><h2 id="_8-3-taking-it-too-far" tabindex="-1"><a class="header-anchor" href="#_8-3-taking-it-too-far"><span>8.3 Taking it too far</span></a></h2><p>Use discretion when pulling complexity downward; this is an idea that can easily be overdone. An extreme approach would be to pull all of the functionality of the entire application down into a single class, which clearly doesn’t make sense. Pulling complexity down makes the most sense if (a) the complexity being pulled down is closely related to the class’s existing functionality, (b) pulling the complexity down will result in simplifications elsewhere in the application, and (c) pulling the complexity down simplifies the class’s interface. Remember that the goal is to minimize overall system complexity.</p><p>Chapter 6 described how some students defined methods in the text class that reflected the user interface, such as a method that implements the functionality of the backspace key. It might seem that this is good, since it pulls complexity downward. However, adding knowledge of the user interface to the text class doesn’t simplify higher-level code very much, and the user-interface knowledge doesn’t relate to the core functions of the text class. In this case, pulling complexity down just resulted in information leakage.</p><h2 id="_8-4-conclusion" tabindex="-1"><a class="header-anchor" href="#_8-4-conclusion"><span>8.4 Conclusion</span></a></h2><p>When developing a module, look for opportunities to take a little bit of extra suffering upon yourself in order to reduce the suffering of your users.</p>',17),r=[s];function n(l,h){return t(),a("div",null,r)}const p=e(i,[["render",n],["__file","ch08.html.vue"]]),d=JSON.parse('{"path":"/en/ch08.html","title":"Chapter 8 Pull Complexity Downwards","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"8.1 Example: editor text class","slug":"_8-1-example-editor-text-class","link":"#_8-1-example-editor-text-class","children":[]},{"level":2,"title":"8.2 Example: configuration parameters","slug":"_8-2-example-configuration-parameters","link":"#_8-2-example-configuration-parameters","children":[]},{"level":2,"title":"8.3 Taking it too far","slug":"_8-3-taking-it-too-far","link":"#_8-3-taking-it-too-far","children":[]},{"level":2,"title":"8.4 Conclusion","slug":"_8-4-conclusion","link":"#_8-4-conclusion","children":[]}],"git":{"updatedTime":1710507457000},"filePathRelative":"en/ch08.md"}');export{p as comp,d as data};
