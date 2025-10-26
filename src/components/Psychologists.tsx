import marina from "../assets/marina.jpg";
import rafael from "../assets/rafael.jpg";

const psychs = [
  {
    name: "Dra. Marina Costa",
    desc: "Psicóloga clínica especializada em ansiedade e TDAH.",
    img: marina,
  },
  {
    name: "Dr. Rafael Oliveira",
    desc: "Psicólogo humanista especializado em autoestima e relacionamentos.",
    img: rafael,
  },
];

export default function Psychologists() {
  return (
    <section className="py-16 text-center bg-lightBlue">
      <h2 className="text-3xl font-semibold mb-10 text-mainBlue">Nossos Psicólogos</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {psychs.map(({ name, desc, img }) => (
          <div key={name} className="bg-white rounded-2xl shadow-lg p-6 max-w-sm">
            <img src={img} alt={name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-mainBlue">{name}</h3>
            <p className="text-gray-600 mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
