import React from "react";
import Image from "next/image";
// import { sbEditable } from "@storyblok/storyblok-editable";

const Card = ({ blok: { thumbnail, title, description } }) => (
  <article className="w-1/3 p-4">
    <Image src={thumbnail.filename} alt="" width={330} height={180} />
    <header className="font-bold font-lg mb-3">{title}</header>
    <p>{description}</p>
  </article>
);

export default Card;
