import{_ as s,c as h,a as l,d as t,b as n,w as o,e as a,r as _,o as c}from"./app-CrHx094D.js";const i={},d=l("h1",{id:"第-12-章-不寫註釋的四個藉口",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#第-12-章-不寫註釋的四個藉口"},[l("span",null,"第 12 章 不寫註釋的四個藉口")])],-1),u=l("p",null,[t("程式碼內的文件在軟體設計中起著至關重要的作用。註釋對於幫助開發人員理解系統和高效工作至關重要，但是註釋的作用不止於此。文件在抽象中也起著重要作用。沒有註釋，您就無法隱藏複雜性。最後，"),l("strong",null,"編寫註釋的過程（如果正確完成）實際上會改善系統的設計。"),t(" 相反，如果沒有很好的文件記錄，那麼好的軟體設計會失去很多價值。")],-1),r=l("p",null,"不幸的是，這種觀點並未得到普遍認同。大部分的生產程式碼基本上不包含任何註釋。許多開發人員認為註釋是浪費時間。其他人則看到了註釋中的價值，但不知何故從不動手編寫它們。幸運的是，許多開發團隊認識到了文件的價值，並且感覺這樣的團隊越來越普及了。但是，即使在鼓勵文件的團隊中，註釋也經常被視為繁瑣的工作，而且許多開發人員也不瞭解如何編寫註釋，因此生成的文件通常是平庸的。文件不足會給軟體開發帶來巨大且不必要的拖累。",-1),p=l("p",null,"當開發人員不寫註釋時，他們通常會以以下一種或多種藉口為自己的行為辯護：",-1),f=l("ul",null,[l("li",null,"“好的程式碼是自解釋的。”"),l("li",null,"“我沒有時間寫註釋。”"),l("li",null,"“註釋很容易過時，並會產生誤導。”"),l("li",null,"“我所看到的註釋都是毫無價值的，何必呢？”")],-1),m=l("p",null,"在後續的章節中，我將依次討論這些藉口。",-1),g=l("h2",{id:"_12-1-好的程式碼是自解釋的",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_12-1-好的程式碼是自解釋的"},[l("span",null,"12.1 好的程式碼是自解釋的")])],-1),k=l("p",null,"一些開發人員認為，如果其他人想知道某個方法的作用，那麼他們應該只需要閱讀該方法的程式碼：這將比任何註釋都更準確。讀者確實可能會透過閱讀其程式碼來推斷該方法的抽象介面，但這既費時又痛苦。另外，如果你在編寫程式碼時期望使用者會閱讀方法的實現，那你將嘗試使每個方法儘可能短，以便於閱讀。如果該方法做的事情不簡單，你會將其分解為幾個較小的方法。這將導致大量的淺方法。此外，這並沒有真正使程式碼更易於閱讀：為了理解頂層方法的行為，讀者可能需要了解其內嵌的方法的行為。對於大型系統，讓使用者透過閱讀程式碼來了解其行為是不切實際的。",-1),b=l("strong",null,"如果使用者必須閱讀方法的程式碼才能使用它，那就沒有任何抽象可言",-1),x=l("h2",{id:"_12-2-我沒有時間寫註釋",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_12-2-我沒有時間寫註釋"},[l("span",null,"12.2 我沒有時間寫註釋")])],-1),w=l("p",null,"與其他開發任務相比，將註釋的優先順序降低是很誘人的。如果要在新增新功能和為現有功能寫註釋之間做出選擇的話，選擇新功能似乎合乎邏輯。但是，軟體專案幾乎總是處於時間壓力之下，並且總會有比編寫註釋優先順序更高的事情。因此，如果您允許取消文件的優先順序，則最終將沒有文件。",-1),v=l("h2",{id:"_12-3-註釋很容易過時-並會產生誤導",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_12-3-註釋很容易過時-並會產生誤導"},[l("span",null,"12.3 註釋很容易過時，並會產生誤導")])],-1),z=l("h2",{id:"_12-4-我所看到的所有註釋都是毫無價值的",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_12-4-我所看到的所有註釋都是毫無價值的"},[l("span",null,"12.4 我所看到的所有註釋都是毫無價值的")])],-1),N=l("p",null,"在這四個藉口中，這可能是最有價值的藉口。每個軟體開發人員都看到過沒有提供有用資訊的註釋，並且大多數現有文件充其量都是這樣。幸運的是，這個問題是可以解決的。一旦你知道怎麼做，寫出有效的文件並不難。接下來的幾章將為如何編寫良好的文件並持續進行維護提供一個框架。",-1),M=l("h2",{id:"_12-5-良好註釋的好處",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_12-5-良好註釋的好處"},[l("span",null,"12.5 良好註釋的好處")])],-1),R=l("p",null,[t("既然我已經討論了（並希望揭穿了這些）反對編寫註釋的論點，讓我們考慮一下從良好註釋中將獲得的好處。"),l("strong",null,"註釋背後的總體思想是捕獲設計者所想的但不能在程式碼中表示的資訊。"),t(" 這些資訊包括從低層級的詳細資訊（例如，導致了複雜程式碼的硬體奇葩行為）到高層級的概念（例如，類的基本原理）的所有內容。當其他開發人員後續對程式碼進行修改時，這些註釋將使他們能夠更快、更準確地工作。沒有文件，未來的開發人員將不得不重新研究或猜測開發人員的原始想法，這將花費額外的時間，並且如果新開發者誤解了原始設計者的意圖，則存在導致程式碼缺陷的風險。即使是原作者在修改程式碼時註釋也是有價值的：如果距離你最後一次在一段程式碼中工作已經有幾個星期了，你會忘記許多最初的設計細節。")],-1),q=l("ul",null,[l("li",null,[l("strong",null,"變更放大"),t("：看似簡單的變更需要在許多地方進行程式碼修改。")]),l("li",null,[l("strong",null,"認知負荷"),t("：為了進行更改，開發人員必須累積大量資訊。")]),l("li",null,[l("strong",null,"未知的未知"),t("：尚不清楚需要修改哪些程式碼，或必須考慮哪些資訊才能進行這些修改。")])],-1),L=l("p",null,"好的文件可以幫助解決後兩個問題。透過為開發人員提供他們進行更改所需的資訊，並使開發人員可以忽略不相關的資訊，文件可以減輕認知負荷。沒有足夠的文件，開發人員可能必須閱讀大量程式碼才能重新構建出設計人員的想法。文件還可以透過闡明系統的結構來減少“未知的未知”，從而可以清楚地瞭解與任何給定的變更相關的資訊和程式碼。",-1),V=a('<p>接下來的幾章將向您展示如何編寫好的文件。還將討論如何將文件編寫整合到設計過程中，從而改善軟體設計。</p><h2 id="_12-6-不同的觀點-註釋是一種失敗" tabindex="-1"><a class="header-anchor" href="#_12-6-不同的觀點-註釋是一種失敗"><span>12.6 不同的觀點：註釋是一種失敗</span></a></h2><p>Robert Martin 在其所著的《程式碼整潔之道》一書中對註釋持一種更加消極的觀點：</p><blockquote><p>... 註釋最多隻能算是一種不得已而為之的手段。若程式語言有足夠的表達力，或者我們長於用這些語言來表達意圖，就不那麼需要註釋——也許根本不需要。</p></blockquote><blockquote><p>註釋的恰當用法是彌補我們在程式碼中未能表達清楚的內容... 註釋總是代表著失敗，我們總有不用註釋便很難表達程式碼意圖的時候，所以總要有註釋，這並不值得慶賀。</p></blockquote><p>我同意好的軟體設計可以減少對註釋的需求（特別是方法體中的註釋）。但註釋並不代表失敗。它們提供的資訊與程式碼提供的資訊完全不同，而且當前還無法用程式碼來表示這些資訊。程式碼和註釋各自擅長表達它們所代表的資訊，它們各自也提供了重要的好處。即使註釋中的資訊可以在程式碼中得到某種程度的體現，這是否是一個改進也並不明晰。</p><p>註釋的目的之一是可以避免不必要的程式碼閱讀：例如，與其閱讀方法體中的整個程式碼塊，開發人員只需要閱讀一個簡短的介面註釋來獲得呼叫該方法所需的所有資訊。Martin 採取了相反的方法：他提倡用程式碼替換註釋。與其透過寫註釋來解釋方法程式碼塊中發生了什麼，Martin 建議將該程式碼塊提取到單獨的方法中（不加註釋）並使用方法名來代替註釋。這會導致很長的名稱，例如 <code>isLeastRelevantMultipleOfNextLargerPrimeFactor</code>。即使有了所有這些單詞，這種名稱也晦澀難懂，提供的資訊還不如一個好的註釋。而且，透過這種方式，開發人員每次呼叫該方法時都相當於在重新輸入方法的文件！</p><p>我擔心 Martin 的設計哲學會鼓勵程式設計師有一種不好的態度，他們會避免寫註釋，以免看起來像是一種失敗。這甚至可能導致好的設計師受到錯誤的批評：“你這些還需要註釋的程式碼是有什麼問題嗎？”</p><p>良好的註釋不是失敗。它們增加了程式碼的價值，併發揮著定義抽象和管理系統複雜性的基本作用。</p>',9);function B(T,C){const e=_("RouteLink");return c(),h("div",null,[d,u,r,l("p",null,[t("在本章中，我將討論開發人員用來避免寫註釋的藉口，以及註釋真正重要的原因。然後，"),n(e,{to:"/zh-tw/ch13.html"},{default:o(()=>[t("第 13 章")]),_:1}),t("將描述如何編寫好的註釋，其後的幾章將討論相關問題，例如如何選擇變數名以及如何使用文件來改進系統的設計。我希望這些章節能使您相信三件事：好的註釋可以對軟體的整體質量產生很大的影響；寫好註釋並不難；並且（可能很難相信）寫註釋實際上很有趣。")]),p,f,m,g,l("p",null,[t("有人認為，如果程式碼編寫得當，則程式碼邏輯是清晰的，不需要註釋。這是一個“誘人的謬誤”，就像謠言說冰淇淋對您的健康有益：我們真的很想相信！不幸的是，事實並非如此。可以肯定的是，在編寫程式碼時可以做一些事情來減少對註釋的需求，例如選擇好的變數名（請參閱"),n(e,{to:"/zh-tw/ch14.html"},{default:o(()=>[t("第 14 章")]),_:1}),t("）。儘管如此，仍有大量設計資訊無法用程式碼表示。例如，只能在程式碼中對類介面的一小部分進行形式化的指定，例如其方法的簽名。介面的非形式化部分，例如對每個方法的作用或其結果的含義的高層級描述，只能在註釋中進行描述。還有許多程式碼中無法描述的東西，比如特定設計決策背後的考量，或者呼叫特定方法的前提條件。")]),k,l("p",null,[t("此外，註釋是抽象的基礎。回顧"),n(e,{to:"/zh-tw/ch04.html"},{default:o(()=>[t("第 4 章")]),_:1}),t("，抽象的目的是隱藏複雜性：抽象是實體的簡化檢視，它保留了必要的資訊，但省略了可以安全忽略的細節。"),b,t("：方法的所有複雜性都將暴露出來。沒有註釋，方法的唯一抽象就是其宣告，該宣告指定其名稱以及其引數和返回結果的名稱和型別。該宣告缺少太多基本資訊，無法單獨提供有用的抽象。例如，提取子字串的方法可能有兩個引數，起始和結束，表示要提取的字元範圍。僅憑宣告，無法確定提取的子字串是否將包含結束位置所指向的字元，或者如果起始位置在結束位置的後面時會發生什麼。註釋使我們能夠得到呼叫者所需的額外資訊，從而在隱藏實現細節的同時得到簡化的檢視。用人類語言（例如英語）寫註釋也很重要，雖然這會使它們不如程式碼精確，但也提供了更好的表達能力，因此我們可以建立簡單直觀的描述。如果要使用抽象來隱藏複雜性，則註釋必不可少。")]),x,w,l("p",null,[t("反駁該藉口的是"),n(e,{to:"/zh-tw/ch03.html"},{default:o(()=>[t("第 3.2 節")]),_:1}),t("討論過的投資思維。如果您想要一個乾淨的軟體結構，以允許你長期有效地工作，那麼您必須花一些額外的時間才能建立該結構。好的註釋對軟體的可維護性有很大的影響，因此花費在它們上面的精力將很快收回成本。此外，編寫註釋不需要花費很多時間。問問您自己，假設您不需要寫任何註釋，那麼您花費了多少開發時間來寫程式碼（與設計、編譯、測試等相比）。我懷疑答案是否超過 10%。現在假設您花在寫註釋上的時間與寫程式碼所花費的時間一樣多，這應該是一個安全的上限。基於這些假設，編寫好的註釋最多也只會增加您約 10% 的開發時間。擁有良好文件的好處將迅速抵消這一成本。")]),l("p",null,[t("此外，許多最重要的註釋是與抽象有關的，例如類和方法的頂層文件。"),n(e,{to:"/zh-tw/ch15.html"},{default:o(()=>[t("第 15 章")]),_:1}),t("認為，這些註釋應該是設計過程的一部分，並且寫文件的行為是用來改進整體設計的一個重要工具。這些註釋很快就會物有所值。")]),v,l("p",null,[t("註釋有時確實會過時，但這在實踐中並不是主要問題。使文件保持最新狀態並不需要付出巨大的努力。僅當對程式碼進行了較大的更改時才需要對文件進行大的更改，並且程式碼更改將比文件的更改花費更多的時間。"),n(e,{to:"/zh-tw/ch16.html"},{default:o(()=>[t("第 16 章")]),_:1}),t("討論了如何組織文件，以便在修改程式碼後儘可能容易地對其進行更新（關鍵的思想是避免重複的文件，並保持文件靠近相應的程式碼）。程式碼審查提供了一種檢測和修復陳舊註釋的有效機制。")]),z,N,M,R,l("p",null,[n(e,{to:"/zh-tw/ch02.html"},{default:o(()=>[t("第 2 章")]),_:1}),t("介紹了複雜性在軟體系統中表現出來的三種方式：")]),q,L,l("p",null,[n(e,{to:"/zh-tw/ch02.html"},{default:o(()=>[t("第 2 章")]),_:1}),t("指出，導致複雜性的主要原因是依賴性和模糊性。好的文件可以闡明依賴關係，並且可以填補空白以消除模糊性。")]),V])}const P=s(i,[["render",B],["__file","ch12.html.vue"]]),S=JSON.parse('{"path":"/zh-tw/ch12.html","title":"第 12 章 不寫註釋的四個藉口","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"12.1 好的程式碼是自解釋的","slug":"_12-1-好的程式碼是自解釋的","link":"#_12-1-好的程式碼是自解釋的","children":[]},{"level":2,"title":"12.2 我沒有時間寫註釋","slug":"_12-2-我沒有時間寫註釋","link":"#_12-2-我沒有時間寫註釋","children":[]},{"level":2,"title":"12.3 註釋很容易過時，並會產生誤導","slug":"_12-3-註釋很容易過時-並會產生誤導","link":"#_12-3-註釋很容易過時-並會產生誤導","children":[]},{"level":2,"title":"12.4 我所看到的所有註釋都是毫無價值的","slug":"_12-4-我所看到的所有註釋都是毫無價值的","link":"#_12-4-我所看到的所有註釋都是毫無價值的","children":[]},{"level":2,"title":"12.5 良好註釋的好處","slug":"_12-5-良好註釋的好處","link":"#_12-5-良好註釋的好處","children":[]},{"level":2,"title":"12.6 不同的觀點：註釋是一種失敗","slug":"_12-6-不同的觀點-註釋是一種失敗","link":"#_12-6-不同的觀點-註釋是一種失敗","children":[]}],"git":{"updatedTime":1719036333000},"filePathRelative":"zh-tw/ch12.md"}');export{P as comp,S as data};
