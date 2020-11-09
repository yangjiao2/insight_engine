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

const PeopleCardFeature = ({
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
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );
  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "相关人员",
  };
  s;
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

  const peopleRender = (name) => {
    return (
      <div className="tiles-item reveal-from-bottom">
        <div className="tiles-item-inner">
          <div className="team-item-header">
            <div className="team-item-image mb-24">
              {/* <Image alt="member 01" width={180} height={180} /> */}
            </div>
          </div>
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-4">{name}</h5>
            {/* <div className="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
              Co-founder
            </div>
            <p className="m-0 text-sm">UofT CS student heading into 2nd year</p> */}
          </div>
        </div>
      </div>
    );
  };
  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content reveal-from-bottom"
          />
          <div className={tilesClasses}>
            {["aaa"].map((name) => {
              return peopleRender(name);
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

PeopleCardFeature.propTypes = propTypes;
PeopleCardFeature.defaultProps = defaultProps;

export default PeopleCardFeature;
