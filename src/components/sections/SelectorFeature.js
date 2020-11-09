import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import Checkbox from "../elements/Checkbox";
import Select from "../elements/Select";
// import Input from "../elements/Input";
import { Link, useHistory } from "react-router-dom";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

import { Row, Col, Card, Radio } from "antd";

import { Form } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import Accordion from "../elements/Accordion";
import AccordionItem from "../elements/AccordionItem";

// const { SubMenu } = Menu;
// const { Search } = Input;
// Button, Input
const Search = Input.Search;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const SelectorFeature = ({
  data,
  selectedKeyword,
  showWords,
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const history = useHistory();
  const outerClasses = classNames(
    // "hero section center-content",
    // topOuterDivider && "has-top-divider",
    // bottomOuterDivider && "has-bottom-divider",
    // hasBgColor && "has-bg-color",
    // invertColor && "invert-color",
    className
  );

  const innerClasses = classNames();
  // "hero-inner section-inner",
  // topDivider && "has-top-divider",
  // bottomDivider && "has-bottom-divider"

  const onSearch = (e) => {
    history.push(`/search/query=${e.target.value}`);
    // browserHistory.push("/search/query=" + val);
  };

  const formLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const formTailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const [isLoading, setLoading] = useState(false);
  const categories = ["场景", "公司", "人员", "产品", "技术", "行业"];
  console.log("props.selectedKeyword", selectedKeyword);
  console.log("props.showWords", showWords);
  const words = selectedKeyword;
  const [word, setWord] = useState(selectedKeyword);
  // alert(word);
  return (
    <section {...props} className={outerClasses}>
      <div className="features-split-inner">
        {/* <ButtonGroup className="button-group" direction="horizontal">
          <div style={{ margin: "18px 0 0 16px" }}>
            <ButtonGroup
              className="lzpStyle"
              defaultValue="GL"
              buttonStyle="solid"
            >
              {words.map((label) => {
                console.log("sssssss", label);
                return (
                  <Button
                    key={showWords}
                    className="button button-primary button-wide-mobile button-sm"
                    style={{ padding: "4px", height: "28px" }}
                  >
                    {label}
                  </Button>
                );
              })}
            </ButtonGroup>
          </div>
        </ButtonGroup> */}
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Accordion>
          <AccordionItem active>
            <Form
              // {...formLayout}
              // labelCol={{ span: 4 }}
              // wrapperCol={{ span: 14 }}
              initialValues={{ remember: true }}
              size="default"
            >
              {categories.map((category) => {
                // if (data[category].size == 0) {
                //   return <></>;
                // }
                return (
                  <Form.Item name="category">
                    <h7
                      style={{
                        display: "inline",
                        paddingRight: "16px",
                        color: "#5658dd",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                      className="category-item-name mt-0 mb-4"
                    >
                      {category}
                    </h7>
                    {data[category].slice(0, 5).map((label) => {
                      const idx = label.indexOf("(");
                      const n_label = label.slice(0, idx);
                      const c = selectedKeyword.includes(n_label);
                      return (
                        <Checkbox
                          value={label}
                          checked={c}
                          onClick={(e) => {
                            const val = e.target.value;
                            // setSelectedKeyword(pre);
                            props.handleInsertWord(val);
                          }}
                        >
                          <span style={{ margin: "0 2px  0 6px" }}>
                            {label}
                          </span>
                        </Checkbox>
                      );
                    })}
                  </Form.Item>
                );
              })}
            </Form>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

SelectorFeature.propTypes = propTypes;
SelectorFeature.defaultProps = defaultProps;

export default SelectorFeature;
