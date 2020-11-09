import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const cardFooterClass = classNames("footer-social", className);
  // const sectionHeader = {
  //   title: "Customer testimonials",
  //   paragraph:
  //     "Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.",
  // };

  const cardDetails = [
    "业界广泛使用的企业ai应用开发平台",
    "给应用系统提供最底层的ai内核能力",
    "一个企业级的ai一站式平台",
  ];
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  {cardDetails.map((val) => {
                    return <ul className="text-sm mb-0">{val}</ul>;
                  })}
                </div>
                <div
                  style={{ display: "flex" }}
                  className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider footer-social"
                  // className="testimonial-item-link footer-social"
                >
                  <span className="testimonial-item-name text-color-high">
                    ttt
                  </span>

                  <span>
                    <a href="servicema@4paradigm.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="10"
                        height="10"
                      >
                        {/* <path d="M 46.599,46.599c-1.758,1.758-4.605,1.758-6.363,0.00l-7.941-7.941 C 29.028,40.749, 25.167,42.00, 21.00,42.00c-11.598,0.00-21.00-9.402-21.00-21.00s 9.402-21.00, 21.00-21.00s 21.00,9.402, 21.00,21.00c0.00,4.167-1.251,8.028-3.342,11.295l 7.941,7.941 C 48.357,41.994, 48.357,44.841, 46.599,46.599z M 21.00,6.00C 12.717,6.00, 6.00,12.714, 6.00,21.00s 6.717,15.00, 15.00,15.00c 8.286,0.00, 15.00-6.714, 15.00-15.00S 29.286,6.00, 21.00,6.00z"></path> */}
                        <path
                          d="M10 1c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9zm0 16.615c-4.2 0-7.615-3.416-7.615-7.615C2.385 5.8 5.8 2.385 10 2.385c4.2 0 7.615 3.416 7.615 7.615 0 4.2-3.416 7.615-7.615 7.615z"
                          fill="currentColor"
                        ></path>
                        <path d="M13.664 6.74l-5.05 5.05-2.278-2.28c-.27-.27-.71-.27-.98 0s-.27.71 0 .98l2.77 2.77c.135.134.312.202.49.202.177 0 .354-.068.49-.203l5.537-5.54c.27-.27.27-.708 0-.98-.27-.27-.708-.27-.98 0z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Diana Rynzhuk
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Ben Stafford
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
