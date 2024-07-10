<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import {onMounted} from "vue";
import Carousel from "../components/Carousel.vue";
onMounted(()=>{
    import("../public/iconfont/iconfont.js").then(icon=>{})

})
</script>

<template>
    <div>
        <ParentLayout class="resumewarp ">
        </ParentLayout>
        <div class="resume custom-div" >
            <header class="custom-div">
                <div class="hearer-avator-container custom-div">
                    <div class="personavator"></div>
                    <h1>黄祥坤</h1>
                </div>

                <p>| huchenghe1021@outlook.com | 15524188517 | <a href="https://github.com/huchenghepang/personaldesc" target="_blank">github仓库</a></p>
            </header>
            <main class="custom-div">
                <section>
                    <h2 class="titleheader"> 教育背景</h2>
                    <table>
                        <tr>
                            <th>学校</th>
                            <th>专业</th>
                            <th>时间</th>
                        </tr>
                        <tr>
                            <td>沈阳大学</td>
                            <td>财务管理</td>
                            <td>2019 - 2023</td>
                        </tr>
                    </table>
                </section>
                <section>
                    <h2 class="titleheader"> 专业技能</h2>
                    <div class="resume-container-skill">
                        <ul>
                            <li>熟练掌握HTML, CSS, JavaScript</li>
                            <li>熟悉Vue框架，以及elementUI工具库</li>
                            <li>了解Node.js和Express</li>
                            <li>熟悉Python爬虫，大学使用Python爬取过东方财富网上的财务报表数据，并将其保存为EXCEL文件</li>
                            <li>
                                Python实现的办公自动化，工作编写过Python实现的群发工资条邮件，以及PDF文件的批量单页拆分（农业银行回单为三个回单为一页，而装订需要一个笔付款对应一笔回单,节省了人工裁剪的麻烦)
                            </li>
                            <li>熟悉MySQL数据库的基本操作，DQL语言 && DDL语言 &&
                                DCL语言（即：基本的查询、定义表的结构、数据的控制），增删改查
                            </li>
                            <li>对Microsoft的PowerBI有所了解，熟悉通过该工具进行数据报表的可视化</li>
                        </ul>
                    </div>

                </section>
                <section>

                    <h2 class="titleheader">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-fendouzhe"></use>
                        </svg>
                        当我在做财务的时候
                    </h2>
                    <ul>
                        <li>中国铁建大桥工程局集团有限公司 | 出纳和财务会计 | 2023.7 -2024.7 </li>
                        <li>1. 负责地铁项目的日常资金收付款，上传付款回单至共享系统，日常银行对账</li>
                        <li>2. 按照公司制度审核员工的报销业务并记账，如：对员工差旅费的审核和记账</li>
                        <li>3.月末根据完工百分比法，倒推项目收入，进行收入成本的确认，月末结账</li>
                        <li>4.根据公司薪酬制度、管理办法和绩效考核，对项目员工的工资进行编制</li>
                        <li>5.月度快报的编制，季度报表的填报</li>
                        <li>6.整理归档，每月对300多号凭证的原始单据和记账凭证进行归档和装订</li>
                        <li>7.项目纳税申报，按月计算申报员工个税，完成建筑企业异地预交增值税及其附加税费</li>
                        <li>8.日常填报更新项目、公司和国资委的要求的相关统计台账</li>
                        <li>9.对接银行，管理和维护日常银行账户，处理有关账户的开户、延期以及注销事项</li>
                        <li>
                            10.日常业务的记账，如计提项目应收账款的坏账准备和按月计提固定资产折旧、计提安全生产费和票据业务的记账等
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 class="titleheader"> 项目经验</h2>
                    <p><b>个人博客系统:</b></p>
                    <ul>
                        <li>使用VuePress和GitHub Pages集成搭建的个人博客系统,</li>
                    </ul>
                    <p><a href="http://175.178.195.144" target="_blank"><b>尚品汇-大型电商购物web网站:</b></a></p>
                    <ul>
                        <li>前台购物网站：从项目初始化到功能模块开发的整个流程。使用Vue全家桶（Vue、Vuex、Vue Router）
                            实现了首页、搜索、商品详情、购物车、订单、支付及用户登录/注册等模块。通过Mock.js模拟数据，前后端分离开发</li>
                    </ul>
                    <ul>
                        <li>前台后台管理系统：使用elementUI和eCharts等工具库搭建项目的首页、商品管理和权限管理等模块</li>
                    </ul>
                </section>
                <section>
                    <h2 class="titleheader"> 素材展示</h2>
                    <carousel></carousel>
                </section>
                <section>
                    <h2 class="titleheader">自我评价</h2>
                    <p>非典型财务人员，喜欢探索新技术，乐于解决技术问题。<br>
<!--                        <em>希望世界和平，人人平等，人能活在自由和幸福之中！</em>-->
                    </p>
                </section>
            </main>
            <footer>
                <p>版权所有 &copy; 2024 黄祥坤 的 简历</p>
            </footer>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.custom-div {
    background-color: #f0f0f0;
}
.dark .titleheader{
    color:var(--c-text) !important;
}
.dark .custom-div {
    background-color: rgb(34, 39, 46);
    //color:  rgb(128, 148, 168) ;
}

.resumewarp {
    height: 57px;
}

header {
    background-color: #fff;
    padding: 10px 0;
    text-align: center;
    border-bottom: 2px solid #4a90e2;
}

header h1 {
    color: #4a90e2;
    font-size: 28px;
    margin: 0;
}

header p {
    font-size: 16px;
    color: #666;
}

main {
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #333;
    font-size: 20px;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 5px;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 1.6;
    color: #666;
}

footer {
    text-align: center;
    padding: 10px 0;
    font-size: 14px;
    color: #999;
    border-top: 1px solid #eaeaea;
    margin-top: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.resume-container-skill {
}

.hearer-avator-container{
    display: flex;
    justify-content: center;
    align-items: center;

    .personavator {
        display: inline-block;
        margin: 0 20px;
        width: 100px;
        height: 100px;
        border-radius: 30px;
        background: url(../public/img/personavator.jpeg) no-repeat;
        background-size: contain;
    }
}





</style>