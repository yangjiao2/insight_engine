# Demo

https://yangjiao2.github.io/insight_engine/#/
search page only due to DB disconnection 

# Intro

基于自然语言学习的知识图谱界面，用 npm 的 react app 脚手架提供

- 搜索
  
  ![搜索展示](https://github.com/yangjiao2/insight_engine/blob/main/demo/Search_result.png)

- 知识卡片展示界面

  ![卡片展示](https://github.com/yangjiao2/insight_engine/blob/main/demo/Info_card.png)


[![Demo video (youtube)](https://i.imgur.com/vKb2F1B.png)](https://youtu.be/4PsvZwb_e2k)

# Develop

```
npm install & npm start
```

URL: `{LOCALHOST}:3000/insight_engine/#`

# Deploy

nginx 配置以及重启
```
# force nginx stop
nginx -s stop
# view nginx error log 
sudo cat /var/log/nginx/error.log
# apply change
sudo nginx -c /etc/nginx/nginx.conf
# edit nginx config
sudo vim /etc/nginx/nginx.conf
# syntax check
nginx -t   
# restart nginx 
systemctl restart nginx.service
```

NGINX 配置
```
  server {
        
        location /insight_engine {
            alias /home/jiaoyang01/insight_engine/build;
            index index.html;
            add_header Cache-Control no-cache;
            autoindex on;
            try_files $uri $uri/ /index.html;
        }
```        

项目build 
```
npm run build
```

Q & A:

错误
1、 2020/11/12 22:18:13 [error] 28614#0: \*1 directory index of "/home/jiaoyang01/insight*engine/" is forbidden, client: 10.100.115.115, server: *, request: "GET /insight_engine/ HTTP/1.1", host: "172.27.233.23:8800"

```
chmod -R 777 目录

```
2、nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)

```
fuser -k 80/tcp

```


# APIs

##################################################

#### request 格式

1.  search/query="xx"

2.  card/query="xx"

3.  article/id="123"

##################################################
#### 数据格式

```json
{
  "articles": [],
  "cards": [
    {
      "detail": [
        "：单源数据、持续增长、自动建模、反馈闭环",
        "在整个方法论和机制层面在想的解决方案",
        "基于学习圈理念"
      ],
      "title": "hypercycle"
    },
    {
      "detail": [
        "业界广泛使用的企业 ai 应用开发平台",
        "给应用系统提供最底层的 ai 内核能力",
        "一个企业级的 ai 一站式平台"
      ],
      "title": "先知"
    }
  ],
  "keywords": {}
}
```

##################################################
#### 搜索页面
request: /query: 'string'

#### response:

```json
{
    "keywords":{
        "title1":[

        ]
    },
    "articles":[
        {
            "title":"xxx",
            "id":"xxxx",
            "paragraph-in-short":"xxxx",
            "update-time":"xxxx",
            "creator":"xxxx",
            "source-word":{
                "OCR":"文章包含 ocr/招行属于银行/光学文字识别与 OCR 同义"
            }
        }
    ],
    "cards":[
        {
            "title":"xxx",
            "detail":[

            ]
        }
    ]
}
```

#############################################

#### 卡片详情页
request：/query：‘string’

#### response：

```json
{
  'title':xxxx,
  'detail':[{'content':xxxx, 'id':xxx},{},{}]},
  'properties':[],
  'articles':[{
    title:xxxx,
    id:xxx,
    people:[]},{},{}]
  }]
}
```
################################################
#### 文章详情页

request：query/: 'id'

#### response：

```json
{
  "title": "xxxxx",
  "content": "xxxx"
}
```

###############################################
#### Full context search (version 1.0)

```json
{
  "articles": [
    {
      "id": "14751083",
      "people": ["秦一焜", "hudan"],
      "title": "营销-中信信用卡中心-期数优化"
    },
    {
      "id": "16358762",
      "people": ["", "sunyonggang"],
      "title": "准线上实验："
    },
    {
      "id": "12331861",
      "people": ["", "huangjing"],
      "title": "营销-恒丰-理财推荐"
    },
    {
      "id": "6947506",
      "people": ["", "hanfeng"],
      "title": "营销-招商信用卡-白金分期名单推荐"
    },
    {
      "id": "12334124",
      "people": ["", "gaoxiaowei"],
      "title": "信用-光大银行信用卡中心催收"
    },
    {
      "id": "18943197",
      "people": [
        "润鹏",
        "谢金欣",
        "金欣",
        "冯伟",
        "郑佳尔",
        "武润鹏",
        "sunyonggang"
      ],
      "title": "中信建投进场日报"
    },
    {
      "id": "18957371",
      "people": ["王珵", "mumu", "陈伟", "sunyonggang"],
      "title": "中信建投证券先知 bug 跟踪"
    },
    {
      "id": "21955771",
      "people": ["", "sunyonggang"],
      "title": "中信建投拼表以及出名单方案"
    },
    {
      "id": "12336807",
      "people": ["", "hanfeng"],
      "title": "欺诈-银联-线下信用卡欺诈交易识别"
    },
    {
      "id": "12332733",
      "people": [
        "李志伟",
        "孟一凡",
        "莫斌",
        "胡单",
        "王浏佳",
        "张观侣",
        "mengyifan"
      ],
      "title": "营销-建行深圳分行-理财推荐"
    },
    {
      "id": "16363443",
      "people": ["王昱森", "王明", "袁斌", "王萌", "陈潇", "yuanbin"],
      "title": "营销-交通银行-睡眠客户唤醒"
    },
    { "id": "16362501", "people": ["", "zhangzhenyu"], "title": "数据相关" },
    {
      "id": "28164450",
      "people": ["孙永刚", "何晓东", "马亚光", "刘勇", "sunyonggang"],
      "title": "风险-外贸信托-个人信用评分"
    },
    {
      "id": "50566170",
      "people": ["", "liuyong"],
      "title": "风险-华夏银行信用卡中心-M2 逾期"
    },
    { "id": "51924988", "people": ["", "zhaoshize"], "title": "先知 EE 迁移" },
    {
      "id": "34968131",
      "people": ["", "chenhao"],
      "title": "欺诈-广发-境外交易深度学习"
    },
    {
      "id": "24288398",
      "people": ["马亚", "高晓", "gaoxiaowei"],
      "title": "风险-民生总行零售风险部-小微企业信用风险评估"
    },
    {
      "id": "16359536",
      "people": [
        "刘军",
        "广发",
        "张观",
        "林恺迪",
        "蔡廷楷",
        "陈超",
        "胡博",
        "郑佳尔",
        "胡楠",
        "陈潇",
        "张观侣",
        "俞力今",
        "观侣",
        "梁海明",
        "yulijing"
      ],
      "title": "营销 - 广发- 通用推荐"
    },
    {
      "id": "53552330",
      "people": ["陈音", "严萍萍", "chenyan"],
      "title": "欺诈—浦发养卡识别"
    },
    {
      "id": "50569459",
      "people": ["", "hexue"],
      "title": "欺诈-华夏银行信用卡中心-交易反欺诈"
    },
    {
      "id": "62541299",
      "people": ["", "chengda"],
      "title": "营销推荐-百胜 delivery 场景 menu 弹屏推荐"
    },
    {
      "id": "63291724",
      "people": ["李海", "何雪", "hexue"],
      "title": "工行对公账户异常行为检测"
    },
    {
      "id": "50566428",
      "people": ["伏玮", "zhaoshize"],
      "title": "欺诈-工行-转账交易反欺诈"
    },
    {
      "id": "63292501",
      "people": ["伍思恒", "秦一", "wusiheng"],
      "title": "反洗钱-重庆人行"
    },
    {
      "id": "65022510",
      "people": ["", "qinchuan"],
      "title": "欺诈-工行风险管理部-信用卡申请反欺诈二期交付"
    },
    {
      "id": "65027486",
      "people": ["", "guanlei"],
      "title": "工行融 e 借贷款产品营销（天天惠替代场景）"
    }
  ],
  "detail": {
    "detail": [
      { "contentid": "75561035", "detail": "一个企业级的 ai 一站式平台" },
      { "contentid": "72972958", "detail": "企业级软件" },
      { "contentid": "32322652", "detail": "一个强大的 ai 核心平台" },
      { "contentid": "75560424", "detail": "很多强力的技术工具" },
      { "contentid": "75561424", "detail": "很多强力的工具" },
      { "contentid": "75561424", "detail": "很多强力的工具" },
      {
        "contentid": "75539187",
        "detail": "给应用系统提供最底层的 ai 内核能力"
      },
      { "contentid": "72972958", "detail": "企业级软件" },
      { "contentid": "72952390", "detail": "一个 ai 应用的开发工具" },
      {
        "contentid": "74764989",
        "detail": "业界广泛使用的企业 ai 应用开发平台"
      },
      { "contentid": "74744976", "detail": "自定义 dag 的可视化界面" },
      { "contentid": "74744918", "detail": "按照集群方式管理" },
      { "contentid": "63293315", "detail": "企业客户" },
      { "contentid": "72966024", "detail": "idc 评选的机器学习平台" },
      { "contentid": "72961116", "detail": "一个 ai 应用平台" },
      { "contentid": "72961116", "detail": "一个 ai 应用平台" },
      { "contentid": "72956433", "detail": "一个 paas" },
      { "contentid": "72945088", "detail": "软件版先知" },
      { "contentid": "74744976", "detail": "自定义 dag 的可视化界面" },
      { "contentid": "72942648", "detail": "一个开发工具" },
      { "contentid": "67446919", "detail": "一个人工智能平台" },
      { "contentid": "72222085", "detail": "不断推动 ai 的产业化落地" },
      { "contentid": "72222085", "detail": "不断推动 ai 的产业化落地" },
      { "contentid": "74744918", "detail": "按照集群方式管理" },
      { "contentid": "60125122", "detail": "一个建模工具" },
      { "contentid": "68494311", "detail": "行内的亮点" },
      { "contentid": "68494307", "detail": "多种开源框架" },
      { "contentid": "68494307", "detail": "一个 ai 开发工具" },
      { "contentid": "68492795", "detail": "技术平台的定位" },
      { "contentid": "67437402", "detail": "为互联网行业设计的产品" },
      { "contentid": "65644815", "detail": "一个 sass 平台" }
    ],
    "title": "先知"
  },
  "properties": {
    "依赖于": ["mysql服务", "hdfs上"],
    "做了": ["后端算法升级"],
    "内置": ["chrome浏览器", "mysql binlog清理机制"],
    "分为": ["三个部分"],
    "助力": ["ai应用的全流程人工智能平台"],
    "可以": ["curl命令获取数据"],
    "基于": ["k8s平台"],
    "处于": ["快速发展期"],
    "帮助": ["不会代码建模的业务人员从10分到70分"],
    "废弃掉": ["apiversion"],
    "提供": [
      "即时预估结果相关模块",
      "机器学习模型调研、开发工具",
      "开发自定义算子以及",
      "发布自定义算子等",
      "自定义dag的可视化界面",
      "不同类别应用的debug功能"
    ],
    "支持": [
      "不同语言的功能",
      "数据预处理",
      "所有时间类型",
      "pmml",
      "多个租户",
      "真正意义的多租户"
    ],
    "管理": ["其他相关依赖", "cpu、内存和磁盘等资源的分配"],
    "运行在": ["具有k8s的环境内"],
    "进行": ["离散特征抽取与连续特征抽取、类型转换、特征组合"],
    "隔离为": ["一个一个授信网络环境"],
    "需要": ["有报警系统", "四个配置项", "kafka-bootstrapparams"]
  },
  "title": "先知"
}
```
