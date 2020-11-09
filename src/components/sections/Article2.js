import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Modal from "../elements/Modal";
import Select from "../elements/Select";
import { Link, useHistory, useParams } from "react-router-dom";
// import Header from "../components/layout/Header";
// import Footer from "../components/layout/Footer";
import ReactMarkdown from "react-markdown";
import { render } from "react-dom";
import gfm from "remark-gfm";

const Article2 = ({
  data,
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
  const [videoModalActive, setVideomodalactive] = useState(false);
  const history = useHistory();
  const { param } = useParams();
  console.log(param);

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
  return (
    <>
      {/* <Header navPosition="right" className="reveal-from-bottom" /> */}
      {(data.title || data.paragraph) && (
        <div {...props} className={outerClasses}>
          <div className="container-xs footer-block">
            <div className="site-footer-inner">{data.title}</div>
            {data.content && (
              <p className="footer-block-title">
                <ReactMarkdown plugins={[gfm]} children={data.content} />
              </p>
            )}
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default Article2;
