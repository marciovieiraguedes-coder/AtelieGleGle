import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloating = () => {
  return (
    <motion.a
      href="https://wa.me/5592992186263"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
};
