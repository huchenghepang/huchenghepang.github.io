import comp from "D:/VueProject/myblog/skycity/docs/.vuepress/.temp/pages/category/bi/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/bi/\",\"title\":\"分类 BI\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"分类 BI\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"BI\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
