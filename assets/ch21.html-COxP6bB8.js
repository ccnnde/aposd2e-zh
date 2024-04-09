import{_ as h,r as s,o as c,c as _,a as e,d as t,b as a,w as n,e as o}from"./app-aD4KTUba.js";const d={},i=e("h1",{id:"第-21-章-決定什麼是重要的",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第-21-章-決定什麼是重要的"},[e("span",null,"第 21 章 決定什麼是重要的")])],-1),r=e("p",null,"良好軟體設計中最重要的元素之一是區分什麼是重要的和什麼是不重要的。圍繞重要的事情設計軟體系統。對於不重要的事情，儘量減少它們對系統其餘部分的影響。重要的事情應該得到強調以使其更明顯，不重要的事情應該儘可能隱藏起來。",-1),p=e("h2",{id:"_21-1-如何決定什麼是重要的",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_21-1-如何決定什麼是重要的"},[e("span",null,"21.1 如何決定什麼是重要的？")])],-1),u=e("code",null,"backspace",-1),f=o('<p>如果有很多選擇，確定什麼是最重要的就容易多了。例如，在選擇變數名時，先列出與該變數相關的單詞，然後選擇幾個最能傳達資訊的單詞，使用這些單詞來形成變數名。這是一個“設計兩次”原則的例子。</p><p>有時候什麼是最重要的可能不是很明顯，對於沒有太多經驗的年輕開發人員尤其如此。在這種情況下，我建議提出一個假設：“我認為這是最重要的事情”。然後，堅持這個假設，基於該假設構建系統，看看它會如何工作。如果您的假設是正確的，請思考為什麼它最終是正確的，以及是否有你以後可以使用的線索。如果您的假設是錯誤的，也是可以接受的：思考為什麼它最終是錯誤的，以及是否有你以後可以用來避免這個選擇的線索。無論哪種方式，您都能從經驗中學習，並且您將逐漸做出越來越好的選擇。</p><h2 id="_21-2-最小化重要的事情" tabindex="-1"><a class="header-anchor" href="#_21-2-最小化重要的事情"><span>21.2 最小化重要的事情</span></a></h2><p>可能的話，儘量讓重要的事情少一些，這可以產生更簡單的系統。例如，嘗試最小化構造物件時必須指定的引數數量，或者提供反映最常見用法的預設值。對於確實重要的事情，儘量減少它們出現的地方。隱藏在模組內部的資訊對模組外部程式碼來說不重要。如果異常可以在系統較低層級完全處理，那麼它對系統其餘部分來說就不重要。如果一個配置引數可以根據系統行為自動計算出來（而不是讓管理員手動選擇），那麼它對管理員來說就不重要。</p><h2 id="_21-3-如何強調重要的事情" tabindex="-1"><a class="header-anchor" href="#_21-3-如何強調重要的事情"><span>21.3 如何強調重要的事情</span></a></h2><p>一旦您識別了什麼是重要的事情，您應該在設計中強調它們。一種強調方法是突出顯示：重要的事情應該出現在更可能被看到的地方，比如介面文件、名稱或是被重度使用的方法的引數。另一種強調方法是重複：關鍵的思想應反覆出現。第三種強調方法是中心化：最重要的事情應該位於系統的中心，它們決定了周圍事物的結構。一個例子是作業系統中的裝置驅動程式的介面，這就是中心思想，因為成百上千個驅動程式將依賴於它。</p><p>當時，反過來也是成立的：如果一個想法更可能被看到，或者它反覆出現，或者它以顯著的方式影響系統的結構，那麼這個想法就是重要的。</p><p>類似的，不重要的事情不應該被強調。應該儘可能將其隱藏起來，它們不應該經常被遇見，它們也不應該影響系統的結構。</p><h2 id="_21-4-常見的錯誤" tabindex="-1"><a class="header-anchor" href="#_21-4-常見的錯誤"><span>21.4 常見的錯誤</span></a></h2>',9),m=e("p",null,"第二種錯誤是未能認識到某些事情是重要的。這種錯誤會導致重要的資訊被隱藏，或者重要的功能不可用，導致開發人員必須不斷重新建立它。這種錯誤的後果是開發人員的生產力降低，並導致“未知的未知”問題。",-1),x=e("h2",{id:"_21-5-開啟思路",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_21-5-開啟思路"},[e("span",null,"21.5 開啟思路")])],-1),k=e("p",null,"關注重要事情的想法也適用於軟體設計之外的其它領域。在技術寫作中，使文件易於閱讀的最佳方法是先確定幾個關鍵概念，並圍繞它們組織文件的其餘部分。討論系統的細節時，將它們與總體概念聯絡起來也會有所幫助。",-1),v=e("p",null,"關注重要事情也是一種偉大的生活哲學：確定對你最重要的事情，儘可能將你的精力花在這些事情上。不要把時間浪費在您認為不重要或無益的事情上。",-1),b=e("p",null,"“好的品味”這個詞描述的是能夠區分什麼是重要的和什麼是不重要的能力。擁有良好的品味是成為一名優秀軟體設計師的重要部分。",-1);function w(g,z){const l=s("RouteLink");return c(),_("div",null,[i,r,e("p",null,[t("前面章節中的許多想法本質上都是關於區分什麼是重要的和什麼是不重要的。例如，這就是我們在設計抽象時所做的。模組的介面反映了對模組的使用者來說重要的事情，而對模組的使用者來說不重要的事情應該隱藏到實現中。在選擇變數名稱時，目標是挑選幾個單詞來最好地傳達變數的資訊，並在名稱中使用這些單詞，這些是變數最重要的方面。如果效能對於一個模組真的很重要，那麼該模組的設計就應該圍繞實現效能目標而構建。在"),a(l,{to:"/zh-tw/ch20.html"},{default:n(()=>[t("第 20.4 節")]),_:1}),t("的例子中，這意味著找到一個性能關鍵路徑上的方法呼叫和特殊情況檢查儘可能少的設計，同時仍然保持整潔、簡單和顯而易見。")]),p,e("p",null,[t("有時候重要的事情來自系統的外部約束，比如"),a(l,{to:"/zh-tw/ch20.html"},{default:n(()=>[t("第 20.4 節")]),_:1}),t("中的效能。更多的時候，設計者必須自己確定什麼是重要的。即使有外部約束，設計者也必須弄清楚在實現這些約束時最重要的是什麼。")]),e("p",null,[t("要決定什麼是重要的，可以尋找槓桿點，也就是一個解決方案可以解決許多其他問題的地方，或者知道一些資訊後，理解其他事情就容易多了的地方。例如，在"),a(l,{to:"/zh-tw/ch06.html"},{default:n(()=>[t("第 6.2 節")]),_:1}),t("關於如何儲存文字的討論中，用於插入和刪除字元範圍的通用介面可以解決許多問題，而專門的方法如 "),u,t(" 只能解決單個的問題。通用的介面提供了更大的槓桿。在文字類介面的層級上，重要的是文字需要被刪除，而不是介面是否在響應退格鍵時被呼叫。不變數是另一個槓桿點的例子：一旦為變數或結構確定了一個不變數，就可以預測該變數或結構在許多不同情況下的行為。")]),f,e("p",null,[t("在決定什麼是重要的時候，有兩種常見的錯誤。第一種錯誤是認為重要的東西太多。當這種情況發生時，不重要的事情會弄亂設計，增加複雜性和提高認知負荷。一個例子是方法的部分引數與大多數呼叫者無關。另一個例子是"),a(l,{to:"/zh-tw/ch04.html"},{default:n(()=>[t("第 4.7 節")]),_:1}),t("討論的 Java I/O 介面，它迫使開發人員瞭解緩衝和非緩衝 I/O 之間的區別，即使這個區別幾乎從來都不是重要的（開發人員幾乎總是想要緩衝，並且不想浪費時間來明確要求它）。將太多的東西視為重要的往往會導致淺的類。")]),m,x,k,v,b])}const V=h(d,[["render",w],["__file","ch21.html.vue"]]),B=JSON.parse('{"path":"/zh-tw/ch21.html","title":"第 21 章 決定什麼是重要的","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"21.1 如何決定什麼是重要的？","slug":"_21-1-如何決定什麼是重要的","link":"#_21-1-如何決定什麼是重要的","children":[]},{"level":2,"title":"21.2 最小化重要的事情","slug":"_21-2-最小化重要的事情","link":"#_21-2-最小化重要的事情","children":[]},{"level":2,"title":"21.3 如何強調重要的事情","slug":"_21-3-如何強調重要的事情","link":"#_21-3-如何強調重要的事情","children":[]},{"level":2,"title":"21.4 常見的錯誤","slug":"_21-4-常見的錯誤","link":"#_21-4-常見的錯誤","children":[]},{"level":2,"title":"21.5 開啟思路","slug":"_21-5-開啟思路","link":"#_21-5-開啟思路","children":[]}],"git":{"updatedTime":1712631015000},"filePathRelative":"zh-tw/ch21.md"}');export{V as comp,B as data};
