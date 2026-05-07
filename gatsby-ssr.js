import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="referrer-policy"
      name="referrer"
      content="strict-origin-when-cross-origin"
    />,
  ]);
};
