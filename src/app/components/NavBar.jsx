import Section from "./ui/Section";
import Anchor from "./ui/Anchor";
import { FaArrowRight } from "react-icons/fa";


function NavBar() {
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <Section className="flex items-center justify-between py-3">
        <a href="#top" className="font-black tracking-tight text-xl">
          <span className="mr-2 inline-block h-6 w-6 rounded bg-black" />
          Zelox<span className="text-neutral-500">Industries</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <a href="#shop" className="hover:text-black">Products</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#testimonials" className="hover:text-black">Test`9imonials</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Anchor href="https://wa.me/+254112099003">Talk to Sales <FaArrowRight /></Anchor>
        </div>
      </Section>
    </div>
  );
}

export default NavBar;