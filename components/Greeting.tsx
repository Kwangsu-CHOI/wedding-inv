import { motion } from "framer-motion";

export default function Greeting() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 text-center"
    >
      <div className="mb-8 space-y-2 text-gray-700 font-courgette">
        <p>You are the finest,</p>
        <p>loveliest,</p>
        <p>tenderest,</p>
        <p>and most beautiful person</p>
        <p>I have ever known</p>
        <p>and even that is an understatement</p>
      </div>

      <div className="space-y-2 text-gray-700 font-courgette">
        <p className="text-xl font-semibold mb-4 text-[#597445] font-courgette">
          We warmly invite you to join us
        </p>
        <p>as we come together to celebrate our love.</p>
        <p>In a season where snowflakes gently fall,</p>
        <p>we gather the purest of love,</p>
        <p>and make our promise to become one.</p>
        <p>It would mean the world to have you with us</p>
        <p>as we begin this beautiful journey together.</p>
      </div>

      <p className="text-sm text-slate-400 font-italic text-right mt-12 mr-12 font-courgette">
        - F. Scott Fitzgerald
      </p>
    </motion.section>
  );
}
