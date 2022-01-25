import type { NextPage } from "next";

const Layout: NextPage = ({ children }) => {
  return (
    <div className="bitly">
      <header className="header">hello world</header>
      <section className="stage">
        <main className="content">{children}</main>
        <aside className="sidebar"></aside>
      </section>
      <footer className="footer">goodbye world</footer>
    </div>
  );
};

export default Layout;
