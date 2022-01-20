import React from "react";
import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";
import Page from "./Page";

const DynamicComponent = ({ blok }) => {
  const getComponent = (component) => {
    const props = {
      key: blok._uid,
      blok,
    };

    console.log(component);

    switch (component) {
      case "teaser":
        return <Teaser {...props} />;
      case "grid":
        return <Grid {...props} />;
      case "feature":
        return <Feature {...props} />;
      case "page":
        return <Page {...props} />;
      default:
        return (
          <p>
            The component <strong>{blok.component}</strong> has not been created
            yet.
          </p>
        );
    }
  };

  return getComponent(blok.component);
};

export default DynamicComponent;
