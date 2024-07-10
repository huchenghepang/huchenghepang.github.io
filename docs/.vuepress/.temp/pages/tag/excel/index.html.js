import comp from "D:/VueProject/myblog/skycity/docs/.vuepress/.temp/pages/tag/excel/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/excel/\",\"title\":\"标签 Excel\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"标签 Excel\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Excel\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
