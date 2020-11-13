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
import SearchResultRenderer from "./SearchResultRenderer";
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

        if (data) {
          return <SearchResultRenderer data={data}> </SearchResultRenderer>;
        }
        return null;
      }}
    </Fetch>
  );
};
export default Search;
