import styles from "../styles/Home.module.css";

const About = ({ story, preview }) => {
  return (
    <div className={styles.container}>
      <header>
        <h1>About Page</h1>
      </header>

      <p>This is the about page</p>
    </div>
  );
};

export default About;
