import { Heart, Brain, Smile, Users, Cloud, Sparkles } from "lucide-react";

const helps = [
  { icon: Brain, title: "Ansiedade" },
  { icon: Cloud, title: "Depressão" },
  { icon: Smile, title: "Autoconhecimento" },
  { icon: Users, title: "Relacionamentos" },
  { icon: Heart, title: "Luto" },
  { icon: Sparkles, title: "Neurodiversidade" },
];

export default function HelpSection() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-10 text-mainBlue">Como Podemos Ajudar</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {helps.map(({ icon: Icon, title }) => (
          <div key={title} className="flex flex-col items-center bg-blue-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <Icon size={40} className="text-mainBlue mb-4" />
            <p className="font-medium">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
