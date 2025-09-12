interface Stat {
  value: string;
  label: string;
}

interface AboutSectionProps {
  title?: string;
  description?: string;
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { value: "50+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" }
];

export default function AboutSection({
  title = "About Digital Wombat",
  description = "We're passionate about creating digital solutions that make a difference. With expertise in modern web technologies and a focus on user experience, we help businesses and individuals bring their ideas to life.",
  stats = defaultStats
}: AboutSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
          {title}
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}