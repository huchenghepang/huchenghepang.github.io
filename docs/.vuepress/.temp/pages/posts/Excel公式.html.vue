<template><div><h1 id="excel公式" tabindex="-1"><a class="header-anchor" href="#excel公式"><span>Excel公式</span></a></h1>
<p>1.提取单据编号：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=IFERROR(MID(R5,FIND(":",R5,1)+1,FIND("。",R5,1)-FIND(":",R5,1)-1),"")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>2.字符串替换公式：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=substitute(origin_string,old_string,newstring)</span>
<span class="line">=substitute(,,)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.对账单模板公式：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line">//处理原信息得到唯一值</span>
<span class="line">=CONCAT("NO:",COUNTIF($C$3:$C3,C3),"_",C3)</span>
<span class="line">//统计本表的唯一项在另一表是否存在</span>
<span class="line">=IF(COUNTIF(企业银行存款余额表,E3)=1,"收付款无误","有误待查")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CONCAT(&quot;NO:&quot;,(COUNTIF($L$3:$L206,L206)-COUNTIF($L$3:$L206,-L206))</p>
<p>4.工资贴公式</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=XLOOKUP(C3,'[1.银行卡信息表-汇总-汇总.xlsx]工资卡信息'!$A$2:$A$200,'[1.银行卡信息表-汇总-汇总.xlsx]工资卡信息'!$B$2:$B$200)</span>
<span class="line">=XLOOKUP(B1,'C:\Users\Administrator\Desktop\employee_compensation\[1.银行卡信息表-汇总-汇总.xlsx]工资卡信息'!$A$2:$A$200,'C:\Users\Administrator\Desktop\employee_compensation\[1.银行卡信息表-汇总-汇总.xlsx]工资卡信息'!$B$2:$B$200)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>5.查找某个单元格的行号</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=MAX(('[2、2023年正式员工考勤表（现场施工人员）.xlsx]2023（8月份) '!$B$6:$B$30=B5)*ROW($6:$30))</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>6.工资导入模板</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=VLOOKUP($B2,[工资模板姓名去重和合并查询.xlsx]新模板!$A$2:$P$72,COLUMN()-1,FALSE)</span>
<span class="line">=ROUNDDOWN(VLOOKUP($B2,[工资模板姓名去重和合并查询.xlsx]新模板!$A$2:$P$72,COLUMN()-1,FALSE),0)</span>
<span class="line">=ROUNDDown(VLOOKUP($B2,[工资模板姓名去重和合并查询.xlsx]新模板!$A$2:$P$72,COLUMN()-1,FALSE),0)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.清除数据快捷键</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">    Range("A3:B999").Select</span>
<span class="line">    Selection.ClearContents</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>8.通讯补助</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=ROUND(IFS(D20>18,200,D20>=11,400,D20&lt;=10,600)*SUM(L20:M20)/K20,0)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>9.绩效薪资标准：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=IFS(D6>=23,200,D6>=20,500,D6>=18,1800,D6>=15,2700,D6>=13,3100,D6&lt;=12,3300)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>10.个税申报系列公式</p>
<p>正常薪金所得表</p>
<p>11.工号匹配：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=XLOOKUP($B2,[境内人员信息列表.xls]Sheet1!$B$2:$B$400,[境内人员信息列表.xls]Sheet1!$A$2:$A$400,"")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>12.证件号码：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=XLOOKUP($B2,[境内人员信息列表.xls]Sheet1!$B$2:$B$400,[境内人员信息列表.xls]Sheet1!$D$2:$D$400,"")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>13.本期收入：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=XLOOKUP($B2,'[合计个税计算与分劈-2023年10月.xlsx]总表'!$B$3:$B$92,'[合计个税计算与分劈-2023年10月.xlsx]总表'!$F$3:$F$92,"")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>14.基本养老保险费：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=XLOOKUP($B2,'[2023年10月各单位五险二金收费明细表（核对版）-项目.xlsx]核对版-10月-项目'!$E$421:$E$479,'[2023年10月各单位五险二金收费明细表（核对版）-项目.xlsx]核对版-10月-项目'!$K$421:$K$479,"")</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>15.基本医疗保险费：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=XLOOKUP(B2,'[2023年10月各单位五险二金收费明细表（核对版）-项目.xlsx]核对版-10月-项目'!$E$421:$E$479,'[2023年10月各单位五险二金收费明细表（核对版）-项目.xlsx]核对版-10月-项目'!$O$421:$O$479,"")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>16.失业保险费：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=XLOOKUP(B2,'[2023年10月各单位五险二金收费明细表（核对版）-项目.xlsx]核对版-10月-项目'!$E$421:$E$479,'[2023年10月各单位五险二金收费明细表（核对版）-项目.xlsx]核对版-10月-项目'!$M$421:$M$479,"")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>17.住房公积金：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=XLOOKUP(B2,'[2023年10月各单位五险二金收费明细表（核对版）-项目.xlsx]核对版-10月-项目'!$E$421:$E$479,'[2023年10月各单位五险二金收费明细表（核对版）-项目.xlsx]核对版-10月-项目'!$S$421:$S$479,"")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>18.年金：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=XLOOKUP(B2,'[2023年10月各单位五险二金收费明细表（核对版）-项目.xlsx]核对版-10月-项目'!$E$421:$E$479,'[2023年10月各单位五险二金收费明细表（核对版）-项目.xlsx]核对版-10月-项目'!$I$421:$I$479,"")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>19.已计提折旧月数：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=IF(F7="","-",DATEDIF(EOMONTH(SUBSTITUTE(F7,".","/"),0)+1,"2023/11/1","m"))</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>20.日期转换为时间戳</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=(待转换的日期单元格-70*365-19)*86400-8*3600</span>
<span class="line">=(TODAY()-70*365-19)*86400-8*3600+17*60*60</span>
<span class="line">=(NOW()-70*365-19)*86400-8*3600</span>
<span class="line">=IF(((NOW()-70*365-19)*86400-8*3600)>((TODAY()-70*365-19)*86400-8*3600+17.5*60*60),TODAY(),TODAY()-1)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>21.时间戳转换为日期格式</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=（时间戳所在的单元格+8*3600）/86400+70*365+19</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>22.EXCEL多关键字匹配返回首个关键字，并对应显示相关内容</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=XLOOKUP(IFERROR(INDEX($Q$5:$Q$704,MATCH(TRUE,ISNUMBER(SEARCH($Q$5:$Q$704,G6)),0)),"未匹配到关键信息"),$Q$5:$Q$704,$R$5:$R$704,"")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>23.数值化当前所有工作表公式结果:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">Sub FunctionTransValue_Sheets()</span>
<span class="line">Dim sht As Worksheet</span>
<span class="line">For Each sht In Worksheets '遍历工作表</span>
<span class="line">sht.UsedRange.Value = sht.UsedRange.Value</span>
<span class="line">Next</span>
<span class="line">End Sub</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">=INDIRECT(CONCAT("'[3、2023年正式员工考勤表（泛亚）1.xlsx]2023（",A921,"月份）'!$C$",B921))</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


