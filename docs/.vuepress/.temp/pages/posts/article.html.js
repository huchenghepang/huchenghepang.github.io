import comp from "D:/VueProject/myblog/skycity/docs/.vuepress/.temp/pages/posts/article.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article.html\",\"title\":\"nginx反向代理服务器\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2024-03-6\",\"category\":[\"服务器\"],\"tag\":[\"技术\",\"服务器\"],\"archive\":false},\"headers\":[{\"level\":2,\"title\":\"1.安装nginx服务器\",\"slug\":\"_1-安装nginx服务器\",\"link\":\"#_1-安装nginx服务器\",\"children\":[]},{\"level\":2,\"title\":\"2.配置nginx的选项\",\"slug\":\"_2-配置nginx的选项\",\"link\":\"#_2-配置nginx的选项\",\"children\":[]},{\"level\":2,\"title\":\"3. 启动nginx服务器：\",\"slug\":\"_3-启动nginx服务器\",\"link\":\"#_3-启动nginx服务器\",\"children\":[]},{\"level\":2,\"title\":\"4. 关闭nginx服务器\",\"slug\":\"_4-关闭nginx服务器\",\"link\":\"#_4-关闭nginx服务器\",\"children\":[]},{\"level\":2,\"title\":\"5. 重启nginx服务器\",\"slug\":\"_5-重启nginx服务器\",\"link\":\"#_5-重启nginx服务器\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/反向代理服务器.md\",\"excerpt\":\"\\n<h2>1.安装<code>nginx</code>服务器</h2>\\n<div class=\\\"language-cmd\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"cmd\\\" data-title=\\\"cmd\\\"><pre class=\\\"language-cmd\\\"><code><span class=\\\"line\\\"> # yum install nginx</span>\\n<span class=\\\"line\\\"></span></code></pre></div><h2>2.配置nginx的选项</h2>\\n<p>​\\t找到 <code>/etc/nginx/nginx.conf</code>文件 <a href=\\\"......%5CDesktop%5Cfsdownload%5Cnginx.conf\\\">nginx.conf</a></p>\"}")
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
