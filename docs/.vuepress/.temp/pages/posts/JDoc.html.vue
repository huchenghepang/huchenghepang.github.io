<template><div><h1 id="jsdoc简介" tabindex="-1"><a class="header-anchor" href="#jsdoc简介"><span>JSDoc简介</span></a></h1>
<h3 id="_1-jsdoc-简介" tabindex="-1"><a class="header-anchor" href="#_1-jsdoc-简介"><span>1. JSDoc 简介</span></a></h3>
<p>JSDoc 是一种用于 JavaScript 注释的标准，可以帮助开发者描述代码的功能、参数、返回值等信息，并提供代码补全、参数提示和文档生成等功能。</p>
<h3 id="_2-jsdoc-注释格式" tabindex="-1"><a class="header-anchor" href="#_2-jsdoc-注释格式"><span>2. JSDoc 注释格式</span></a></h3>
<p>JSDoc 注释以 <code v-pre>/**</code> 开头和 <code v-pre>*/</code> 结尾，可以包含多行注释和标签。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 这是一个 JSDoc 注释的示例。</span>
<span class="line"> */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-常用标签" tabindex="-1"><a class="header-anchor" href="#_3-常用标签"><span>3. 常用标签</span></a></h3>
<h4 id="param" tabindex="-1"><a class="header-anchor" href="#param"><span><code v-pre>@param</code></span></a></h4>
<p>描述函数的参数。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 计算两个数字的和。</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span> - 第一个加数</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">b</span> - 第二个加数</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="return-或-returns" tabindex="-1"><a class="header-anchor" href="#return-或-returns"><span><code v-pre>@return</code> 或 <code v-pre>@returns</code></span></a></h4>
<p>描述函数的返回值。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 计算两个数字的和。</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span> - 第一个加数</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">b</span> - 第二个加数</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> - 两个数字的和</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span><code v-pre>@description</code></span></a></h4>
<p>描述函数或变量的功能。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 这是一个示例函数，用于计算两个数字的和。</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span><code v-pre>@example</code></span></a></h4>
<p>提供示例代码。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 计算两个数字的和。</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span> - 第一个加数</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">b</span> - 第二个加数</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> - 两个数字的和</span>
<span class="line"> * <span class="token keyword">@example</span></span>
<span class="line"> <span class="token example">* <span class="token code language-javascript"><span class="token comment">// 示例代码</span></span></span>
<span class="line"> * <span class="token code language-javascript"><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 5</span></span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typedef" tabindex="-1"><a class="header-anchor" href="#typedef"><span><code v-pre>@typedef</code></span></a></h4>
<p>定义自定义类型。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@typedef</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token class-name">Person</span></span>
<span class="line"> * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">name</span> - 人的姓名</span>
<span class="line"> * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">age</span> - 人的年龄</span>
<span class="line"> */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-数据类型" tabindex="-1"><a class="header-anchor" href="#_4-数据类型"><span>4. 数据类型</span></a></h3>
<p>JSDoc 支持各种数据类型，例如 <code v-pre>String</code>、<code v-pre>Number</code>、<code v-pre>Boolean</code>、<code v-pre>Array</code>、<code v-pre>Object</code>、<code v-pre>Function</code> 等。</p>
<h3 id="_5-生成文档" tabindex="-1"><a class="header-anchor" href="#_5-生成文档"><span>5. 生成文档</span></a></h3>
<p>您可以使用工具（如 JSDoc、ESDoc 等）根据 JSDoc 注释自动生成代码文档。例如，使用 JSDoc 可以通过运行命令 <code v-pre>jsdoc yourfile.js</code> 来生成 HTML 文档。</p>
<h3 id="_6-结束语" tabindex="-1"><a class="header-anchor" href="#_6-结束语"><span>6. 结束语</span></a></h3>
<p>通过 JSDoc 注释，您可以提高代码的可读性和可维护性，并生成清晰的代码文档，从而更方便地与他人合作和交流。</p>
<h3 id="附录" tabindex="-1"><a class="header-anchor" href="#附录"><span>附录</span></a></h3>
<h4 id="_1构造函数" tabindex="-1"><a class="header-anchor" href="#_1构造函数"><span>①构造函数</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Represents a book.</span>
<span class="line"> * <span class="token keyword">@constructor</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">title</span> - The title of the book.</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">author</span> - The author of the book.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Book</span><span class="token punctuation">(</span><span class="token parameter">title<span class="token punctuation">,</span> author</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


