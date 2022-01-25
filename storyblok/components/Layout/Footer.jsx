import Image from "next/image";

const Footer = () => {
  const getList = (key) => (
    <ul key={key}>
      <li>Solutions</li>
      <li>Social Media</li>
      <li>Digital Marketing</li>
      <li>Customer Service</li>
      <li>For Developers</li>
    </ul>
  );

  return (
    <footer className="center flex">
      <section>{getList()}</section>

      <section className="flex">
        {new Array(5).fill(null).map((_, index) => getList(index))}
      </section>

      <section>
        <Image
          className="h-8 w-auto sm:h-10"
          src="https://docrdsfx76ssb.cloudfront.net/static/1642175923/pages/wp-content/uploads/2021/08/bitly_logo.svg"
          alt=""
          width={100}
          height={50}
        />
        <p>
          &copy; 2022 Bitly | Handmade in San Francisco, Denver, New York City,
          Bielefeld, and all over the world.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
