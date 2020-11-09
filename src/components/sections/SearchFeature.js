import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
// import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
// import Input from "../elements/Input";
import { Link, useHistory, useParams } from "react-router-dom";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Fetch } from "react-request";

const { Search } = Input;

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

// const SearchInputSubmit = ({}) => {
//   const [value, setValue] = useState("");
//   return (
//     <Input
//       type="text"
//       placeholder={"🔍"}
//       value={value}
//       onChange={(event) => setValue(event.target.value)}
//     />
//   );
// };

const SearchFeature = ({
  searchQuery,
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
  const [queryText, setQueryText] = useState(searchQuery);
  const history = useHistory();
  const { param } = useParams();
  console.log(param);

  const outerClasses = classNames(
    "hero section center-content",
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

  const onSearch = (val) => {
    const HOST = "http://172.27.128.72:5035/search?query=";
    console.log("onSearch val", queryText);

    history.push(`/search/query=${queryText}`, { searchQuery: queryText });
    // return (
    //   <Fetch url={HOST + queryText}>
    //     {({ fetching, failed, data }) => {
    //       if (fetching) {
    //         return <div>Loading data...</div>;
    //       }
    //       alert("fetching", fetching);
    //       alert("failed", failed);
    //       if (failed) {
    //         return <div>The request did not succeed.</div>;
    //       }
    //       alert("data", data);
    //       if (data) {
    //       }

    //       return null;
    //     }}
    //   </Fetch>
    // );
  };

  const onFocus = (e) => {
    // alert(e);
    // history.push(`/search/query=${e.target}`);
    // browserHistory.push("/search/query=" + val);
  };
  const [isLoading, setLoading] = useState(false);

  const btnclasses = classNames(
    "button",
    "button-primary",
    "button-wide-mobile"
  );
  console.log("searchQuery", props.searchQuery);
  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              {/* Landing template for <span className="text-color-primary">startups</span>
               */}
            </h1>
            <div className={shrinkInner && "container-xs"}>
              {/* <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
                s
              >
                打开新世界的大门
              </p> */}

              <Input
                className="reveal-from-bottom illustration-element-01 form-input"
                style={{ padding: "16px" }}
                placeholder={props.searchQuery ?? "🔍"}
                // allowClear
                enterButton="Search"
                onChange={(e) => {
                  // console.log("onChange", e.target.value);
                  setQueryText(e.target.value);
                }}
                onPressEnter={(e) => onSearch(e)}
              />
            </div>
          </div>
          {/* <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/video-placeholder.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div> */}
          {/* <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          /> */}
        </div>
      </div>
    </section>
  );
};

SearchFeature.propTypes = propTypes;
SearchFeature.defaultProps = defaultProps;

export default SearchFeature;
