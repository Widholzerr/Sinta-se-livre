const habits = [
  "Respire fundo e desacelere.",
  "Durma bem e respeite seu tempo.",
  "Fale sobre o que sente.",
  "Cuide da sua alimentação e mente.",
];

export default function WellnessHabits() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-10 text-mainBlue">Hábitos de Bem-Estar</h2>
      <div className="flex overflow-x-auto gap-4 px-6 md:justify-center">
        {habits.map((habit) => (
          <div key={habit} className="flex-shrink-0 w-64 bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-700">{habit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
