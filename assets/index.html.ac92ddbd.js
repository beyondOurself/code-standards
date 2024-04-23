import{b as p,o as c,c as i,a as s,e as a,w as e,F as u,g as n,h as o}from"./app.ba3fd69d.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const k={},b=s("h1",{id:"\u81EA\u5B9A\u4E49",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49","aria-hidden":"true"},"#"),n(" \u81EA\u5B9A\u4E49")],-1),m=s("blockquote",null,null,-1),h=s("h1",{id:"\u6982\u89C8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6982\u89C8","aria-hidden":"true"},"#"),n(" \u6982\u89C8 \u{1F4CB}")],-1),g={class:"table-of-contents"},v=n("\u57FA\u51C6\u65B9\u6848"),y=n("\u5B89\u88C5"),_=n("\u81EA\u52A8\u5316"),f=n("\u57FA\u7840\u914D\u7F6E"),x=n("lint-staged \u914D\u7F6E\u5177\u4F53\u5E73\u53F0"),j=n("eslint \u53C2\u8003\u65B9\u6848"),w=n("Javascript Style"),S=n("vue"),C=n("react"),V=o(`<hr><h1 id="\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5185\u5BB9" aria-hidden="true">#</a> \u5185\u5BB9 \u{1F479}</h1><h2 id="\u57FA\u51C6\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u57FA\u51C6\u65B9\u6848" aria-hidden="true">#</a> \u57FA\u51C6\u65B9\u6848</h2><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><h4 id="\u57FA\u7840\u5305" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u5305" aria-hidden="true">#</a> \u57FA\u7840\u5305</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
pnpm  add <span class="token operator">-</span><span class="token constant">D</span> prettier  eslint  eslint<span class="token operator">-</span>config<span class="token operator">-</span>prettier eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>prettier husky lint<span class="token operator">-</span>staged eslint<span class="token operator">-</span>config<span class="token operator">-</span>airbnb<span class="token operator">-</span>base  eslint<span class="token operator">-</span>plugin<span class="token operator">-</span><span class="token keyword">import</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u81EA\u52A8\u5316" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5316" aria-hidden="true">#</a> \u81EA\u52A8\u5316</h3><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><ul><li>\u914D\u7F6E\u547D\u540D\uFF0C\u6267\u884C parepare \u751F\u6210 husky</li></ul>`,9),L=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"language-javascript"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token string-property property"},'"scripts"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token string-property property"},'"prepare"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"husky install"'),n(`
  `),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br")])],-1),q=o(`<ul><li>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4, \u751F\u6210 git hooks pre-commit</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx husky add <span class="token punctuation">.</span>husky<span class="token operator">/</span>pre<span class="token operator">-</span>commit <span class="token string">&quot;npx lint-staged&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u57FA\u7840\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u7840\u914D\u7F6E</h3><h3 id="lint-staged-\u914D\u7F6E\u5177\u4F53\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#lint-staged-\u914D\u7F6E\u5177\u4F53\u5E73\u53F0" aria-hidden="true">#</a> lint-staged \u914D\u7F6E\u5177\u4F53\u5E73\u53F0</h3><ul><li>\u65B0\u589E\u6587\u4EF6 lint-staged.config.js \u8FDB\u884C\u914D\u7F6E</li></ul>`,5),F=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"language-javascript"},[s("code",null,[n("  module"),s("span",{class:"token punctuation"},"."),n("exports "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token string-property property"},'"src/**"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
        `),s("span",{class:"token string"},'"eslint --fix"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token string"},'"git add"'),n(`
    `),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br")])],-1),G=s("h4",{id:"prettier-\u914D\u7F6E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#prettier-\u914D\u7F6E","aria-hidden":"true"},"#"),n(" prettier \u914D\u7F6E")],-1),I=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"language-javascript"},[s("code",null,[n("module"),s("span",{class:"token punctuation"},"."),n("exports "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token literal-property property"},"printWidth"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"120"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"//\u4E00\u884C\u7684\u5B57\u7B26\u6570\uFF0C\u5982\u679C\u8D85\u8FC7\u4F1A\u8FDB\u884C\u6362\u884C\uFF0C\u9ED8\u8BA4\u4E3A80,\u6700\u5927\u884C\u957F\u89C4\u5219\u901A\u5E38\u8BBE\u7F6E\u4E3A100\u6216120"),n(`
    `),s("span",{class:"token literal-property property"},"tabWidth"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"//\u4E00\u4E2Atab\u4EE3\u8868\u51E0\u4E2A\u7A7A\u683C\u6570\uFF0C\u9ED8\u8BA4\u4E3A2 "),n(`
    `),s("span",{class:"token literal-property property"},"useTabs"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// \u7528\u5236\u8868\u7B26\u6765\u505A\u7F29\u8FDB \u9ED8\u8BA4 false "),n(`
    `),s("span",{class:"token literal-property property"},"semi"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// \u662F\u5426\u6253\u5370\u5206\u53F7 \u9ED8\u8BA4 true "),n(`
    `),s("span",{class:"token literal-property property"},"singleQuote"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),n(),s("span",{class:"token punctuation"},","),s("span",{class:"token comment"},"// \u662F\u5426\u4F7F\u7528\u5355\u5F15\u53F7 \u9ED8\u8BA4 false"),n(`
    `),s("span",{class:"token literal-property property"},"quoteProps"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'as-needed'"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// \u7ED9\u5BF9\u8C61\u5C5E\u6027\u52A0\u5F15\u53F7 \u9ED8\u8BA4 as-needed \u53EF\u9009 as-needed|consistent|preserve"),n(`
    `),s("span",{class:"token literal-property property"},"jsxSingleQuote"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// jsx \u662F\u5426\u4F7F\u7528\u5355\u5F15\u53F7 \u9ED8\u8BA4 false"),n(`
    `),s("span",{class:"token literal-property property"},"trailingComma"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'es5'"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// \u672B\u5C3E\u662F\u5426\u5E26\u9017\u53F7  \u9ED8\u8BA4 es5 \u53EF\u9009 es5|none|all"),n(`
    `),s("span",{class:"token literal-property property"},"bracketSpacing"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// \u5728\u5B57\u9762\u91CF\u5BF9\u8C61\u62EC\u53F7\u4E4B\u95F4\u52A0\u7A7A\u683C { foo: bar } \u9ED8\u8BA4true"),n(`
    `),s("span",{class:"token literal-property property"},"bracketSameLine"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},","),s("span",{class:"token comment"},"// html \u95ED\u5408\u6807\u7B7E\u7B26 > \u5355\u72EC \u4E00\u884C \u9ED8\u8BA4 false"),n(`
    `),s("span",{class:"token literal-property property"},"arrowParens"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'always'"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// \u5728 \u5355\u4E2A\u53C2\u6570 \u7684\u7BAD\u5934\u51FD\u6570 \u4E2D \u4F7F\u7528\u5C0F\u62EC\u53F7\u5305\u88F9\u53C2\u6570\u3002(x) => x \u9ED8\u8BA4 always \u53EF\u9009always|avoid"),n(`
    `),s("span",{class:"token literal-property property"},"rangeStart"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// \u6587\u4EF6\u5F00\u5934 \u7A7A\u767D\u5B57\u7B26  int "),n(`
    `),s("span",{class:"token literal-property property"},"rangeEnd"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"Infinity"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// \u6587\u4EF6\u7ED3\u5C3E \u7A7A\u767D\u5B57\u7B26  int "),n(`
    `),s("span",{class:"token literal-property property"},"proseWrap"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'always'"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// \u6587\u672C\u6362\u884C \u9ED8\u8BA4 preserve  \u53EF\u9009 always|never|preserve"),n(`
    `),s("span",{class:"token literal-property property"},"htmlWhitespaceSensitivity"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'css'"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// html \u7A7A\u683C\u654F\u611F\u5EA6 \u9ED8\u8BA4 css \u53EF\u9009 css|strict|ignore"),n(`
    `),s("span",{class:"token literal-property property"},"vueIndentScriptAndStyle"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// \u662F\u5426\u7F29\u8FDBVue\u6587\u4EF6\u4E2D<script>\u548C<style>\u6807\u8BB0\u5185\u7684\u4EE3\u7801 \u9ED8\u8BA4 false"),n(`
    `),s("span",{class:"token literal-property property"},"endOfLine"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'lf'"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// \u884C\u7ED3\u675F\u7B26  \u9ED8\u8BA4 lf  \u53EF\u9009 lf|crlf|cr|auto"),n(`
    `),s("span",{class:"token literal-property property"},"embeddedLanguageFormatting"),s("span",{class:"token operator"},":"),s("span",{class:"token string"},"'auto'"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// \u662F\u5426\u683C\u5F0F\u5316\u5D4C\u5165\u7684\u4EE3\u7801 \u9ED8\u8BA4 auton \u53EF\u9009 auto | off"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br")])],-1),N=s("h4",{id:"eslint-\u914D\u7F6E\u547D\u540D",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#eslint-\u914D\u7F6E\u547D\u540D","aria-hidden":"true"},"#"),n(" eslint \u914D\u7F6E\u547D\u540D")],-1),T=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"language-javascript"},[s("code",null,[n("module"),s("span",{class:"token punctuation"},"."),n("exports "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token literal-property property"},"root"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token literal-property property"},"parserOptions"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token literal-property property"},"sourceType"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'module'"),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token literal-property property"},"env"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token literal-property property"},"browser"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token literal-property property"},"node"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token literal-property property"},"es6"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token comment"},'// xxx \u914D\u7F6E\u5177\u4F53\u5E73\u53F0  \u4F8B\u5982:  "plugin:react/recommended",'),n(`
  `),s("span",{class:"token keyword"},"extends"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},"'airbnb-base'"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token string"},"'xxx'"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token string"},"'plugin:prettier/recommended'"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token literal-property property"},"plugins"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},'"prettier"'),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token literal-property property"},"rules"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token string-property property"},'"prettier/prettier"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"error"'),n(),s("span",{class:"token comment"},"// \u5F00\u542F\u89C4\u5219"),n(`
  `),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br")])],-1),W=s("h4",{id:"eslint-\u5FFD\u7565\u6587\u4EF6\u914D\u7F6E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#eslint-\u5FFD\u7565\u6587\u4EF6\u914D\u7F6E","aria-hidden":"true"},"#"),n(" eslint \u5FFD\u7565\u6587\u4EF6\u914D\u7F6E")],-1),B=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"language-javascript"},[s("code",null,[n("build"),s("span",{class:"token comment"},`/*.js
src/assets
public
dist
node_modules
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br")])],-1),O=o(`<h4 id="vue-\u6216-react" tabindex="-1"><a class="header-anchor" href="#vue-\u6216-react" aria-hidden="true">#</a> Vue \u6216 React</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>react
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>react eslint \u914D\u7F6E</li></ul>`,3),R=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"language-javascript"},[s("code",null,[n("  "),s("span",{class:"token string-property property"},'"extends"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
        `),s("span",{class:"token string"},'"plugin:react/recommended"'),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
     `),s("span",{class:"token string-property property"},'"parserOptions"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token string-property property"},'"ecmaFeatures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
            `),s("span",{class:"token string-property property"},'"jsx"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token string-property property"},'"ecmaVersion"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"latest"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token string-property property"},'"sourceType"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"module"'),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token string-property property"},'"plugins"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
        `),s("span",{class:"token string"},'"react"'),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br")])],-1),E=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>vue
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>vue eslint \u914D\u7F6E</li></ul>`,2),J=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"language-javascript"},[s("code",null,[n("  "),s("span",{class:"token string-property property"},'"extends"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
        `),s("span",{class:"token string"},'"plugin:vue/recommended"'),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token string-property property"},'"plugins"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
        `),s("span",{class:"token string"},'"vue"'),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br")])],-1),P=o(`<h2 id="eslint-\u53C2\u8003\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#eslint-\u53C2\u8003\u65B9\u6848" aria-hidden="true">#</a> eslint \u53C2\u8003\u65B9\u6848</h2><h3 id="javascript-style" tabindex="-1"><a class="header-anchor" href="#javascript-style" aria-hidden="true">#</a> Javascript Style</h3><h4 id="\u65B9\u68481" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68481" aria-hidden="true">#</a> \u65B9\u68481</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>eslint<span class="token operator">-</span>config<span class="token operator">-</span>o2team

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u65B9\u68482" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68482" aria-hidden="true">#</a> \u65B9\u68482</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>eslint<span class="token operator">-</span>config<span class="token operator">-</span>airbnb<span class="token operator">-</span>base

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h3><h4 id="\u65B9\u68481-1" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68481-1" aria-hidden="true">#</a> \u65B9\u68481</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>eslint<span class="token operator">-</span>config<span class="token operator">-</span>airbnb<span class="token operator">-</span>base <span class="token operator">+</span> eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>vue

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> react</h3><h4 id="\u65B9\u68481-2" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68481-2" aria-hidden="true">#</a> \u65B9\u68481</h4><ul><li>\u5DF2\u7ECF\u5305\u542Breact</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>eslint<span class="token operator">-</span>config<span class="token operator">-</span>airbnb 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,13);function Q(A,D){const t=p("RouterLink"),r=p("CodeGroupItem"),l=p("CodeGroup");return c(),i(u,null,[b,m,h,s("nav",g,[s("ul",null,[s("li",null,[a(t,{to:"#\u57FA\u51C6\u65B9\u6848"},{default:e(()=>[v]),_:1}),s("ul",null,[s("li",null,[a(t,{to:"#\u5B89\u88C5"},{default:e(()=>[y]),_:1})]),s("li",null,[a(t,{to:"#\u81EA\u52A8\u5316"},{default:e(()=>[_]),_:1})]),s("li",null,[a(t,{to:"#\u57FA\u7840\u914D\u7F6E"},{default:e(()=>[f]),_:1})]),s("li",null,[a(t,{to:"#lint-staged-\u914D\u7F6E\u5177\u4F53\u5E73\u53F0"},{default:e(()=>[x]),_:1})])])]),s("li",null,[a(t,{to:"#eslint-\u53C2\u8003\u65B9\u6848"},{default:e(()=>[j]),_:1}),s("ul",null,[s("li",null,[a(t,{to:"#javascript-style"},{default:e(()=>[w]),_:1})]),s("li",null,[a(t,{to:"#vue"},{default:e(()=>[S]),_:1})]),s("li",null,[a(t,{to:"#react"},{default:e(()=>[C]),_:1})])])])])]),V,a(l,null,{default:e(()=>[a(r,{title:"package.json"},{default:e(()=>[L]),_:1})]),_:1}),q,a(l,null,{default:e(()=>[a(r,{title:"lint-staged.config.js"},{default:e(()=>[F]),_:1})]),_:1}),G,a(l,null,{default:e(()=>[a(r,{title:".prettierrc.js"},{default:e(()=>[I]),_:1})]),_:1}),N,a(l,null,{default:e(()=>[a(r,{title:".eslintrc.js"},{default:e(()=>[T]),_:1})]),_:1}),W,a(l,null,{default:e(()=>[a(r,{title:".eslintignore"},{default:e(()=>[B]),_:1})]),_:1}),O,a(l,null,{default:e(()=>[a(r,{title:"eslintrc.js"},{default:e(()=>[R]),_:1})]),_:1}),E,a(l,null,{default:e(()=>[a(r,{title:"eslintrc.js"},{default:e(()=>[J]),_:1})]),_:1}),P],64)}var K=d(k,[["render",Q]]);export{K as default};