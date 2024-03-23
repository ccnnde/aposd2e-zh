import{_ as n}from"./00013-BT2rC0s8.js";import{_ as c}from"./00014-J4Dwak8Q.js";import{_ as i,r as o,o as r,c as d,a as e,b as t,w as p,d as a,e as l}from"./app-Bfw21gJU.js";const h={},u=e("h1",{id:"第-5-章-資訊隱藏和資訊洩露",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第-5-章-資訊隱藏和資訊洩露"},[e("span",null,"第 5 章 資訊隱藏和資訊洩露")])],-1),T=l('<h2 id="_5-1-資訊隱藏" tabindex="-1"><a class="header-anchor" href="#_5-1-資訊隱藏"><span>5.1 資訊隱藏</span></a></h2><p>實現深模組最重要的技術之一是 <em>資訊隱藏</em>。該想法最早是由 David Parnas 在一篇經典的論文 [1] 中提出的。基本思想是每個模組應封裝一些知識，這些知識代表設計決策。該知識嵌入在模組的實現中，但不會出現在其介面中，因此其他模組不可見。</p><p>隱藏在模組中的資訊通常包含有關如何實現某種機制的詳細資訊。以下是一些資訊可能隱藏在模組中的示例：</p><ul><li>如何在 B 樹中儲存資訊，以及如何高效地訪問它。</li><li>如何識別檔案中每個邏輯塊相對應的物理磁碟塊。</li><li>如何實現 TCP 網路協議。</li><li>如何在多核處理器上排程執行緒。</li><li>如何解析 JSON 文件。</li></ul><p>隱藏的資訊包括與該機制相關的資料結構和演算法。它也可以包含較低層級的詳細資訊（例如頁面大小），還可以包含更抽象的較高層級的概念，例如假設大多數檔案是較小的。</p><p>資訊隱藏從兩個方面降低了複雜性。首先，它簡化了模組的介面。介面用更簡單、更抽象的方式反映了模組的功能，並隱藏了細節。這減少了使用該模組的開發人員的認知負荷。例如，使用 B 樹類的開發人員不需要考慮樹中節點的理想扇出，也不需要考慮如何保持樹的平衡。其次，資訊隱藏使系統更容易演化。如果隱藏了一段資訊，那麼在包含該資訊的模組之外就不存在對該資訊的依賴，因此與該資訊相關的設計變更將隻影響一個模組。例如，如果 TCP 協議發生了變化（例如為了引入一種新的擁塞控制機制），協議的實現就必須進行修改，但是在使用 TCP 傳送和接收資料的更高層級的程式碼中不需要進行任何修改。</p><p>設計新模組時，應仔細考慮可以在該模組中隱藏哪些資訊。如果可以隱藏更多資訊，您就應該能夠簡化模組的介面，這會使模組更深。</p><p>注意：透過宣告變數和方法為私有來隱藏類中的變數和方法與資訊隱藏不是同一回事。私有元素可以幫助隱藏資訊，因為它們使無法從類外部直接被訪問。但是，私有屬性仍可以透過公共方法（如 getter 和 setter 方法）公開。發生這種情況時，私有屬性的性質和用法就如同公有屬性一樣是公開的。</p><p>資訊隱藏的最佳形式是將資訊完全隱藏在模組中，從而使該資訊對模組的使用者無關且不可見。但是，部分資訊隱藏也具有價值。例如，如果一個特定的特性或資訊只被少數的類使用者所需要，並且它是透過不同的方法訪問的，所以在最常見的用例中它是不可見的，那麼這個資訊在大部分情況下也是隱藏的。與將資訊暴露給所有的類使用者相比, 這種方式會產生更少的依賴.</p><h2 id="_5-2-資訊洩露" tabindex="-1"><a class="header-anchor" href="#_5-2-資訊洩露"><span>5.2 資訊洩露</span></a></h2><p>資訊隱藏的反面是資訊洩露。當一個設計決策反映在多個模組中時，就會發生 <em>資訊洩露</em>。這在模組之間建立了依賴關係：對該設計決策的任何更改都將要求對所有涉及的模組進行更改。如果一條資訊反映在模組的介面中，則根據定義，該資訊已經洩露；因此，更簡單的介面往往與更好的資訊隱藏相關。但是，即使資訊未出現在模組的介面中，也可能會洩露資訊。假設兩個類都具有特定檔案格式的知識（也許一個類讀取該格式的檔案，而另一個類寫入它們）。即使兩個類都不在其介面中公開該資訊，它們都依賴於檔案格式：如果格式更改，則兩個類都將需要修改。像這樣的後門洩露比透過介面洩露更有害，因為它並不明顯。</p><p>資訊洩露是軟體設計中最重要的危險訊號之一。作為一個軟體設計師，你能學到的最好的技能之一就是對資訊洩露的高度敏感性。如果您在類之間遇到資訊洩露，請自問“我如何才能重新組織這些類，使這些特定的知識隻影響一個類?”如果受影響的類相對較少，並且與洩露的資訊緊密相關，那麼將它們合併到一個類中可能是有意義的。另一種可能的方法是從所有受影響的類中提取資訊，並建立一個只封裝這些資訊的新類。但是，這種方法只有在您能夠找到一個從細節中抽象出來的簡單介面時才有效。如果新類透過其介面公開了大部分知識，那麼它就不會提供太多的價值（您只是用透過介面的洩露替換了後門洩露）。</p><p><img src="'+n+'" alt=""> 危險訊號：資訊洩露 <img src="'+n+'" alt=""></p><p>當在多個地方使用相同的知識時，就會發生資訊洩露，例如兩個都理解特定型別檔案格式的不同類。</p><h2 id="_5-3-時間分解" tabindex="-1"><a class="header-anchor" href="#_5-3-時間分解"><span>5.3 時間分解</span></a></h2><p>資訊洩露的一個常見原因是我稱為 <em>時間分解</em> 的設計風格。在時間分解中，系統的結構對應於操作將發生的時間順序。考慮一個應用程式，該應用程式以特定格式讀取檔案，修改檔案內容，然後再次將檔案寫入。透過時間分解，該應用程式可能被分解為三個類：一個類用於讀取檔案，另一個類用於執行修改，還有一個類用於寫入新版本。檔案讀取和檔案寫入步驟都具有檔案格式相關的知識，這會導致資訊洩露。解決方案是將用於讀寫檔案的核心機制合併到一個類中。該類將在應用程式的讀取和寫入階段使用。因為在編寫程式碼時通常會想到操作執行的順序, 所以很容易陷入時間分解的陷阱。而且因為大多數設計決策會在應用程式的整個生命週期中的多個不同時刻表現出來，所以時間分解常常會導致資訊洩露。</p><p>順序通常很重要，因此它將反映在應用程式中的某個位置。但是，除非該結構與資訊隱藏保持一致（也許不同階段使用完全不同的資訊），否則不應將其反映在模組結構中。<strong>在設計模組時，應專注於執行每個任務所需的知識，而不是任務發生的順序</strong>。</p><p><img src="'+n+'" alt=""> 危險訊號：時間分解 <img src="'+n+'" alt=""></p><p>在時間分解中，執行順序反映在程式碼結構中：在不同時間發生的操作在不同的方法或類中。如果相同的知識在不同的執行點使用，它會在多個位置被編碼，從而導致資訊洩露。</p><h2 id="_5-4-示例-http-伺服器" tabindex="-1"><a class="header-anchor" href="#_5-4-示例-http-伺服器"><span>5.4 示例：HTTP 伺服器</span></a></h2><p>為了說明資訊隱藏中的問題，讓我們考慮由學生在軟體設計課程中實現 HTTP 協議的設計決策。看看他們做得好的事情和他們碰到問題的地方都是很有用的。</p><p>HTTP 是 Web 瀏覽器用來與 Web 伺服器通訊的機制。當用戶單擊 Web 瀏覽器中的連結或提交表單時，瀏覽器使用 HTTP 透過網路將請求傳送到 Web 伺服器。伺服器處理完請求後，會將響應傳送回瀏覽器。該響應通常包含要顯示的新網頁。HTTP 協議指定了請求和響應的格式，兩者均以文字形式表示。圖 5.1 顯示了描述表單提交的 HTTP 請求示例。要求課程中的學生實現一個或多個類，以使 Web 伺服器可以輕鬆地接收傳入的 HTTP 請求併發送響應。</p><p><img src="'+c+'" alt=""></p><p>圖 5.1：HTTP 協議中的 POST 請求包含透過 TCP 套接字傳送的文字。每個請求都包含一個初始行、一個由空行終止的標頭（Header）集合以及一個可選的請求體（Body）。初始行包含請求型別（POST 用於提交表單資料），指示操作（<code>/comments/create</code>）和可選引數（<code>photo_id</code> 的值為 246）的 URL，以及傳送方使用的 HTTP 協議版本。每個標頭行由一個名稱（例如 <code>Content-Length</code>）及其後的值組成。對於此請求，請求體包含了其他的引數（備註和優先順序）。</p><h2 id="_5-5-示例-太多的類" tabindex="-1"><a class="header-anchor" href="#_5-5-示例-太多的類"><span>5.5 示例：太多的類</span></a></h2><p>學生們最常犯的錯誤是將他們的程式碼分成大量的淺類，這導致了類之間的資訊洩露。有一個小組使用了兩個不同的類來接收 HTTP 請求：第一個類將來自網路連線的請求讀取為字串，第二個類解析該字串。這是時間分解的一個示例（“首先讀取請求，然後解析它”）。發生資訊洩露是因為不解析訊息就無法讀取 HTTP 請求。例如，<code>Content-Length</code> 標頭指定了請求體的長度，因此必須對標頭進行解析才能計算總的請求長度。結果，這兩個類都需要了解 HTTP 請求的大部分結構，並且解析程式碼在兩個類中都是重複的。這種方法也給呼叫方帶來了額外的複雜性，他們在接收請求時必須以特定的順序呼叫不同類中的兩個方法。</p><p>由於這些類共享大量資訊，因此最好將它們合併為一個同時處理請求讀取和解析的類。由於它將請求格式的所有知識隔離在一個類中，因此它提供了更好的資訊隱藏，並且還為呼叫者提供了一個更簡單的介面（只需要呼叫一個方法）。</p><p>此示例說明了一個軟體設計中的通用主題：<strong>通常可以透過使類稍大一些來改善資訊隱藏</strong>。這樣做的一個原因是將與特定功能相關的所有程式碼（例如解析 HTTP 請求）組合在一起，以便生成的類包含與該功能相關的所有內容。增加類大小的第二個原因是提高介面的級別。例如，與其為計算的三個步驟中的每一個步驟使用單獨的方法，不如使用一個方法來執行整個計算。這樣可以簡化介面。這兩個好處都適用於上一段的示例：組合類將與解析 HTTP 請求相關的所有程式碼組合在一起，並且用一個方法替換了原來的兩個外部可見的方法。組合後的類比原有的類都更深。</p>',28),_=l(`<h2 id="_5-6-示例-http-引數處理" tabindex="-1"><a class="header-anchor" href="#_5-6-示例-http-引數處理"><span>5.6 示例：HTTP 引數處理</span></a></h2><p>伺服器收到 HTTP 請求後，伺服器需要訪問該請求中的某些資訊。處理圖 5.1 中的請求的程式碼可能需要知道 <code>photo_id</code> 引數的值。引數可以在請求的第一行中指定（圖 5.1 中的 photo_id），有時也可以在請求體中指定（圖 5.1 中的備註和優先順序）。每個引數都有一個名稱和一個值。引數的值使用一種稱為 URL 編碼的特殊編碼。例如，在圖 5.1 中的備註值中，<code>+</code> 代表空格字元，<code>%21</code> 代表 <code>!</code>。為了處理請求，伺服器將需要某些引數的值，並且希望它們採用未編碼的形式。</p><p>關於引數處理，大多數學生專案都做出了兩個不錯的選擇。首先，他們認識到伺服器應用程式不在乎是否在標頭行或請求體指定了引數，因此他們對呼叫者隱藏了這種區別，並將兩個位置的引數合併在一起。其次，他們隱藏了 URL 編碼的知識：HTTP 解析器在將引數值返回到 Web 伺服器之前先對其進行解碼，以便圖 5.1 中的 comment 引數的值將返回 <code>What a cute baby!</code>，而不是 <code>What+a+cute+baby%21</code>。在這兩種情況下，資訊隱藏都使得 HTTP 模組的 API 更加簡單。</p><p>但是，大多數學生使用的返回引數的介面太淺，這導致丟失了資訊隱藏的機會。大多數專案使用 HTTPRequest 型別的物件來儲存已解析的 HTTP 請求，並且 HTTPRequest 類具有一種類似於以下方法的單個方法來返回引數：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>params<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>該方法不是返回單個引數，而是返回了內部用於儲存所有引數的對映（Map）的引用。這個方法是淺的，它公開了 HTTPRequest 類用來儲存引數的內部表示。對該表示的任何更改都將導致介面的更改，這將需要對所有呼叫者進行修改。在修改實現時，更改通常涉及關鍵資料結構表示的更改（例如為了提高效能）。因此，儘量避免暴露內部資料結構是很重要的。這種方法還導致了呼叫者的更多工作：呼叫者必須首先呼叫 getParams，然後必須呼叫另一個方法來從對映中檢索特定的引數。最後，呼叫者必須意識到他們不應該修改 getParams 返回的對映，因為這會影響 HTTPRequest 的內部狀態。</p><p>這是一個用於檢索引數值的更好的介面：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getIntParameter</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getParameter 以字串形式返回引數值。它提供了一個比上面的 getParams 更深的介面。更重要的是，它隱藏了引數的內部表示。getIntParameter 將引數的值從 HTTP 請求中的字串形式轉換為整數（例如，圖 5.1 中的 photo_id 引數）。這使呼叫者不必單獨請求字串到整數的轉換，並且對呼叫者隱藏了該機制。如果需要，可以定義更多其他資料型別的方法，例如 getDoubleParameter。（如果所需的引數不存在，或者無法將其轉換為所請求的型別，則所有這些方法都將引發異常；上面的程式碼中省略了異常宣告）。</p><h2 id="_5-7-示例-http-響應中的預設值" tabindex="-1"><a class="header-anchor" href="#_5-7-示例-http-響應中的預設值"><span>5.7 示例：HTTP 響應中的預設值</span></a></h2><p>HTTP 專案還必須提供對生成 HTTP 響應的支援。學生在該領域中最常見的錯誤是預設值不足。每個 HTTP 響應必須指定一個 HTTP 協議版本。有一個小組要求呼叫者在建立響應物件時明確指定此版本。但是，響應版本必須與請求物件中的版本相對應，並且在傳送響應時一定已經將請求作為引數傳遞（它指示將響應傳送到何處）。因此，HTTP 類自動提供響應版本更有意義。呼叫者不太可能知道要指定哪個版本，並且如果呼叫者確實指定了一個值，則可能導致 HTTP 庫和呼叫者之間的資訊洩露。HTTP 響應還包括一個日期標頭，用於指定傳送響應的時間，HTTP 庫也應該為此提供一個合理的預設值。</p><p>預設值說明了設計介面時應使常見情況儘可能簡單的原則。它們還是隱藏部分資訊的一個示例：在正常情況下，呼叫者無需知道預設值的存在。在極少數情況下，呼叫方需要覆蓋預設值，它才需要知道該值，並且可以呼叫特殊方法來對其進行修改。</p>`,12),m=l('<p><img src="'+n+'" alt=""> 危險訊號：過度暴露 <img src="'+n+'" alt=""></p><p>如果一個常用特性的 API 迫使使用者瞭解其他很少使用的特性，這將增加不需要這些很少使用的特性的使用者的認知負荷。</p><h2 id="_5-8-類內部的資訊隱藏" tabindex="-1"><a class="header-anchor" href="#_5-8-類內部的資訊隱藏"><span>5.8 類內部的資訊隱藏</span></a></h2><p>本章中的資訊隱藏示例著重於類的外部可見 API，但是資訊隱藏也可以應用於系統中的其他層級，比如類的內部。可以嘗試在類中設計私有方法，使得每個方法都封裝一些資訊或能力，並將其對類的其餘部分隱藏。此外，請儘量減少每個例項變數的使用位置數量。有些變數可能需要在整個類中廣泛使用，但是其他變數可能只需要在少數地方使用；如果可以減少使用變數的位置數量，則將消除類內的依賴關係並降低其複雜性。</p><h2 id="_5-9-做過頭了" tabindex="-1"><a class="header-anchor" href="#_5-9-做過頭了"><span>5.9 做過頭了</span></a></h2><p>僅當在其模組外部不需要被隱藏的資訊時，隱藏資訊才有意義。如果模組外部需要該資訊，則不得隱藏它。假設模組的效能受某些配置引數的影響，並且模組的不同用途將需要對引數進行不同的設定。在這種情況下，將引數暴露在模組的介面中很重要，以便可以對其進行適當的調整。作為軟體設計師，您的目標應該是最大程度地減少模組外部所需的資訊量。例如，如果模組可以自動調整其配置，那將比公開配置引數更好。但是，重要的是要識別模組外部需要哪些資訊，並確保將其公開。</p><h2 id="_5-10-結論" tabindex="-1"><a class="header-anchor" href="#_5-10-結論"><span>5.10 結論</span></a></h2><p>資訊隱藏和深模組密切相關。如果模組隱藏了很多資訊，則往往會增加模組提供的功能，同時還會減少其介面。這使得模組更深。相反，如果一個模組沒有隱藏太多資訊，則它要麼功能不多，要麼介面複雜。無論哪種方式，模組都是淺的。</p><p>將系統分解為模組時，請儘量不要受執行時操作順序的影響，否則將使您沿著時間分解的錯誤道路前進，這將導致資訊洩漏和淺模組。相反，請考慮執行應用程式的任務所需的不同知識，並在設計每個模組時封裝這些知識中的一個或幾個。這樣將產生一個乾淨和簡單的深模組設計。</p><p>[1] David Parnas，“關於將系統分解為模組的標準”，ACM 通訊，1972 年 12 月。</p>',10);function k(P,g){const s=o("RouteLink");return r(),d("div",null,[u,e("p",null,[t(s,{to:"/zh-tw/ch04.html"},{default:p(()=>[a("第 4 章")]),_:1}),a("認為模組應該是深的。本章及隨後的幾個章節討論了建立深模組的技術。")]),T,e("p",null,[a("當然，在考慮較大的類的概念時，也有可以走得太遠（例如整個應用程式都包在一個類裡）。"),t(s,{to:"/zh-tw/ch09.html"},{default:p(()=>[a("第 9 章")]),_:1}),a("將討論把程式碼分成多個較小的類的合理條件。")]),_,e("p",null,[a("只要有可能，類就應該“做正確的事”，而無需明確要求。預設值就是一個例子。"),t(s,{to:"/zh-tw/ch04.html"},{default:p(()=>[a("第 4.7 節")]),_:1}),a("的 Java I/O 示例以負面方式說明了這一點。大家都希望在檔案 I/O 中緩衝，以至於沒有人需要明確要求它，甚至不知道它的存在。I/O 類應該做正確的事情並自動提供它。最好的功能是那些您甚至不知道它們存在的功能。")]),m])}const f=i(h,[["render",k],["__file","ch05.html.vue"]]),x=JSON.parse('{"path":"/zh-tw/ch05.html","title":"第 5 章 資訊隱藏和資訊洩露","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"5.1 資訊隱藏","slug":"_5-1-資訊隱藏","link":"#_5-1-資訊隱藏","children":[]},{"level":2,"title":"5.2 資訊洩露","slug":"_5-2-資訊洩露","link":"#_5-2-資訊洩露","children":[]},{"level":2,"title":"5.3 時間分解","slug":"_5-3-時間分解","link":"#_5-3-時間分解","children":[]},{"level":2,"title":"5.4 示例：HTTP 伺服器","slug":"_5-4-示例-http-伺服器","link":"#_5-4-示例-http-伺服器","children":[]},{"level":2,"title":"5.5 示例：太多的類","slug":"_5-5-示例-太多的類","link":"#_5-5-示例-太多的類","children":[]},{"level":2,"title":"5.6 示例：HTTP 引數處理","slug":"_5-6-示例-http-引數處理","link":"#_5-6-示例-http-引數處理","children":[]},{"level":2,"title":"5.7 示例：HTTP 響應中的預設值","slug":"_5-7-示例-http-響應中的預設值","link":"#_5-7-示例-http-響應中的預設值","children":[]},{"level":2,"title":"5.8 類內部的資訊隱藏","slug":"_5-8-類內部的資訊隱藏","link":"#_5-8-類內部的資訊隱藏","children":[]},{"level":2,"title":"5.9 做過頭了","slug":"_5-9-做過頭了","link":"#_5-9-做過頭了","children":[]},{"level":2,"title":"5.10 結論","slug":"_5-10-結論","link":"#_5-10-結論","children":[]}],"git":{"updatedTime":1711179043000},"filePathRelative":"zh-tw/ch05.md"}');export{f as comp,x as data};
