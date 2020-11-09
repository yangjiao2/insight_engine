import React, { useState, useEffect, useCallback } from "react";
// import sections
import { useParams } from "react-router-dom";
import { Fetch } from "react-request";
import SearchFeature from "../components/sections/SearchFeature";
import SelectorFeature from "../components/sections/SelectorFeature";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import CardFeature from "../components/sections/CardFeature";
import Cta from "../components/sections/Cta";
// import { Form, Input, Button, Checkbox } from "antd";
import { Layout } from "antd";
import Article from "../components/sections/Article2";
import ListFeature from "../components/sections/ListFeature";

import ButtonGroup from "../components/elements/ButtonGroup";
import Button from "../components/elements/Button";

const { Header, Footer, Sider, Content } = Layout;

const Search2 = ({
  data,
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
  const { searchQuery } = useParams();

  console.log("->2", searchQuery);
  const [selectedKeyword, setSelectedKeyword] = useState([]);

  const article = data["articles"];
  console.log("artile->2", article, selectedKeyword);
  const filteredArticle = article.filter((a) => {
    if (selectedKeyword.length == 0) {
      return true;
    }

    return selectedKeyword.some((w) => a["keywords"].includes(w));
  });
  return (
    <>
      <SearchFeature
        className="illustration-section-01"
        topOuterDivider={false}
        bottomOuterDivider={false}
        topDivider={false}
        bottomDivide={false}
        sectionInner={false}
        searchQuery={searchQuery}
      />
      <div className="container">
        <section>
          <div style={{ margin: "18px 0 0 16px" }}>
            <ButtonGroup
              className="lzpStyle"
              defaultValue="GL"
              buttonStyle="solid"
            >
              {selectedKeyword.map((label) => {
                console.log("===>标签", selectedKeyword);
                return (
                  <Button
                    key={label}
                    className="button button-primary button-wide-mobile button-sm"
                    style={{ padding: "4px", height: "28px" }}
                    onClick={(val) => {
                      setSelectedKeyword((val) => {
                        // console.log("====", val);
                        let ssk = [...selectedKeyword];
                        ssk.pop(val);
                        // selectedKeyword.pop(val);
                        return ssk;
                      });
                    }}
                  >
                    {label}
                  </Button>
                );
              })}
            </ButtonGroup>
          </div>
        </section>
      </div>
      <div className="container">
        <SelectorFeature
          data={data["keywords"]}
          selectedKeyword={selectedKeyword}
          handleInsertWord={(val) => {
            setSelectedKeyword((sk) => {
              const index = val.indexOf("(");
              const res = val.slice(0, index);
              if (sk.includes(res)) {
                return [...sk];
              }
              return [...sk, res];
            });
          }}
          showWords={selectedKeyword.join(" | ")}
        />
        <div class="split-wrap">
          <div
            style={{ alignItems: "baseline", paddingTop: "0px" }}
            class="split-item"
          >
            <div class="center-content-mobile" style={{ width: "65%" }}>
              <ListFeature
                class="m-0"
                data={filteredArticle}
                bottomDivider
                topDivider
                bottomOuterDivider
              ></ListFeature>
            </div>
            <div class="split-item-image" style={{ width: "30%" }}>
              <CardFeature class="m-0" data={data["cards"]}></CardFeature>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Search2;
