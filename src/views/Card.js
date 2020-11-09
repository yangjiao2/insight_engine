import React from "react";
import classNames from "classnames";
import Graphin, { Utils } from "@antv/graphin";
import "@antv/graphin/dist/index.css"; // 引入Graphin CSS

// import Graphin, { Data, GraphinProps, ForceSimulation } from "@antv/graphin";
// import { ForceLayoutOptions } from "@antv/graphin/dist/layout/basic/force";
// import Point from "@antv/graphin/dist/layout/force/Point";
// import Graph from "@antv/graphin/dist/Graphin";
// import { Node } from "@antv/graphin";
// import { Edge } from "@antv/graphin/dist/layout/force/Elements";

import { SectionTilesProps } from "../utils/SectionProps";
import SectionHeader from "../components/sections/partials/SectionHeader";
import FormLabel from "../../src/components/elements/FormLabel";
import { PageHeader, Tag, Statistic, Descriptions, Row } from "antd";
import Button from "../../src/components/elements/Button";
import ButtonGroup from "../../src/components/elements/ButtonGroup";
import { Fetch } from "react-request";
import { Link, useHistory, useParams } from "react-router-dom";

import "antd/dist/antd.css";
import "@antv/graphin/dist/index.css";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const mockData = {
  articles: [
    {
      id: "14751083",
      people: ["秦一焜", "hudan"],
      title: "营销-中信信用卡中心-期数优化",
    },
    {
      id: "16358762",
      people: ["", "sunyonggang"],
      title: "准线上实验：",
    },
    {
      id: "12331861",
      people: ["", "huangjing"],
      title: "营销-恒丰-理财推荐",
    },
    {
      id: "6947506",
      people: ["", "hanfeng"],
      title: "营销-招商信用卡-白金分期名单推荐",
    },
    {
      id: "12334124",
      people: ["", "gaoxiaowei"],
      title: "信用-光大银行信用卡中心催收",
    },
    {
      id: "16363443",
      people: ["王昱森", "王明", "袁斌", "王萌", "陈潇", "yuanbin"],
      title: "营销-交通银行-睡眠客户唤醒",
    },
    { id: "16362501", people: ["", "zhangzhenyu"], title: "数据相关" },
    {
      id: "28164450",
      people: ["孙永刚", "何晓东", "马亚光", "刘勇", "sunyonggang"],
      title: "风险-外贸信托-个人信用评分",
    },
    {
      id: "50566170",
      people: ["", "liuyong"],
      title: "风险-华夏银行信用卡中心-M2 逾期",
    },
    { id: "51924988", people: ["", "zhaoshize"], title: "先知 EE 迁移" },
    {
      id: "34968131",
      people: ["", "chenhao"],
      title: "欺诈-广发-境外交易深度学习",
    },
    {
      id: "24288398",
      people: ["马亚", "高晓", "gaoxiaowei"],
      title: "风险-民生总行零售风险部-小微企业信用风险评估",
    },
    {
      id: "16359536",
      people: [
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
        "yulijing",
      ],
      title: "营销 - 广发- 通用推荐",
    },
    {
      id: "53552330",
      people: ["陈音", "严萍萍", "chenyan"],
      title: "欺诈—浦发养卡识别",
    },
    {
      id: "65022510",
      people: ["", "qinchuan"],
      title: "欺诈-工行风险管理部-信用卡申请反欺诈二期交付",
    },
    {
      id: "65027486",
      people: ["", "guanlei"],
      title: "工行融 e 借贷款产品营销（天天惠替代场景）",
    },
  ],
  detail: {
    detail: [
      { contentid: "75561035", detail: "一个企业级的 ai 一站式平台" },
      { contentid: "72972958", detail: "企业级软件" },
      { contentid: "32322652", detail: "一个强大的 ai 核心平台" },
      { contentid: "75560424", detail: "很多强力的技术工具" },
      { contentid: "75561424", detail: "很多强力的工具" },
      { contentid: "75561424", detail: "很多强力的工具" },
      {
        contentid: "75539187",
        detail: "给应用系统提供最底层的 ai 内核能力",
      },
      { contentid: "72972958", detail: "企业级软件" },
      { contentid: "72952390", detail: "一个 ai 应用的开发工具" },
      {
        contentid: "74764989",
        detail: "业界广泛使用的企业 ai 应用开发平台",
      },
      { contentid: "74744976", detail: "自定义 dag 的可视化界面" },
      { contentid: "74744918", detail: "按照集群方式管理" },
      { contentid: "63293315", detail: "企业客户" },
      { contentid: "72966024", detail: "idc 评选的机器学习平台" },
      { contentid: "72961116", detail: "一个 ai 应用平台" },
      { contentid: "72961116", detail: "一个 ai 应用平台" },
      { contentid: "72956433", detail: "一个 paas" },
      { contentid: "72945088", detail: "软件版先知" },
      { contentid: "74744976", detail: "自定义 dag 的可视化界面" },
      { contentid: "72942648", detail: "一个开发工具" },
      { contentid: "67446919", detail: "一个人工智能平台" },
      { contentid: "67437402", detail: "为互联网行业设计的产品" },
      { contentid: "65644815", detail: "一个 sass 平台" },
    ],
    title: "先知",
  },
  properties: {
    依赖于: ["mysql服务", "hdfs上"],
    做了: ["后端算法升级"],
    内置: ["chrome浏览器", "mysql binlog清理机制"],
    分为: ["三个部分"],
    助力: ["ai应用的全流程人工智能平台"],
    可以: ["curl命令获取数据"],
    基于: ["k8s平台"],
    处于: ["快速发展期"],
    帮助: ["不会代码建模的业务人员从10分到70分"],
    废弃掉: ["apiversion"],
    提供: [
      "即时预估结果相关模块",
      "机器学习模型调研、开发工具",
      "开发自定义算子以及",
      "发布自定义算子等",
      "自定义dag的可视化界面",
      "不同类别应用的debug功能",
    ],
    支持: [
      "不同语言的功能",
      "数据预处理",
      "所有时间类型",
      "pmml",
      "多个租户",
      "真正意义的多租户",
    ],
    管理: ["其他相关依赖", "cpu、内存和磁盘等资源的分配"],
    运行在: ["具有k8s的环境内"],
    进行: ["离散特征抽取与连续特征抽取、类型转换、特征组合"],
    隔离为: ["一个一个授信网络环境"],
    需要: ["有报警系统", "四个配置项", "kafka-bootstrapparams"],
  },
  title: "先知",
};

const Card = ({
  query,
  data,
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const cardFooterClass = classNames("footer-social", className);
  const { queryText } = useParams();
  const HOST = "http://172.27.128.72:5035/card?";
  return (
    <Fetch url={HOST + queryText}>
      {({ fetching, failed, data }) => {
        if (fetching) {
          return <div>Loading data...</div>;
        }

        if (failed) {
          return <div>The request did not succeed.</div>;
        }
        if (data) {
          const { properties, title, articles, detail } = data;
          const detailList = detail.detail;
          const graphin_data = data["people"];
          const { nodes, edge } = graphin_data;
          console.log("g node", graphin_data);
          console.log("g edge", edge);

          return (
            <section {...props} className={outerClasses}>
              <div className=" container">
                <h2>{title}</h2>
                <div
                  style={{ fontSize: "16px" }}
                  className="hero-content split-item-content center-content-mobile"
                >
                  <ButtonGroup>
                    {Object.keys(detailList).map((d_index) => {
                      const wikiUrl =
                        "https://wiki.4paradigm.com/pages/viewpage.action?pageId=" +
                        detailList[d_index].contentid;
                      return (
                        <div className="pricing-item-cta mb-8">
                          <Button
                            tag="a"
                            color="secondary"
                            style={{ color: "white", margin: "4px" }}
                            href={wikiUrl}
                            size="sm"
                          >
                            {detailList[d_index].detail}
                          </Button>
                        </div>
                      );
                    })}
                  </ButtonGroup>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    {Object.keys(properties).map((property_label) => {
                      const labelList = properties[property_label];
                      return (
                        <div className="is-boxed space-between">
                          <span className="testimonial-item-name text-color-high">
                            {property_label}
                          </span>
                          <span className="text-color-low"> | </span>
                          <span className="testimonial-item-link">
                            {labelList.map((label) => {
                              // console.log("label", label);
                              return (
                                <span
                                  style={{
                                    paddingLeft: "8px",
                                  }}
                                  className="bg-light-primary testimonial-item-link"
                                >
                                  <a href="#0">{label}</a>
                                </span>
                              );
                            })}
                            {/* <a href="#0">{properties[property_label]}</a> */}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  {articles.map((article) => {
                    console.log("article", article);
                    const articleURL = "/article/query=" + article.id;
                    return (
                      <div className="tiles-item">
                        <div className="tiles-item-inner">
                          <div className="team-item-header">
                            <Link to={articleURL}>{article.title}</Link>
                          </div>
                          <div className="team-item-content">
                            <div className="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                              <span>相关人员: </span>
                              {article.people
                                .filter((ppl) => ppl != "")
                                .join(" & ")}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <Graphin data={data["people"]} />
                </div>
              </div>
            </section>
          );
        }
      }}
    </Fetch>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;

{
  /* <Button
                      tag="a"
                      color="primary"
                      href="/secondary"
                      wideMobile
                    >
                      Learn More
                    </Button> */
}
