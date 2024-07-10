import comp from "D:/VueProject/myblog/skycity/docs/.vuepress/.temp/pages/resume/wwi/index.html.vue"
const data = JSON.parse("{\"path\":\"/resume/wwi/\",\"title\":\"Tag WWI\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Tag WWI\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"WWI\",\"key\":\"resume\"},\"layout\":\"Resume\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
