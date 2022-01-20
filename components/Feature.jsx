import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

const Feature = ({ blok }) => (
  <main className="column feature" {...sbEditable(blok)}>
    {blok.name}
  </main>
);

export default Feature;
