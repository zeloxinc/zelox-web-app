import Section from "./ui/Section";
import { products } from "../data/data";
import { socialLinks } from "../data/data";

function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-900 bg-white">
      <Section id="contact" className="py-12 md:py-16"> {/* 👈 Added id="contact" */}
        {/* Staggered Grid — using CSS classes for animation */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 animate-stagger-container">
          {/* Column 1 */}
          <div className="animate-fade-up-delay-0">
            <div className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <span className="inline-block h-6 w-6 rounded bg-gray-900" />
              ZELOX Industries
            </div>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Premium software. Minimalist design. Enterprise impact.
            </p>
          </div>

          {/* Column 2: Products */}
          <div className="animate-fade-up-delay-1">
            <h4 className="font-semibold text-gray-900 mb-3">Products</h4>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="animate-fade-up-delay-2">
            <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-sm text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/zeloxinc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="animate-fade-up-delay-3">
            <h4 className="font-semibold text-gray-900 mb-3">Connect</h4>
            <div className="flex flex-col gap-3">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/+254112099003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-full hover:bg-green-600 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Chat on WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 2.326c-4.567 0-8.23 3.71-8.23 8.23 0 1.45.38 2.83 1.07 4.02L.5 15.5l1.4-1.122c1.15.8 2.48 1.22 3.87 1.22 4.567 0 8.23-3.71 8.23-8.23 0-.78-.14-1.55-.4-2.28l1.07-1.122A7.854 7.854 0 0 0 13.6 2.326zM7.994 13.6c-2.21 0-4.01-1.8-4.01-4.01 0-1.07.32-2.05.91-2.85l1.55 1.55c.28-.21.6-.38.96-.48.46-.12.93-.12 1.4 0 .46.12.93.38 1.28.77.35.39.58.89.58 1.4 0 2.21-1.8 4.01-4.01 4.01z" />
                </svg>
                Chat on WhatsApp
              </a>

              {/* Social Icons */}
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-900 text-center text-sm text-gray-600 sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} ZELOX Industries. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}

export default Footer;