import comp from "D:/VueProject/myblog/skycity/docs/.vuepress/.temp/pages/posts/ngnix代理.html.vue"
const data = JSON.parse("{\"path\":\"/posts/ngnix%E4%BB%A3%E7%90%86.html\",\"title\":\"你好\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"1998-01-02T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"WWII\"],\"archive\":true},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/反向代理服务器.md\",\"excerpt\":\"\\n\"}")
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
