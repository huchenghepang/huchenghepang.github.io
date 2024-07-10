export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"工作":{"path":"/category/%E5%B7%A5%E4%BD%9C/","indexes":[0]},"Excel":{"path":"/category/excel/","indexes":[1]},"JavaScript":{"path":"/category/javascript/","indexes":[2]},"BI":{"path":"/category/bi/","indexes":[3]},"数据分析":{"path":"/category/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90/","indexes":[3]},"python":{"path":"/category/python/","indexes":[4]},"Vue":{"path":"/category/vue/","indexes":[5]},"服务器":{"path":"/category/%E6%9C%8D%E5%8A%A1%E5%99%A8/","indexes":[6]},"数据库":{"path":"/category/%E6%95%B0%E6%8D%AE%E5%BA%93/","indexes":[7]}}}},"tag":{"/":{"path":"/tag/","map":{"Excel":{"path":"/tag/excel/","indexes":[1,0]},"工作":{"path":"/tag/%E5%B7%A5%E4%BD%9C/","indexes":[1,0]},"办公":{"path":"/tag/%E5%8A%9E%E5%85%AC/","indexes":[3,1,0]},"前端":{"path":"/tag/%E5%89%8D%E7%AB%AF/","indexes":[5,2]},"数据分析":{"path":"/tag/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90/","indexes":[3]},"python":{"path":"/tag/python/","indexes":[4]},"Vue":{"path":"/tag/vue/","indexes":[5]},"面试题":{"path":"/tag/%E9%9D%A2%E8%AF%95%E9%A2%98/","indexes":[5]},"技术":{"path":"/tag/%E6%8A%80%E6%9C%AF/","indexes":[7,6]},"服务器":{"path":"/tag/%E6%9C%8D%E5%8A%A1%E5%99%A8/","indexes":[6]},"数据库":{"path":"/tag/%E6%95%B0%E6%8D%AE%E5%BA%93/","indexes":[7]}}}},"resume":{"/":{"path":"/resume/","map":{}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

