import type { NextPage } from "next";
import Hero from "@components/Hero";
import Card from "@components/Card";
import List from "@components/List";

const RenderBlok: NextPage<{ blok: any }> = ({ blok }) => {
  const getComponent = (component: string) => {
    const props = {
      // key: blok._uid,
      blok,
    };

    switch (component) {
      case "card":
        return <Card {...props} />;
      case "hero":
        return <Hero {...props} />;
      case "list":
        return <List {...props} />;
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
