<template><div><h1 id="数据库的概念" tabindex="-1"><a class="header-anchor" href="#数据库的概念"><span>数据库的概念</span></a></h1>
<h2 id="_1-为什么要使用数据库" tabindex="-1"><a class="header-anchor" href="#_1-为什么要使用数据库"><span>1. 为什么要使用数据库？</span></a></h2>
<p>答：数据持久化的需要：使用数据库可以将内存中的数据（临时数据）保存到掉电式的内存设备中，从而实现数据的持久化，以供之后使用。持久化的大多数时候是将数据储存在数据库中，当然也可以储存在磁盘文件或者一些其他特定格式的文件中如：<code v-pre>TXT、XML</code></p>
<p>方便数据管理：将数据以数据库的以特定格式和特定关系保存数据，可以更方便的调用数据、方便检索以及管理数据</p>
<h2 id="_2-什么是数据库" tabindex="-1"><a class="header-anchor" href="#_2-什么是数据库"><span>2. 什么是数据库？</span></a></h2>
<p>DB（DATABASE）：数据库是储存数据的仓库，保存着一系列有组织的数据。</p>
<p>DBMS(DATABASE Management System):数据库管理系统是操纵和管理数据库的大型软件。例如：建立数据库、使用数据库、维护数据库。</p>
<p>目前互联网上常见的数据库管理软件有 <code v-pre>Sybase、DB2、Oracle、MySQL、Access、Visual Foxpro（面向对象型）、</code>
<code v-pre>MS SQL Server、Informix、PostgreSQL</code>（对象-关系型）这几种。</p>
<h2 id="_3-什么是mysql-mysql是数据库吗" tabindex="-1"><a class="header-anchor" href="#_3-什么是mysql-mysql是数据库吗"><span>3.什么是<code v-pre>MySQL</code>？<code v-pre>MySQL</code>是数据库吗？</span></a></h2>
<p><code v-pre>MySQL</code>严格讲不是数据库，<code v-pre>MySQL</code>是数据库管理系统，是一种开源（开放源码）的关系型数据库管理系统，开发者为瑞典的<code v-pre>MySQLAB</code>公司，在2008年被SUN公司收购，SUN后又被Oracle公司收购。
<code v-pre>MySQL</code>数据库，因为体积小、速度快、总体拥有成本低，尤其是开源的特点被很多网站和公司选择，如：<code v-pre>YouTube、Facebook、Twitter</code>等</p>
<h2 id="_4-什么是关系型数据库" tabindex="-1"><a class="header-anchor" href="#_4-什么是关系型数据库"><span>4. 什么是关系型数据库？</span></a></h2>
<p>关系型数据库也是储存数据的数据库，但是它是以二维表格（行与列）来储存数据的，以一种以行与列排列的具有相关信息的逻辑组，类似excel表。一个数据库可以包含任意多个数据表。表中的一行代表一条记录，反映一个实体的相关多个信息，比如一个人的身份证、年龄、身高、学历排列的一行对应着：3222222、25、175、本科。数据表中的每一列称为一个字段。表是由其包含的各种字段定义的，每个字段描述了它所含有数据的意义，数据表的设计实际上就是对字段的设计。创建数据表时为每个字段分配一个数据类型，定义其长度和其他属性。行与列交叉的位置表示某个属性值，也就是说：年龄：25。</p>
<p><img src="@source/.vuepress/public/img/projectImg/image-20221105103127750.png" alt="image-20221105103127750"></p>
<h2 id="_5-sql是一种结构化查询语言-那么什么是结构化查询语言" tabindex="-1"><a class="header-anchor" href="#_5-sql是一种结构化查询语言-那么什么是结构化查询语言"><span>5. <code v-pre>SQL</code>是一种结构化查询语言，那么什么是结构化查询语言？</span></a></h2>
<pre><code>   `SQL`是一种特殊目的的编程语言，是一种数据库查询和程序设计语言，用于存取数据以及查询、更新和管理关系数据库系统
</code></pre>
</div></template>


