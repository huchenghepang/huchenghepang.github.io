import comp from "D:/VueProject/myblog/skycity/docs/.vuepress/.temp/pages/posts/nginx反向代理.html.vue"
const data = JSON.parse("{\"path\":\"/posts/nginx%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"CategoryA\"],\"tag\":[\"tag A\",\"tag B\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/nginx反向代理.md\",\"excerpt\":\"<h4>安装<code>nginx</code>服务器</h4>\\n<div class=\\\"language-cmd\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"cmd\\\" data-title=\\\"cmd\\\"><pre class=\\\"language-cmd\\\"><code><span class=\\\"line\\\"> # yum install nginx</span>\\n<span class=\\\"line\\\"></span></code></pre></div><h4>2.配置nginx的选项</h4>\\n<p>​\\t找到 <code>/etc/nginx/nginx.conf</code>文件 <a href=\\\"......%5CDesktop%5Cfsdownload%5Cnginx.conf\\\">nginx.conf</a></p>\"}")
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
