import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
// import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
// import Input from "../elements/Input";
import { Link, useHistory } from "react-router-dom";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const ListFeature = ({
  data,
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
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    // <section {...props} className={outerClasses}>
    <div className="has-bottom-divider">
      {data.slice(0, 20).map((element) => {
        const source = element["source-word"] ?? [];

        let result = [];
        for (var word in source) {
          let start = element["paragraph-in-short"].indexOf(word, 0);
          if (start != -1) {
            result.push([start, start + word.length]);
          }
        }
        const url = "/article/query=" + element["contentid"];
        return (
          <div
            className="center-content-mobile has-bottom-divider" //split-item-content
            // data-reveal-container=".split-item"
            style={{ paddingBottom: "10px" }}
          >
            <h3 style={{ fontSize: "18px" }} className="mt-0 mb-4">
              <a href={url}>{element["title"]}</a>
            </h3>

            <p style={{ fontSize: "12px" }} className="m-0">
              {element["paragraph-in-short"]}
            </p>
            <span style={{ fontSize: "6px", paddingRight: "10px" }}>
              {element["updatetime"].slice(0, 10)}
            </span>
            <span> </span>
            {Object.keys(source).map((keyword) => {
              return (
                <span
                  style={{ fontSize: "12px", paddingRight: "6px" }}
                  className="text-xxs text-color-secondary fw-600 tt-u mb-8"
                >
                  {source[keyword]}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
    // </section>
  );
};

ListFeature.propTypes = propTypes;
ListFeature.defaultProps = defaultProps;

export default ListFeature;
