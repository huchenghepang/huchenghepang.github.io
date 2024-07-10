import comp from "D:/VueProject/myblog/skycity/docs/.vuepress/.temp/pages/tag/你好/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/%E4%BD%A0%E5%A5%BD/\",\"title\":\"标签 你好\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"标签 你好\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"你好\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
