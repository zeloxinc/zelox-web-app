import Section from "./ui/Section";
import { products } from "../data/data";
import { socialLinks } from "../data/data";

function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <Section className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold">
              <span className="inline-block h-6 w-6 rounded bg-black" /> ZeloxIndustries
            </div>
            <p className="mt-3 text-sm text-neutral-600">Premium software, minimalist design, enterprise impact.</p>
          </div>
          <div>
            <h4 className="font-semibold">Products</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {products.map((p) => (
                <li key={p.name}>
                  <a className="hover:underline" href={p.link} target="_blank" rel="noreferrer noopener">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li><a className="hover:underline" href="#about">About</a></li>
              <li><a className="hover:underline" href="#testimonials">Testimonials</a></li>
              <li><a className="hover:underline" href="https://github.com/zeloxinc" target="_blank" rel="noreferrer noopener">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Connect</h4>
            <div className="mt-3 flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer noopener" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 hover:bg-neutral-50">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row">
          <div>© {new Date().getFullYear()} ZeloxIndustries. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </Section>
    </footer>
  );
}

export default Footer;