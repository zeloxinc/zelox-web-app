import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import { testimonials } from "../data/data";

function Testimonials({ setActiveSection }) {
  return (
    <Section id="testimonials" className="py-16 lg:py-24 bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
          Trusted by Real Operators
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Don’t take our word for it — here’s what landlords, shopkeepers, and teams say after switching to ZELOX.
        </p>
      </div>

      {/* Testimonial Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <Card
            key={t.name}
            className="p-6 flex flex-col h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Quote */}
            <blockquote className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6 flex-grow relative before:absolute before:content-['“'] before:text-4xl before:opacity-20 before:top-0 before:left-0 before:font-serif">
              “{t.quote}”
            </blockquote>

            {/* Person */}
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
              <img
                src={t.image}
                alt={t.name}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-white shadow-sm group-hover:ring-gray-200 transition-all duration-300"
              />
              <div>
                <div className="font-semibold text-sm sm:text-base text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-500 font-medium">{t.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom CTA — Now with WhatsApp as primary action */}
      <div className="text-center mt-16 px-4">
        <p className="text-gray-600 mb-6 text-base">
          Ready to simplify your operations?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* WhatsApp Button — Primary CTA */}
          <a
            href="https://wa.me/+254112099003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            aria-label="Chat with us on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-4 h-4"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 2.326c-4.567 0-8.23 3.71-8.23 8.23 0 1.45.38 2.83 1.07 4.02L.5 15.5l1.4-1.122c1.15.8 2.48 1.22 3.87 1.22 4.567 0 8.23-3.71 8.23-8.23 0-.78-.14-1.55-.4-2.28l1.07-1.122A7.854 7.854 0 0 0 13.6 2.326zM7.994 13.6c-2.21 0-4.01-1.8-4.01-4.01 0-1.07.32-2.05.91-2.85l1.55 1.55c.28-.21.6-.38.96-.48.46-.12.93-.12 1.4 0 .46.12.93.38 1.28.77.35.39.58.89.58 1.4 0 2.21-1.8 4.01-4.01 4.01z" />
            </svg>
            Chat on WhatsApp
          </a>

          {/* Secondary CTA - Explore Products */}
          <button
            onClick={() => setActiveSection?.("products")}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
          >
            Explore Products
          </button>
        </div>
      </div>
    </Section>
  );
}

export default Testimonials;