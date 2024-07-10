import comp from "D:/VueProject/myblog/skycity/docs/.vuepress/.temp/pages/posts/Excel公式.html.vue"
const data = JSON.parse("{\"path\":\"/posts/Excel%E5%85%AC%E5%BC%8F.html\",\"title\":\"Excel公式\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2024-01-08T00:00:00.000Z\",\"category\":[\"工作\"],\"tag\":[\"Excel\",\"工作\",\"办公\"],\"archive\":false},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/Excel公式.md\",\"excerpt\":\"\\n<p>1.提取单据编号：</p>\\n<div class=\\\"language-text\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code><span class=\\\"line\\\">=IFERROR(MID(R5,FIND(\\\":\\\",R5,1)+1,FIND(\\\"。\\\",R5,1)-FIND(\\\":\\\",R5,1)-1),\\\"\\\")</span>\\n<span class=\\\"line\\\"></span></code></pre></div><p>2.字符串替换公式：</p>\\n<div class=\\\"language-text\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code><span class=\\\"line\\\">=substitute(origin_string,old_string,newstring)</span>\\n<span class=\\\"line\\\">=substitute(,,)</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
