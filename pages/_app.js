import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <div>
      <Header />

      <section className="center">
        <Component {...pageProps} />
      </section>

      <section style={{ background: "#ff6116" }}>
        <section className="center text-white py-6">
          <p>
            Bitly is excited to announce the acquisition of QR Code Generator,
            the world's leading QR code platform. Check out our combined
            capabilities.
          </p>
        </section>
      </section>

      <section style={{ background: "#0b1736" }}>
        <section className="center text-center py-8">
          <h2 className="font-semibold text-3xl text-white mb-5">
            More than a link shortener
          </h2>
          <button className="btn">Get Started for Free</button>
        </section>
      </section>

      <Footer />
    </div>
  );
}

export default App;
