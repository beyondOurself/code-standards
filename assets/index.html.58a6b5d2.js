import{b as t,o,c as l,a as n,e as p,w as e,F as r,g as s,h as c}from"./app.ba3fd69d.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},k=n("h1",{id:"react-jsx-\u4E66\u5199\u89C4\u8303",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-jsx-\u4E66\u5199\u89C4\u8303","aria-hidden":"true"},"#"),s(" React&JSX \u4E66\u5199\u89C4\u8303")],-1),b=n("blockquote",null,[n("p",null,"\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4\u524D\u7AEF\u5F00\u53D1\u89C4\u8303;")],-1),m=n("h1",{id:"\u6982\u89C8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6982\u89C8","aria-hidden":"true"},"#"),s(" \u6982\u89C8 \u{1F4CB}")],-1),d={class:"table-of-contents"},g=s("\u57FA\u672C\u89C4\u5219"),h=s("\u547D\u540D\u89C4\u8303"),v=s("Class Component VS Functional Component"),f=s("\u5BF9\u9F50"),y=s("\u7A7A\u683C"),j=s("\u5F15\u53F7"),x=s("\u5C5E\u6027"),_=s("Refs"),w=s("\u5706\u62EC\u53F7"),C=s("\u6807\u7B7E"),F=s("\u65B9\u6CD5"),S=s("Hooks \u4E66\u5199\u89C4\u8303"),R=c(`<hr><h1 id="\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5185\u5BB9" aria-hidden="true">#</a> \u5185\u5BB9 \u{1F479}</h1><h2 id="\u57FA\u672C\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u89C4\u5219" aria-hidden="true">#</a> \u57FA\u672C\u89C4\u5219</h2><ul><li>\u6BCF\u4E2A\u6587\u4EF6\u53EA\u5305\u542B\u4E00\u4E2A React \u7C7B\u7EC4\u4EF6 <ul><li>\u4F46\u662F\u591A\u4E2A\u51FD\u6570\u5F0F\u7EC4\u4EF6\u53EF\u4EE5\u653E\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0Ceslint: react/no-multi-comp</li></ul></li><li>\u4E00\u822C\u4F7F\u7528 JSX \u8BED\u6CD5</li><li>\u9664\u975E\u662F\u5728\u975E JSX \u6587\u4EF6\u4E2D\u521D\u59CB\u5316\u5E94\u7528\uFF0C\u5426\u5219\u4E0D\u8981\u4F7F\u7528 React.createElement</li></ul><h2 id="\u547D\u540D\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u89C4\u8303" aria-hidden="true">#</a> \u547D\u540D\u89C4\u8303</h2><ul><li>\u7EC4\u4EF6\u6587\u4EF6\u6269\u5C55\u540D</li></ul><p>\u5982\u679C\u4F7F\u7528 JavaScript\uFF0C\u5219\u6587\u4EF6\u6269\u5C55\u540D\u4E3A .js\uFF1B\u5982\u679C\u4F7F\u7528 TypeScript\uFF0C\u5219\u6587\u4EF6\u6269\u5C55\u540D\u4E3A .tsx</p><ul><li>\u7EC4\u4EF6\u6587\u4EF6\u540D</li></ul><p>\u5982\u679C\u662F\u7EC4\u4EF6\u6587\u4EF6\uFF0C\u5219\u4F7F\u7528 PascalCase\uFF0C\u5982 MyComponent.js</p><p>\u5982\u679C\u7EC4\u4EF6\u662F\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5219\u7EC4\u4EF6\u4E3B\u5165\u53E3\u547D\u540D\u4E3A index\uFF0C\u5982 index.js</p><ul><li>\u5F15\u7528\u547D\u540D</li></ul><p>React \u7EC4\u4EF6\u4F7F\u7528 PascalCase\uFF0C\u7EC4\u4EF6\u5B9E\u4F8B\u4F7F\u7528 CamelCase\uFF0Ceslint: react/jsx-pascal-case</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> reservationCard <span class="token keyword">from</span> <span class="token string">&#39;./ReservationCard&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> ReservationCard <span class="token keyword">from</span> <span class="token string">&#39;./ReservationCard&#39;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> ReservationItem <span class="token operator">=</span> <span class="token operator">&lt;</span>ReservationCard <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> reservationItem <span class="token operator">=</span> <span class="token operator">&lt;</span>ReservationCard <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>\u7EC4\u4EF6\u547D\u540D</li></ul><p>\u4F7F\u7528\u6587\u4EF6\u540D\u4F5C\u4E3A\u7EC4\u4EF6\u540D\u5B57\uFF0C\u4F8B\u5982, ReservationCard.js \u5E94\u8BE5\u5305\u542B\u540D\u4E3A ReservationCard \u7684\u5F15\u7528\uFF0C\u7136\u800C\u5BF9\u4E8E\u6587\u4EF6\u5939\u4E2D\u7684\u6839\u7EC4\u4EF6, \u4F7F\u7528 index.js \u4F5C\u4E3A\u6587\u4EF6\u540D\uFF0C\u4F7F\u7528\u6587\u4EF6\u5939\u7684\u540D\u5B57\u4F5C\u4E3A\u7EC4\u4EF6\u7684\u540D\u5B57</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">&#39;./Footer/Footer&#39;</span>

<span class="token comment">// bad</span>
<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">&#39;./Footer/index&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">&#39;./Footer&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u7EC4\u4EF6\u5C5E\u6027\u540D</li></ul><p>React DOM \u4F7F\u7528\u5C0F\u9A7C\u5CF0\u5F0F\u547D\u540D\u6CD5\u6765\u5B9A\u4E49\u5C5E\u6027\u7684\u540D\u79F0\uFF0C\u800C\u4E0D\u4F7F\u7528 HTML \u5C5E\u6027\u540D\u79F0\u7684\u547D\u540D\u7EA6\u5B9A\uFF0C\u4F8B\u5982</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handler<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="class-component-vs-functional-component" tabindex="-1"><a class="header-anchor" href="#class-component-vs-functional-component" aria-hidden="true">#</a> Class Component VS Functional Component</h2><p>\u53EA\u5141\u8BB8\u4F7F\u7528 Class Component \u548C Functional Component \u4E24\u79CD\u5F62\u6001\u6765\u4E66\u5199\u7EC4\u4EF6\uFF0C\u5EFA\u8BAE\u5C3D\u91CF\u4F7F\u7528\u51FD\u6570\u5F0F\u7EC4\u4EF6\u914D\u5408 Hooks \u6765\u8FDB\u884C\u5F00\u53D1</p><h2 id="\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u9F50" aria-hidden="true">#</a> \u5BF9\u9F50</h2><p>\u9075\u5FAA\u4EE5\u4E0BJSX\u8BED\u6CD5\u7684\u5BF9\u9F50\u98CE\u683C\uFF0Ceslint: react/jsx-closing-bracket-location</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Foo superLongParam<span class="token operator">=</span><span class="token string">&#39;bar&#39;</span>
     anotherSuperLongParam<span class="token operator">=</span><span class="token string">&#39;baz&#39;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Foo
  superLongParam<span class="token operator">=</span><span class="token string">&#39;bar&#39;</span>
  anotherSuperLongParam<span class="token operator">=</span><span class="token string">&#39;baz&#39;</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// if props fit in one line then keep it on the same line</span>
<span class="token operator">&lt;</span>Foo bar<span class="token operator">=</span><span class="token string">&#39;bar&#39;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// children get indented normally</span>
<span class="token operator">&lt;</span>Foo
  superLongParam<span class="token operator">=</span><span class="token string">&#39;bar&#39;</span>
  anotherSuperLongParam<span class="token operator">=</span><span class="token string">&#39;baz&#39;</span>
<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Quux <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Foo<span class="token operator">&gt;</span>

<span class="token comment">// bad</span>
<span class="token punctuation">{</span>showButton <span class="token operator">&amp;&amp;</span>
  <span class="token operator">&lt;</span>Button <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token punctuation">{</span>
  showButton <span class="token operator">&amp;&amp;</span>
    <span class="token operator">&lt;</span>Button <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token punctuation">{</span>showButton <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Button <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token punctuation">{</span>showButton <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>Button <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u683C" aria-hidden="true">#</a> \u7A7A\u683C</h2><ul><li>\u81EA\u95ED\u5408\u7684\u6807\u7B7E\u524D\u8981\u52A0\u4E00\u4E2A\u7A7A\u683C\uFF0Ceslint: no-multi-spaces, react/jsx-tag-spacing</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Foo<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// very bad</span>
<span class="token operator">&lt;</span>Foo                 <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Foo
 <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Foo <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u4E0D\u8981\u5728 JSX \u7684\u82B1\u62EC\u53F7\u91CC\u8FB9\u52A0\u7A7A\u683C\uFF0Ceslint: react/jsx-curly-spacing</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Foo bar<span class="token operator">=</span><span class="token punctuation">{</span> baz <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Foo bar<span class="token operator">=</span><span class="token punctuation">{</span>baz<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5F15\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5F15\u53F7" aria-hidden="true">#</a> \u5F15\u53F7</h2><p>JSX \u5C5E\u6027\u8981\u4F7F\u7528\u5355\u5F15\u53F7\uFF0C\u4E0E\u5176\u4ED6\u666E\u901A JS \u4FDD\u6301\u4E00\u81F4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Foo bar<span class="token operator">=</span><span class="token string">&quot;bar&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Foo bar<span class="token operator">=</span><span class="token string">&#39;bar&#39;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Foo style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;20px&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Foo style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;20px&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><ul><li>\u5C5E\u6027\u540D\u4F7F\u7528 CamelCase</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Foo
  UserName<span class="token operator">=</span><span class="token string">&#39;hello&#39;</span>
  phone_number<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">12345678</span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Foo
  userName<span class="token operator">=</span><span class="token string">&#39;hello&#39;</span>
  phoneNumber<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">12345678</span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>\u5F53\u5C5E\u6027\u503C\u4E3Atrue\u65F6\u53EF\u4EE5\u7701\u7565\uFF0C eslint: react/jsx-boolean-value</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Foo
  hidden<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Foo
  hidden
<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Foo hidden <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u907F\u514D\u4F7F\u7528\u6570\u7EC4\u7684\u7D22\u5F15\u4F5C\u4E3A key \u5C5E\u6027\u503C, \u5EFA\u8BAE\u4F7F\u7528\u7A33\u5B9A\u7684ID\uFF0Ceslint: react/no-array-index-key</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u539F\u56E0\uFF1A\u4E0D\u4F7F\u7528\u7A33\u5B9A\u7684 ID \u4F1A\u5BF9\u6027\u80FD\u4EA7\u751F\u526F\u4F5C\u7528\u5E76\u4E14\u7EC4\u4EF6\u72B6\u6001\u4F1A\u51FA\u95EE\u9898\uFF0C\u662F\u4E00\u79CD\u53CD\u6A21\u5F0F</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">{</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token operator">&lt;</span>Todo
    <span class="token punctuation">{</span><span class="token operator">...</span>todo<span class="token punctuation">}</span>
    key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span>
  <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token punctuation">{</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Todo
    <span class="token punctuation">{</span><span class="token operator">...</span>todo<span class="token punctuation">}</span>
    key<span class="token operator">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
  <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>\u4E3A\u6240\u6709\u7684\u975E\u5FC5\u9700\u5C5E\u6027\u5B9A\u4E49\u4F7F\u7528 defaultProps \u660E\u786E\u7684\u9ED8\u8BA4\u503C</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token constant">SFC</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar<span class="token punctuation">,</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>foo<span class="token punctuation">}</span><span class="token punctuation">{</span>bar<span class="token punctuation">}</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
<span class="token constant">SFC</span><span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>node
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token constant">SFC</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar<span class="token punctuation">,</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>foo<span class="token punctuation">}</span><span class="token punctuation">{</span>bar<span class="token punctuation">}</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
<span class="token constant">SFC</span><span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>node
<span class="token punctuation">}</span>
<span class="token constant">SFC</span><span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2><p>\u907F\u514D\u4F7F\u7528\u5B57\u7B26\u4E32\u5F15\u7528\uFF0C\u8BF7\u4F7F\u7528\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u5F15\u7528\uFF0Ceslint: react/no-string-refs</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Foo
  ref<span class="token operator">=</span><span class="token string">&#39;myRef&#39;</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Foo
  ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">ref</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myRef <span class="token operator">=</span> ref <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u5706\u62EC\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5706\u62EC\u53F7" aria-hidden="true">#</a> \u5706\u62EC\u53F7</h2><p>\u5F53 JSX \u6807\u7B7E\u8D85\u8FC7\u4E00\u884C\u65F6\u4F7F\u7528\u5706\u62EC\u53F7\u5305\u88F9\uFF0C eslint: react/wrap-multilines</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token comment">// bad</span>
<span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>MyComponent className<span class="token operator">=</span><span class="token string">&#39;long body&#39;</span> foo<span class="token operator">=</span><span class="token string">&#39;bar&#39;</span><span class="token operator">&gt;</span>
           <span class="token operator">&lt;</span>MyChild <span class="token operator">/</span><span class="token operator">&gt;</span>
         <span class="token operator">&lt;</span><span class="token operator">/</span>MyComponent<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>MyComponent className<span class="token operator">=</span><span class="token string">&#39;long body&#39;</span> foo<span class="token operator">=</span><span class="token string">&#39;bar&#39;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>MyChild <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>MyComponent<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good, when single line</span>
<span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>hello<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>MyComponent<span class="token operator">&gt;</span><span class="token punctuation">{</span>body<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>MyComponent<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E" aria-hidden="true">#</a> \u6807\u7B7E</h2><ul><li>\u6CA1\u6709\u5B50\u5143\u7D20\u7684\u6807\u7B7E\u8BF7\u81EA\u95ED\u5408\uFF0Ceslint: react/self-closing-comp</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Foo className<span class="token operator">=</span><span class="token string">&#39;stuff&#39;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Foo<span class="token operator">&gt;</span>

<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Foo className<span class="token operator">=</span><span class="token string">&#39;stuff&#39;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u5982\u679C\u7EC4\u4EF6\u5305\u542B\u591A\u884C\u5C5E\u6027\uFF0C\u5728\u65B0\u7684\u4E00\u884C\u95ED\u5408\u6807\u7B7E\uFF0Ceslint: react/jsx-closing-bracket-location</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Foo
  bar<span class="token operator">=</span><span class="token string">&#39;bar&#39;</span>
  baz<span class="token operator">=</span><span class="token string">&#39;baz&#39;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Foo
  bar<span class="token operator">=</span><span class="token string">&#39;bar&#39;</span>
  baz<span class="token operator">=</span><span class="token string">&#39;baz&#39;</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h2><ul><li>\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u5305\u88F9\u672C\u5730\u53D8\u91CF</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ItemList</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>props<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>Item
          key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>key<span class="token punctuation">}</span>
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">doSomethingWith</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u7C7B\u7EC4\u4EF6\u7684\u5185\u90E8\u65B9\u6CD5\u4E0D\u8981\u4F7F\u7528\u4E0B\u5212\u7EBF\u524D\u7F00</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">extends</span> React<span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
  <span class="token function">_onClickSubmit</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do stuff</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// other stuff</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">extends</span> React<span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
  <span class="token function">onClickSubmit</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do stuff</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// other stuff</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li>\u786E\u4FDD\u5728 render \u65B9\u6CD5\u4E2D\u5B58\u5728\u8FD4\u56DE\u503C\uFF0Ceslint: require-render-return</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token operator">&lt;</span>div <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="hooks-\u4E66\u5199\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#hooks-\u4E66\u5199\u89C4\u8303" aria-hidden="true">#</a> Hooks \u4E66\u5199\u89C4\u8303</h2><ul><li><p>Hooks \u53EA\u80FD\u5E94\u7528\u4E8E\u51FD\u6570\u5F0F\u7EC4\u4EF6\u4E2D</p></li><li><p>\u53EA\u5728 React \u51FD\u6570\u6700\u9876\u5C42\u4F7F\u7528 Hooks</p></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4E0D\u8981\u5728\u5FAA\u73AF\uFF0C\u6761\u4EF6\u6216\u5D4C\u5957\u51FD\u6570\u4E2D\u8C03\u7528 Hook\uFF0C \u786E\u4FDD\u603B\u662F\u5728\u4F60\u7684 React \u51FD\u6570\u7684\u6700\u9876\u5C42\u8C03\u7528\u4ED6\u4EEC</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">a</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">persistForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;formData&#39;</span><span class="token punctuation">,</span> accountName<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>timer<span class="token punctuation">,</span> setTimer<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token comment">// main logic</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">a</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">persistForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;formData&#39;</span><span class="token punctuation">,</span> accountName<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>timer<span class="token punctuation">,</span> setTimer<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// main logic</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,64);function P(T,N){const a=t("RouterLink");return o(),l(r,null,[k,b,m,n("nav",d,[n("ul",null,[n("li",null,[p(a,{to:"#\u57FA\u672C\u89C4\u5219"},{default:e(()=>[g]),_:1})]),n("li",null,[p(a,{to:"#\u547D\u540D\u89C4\u8303"},{default:e(()=>[h]),_:1})]),n("li",null,[p(a,{to:"#class-component-vs-functional-component"},{default:e(()=>[v]),_:1})]),n("li",null,[p(a,{to:"#\u5BF9\u9F50"},{default:e(()=>[f]),_:1})]),n("li",null,[p(a,{to:"#\u7A7A\u683C"},{default:e(()=>[y]),_:1})]),n("li",null,[p(a,{to:"#\u5F15\u53F7"},{default:e(()=>[j]),_:1})]),n("li",null,[p(a,{to:"#\u5C5E\u6027"},{default:e(()=>[x]),_:1})]),n("li",null,[p(a,{to:"#refs"},{default:e(()=>[_]),_:1})]),n("li",null,[p(a,{to:"#\u5706\u62EC\u53F7"},{default:e(()=>[w]),_:1})]),n("li",null,[p(a,{to:"#\u6807\u7B7E"},{default:e(()=>[C]),_:1})]),n("li",null,[p(a,{to:"#\u65B9\u6CD5"},{default:e(()=>[F]),_:1})]),n("li",null,[p(a,{to:"#hooks-\u4E66\u5199\u89C4\u8303"},{default:e(()=>[S]),_:1})])])]),R],64)}var I=i(u,[["render",P]]);export{I as default};
