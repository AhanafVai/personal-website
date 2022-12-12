import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mx-5 my-5 lg:mx-20">{children}</main>
      <Footer />
    </>
  );
}
