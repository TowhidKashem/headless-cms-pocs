import React from "react";
import Hero from "./Bloks/Hero";
import Card from "./Bloks/Card";

const RenderBlok = ({ blok }) => {
  const getComponent = (component) => {
    const props = {
      key: blok._uid,
      blok,
    };

    // console.log(component);

    switch (component) {
      case "card":
        return <Card {...props} />;
      case "hero":
        return <Hero {...props} />;
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

export default RenderBlok;
