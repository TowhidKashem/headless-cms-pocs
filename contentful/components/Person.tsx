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
    <article className="person">
      <h2>{name}</h2>
      <p>{isMan ? "Man" : "Woman"}</p>
      <p>DOB: {dob}</p>
    </article>
  );
};

export default Person;
