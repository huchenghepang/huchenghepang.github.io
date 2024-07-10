---
date: 2024-07-10 
category:
  - python
  
tag:
  - python

archive: false
---
# Python 办公项目实例
1. ## python实现的群发工资条

```python
import pandas as pd
import imgkit
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
from email.mime.image import MIMEImage

def send_salary_slip(sender_email, sender_password, receiver_email, subject, message):
    # 创建邮件内容对象
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = subject
    #  将HTML转为图片
    config = imgkit.config(wkhtmltoimage= r"D:\program files\wkhtmltopdf\bin\wkhtmltoimage.exe")
    imgkit.from_string(message, './output.png',config=config)
    # 添加图片附件
    with open('output.png', 'rb') as f:
        image_part = MIMEImage(f.read())
        image_part.add_header('Content-Disposition', 'attachment', filename='output.png')
        msg.attach(image_part)
    # 添加邮件正文
    msg.attach(MIMEText(message, 'html'))


    # 连接到SMTP服务器
    server = smtplib.SMTP('smtp.qq.com')  # 这里使用的是Gmail的SMTP服务器，如果使用其他邮箱，请查阅相应的SMTP服务器地址和端口号
    server.starttls()

    try:
        # 登录邮箱
        server.login(sender_email, sender_password)

        # 发送邮件
        server.sendmail(sender_email, receiver_email, msg.as_string())
        print("邮件发送成功")
    except Exception as e:
        print("邮件发送失败:", str(e))
    finally:
        # 关闭连接
        server.quit()

def generate_salary_slip(row):
    # 批量进行变量命名
    variable_prefix = "variable_"  # 变量名前缀
    variable_count = 48  # 变量数量
    # 使用循环生成变量名
    for i in range(1, variable_count + 1):
        variable_name = variable_prefix+ str(i)
        # 在这里可以使用生成的变量名进行后续操作
        # 例如，可以使用 exec() 函数动态创建变量
        exec(f"{variable_name} = row[{i}]",globals())
    # 生成HTML内容
    html = f"""
            <body>
    <table border="1" style="border-collapse: collapse;">
        <caption>员工工资表</caption>
        <tr align="center" valign="middle">
            <td rowspan="2">姓名</td>
            <td rowspan="2">任职</td>
            <td colspan="7">基本数据</td>
            <td colspan="2">出勤天数</td>
            <td colspan="22">应发栏</td>
            <td colspan="14">代扣栏</td>
            <td>实发栏</td>
        </tr>
        <tr>
            <td>岗位工资</td>
            <td>季度绩效薪系数</td>
            <td>月掘进奖岗位系数</td>
            <td>年功工资</td>
            <td>职务津贴</td>
            <td>专业技术津贴</td>
            <td>公立天数</td>
            <td>出勤</td>
            <td>其他</td>
            <td>岗位工资</td>
            <td>年功工资</td>
            <td>出勤工资</td>
            <td>月度掘进奖</td>
            <td>职位津贴</td>
            <td>专业技术津贴</td>
            <td>注册执业津贴</td>
            <td>流动施工津贴</td>
            <td>技术测量实验津贴</td>
            <td>隧道施工津贴</td>
            <td>高原地区津贴</td>
            <td>风沙地区津贴</td>
            <td>伙食补贴</td>
            <td>社保补助津贴</td>
            <td>公务通讯补助</td>
            <td>防暑降温补贴</td>
            <td>采暖费补贴</td>
            <td>女卫费</td>
            <td>季度绩效薪</td>
            <td>法定节假日加班工资</td>
            <td>其他工资</td>
            <td>合计</td>
            <td>企业年金</td>
            <td>养老保险</td>
            <td>失业保险</td>
            <td>住房公积金</td>
            <td>医疗保险</td>
            <td>其他扣款</td>
            <td>专项附加扣除</td>
            <td>年累应纳税所得额</td>
            <td>年累应缴个税</td>
            <td>年累已缴个税</td>
            <td>本月个税</td>
            <td>伙食费</td>
            <td>风险抵押金</td>
            <td>合计</td>
            <td>实发合计</td>
        </tr>
        <tr>
            <td>{variable_1}</td>
            <td>{variable_2}</td>
            <td>{variable_3}</td>
            <td>{variable_4}</td>
            <td>{variable_5}</td>
            <td>{variable_6}</td>
            <td>{variable_7}</td>
            <td>{variable_8}</td>
            <td>{variable_9}</td>
            <td>{variable_10}</td>
            <td>{variable_11}</td>
            <td>{variable_12}</td>
            <td>{variable_13}</td>
            <td>{variable_14}</td>
            <td>{variable_15}</td>
            <td>{variable_16}</td>
            <td>{variable_17}</td>
            <td>{variable_18}</td>
            <td>{variable_19}</td>
            <td>{variable_20}</td>
            <td>{variable_21}</td>
            <td>{variable_22}</td>
            <td>{variable_23}</td>
            <td>{variable_24}</td>
            <td>{variable_25}</td>
            <td>{variable_26}</td>
            <td>{variable_27}</td>
            <td>{variable_28}</td>
            <td>{variable_29}</td>
            <td>{variable_30}</td>
            <td>{variable_31}</td>
            <td>{variable_32}</td>
            <td>{variable_33}</td>
            <td>{variable_34}</td>
            <td>{variable_35}</td>
            <td>{variable_36}</td>
            <td>{variable_37}</td>
            <td>{variable_38}</td>
            <td>{variable_39}</td>
            <td>{variable_40}</td>
            <td>{variable_41}</td>
            <td>{variable_42}</td>
            <td>{variable_43}</td>
            <td>{variable_44}</td>
            <td>{variable_45}</td>
            <td>{variable_46}</td>
            <td>{variable_47}</td>
            <td>{variable_48}</td>
        </tr>
    </table>
</body>
    """

    return html

# 读取工资条数据
df = pd.read_excel('./工资条.xlsx',sheet_name="Sheet1")  # 将'salary_data.xlsx'替换为您的工资条数据文件路径
df = df.fillna('')

# 邮箱信息
sender_email = '2927678784@qq.com'  # 发件人邮箱
sender_password = 'dpbnrtofkhmqdgcb'  # 发件人邮箱密码或授权码
# subject = '工资数据'  # 邮件主题


# 遍历每位员工的工资信息，生成HTML工资条并发送邮件
for index, row in df.iterrows():
    receiver_email = row['邮箱账号']  # 假设邮箱账号列名为'邮箱账号'，请根据实际情况修改
    subject = '工资条'  # 邮件主题
    message = generate_salary_slip(row)  # 生成HTML工资条内容的函数，根据实际情况修改
    send_salary_slip(sender_email, sender_password, receiver_email, subject, message)

```

## 2. python实现的PDF页面分割

```python
import PyPDF4

# 打开包含多个页面的pdf文件，并将每页分隔成自上而下的三等分页面
def pdf_divide(input, output):
    with open(input, 'rb') as file:
        reader = PyPDF4.PdfFileReader(file)
        # 获取总页数
        total_pages = reader.getNumPages()
        # 创建一个新的pdf writer
        writer = PyPDF4.PdfFileWriter()

        # 对每一页执行以下步骤
        for i in range(total_pages):
            # 获取当前页的对象
            page = reader.getPage(i)
            # 获取当前页的大小
            page_width = page.mediaBox.getWidth()
            page_height = page.mediaBox.getHeight()

            # 将当前页的内容分割成自上而下的三等分页面
            part_height = page_height / 3

            for j in range(3):
                # 计算每个部分的坐标
                y1 = page_height - (j + 1) * part_height
                y2 = page_height - j * part_height

                # 创建一个新的pdf页面
                new_page = PyPDF4.pdf.PageObject.createBlankPage(None, page_width, part_height)
                # 将当前部分的内容复制到新页中
                new_page.mergeTranslatedPage(page, 0, -y1)
                # 将新页面添加到写入器中
                writer.addPage(new_page)

        # 将所有的页面写入一个新的pdf文件
        with open(output, 'wb') as output_file:
            writer.write(output_file)
pdf_divide("print_template.pdf","0963账户-4月回单-拆分.pdf")
```

## 3.python 实现的银行联行号爬取

```python
import requests
from bs4 import BeautifulSoup

url = "https://www.lianhanghao.com/api/bank/lhhTableData"

headers = {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
'Cookie':'Hm_lvt_1383965d855ebd4bf00569c1849b2ecb=1703774814; Hm_lpvt_1383965d855ebd4bf00569c1849b2ecb=1703775751; __gads=ID=053be257abbe808a:T=1703774828:RT=1703775751:S=ALNI_MYG_lwA6mE-_4KQDGLo4AclQ75P0g; __gpi=UID=00000cc8a78dc1eb:T=1703774828:RT=1703775751:S=ALNI_Ma0WZrdgw0Ayh0OpcMzhXgT0h2Zwg'
}

response = requests.post(url, headers=headers)
data = {
    "current": 2, "size": "20", "bank_id": "", "province_id": "", "city_id": "", "keywords": ""
}
if response.status_code == 200:
    xhr_content = response.text
    # soup = BeautifulSoup(xhr_content, "html.parser")
    print(xhr_content)
else:
    print("爬取失败")

```

## 4. python爬虫 东方财富网上市公司资产负债表数据

```python
import requests
import re
from bs4 import BeautifulSoup
from openpyxl import Workbook

import openpyxl


class CXlAutofit():
    # 生成列名字典，只是为了方便修改列宽时指定列，key:数字，从1开始；value:列名，从A开始
    def get_num_colnum_dict(self):
        '''
        :return: 返回字典：{1:'A', 2:'B', ...... , 52:'AZ'}
        '''
        num_str_dict = {}
        A_Z = [chr(a) for a in range(ord('A'), ord('Z') + 1)]
        AA_AZ = ['A' + chr(a) for a in range(ord('A'), ord('Z') + 1)]
        A_AZ = A_Z + AA_AZ
        for i in A_AZ:
            num_str_dict[A_AZ.index(i) + 1] = i
        return num_str_dict

    # 自适应列宽
    def style_excel(self, excel_name: str, sheet_name: str):
        '''
        :param sheet_name:  excel中的sheet名
        :return:
        '''
        # 打开excel
        wb = openpyxl.load_workbook(excel_name)
        # 选择对应的sheet
        sheet = wb[sheet_name]
        # 获取最大行数与最大列数
        max_column = sheet.max_column
        max_row = sheet.max_row

        # 将每一列，单元格列宽最大的列宽值存到字典里，key:列的序号从1开始(与字典num_str_dic中的key对应)；value:列宽的值
        max_column_dict = {}

        # 生成列名字典，只是为了方便修改列宽时指定列，key:数字，从1开始；value:列名，从A开始
        num_str_dict = self.get_num_colnum_dict()

        # 遍历全部列
        for i in range(1, max_column + 1):
            # 遍历每一列的全部行
            for j in range(1, max_row + 1):
                column = 0
                # 获取j行i列的值
                sheet_value = sheet.cell(row=j, column=i).value
                # 通过列表生成式生成字符列表，将当前获取到的单元格的str值的每一个字符放在一个列表中（列表中一个元素是一个字符）
                sheet_value_list = [k for k in str(sheet_value)]
                # 遍历当前单元格的字符列表
                for v in sheet_value_list:
                    # 判定长度，一个数字或一个字母，单元格列宽+=1.1，其它+=2.2（长度可根据需要自行修改，经测试一个字母的列宽长度大概为1）
                    if v.isdigit() == True or v.isalpha() == True:
                        column += 1.1
                    else:
                        column += 2.2
                # 当前单元格列宽与字典中的对比，大于字典中的列宽值则将字典更新。如果字典没有这个key，抛出异常并将值添加到字典中
                try:
                    if column > max_column_dict[i]:
                        max_column_dict[i] = column
                except Exception as e:
                    max_column_dict[i] = column
        # 此时max_column_dict字典中已存有当前sheet的所有列的最大列宽值，直接遍历字典修改列宽
        for key, value in max_column_dict.items():
            sheet.column_dimensions[num_str_dict[key]].width = value
        # 保存
        wb.save(excel_name)
china_zfczb=["流动负债","流动资产","非流动资产",'非流动负债','所有者权益(或股东权益)']


# 使用requests库获得文本
stock_code =input("请输入要查询的股票代码:数字即可\n请输入:").strip()
"""选择报告的时间段"""
# 按年度计算
time = 2021
# 按报告期计算
year = 2021     #要查询的年份报告期
month = 6     #要查询最近报告期月份
month_day={"3":"31","6":"30","9":"30","12":"31"}
i = 0
month_list = []
year_list = []
month_list.append(month)
year_list.append(str(year))

while i<4:

    month=month-3

    if month ==0:
        month = 12
        year = year-1

    year_list.append(str(year))
    month_list.append(month)
    i += 1

# print(month_day[str(month_list[0])])

stock_plate = ["sz","SZ","sh","SH"]
"""判断其板块"""

if stock_code.startswith("6"):
    stock_demo = "sh"+stock_code
    stock_demo1 = "SH"+stock_code
elif stock_code.startswith(("0","3")):
    stock_demo = "sz" + stock_code
    stock_demo1 = "SZ" + stock_code
else:
    print("无法判断股票代码:")


url = f"http://emweb.eastmoney.com/PC_HSF10/NewFinanceAnalysis/Index?type=web&code={stock_demo}"
resp = requests.get(url, timeout=40)

"""用beautifulsoup提取信息：股票名称，"""
soup = BeautifulSoup(resp.text,"html.parser")
title_list= soup.find("title").text.split("(")
title=title_list[0]
# print(title_list)

"""用re库正则表达式取得信息"""
# 用re库正则提取资产负债表的脚本代码内容
zcfzb_model = re.compile(r'<script type="text/template" id="zcfzb_qy">.*?</script>'
                         ,re.S)
# 提取tbody标签内容
zcfzb_mode0 = re.compile(r'(<tbody>\s+<tr>\s+<th class="tips-colname-Left" style="width: 366px;">.*?</tbody>)'
                         ,re.S)

#提取name和数据代码
name_model = re.compile(r'\s+([\u4e00-\u9fa5].*?)\s+',re.S)
name1_model = re.compile(r'\s+(其中:\w*?)\s+',re.S)
date_model = re.compile(r"\{\{format\w*?\(value.(?P<date>\w*?)\)}}",re.S)
#使用re提取
zcf =zcfzb_model.findall(resp.text)
zcfzb =''.join(zcf)
zcf1 ="".join(zcfzb_mode0.findall(zcfzb))

# print(zcf1)
# print(zcfzb)
#beautifulsoup库提取
soup = BeautifulSoup(zcf1,"html.parser")
trs = soup.find_all("tr")

#创建一个列表，用于储存字典
lis =[]
# print(len(trs))
for tr in trs:
    # 注意字典的添加会有相似代替
    dic = {}
    # print(tr.text)
    names=name_model.findall(tr.text)
    names1=name1_model.findall(tr.text)
    date =date_model.findall(tr.text)
    # print(names,names1)
    if names1:
        # print(names1)
        name_str ="".join(names1)
        dic["name"]=name_str
    else:
        # print(names)
        name_str ="".join(names)
        dic["name"] = name_str
    date_str="".join(date)
    dic["date"]=date_str
    # print(dic)
    # print(date)
    lis.append(dic)
    # print("--------")
lis[0]["date"] = "REPORT_DATE"
# print(lis)
# print(len(lis))



url1 = f"http://emweb.eastmoney.com/PC_HSF10/NewFinanceAnalysis/zcfzbAjaxNew?companyType=4&reportDateType=1&reportType=1&dates={time}-12-31%2C{time-1}-12-31%2C{time-2}-12-31%2C{time-3}-12-31%2C{time-4}-12-31&code={stock_demo1}"
url2 = f"http://emweb.eastmoney.com/PC_HSF10/NewFinanceAnalysis/zcfzbAjaxNew?companyType=4&reportDateType=0&reportType=1&dates={year_list[0]}-{month_list[0]}-{month_day[str(month_list[0])]}%2C{year_list[1]}-{month_list[1]}-{month_day[str(month_list[1])]}%2C{year_list[2]}-{month_list[2]}-{month_day[str(month_list[2])]}%2C{year_list[3]}-{month_list[3]}-{month_day[str(month_list[3])]}%2C{year_list[4]}-{month_list[4]}-{month_day[str(month_list[4])]}&code={stock_demo1}"

resp1 = requests.get(url1, timeout=40)

# print(resp1.text)
resp_json=resp1.json()
# print(resp_json)
date_list =resp_json["data"]
count = resp_json["count"]
# print(count)
for i in date_list:
    # 获得遍历列表的元素序号,col是字符串
    col = str(date_list.index(i)+1)

    for n in lis:
        # 获得当前得到的是哪个字典的数据
        # print(n)
        index =lis.index(n)
        date = n["date"]
        try:
            info = i[date]
            # print(info)
            # print(type(info))
            lis[index][col] = info
            # print("一个项目的数据完成了\n")


        except:
            if n["name"]=="吸收存款及同业存放":
              info = ""
              lis[index][col] = info
            else:
                info = "--"
                # print(info)
                # print(type(info))
                lis[index][col] = info
                # print("一个项目的数据完成了---\n")
        # print("一年的数据成功的完成了\n")
# print(lis)

"""创建一个Excel工作簿，为xlsx格式"""
wb = Workbook()
# 新建一个工作表并命名，
ws = wb.active
ws.title = "资产负债表1"

# 计算表的行数和列数
rows = len(lis)
cols = len(lis[0])

for a in lis:
    row_n = lis.index(a)
    # print(row_n)
    col= 0
    for v in a.values():
        if col<cols:
            ws.cell(row_n+1,col+1,v)
            col += 1
        else:
            print("出错")
# 删除不要的数据，以便美化图表
ws.delete_cols(2)   #删除数据data列
max_row=ws.max_row
max_col = ws.max_column
col_list = [j for j in range(max_col)]
# print(max_row,man_col)
shanchu =[ ]
for r in range(max_row):
    # 数量限制判断
    x = 0
    for c in range(max_col):
        if ws.cell(row=r+1, column=c+1).value in [None,"",0,"0"]:
            x += 1
            # print("x",x)
            if x >4:
                #记录要删除的行
                shanchu.append(r+1)
            else:
                continue
        else:
            continue
# print(shanchu)
# print(len(shanchu))
ws1 = wb.create_sheet("资产负债表")
dat = [i for i in range(1,len(lis)+1)]

for c in shanchu:
    dat.remove(c)
# print(dat)
for z in dat:
    q=dat.index(z)+1
    for c in col_list:
        r = col_list.index(c) + 1
        ws1.cell(q,r,ws.cell(z,r).value)

wb.remove(ws)
# row_number = 0
# for row in ws.iter_rows():#迭代遍历每行
#     if cols[2,6] is None:   #给定的条件，读者可根据自身需求自定义
#         row_number=col[2:6].row #关键步骤！获得当前行的行号！
#         print(row_number)
#         ws.delete_rows(row_number)

# lis1=[v for a in lis for v in a.values()]
# print(lis1)
bname=f"./{title}.xlsx"
wb.save(bname)

# 调用方法 实例化类
Entity = CXlAutofit()
# 传入参数：Excel名称，需要设置列宽的Sheet名称
Entity.style_excel(bname, "资产负债表")
print('保存成功')

```

