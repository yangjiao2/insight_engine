import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Link, useHistory, useParams } from "react-router-dom";
// import Header from "../components/layout/Header";
// import Footer from "../components/layout/Footer";

import ReactMarkdown from "react-markdown";
import { render } from "react-dom";
import gfm from "remark-gfm";
import { Fetch } from "react-request";

import Button from "../../src/components/elements/Button";
import ButtonGroup from "../../src/components/elements/ButtonGroup";

const Article = ({
  children,
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  sectionInner,
  shrinkInner,
  ...props
}) => {
  // const data = {
  //   title: "备忘",
  //   content:
  //     "业务上还是看还款，样本确认为以5天后所有M1逾期账户的最低还款额已经还上为准\n\n1. 并不是看入催客户的所有账户，而是看入催客户的M1逾期账户，入催客户的账户级分配信息表中，在M1委案当天的CD值>=2的账户为M1逾期账户\n2. 因为业务逻辑上有其他降CD值的逻辑，但是催收还是关注还款\n**建模目标**：对M1入催客户实现差异化催收，识别出轻度催收即会还款的客户，推迟电话催收的介入时间点，前期沟通确定的推迟电催窗口期为5天。\n**建模范围**：目前M1入催以后走正常催收流程的客户，排除a. 一人多户账单日不统一的客户 b. 走建议分期流程的客户 c. 乐惠金、智能商户卡等特殊卡种（**请行里的老师帮忙标注附件中需排除的卡种**）\n**样本判别**：对M1入催客户的所有M1逾期的账户，全部在窗口期内还够最低还款额，即为“好客户”，否则为“坏客户”。\n\n1. 这里关注还款行为的账户，为客户的所有M1逾期的账户，不是客户的所有欠款账户。前期沟通了解到对一个人有多个账户的情况下，只要有1个账户出现M1逾期，就会将所有的欠款账户都放入催收系统。\n2. 所有的M1逾期账户均需要还够最低还款额\n3. M1逾期账户的判别方式是看账户级信息分配表中，在M1放单时的CD值大于等于2的账户\n4. 窗口期的起始时间点取客户级分配信息表中的M1阶段的放单时间\n\n\n\n构造样本的时候要排除特殊卡种\n一个人有多个账单日的样本可以排除\n\n如果宽表数据2016年缺失的3天数据不可恢复，那构造样本的时候考虑排除掉账单日是16日的样本\n后面讨论，可以使用客户级分配信息中的客户级ID(syskey+放单时间)去left join账户级分配信息中的客户ID，得到放单时间与最低还款额，去做还款表的时间窗口，在(5天)时间内还款总额不小于最低还款额，可以设计flag为true，后面对客户级ID做groupby，flag都为true就为正样本，否则为负样本\n\n\n目前入催的人分了两拨，一拨走正常催收流程，一拨走建议分期\n分期以后CD值降下来出催和还款以后CD值降下来出催是不一样的含义，宣淇想把给多元建议分期的人拿过来催，但是考虑到行为的差异，需要单独建模\n\n客户及信息分配表催收组JYFQ 10天 建议分期M1FYH-（公司名） 20天 (分月还)\n\n建模的时候需要过滤掉这些\n\n",
  // };
  const [videoModalActive, setVideomodalactive] = useState(false);
  const { id } = useParams();
  // console.log(param);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner",
    sectionInner && "section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );
  const HOST = "http://172.27.128.72:5035/article?";

  // const id = "63307443";
  return (
    <Fetch url={HOST + id}>
      {({ fetching, failed, data }) => {
        if (fetching) {
          return <div>Loading data...</div>;
        }
        if (failed) {
          return <div>The request did not succeed.</div>;
        }
        if (data) {
          console.log("data", data);
          const cardWord = data["card_words"];
          return (
            <>
              {(data.title || data.paragraph) && (
                <div {...props} className={outerClasses}>
                  <div className="container-xs footer-block">
                    <div
                      style={{
                        fontWeight: 800,
                        color: "#6163ff",
                        fontSize: "30px",
                      }}
                      className="site-footer-inner"
                    >
                      {data.title}
                    </div>
                    <div style={{ display: "flex" }}>
                      <span
                        style={{
                          color: "#e9e9ff",
                          fontSize: "18px",
                          fontWeight: 2200,
                          // fontWeight: bold,
                        }}
                      >
                        知识卡片 :
                      </span>
                      <ButtonGroup>
                        {Object.keys(cardWord).map((word) => {
                          const wikiUrl = "/card/query=" + cardWord[word];
                          return (
                            <div className="pricing-item-cta mb-8">
                              <Link to={wikiUrl}>
                                <Button
                                  tag="a"
                                  color="secondary"
                                  style={{ color: "white", margin: "4px" }}
                                  // href={wikiUrl}
                                  size="sm"
                                >
                                  {cardWord[word]}
                                </Button>
                              </Link>
                            </div>
                          );
                        })}
                      </ButtonGroup>
                    </div>

                    {data.content && (
                      <p className="footer-block-title">
                        <ReactMarkdown
                          plugins={[gfm]}
                          children={data.content}
                        />
                      </p>
                    )}
                    {children}
                  </div>
                </div>
              )}
            </>
          );
        }

        return null;
      }}
    </Fetch>
  );
};
export default Article;
