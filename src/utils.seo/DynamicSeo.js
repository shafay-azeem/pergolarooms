import React from "react";
import MetaTags from "react-meta-tags";

const DynamicSeo = (props) => {
  return (
    <>
      <MetaTags>
        <meta charSet="utf-8" />
        <title>{props?.title}</title>
        <meta name="description" content={props?.description} />
      </MetaTags>
    </>
  );
};

export default DynamicSeo;
