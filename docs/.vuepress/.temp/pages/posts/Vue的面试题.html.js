import comp from "D:/VueProject/myblog/skycity/docs/.vuepress/.temp/pages/posts/Vue的面试题.html.vue"
const data = JSON.parse("{\"path\":\"/posts/Vue%E7%9A%84%E9%9D%A2%E8%AF%95%E9%A2%98.html\",\"title\":\"Vue前端面试题\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2024-04-09T00:00:00.000Z\",\"category\":[\"Vue\"],\"tag\":[\"前端\",\"Vue\",\"面试题\"],\"archive\":false},\"headers\":[{\"level\":3,\"title\":\"1、为什么Vue中data数据都是以函数的方式返回？\",\"slug\":\"_1、为什么vue中data数据都是以函数的方式返回\",\"link\":\"#_1、为什么vue中data数据都是以函数的方式返回\",\"children\":[]},{\"level\":3,\"title\":\"2、VUE中v-if 和v-show的区别和共同点？\",\"slug\":\"_2、vue中v-if-和v-show的区别和共同点\",\"link\":\"#_2、vue中v-if-和v-show的区别和共同点\",\"children\":[]},{\"level\":3,\"title\":\"3、computed实现的计算属性和使用methods方法下实现的计算属性有什么差别？\",\"slug\":\"_3、computed实现的计算属性和使用methods方法下实现的计算属性有什么差别\",\"link\":\"#_3、computed实现的计算属性和使用methods方法下实现的计算属性有什么差别\",\"children\":[]},{\"level\":3,\"title\":\"4、computed与watch以及methods之间的区别？\",\"slug\":\"_4、computed与watch以及methods之间的区别\",\"link\":\"#_4、computed与watch以及methods之间的区别\",\"children\":[]},{\"level\":3,\"title\":\"5、Vue的响应式原理是什么？\",\"slug\":\"_5、vue的响应式原理是什么\",\"link\":\"#_5、vue的响应式原理是什么\",\"children\":[]},{\"level\":3,\"title\":\"6、 Vue的优缺点\",\"slug\":\"_6、-vue的优缺点\",\"link\":\"#_6、-vue的优缺点\",\"children\":[]},{\"level\":3,\"title\":\"7、VUe中Key的作用是什么？\",\"slug\":\"_7、vue中key的作用是什么\",\"link\":\"#_7、vue中key的作用是什么\",\"children\":[]},{\"level\":3,\"title\":\"8、在Vue中做数据渲染的时候，怎么保证数据原样输出？\",\"slug\":\"_8、在vue中做数据渲染的时候-怎么保证数据原样输出\",\"link\":\"#_8、在vue中做数据渲染的时候-怎么保证数据原样输出\",\"children\":[]},{\"level\":3,\"title\":\"9、使用Vue的好处是什么？\",\"slug\":\"_9、使用vue的好处是什么\",\"link\":\"#_9、使用vue的好处是什么\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/Vue的面试题.md\",\"excerpt\":\"\\n<h3>1、为什么<code>Vue</code>中data数据都是以函数的方式返回？</h3>\\n<p>​\\t首先，在<code>Vue2</code>中<code>new Vue()</code> 创建的<code>APPVM</code>实例对象是可以以对象的形式储存数据的，但是在component组件当时data的数据只能以函数的方式创建。</p>\\n<p>​     <code> Vue3</code>中无论时<code>VM</code>中还是组建中都只能以函数的返回对象的方式来存储数据。</p>\\n<p>​     使用函数返回对象的方式来存储数据，可以保证每个组件中data中存储的数据都是独立备份的，而不会收到其他组件的data数据的影响，保证了数据的独立性。也就是通过这种方式实现了<code>Vue</code>中每个组件中中数据独立，访问独立。</p>\"}")
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
