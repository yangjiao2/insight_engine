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

const TileFeature = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  const history = useHistory();

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const keyPress = (e) => {
    alert("pres");
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const onSearch = (e) => {
    console.log(e.value);
    history.push(`/search/query=${e.target.value}`);
    // browserHistory.push("/search/query=" + val);
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

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="split-item">
            <div
              className="split-item-content center-content-mobile reveal-from-left"
              data-reveal-container=".split-item"
            >
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Lightning fast workflow
              </div>
              <h3 className="mt-0 mb-12">Data-driven insights</h3>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div
              className={classNames(
                "split-item-image center-content-mobile reveal-from-bottom",
                imageFill && "split-item-image-fill"
              )}
              data-reveal-container=".split-item"
            >
              <Image
                src={require("./../../assets/images/features-split-image-01.png")}
                alt="Features split 01"
                width={528}
                height={396}
              />
            </div>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

TileFeature.propTypes = propTypes;
TileFeature.defaultProps = defaultProps;

export default TileFeature;
