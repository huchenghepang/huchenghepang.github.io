      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[1,3,4,2,5,6,0,7]}},"timeline":{"/":{"path":"/timeline/","indexes":[1,3,4,2,5,6,0,7]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      