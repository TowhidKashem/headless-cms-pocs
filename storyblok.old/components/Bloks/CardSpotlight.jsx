import React from "react";
import Card from "./Card";
import { sbEditable } from "@storyblok/storyblok-editable";

const CardSpotlight = ({ blok }) => {
  const { title, description, cards } = blok;

  return (
    <section className="card-spotlight" {...sbEditable(blok)}>
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
  );
};

export default CardSpotlight;
