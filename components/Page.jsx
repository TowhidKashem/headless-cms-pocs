import DynamicComponent from "./DynamicComponent";

const Page = ({ blok }) => (
  <>
    <main style={{ border: "10px solid red" }}>
      {blok.body
        ? blok.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </main>
  </>
);

export default Page;
