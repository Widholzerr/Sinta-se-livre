import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <section className="py-16 bg-lightBlue text-center px-4">
      <h2 className="text-3xl font-semibold mb-6 text-mainBlue">Fale Conosco</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
        <input className="p-3 rounded-lg border border-gray-300" placeholder="Seu nome" required />
        <input type="email" className="p-3 rounded-lg border border-gray-300" placeholder="Seu e-mail" required />
        <textarea className="p-3 rounded-lg border border-gray-300" placeholder="Sua mensagem" required />
        <button className="bg-mainBlue text-white py-3 rounded-lg hover:bg-blue-500 transition">Enviar</button>
      </form>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <div className="bg-white p-8 rounded-xl shadow text-mainBlue text-lg font-semibold">
              Mensagem enviada com sucesso!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
