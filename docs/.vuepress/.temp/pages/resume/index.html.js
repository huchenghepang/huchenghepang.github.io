import comp from "D:/VueProject/myblog/skycity/docs/.vuepress/.temp/pages/resume/index.html.vue"
const data = JSON.parse("{\"path\":\"/resume/\",\"title\":\"简历\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"简历\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"key\":\"resume\"},\"layout\":\"Resume\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
