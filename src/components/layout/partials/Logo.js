import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <a href="https://www.4paradigm.com/">
          <Image
            src="https://www.4paradigm.com/images/thumbs/0000016_logo.png"
            alt="4Paradigm"
            width={100}
            height={32}
          />
        </a>
      </h1>
    </div>
  );
};

export default Logo;
