import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Section from "../components/ui/Section";
import Pill from "./ui/Pill";
import Anchor from "../components/ui/Anchor";
import { products } from "../data/data";
import Card from "../components/ui/Card";

function Shop() {
  return (
    <Section id="shop" className="py-16 lg:py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-neutral-600">Simple to adopt. Enterprise when needed.</p>
        </div>
        <div className="hidden sm:flex gap-2">
          <Pill>#ffffff</Pill>
          <Pill>#000000</Pill>
          <Pill>grey</Pill>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {products.map((p) => (
          <div key={p.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="overflow-hidden">
              <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-neutral-600">{p.description}</p>

                <ul className="mt-4 space-y-3">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-800">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg border border-neutral-200 bg-white">
                        {f.icon}
                      </span>
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Anchor href={p.link}>
                    Learn More <FaArrowRight />
                  </Anchor>
                  <span className="text-sm text-neutral-600">{p.pricing}</span>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Shop;