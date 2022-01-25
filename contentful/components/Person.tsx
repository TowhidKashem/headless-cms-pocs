import type { NextPage } from "next";

export type PersonType = {
  name: string;
  isMan: boolean;
  dob: string;
};

const Person: NextPage<{
  person: PersonType;
}> = ({ person }) => {
  const { name, isMan, dob } = person;

  return (
    <article
      style={{ border: "1px solid #ccc", marginBottom: 10, padding: 15 }}
    >
      <h2>{name}</h2>
      <p>{isMan ? "Man" : "Woman"}</p>
      <p>DOB: {dob}</p>
    </article>
  );
};

export default Person;
