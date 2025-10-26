import { motion } from "framer-motion";
import brain from "../assets/brain.png";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20 px-4">
      <motion.img
        src={brain}
        alt="Cérebro estilizado"
        className="w-40 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <h1 className="text-4xl font-semibold text-mainBlue mb-4">Sinta-se Livre</h1>
      <p className="max-w-lg text-gray-600 mb-6">
        Um espaço acolhedor para cuidar da sua mente e redescobrir o bem-estar emocional.
      </p>
      <button className="bg-mainBlue text-white px-6 py-3 rounded-full hover:bg-blue-500 transition">
        Agende sua consulta
      </button>
    </section>
  );
}
