import { FaArrowRight } from "react-icons/fa";
import Section from "./ui/Section";
import Anchor from "./ui/Anchor";
import Card from "./ui/Card";

function About() {
  return (
    <Section id="about" className="py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About ZeloxIndustries</h2>
          <p className="mt-3 text-neutral-700">
            We build premium, minimalist software with enterprise-grade depth. Our ethos is simple: ship fast, keep it reliable,
            and obsess over the last 10% of polish.
          </p>
          <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {["Offline-first UX", "Secure by default", "API-first", "Analytics-ready"].map((k) => (
              <div key={k} className="rounded-xl border border-neutral-200 p-4">
                <dt className="font-semibold">{k}</dt>
                <dd className="text-sm text-neutral-600">We don’t cut corners. We cut noise.</dd>
              </div>
            ))}
          </dl>
        </div>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Why teams pick us</h3>
          <ul className="mt-4 space-y-3 text-neutral-700">
            <li>• Premium look, pragmatic build. No fluff.</li>
            <li>• Works great online and offline. Field-ready.</li>
            <li>• Scales from SMB to Enterprise without a rewrite.</li>
            <li>• Integrates with your payment stack and data layer.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Anchor href="https://wa.me/+254112099003">Book a Demo <FaArrowRight /></Anchor>
            <a href="#shop" className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50">View Products</a>
          </div>
        </Card>
      </div>
    </Section>
  );
}

export default About;