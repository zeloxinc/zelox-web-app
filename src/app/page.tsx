// ---------------- src/app/page.tsx ----------------
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Shop />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}
