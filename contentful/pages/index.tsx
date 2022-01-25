import { useEffect, useState } from "react";
import { createClient } from "contentful";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Person, { PersonType } from "@components/Person";

const Home: NextPage<{
  readonly CONTENTFUL_SPACE_TOKEN: string;
  readonly CONTENTFUL_ACCESS_TOKEN: string;
}> = ({ CONTENTFUL_SPACE_TOKEN, CONTENTFUL_ACCESS_TOKEN }) => {
  const client = createClient({
    space: CONTENTFUL_SPACE_TOKEN,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });

  const [people, setPeople] = useState<PersonType[]>([]);

  useEffect(() => {
    client.getEntries().then(function (entries) {
      console.log("entries", entries);
      const people = entries.items.map(({ fields }) => fields);
      setPeople(people as PersonType[]);
    });
  }, []);

  return (
    <div className={styles.container}>
      {people.map((person) => (
        <Person key={Math.random()} person={person} />
      ))}
    </div>
  );
};

export async function getStaticProps({ preview = false }) {
  return {
    props: {
      CONTENTFUL_SPACE_TOKEN: process.env.CONTENTFUL_SPACE_TOKEN,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  };
}

export default Home;
