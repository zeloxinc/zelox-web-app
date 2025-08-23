import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import { testimonials } from "../data/data";

function Testimonials() {
  return (
    <Section id="testimonials" className="py-16 lg:py-20">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What users say</h2>
        <p className="text-neutral-600">Signal over noise from real operators.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="p-6">
            <div className="flex items-center gap-3">
              <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-neutral-600">{t.role}</div>
              </div>
            </div>
            <p className="mt-4 text-neutral-800">“{t.quote}”</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;