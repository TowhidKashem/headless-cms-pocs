import type { NextPage } from "next";
import type { CardSpotlightStoryblok } from "storyblok.types";
import SbEditable from "storyblok-react";
import Card from "@components/Card";

const CardSpotlight: NextPage<{ blok: CardSpotlightStoryblok }> = ({
  blok,
}) => {
  const { title, description, cards } = blok;

  return (
    <SbEditable content={blok}>
      <section className="card-spotlight">
        <header className="text-3xl text-center font-extrabold mb-3">
          {title}
        </header>

        <p className="text-center text-lg mb-10">{description}</p>

        <div className="flex mb-10">
          {cards.map((card) => (
            <Card key={card._uid} blok={card} />
          ))}
        </div>
      </section>
    </SbEditable>
  );
};

export default CardSpotlight;
