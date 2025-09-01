// ---------------- src/app/page.tsx ----------------
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
     <div className="min-h-screen w-full bg-white relative">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.01) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.01) 1px, transparent 1px),
            radial-gradient(circle, rgba(51,65,85,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px, 20px 20px, 20px 20px",
          backgroundPosition: "0 0, 0 0, 0 0",
        }}
      />
      <NavBar />
      <Hero />
      <Shop />
      <About />
      <Testimonials />
      <Footer />

    </div>
  );
}
