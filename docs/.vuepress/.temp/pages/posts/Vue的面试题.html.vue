<template><div><h1 id="vue前端面试题" tabindex="-1"><a class="header-anchor" href="#vue前端面试题"><span>Vue前端面试题</span></a></h1>
<h3 id="_1、为什么vue中data数据都是以函数的方式返回" tabindex="-1"><a class="header-anchor" href="#_1、为什么vue中data数据都是以函数的方式返回"><span>1、为什么<code v-pre>Vue</code>中data数据都是以函数的方式返回？</span></a></h3>
<p>​	首先，在<code v-pre>Vue2</code>中<code v-pre>new Vue()</code> 创建的<code v-pre>APPVM</code>实例对象是可以以对象的形式储存数据的，但是在component组件当时data的数据只能以函数的方式创建。</p>
<p>​     <code v-pre> Vue3</code>中无论时<code v-pre>VM</code>中还是组建中都只能以函数的返回对象的方式来存储数据。</p>
<p>​     使用函数返回对象的方式来存储数据，可以保证每个组件中data中存储的数据都是独立备份的，而不会收到其他组件的data数据的影响，保证了数据的独立性。也就是通过这种方式实现了<code v-pre>Vue</code>中每个组件中中数据独立，访问独立。</p>
<p>​	data中的数据都是浅拷贝。</p>
<p>​	data的值必须是一个函数，如果data的值不是一个函数，而是储存了一个对象，那么在创建众多组件的时候，众多的组件会共享一个data对象，修改其中一个data对象就会改变另一个，影响其他组件实例的数据</p>
<h3 id="_2、vue中v-if-和v-show的区别和共同点" tabindex="-1"><a class="header-anchor" href="#_2、vue中v-if-和v-show的区别和共同点"><span>2、<code v-pre>VUE</code>中v-if 和v-show的区别和共同点？</span></a></h3>
<p>共同点：在<code v-pre>Vue</code>中v-if和v-show是根据数据的真假与否来判判断、控制每个组件或者<code v-pre>dom</code>元素是否在页面当中显示。</p>
<p>区别：① 实现方式不同：v-if是根据真假值去控制<code v-pre>dom</code>元素的删错或者重建，但是，<code v-pre>v-show</code>是通过<code v-pre>css</code>属性中的<code v-pre>display:none</code>属性去实现页面是否显示的。</p>
<p>​               ② 编译的过程：v-if有一个局部的编译或者卸载的过程，切换过程中会适当的销毁或重建内部事件的监听和子组件。V-show是基于简单的<code v-pre>CSS</code>的切换，不会进行重新的编译</p>
<p>​               ③ 编译的条件：v-if，是惰性的，只有在条件为真的时候才会编译，否则它什么也不会做。V-show是在任何条件下都会进行编译，而<code v-pre>dom</code>元素会保存</p>
<p>​				④ 性能的消耗：V-if有较高的性能消耗，不适合进行频繁的切换；而V-show有初始的渲染消耗，可以进行频繁分切换。</p>
<h3 id="_3、computed实现的计算属性和使用methods方法下实现的计算属性有什么差别" tabindex="-1"><a class="header-anchor" href="#_3、computed实现的计算属性和使用methods方法下实现的计算属性有什么差别"><span>3、computed实现的计算属性和使用methods方法下实现的计算属性有什么差别？</span></a></h3>
<p>​	从效果来看确实是相同的，只有数据变化了，两者都会进行改变。但是呢？computed计算属性实现的数据绑定，只有在数据改变的时候才会发生变化，但是methods实现的数据绑定会使得在数据没有改变，只是重新渲染了数据时也会调用执行该函数，这样就浪费了性能。</p>
<p>​    使用场景，当性能开销比较大，需要遍历很多数组做大量的计算，并且多次重新解析渲染时，使用computed计算属性比较节约性能，而不希望缓存时可以使用methods去实现计算属性。</p>
<h3 id="_4、computed与watch以及methods之间的区别" tabindex="-1"><a class="header-anchor" href="#_4、computed与watch以及methods之间的区别"><span>4、computed与watch以及methods之间的区别？</span></a></h3>
<p>​	<code v-pre>computed</code>：计算属性是用来声明式的描述一个值依赖了其他值。在模板中将数据绑定到一个计算属性上，<code v-pre>Vue</code>会在计算属性所依赖的数据发生改变时更新计算属性并且重新更新<code v-pre>dom</code>。这功能非常强大，使得代码更加声明式、数据驱动且更加容易维护。</p>
<p>​	<code v-pre>methods</code>：<code v-pre>methods</code>函数绑定事件调用，偏手动，不会使用缓存更新数据。</p>
<p>​	<code v-pre>watch</code>:监听的是定义的变量。当变量发生改变时，调用相应的方法如get或者set。在div中使用表达式name，在data中配置number、<code v-pre>lastname、firstname</code></p>
<p>,在watch中，当number发生改变的时候调用相应的方法，方法里面的形参对应着number的新值和旧值，而在computed中，计算依赖的是name的值，不能计算在data中已经定义了的变量。</p>
<h3 id="_5、vue的响应式原理是什么" tabindex="-1"><a class="header-anchor" href="#_5、vue的响应式原理是什么"><span>5、<code v-pre>Vue</code>的响应式原理是什么？</span></a></h3>
<p>​    一个<code v-pre>Vue</code>实例创建时，<code v-pre>Vue</code>会遍历data选项的属性，用<code v-pre>Object.defineProperty</code>将它们转为<code v-pre>getter/setter</code>，并在内部追踪相关依赖，在属性被访问和修改时通知变化。每个组件实例都有相应的watcher实例，它会在组件渲染的过程中把属性记录为依赖，然后当依赖项的setter被调用时，会通知watcher重新计算，从而使它关联的组件得以更新。</p>
<h3 id="_6、-vue的优缺点" tabindex="-1"><a class="header-anchor" href="#_6、-vue的优缺点"><span>6、 <code v-pre>Vue</code>的优缺点</span></a></h3>
<p>​	优点：</p>
<p>​		①前端专门负责前端页面和特效的编写，后端专门负责后端业务逻辑的处理</p>
<p>​		②前端追求的是页面的美观，页面流畅、页面兼容等，后端追去的是三高（高并发、高处理、高性能），让他们负责各自的领域，让专业的人员做专业的事情，提高了开发的效率</p>
<p>​	缺点：</p>
<p>​		①当接口发生改变的时候，前后端都需要改变</p>
<p>​		②当发生异常处理的时候，前后端需要连调，联调是非常浪费时间的</p>
<h3 id="_7、vue中key的作用是什么" tabindex="-1"><a class="header-anchor" href="#_7、vue中key的作用是什么"><span>7、<code v-pre>VUe</code>中Key的作用是什么？</span></a></h3>
<p>​	使用key来给每个节点做一个唯一标识符，key的作用主要是高效的更新虚拟DOM。另外，使用在<code v-pre>Vue</code>中使用相同标签名元素过渡切换时，也会使用到key的属性，起目的是让<code v-pre>VUe</code>可以区分他们，否则<code v-pre>Vue</code>只有替换起内部属性，而不会触发过渡效果。</p>
<h3 id="_8、在vue中做数据渲染的时候-怎么保证数据原样输出" tabindex="-1"><a class="header-anchor" href="#_8、在vue中做数据渲染的时候-怎么保证数据原样输出"><span>8、在<code v-pre>Vue</code>中做数据渲染的时候，怎么保证数据原样输出？</span></a></h3>
<p>V-text：将数据输出到元素内部如果，输入的元素有<code v-pre>html</code>结构代码，就作为普通文本输入。</p>
<p><code v-pre>v-html</code>:将数据输出到元素的内部，如果输入的数据有<code v-pre>html</code>结构，就会被渲染</p>
<p>{{}}:插值表达式，可以直接获取<code v-pre>Vue</code>实例中定义的数据或函数，使用插值表达式</p>
<h3 id="_9、使用vue的好处是什么" tabindex="-1"><a class="header-anchor" href="#_9、使用vue的好处是什么"><span>9、使用<code v-pre>Vue</code>的好处是什么？</span></a></h3>
<p><code v-pre>Vue</code>的两大特点响应式编程和组件化</p>
<p><code v-pre>Vue的优势</code>轻量级的框架、简单易学、双向数据绑定、组件化、三视图和数据结构分离、<code v-pre>虚拟DOM</code>、运行的速度快</p>
</div></template>


