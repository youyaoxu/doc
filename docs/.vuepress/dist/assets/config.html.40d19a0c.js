import{_ as n,c as s}from"./app.9a1ef8a2.js";const a={},p=s(`<h1 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u672C\u914D\u7F6E</h1><p>\u5728\u5F00\u59CB\u4F7F\u7528 <code>Webpack</code> \u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9 <code>Webpack</code> \u7684\u914D\u7F6E\u6709\u4E00\u5B9A\u7684\u8BA4\u8BC6\u3002</p><h2 id="_5-\u5927\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_5-\u5927\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> 5 \u5927\u6838\u5FC3\u6982\u5FF5</h2><ol><li>entry\uFF08\u5165\u53E3\uFF09</li></ol><p>\u6307\u793A Webpack \u4ECE\u54EA\u4E2A\u6587\u4EF6\u5F00\u59CB\u6253\u5305</p><ol start="2"><li>output\uFF08\u8F93\u51FA\uFF09</li></ol><p>\u6307\u793A Webpack \u6253\u5305\u5B8C\u7684\u6587\u4EF6\u8F93\u51FA\u5230\u54EA\u91CC\u53BB\uFF0C\u5982\u4F55\u547D\u540D\u7B49</p><ol start="3"><li>loader\uFF08\u52A0\u8F7D\u5668\uFF09</li></ol><p>webpack \u672C\u8EAB\u53EA\u80FD\u5904\u7406 js\u3001json \u7B49\u8D44\u6E90\uFF0C\u5176\u4ED6\u8D44\u6E90\u9700\u8981\u501F\u52A9 loader\uFF0CWebpack \u624D\u80FD\u89E3\u6790</p><ol start="4"><li>plugins\uFF08\u63D2\u4EF6\uFF09</li></ol><p>\u6269\u5C55 Webpack \u7684\u529F\u80FD</p><ol start="5"><li>mode\uFF08\u6A21\u5F0F\uFF09</li></ol><p>\u4E3B\u8981\u7531\u4E24\u79CD\u6A21\u5F0F\uFF1A</p><ul><li>\u5F00\u53D1\u6A21\u5F0F\uFF1Adevelopment</li><li>\u751F\u4EA7\u6A21\u5F0F\uFF1Aproduction</li></ul><h2 id="\u51C6\u5907-webpack-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907-webpack-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u51C6\u5907 Webpack \u914D\u7F6E\u6587\u4EF6</h2><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA\u6587\u4EF6\uFF1A<code>webpack.config.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5165\u53E3</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8F93\u51FA</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u52A0\u8F7D\u5668</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u63D2\u4EF6</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6A21\u5F0F</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Webpack \u662F\u57FA\u4E8E Node.js \u8FD0\u884C\u7684\uFF0C\u6240\u4EE5\u91C7\u7528 Common.js \u6A21\u5757\u5316\u89C4\u8303</p><h2 id="\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</h2><ol><li>\u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Node.js\u7684\u6838\u5FC3\u6A21\u5757\uFF0C\u4E13\u95E8\u7528\u6765\u5904\u7406\u6587\u4EF6\u8DEF\u5F84</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5165\u53E3</span>
  <span class="token comment">// \u76F8\u5BF9\u8DEF\u5F84\u548C\u7EDD\u5BF9\u8DEF\u5F84\u90FD\u884C</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8F93\u51FA</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// path: \u6587\u4EF6\u8F93\u51FA\u76EE\u5F55\uFF0C\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84</span>
    <span class="token comment">// path.resolve()\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u7EDD\u5BF9\u8DEF\u5F84</span>
    <span class="token comment">// __dirname \u5F53\u524D\u6587\u4EF6\u7684\u6587\u4EF6\u5939\u7EDD\u5BF9\u8DEF\u5F84</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// filename: \u8F93\u51FA\u6587\u4EF6\u540D</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u52A0\u8F7D\u5668</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u63D2\u4EF6</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6A21\u5F0F</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F00\u53D1\u6A21\u5F0F</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ol start="2"><li>\u8FD0\u884C\u6307\u4EE4</li></ol><div class="language-text ext-text"><pre class="language-text"><code>npx webpack
</code></pre></div><p>\u6B64\u65F6\u529F\u80FD\u548C\u4E4B\u524D\u4E00\u6837\uFF0C\u4E5F\u4E0D\u80FD\u5904\u7406\u6837\u5F0F\u8D44\u6E90</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>Webpack \u5C06\u6765\u90FD\u901A\u8FC7 <code>webpack.config.js</code> \u6587\u4EF6\u8FDB\u884C\u914D\u7F6E\uFF0C\u6765\u589E\u5F3A Webpack \u7684\u529F\u80FD</p><p>\u6211\u4EEC\u540E\u9762\u4F1A\u4EE5\u4E24\u4E2A\u6A21\u5F0F\u6765\u5206\u522B\u642D\u5EFA Webpack \u7684\u914D\u7F6E\uFF0C\u5148\u8FDB\u884C\u5F00\u53D1\u6A21\u5F0F\uFF0C\u518D\u5B8C\u6210\u751F\u4EA7\u6A21\u5F0F</p>`,27);function e(t,o){return p}var c=n(a,[["render",e],["__file","config.html.vue"]]);export{c as default};
