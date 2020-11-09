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

import ButtonGroup from "../../src/components/elements/ButtonGroup";
import Button from "../../src/components/elements/Button";
import Search2 from "./Search2";
const { Header, Footer, Sider, Content } = Layout;

const Search = ({
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
  const { searchQuery } = useParams();
  const HOST = "http://172.27.128.72:5035/search?";
  const id = searchQuery;

  console.log("->", searchQuery);
  const [selectedKeyword, setSelectedKeyword] = useState([""]);
  const handleInsertWord = useCallback(
    (val) => {
      let changepre = selectedKeyword;
      changepre.push(val);
      setSelectedKeyword(changepre);
      console.log("handleInsertWord selectedKeyword", changepre);
    },
    [selectedKeyword, setSelectedKeyword]
  );

  return (
    <Fetch url={HOST + id}>
      {({ fetching, failed, data }) => {
        if (fetching) {
          return <div>Loading data...</div>;
        }
        if (failed) {
          return <div>The request did not succeed.</div>;
        }
        console.log("search", data);

        console.log("serach");
        if (data) {
          return <Search2 data={data}> </Search2>;
          // const article = data["articles"];
          // console.log(article);
          // console.log(selectedKeyword);
          // const filterArticle = (articless, keywordss) => {
          //   if (keywordss.length != 0) {
          //     return articless.filter((article) => {
          //       console.log('article["keywords"].some', article["keywords"]);
          //       return article["keywords"].some((element) =>
          //         keywordss.includes(element)
          //       );
          //     });
          //   }
          //   return articless;
          // };

          // return (
          //   <>
          //     <SearchFeature
          //       className="illustration-section-01"
          //       topOuterDivider={false}
          //       bottomOuterDivider={false}
          //       topDivider={false}
          //       bottomDivide={false}
          //       sectionInner={false}
          //       searchQuery={searchQuery}
          //     />
          //     <>
          //       <div style={{ margin: "18px 0 0 16px" }}>
          //         <h4>标签: </h4>
          //         <ButtonGroup
          //           className="lzpStyle"
          //           defaultValue="GL"
          //           buttonStyle="solid"
          //         >
          //           {selectedKeyword.map((label) => {
          //             console.log("aaa", selectedKeyword);
          //             return (
          //               <Button
          //                 key={label}
          //                 className="button button-primary button-wide-mobile button-sm"
          //                 style={{ padding: "4px", height: "28px" }}
          //               >
          //                 {label}
          //               </Button>
          //             );
          //           })}
          //         </ButtonGroup>
          //       </div>
          //     </>
          //     <div className="container">
          //       <SelectorFeature
          //         data={data["keywords"]}
          //         selectedKeyword={selectedKeyword}
          //         handleInsertWord={handleInsertWord}
          //         showWords={selectedKeyword.join(" | ")}
          //       />
          //       <div class="split-wrap">
          //         <div
          //           style={{ alignItems: "baseline", paddingTop: "0px" }}
          //           class="split-item"
          //         >
          //           <div class="center-content-mobile" style={{ width: "65%" }}>
          //             <ListFeature
          //               class="m-0"
          //               data={article}
          //               bottomDivider
          //               topDivider
          //               bottomOuterDivider
          //             ></ListFeature>
          //           </div>
          //           <div class="split-item-image" style={{ width: "30%" }}>
          //             <CardFeature
          //               class="m-0"
          //               data={data["cards"]}
          //             ></CardFeature>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //   </>
          // );
        }
        return null;
      }}
    </Fetch>
  );
};
export default Search;
