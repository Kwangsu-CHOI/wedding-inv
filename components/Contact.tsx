import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-6 text-center"
    >
      <h1 className="text-2xl font-bold mb-8 text-[#597445] font-courgette">
        You are invited to our wedding
      </h1>
      <div className="flex flex-row justify-center space-x-8 max-w-4xl mx-auto font-courgette">
        <div className="flex-1">
          <div className="relative w-full h-48 mb-4">
            <Image
              src="/images/contact-groom.jpg"
              alt="신랑"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="flex gap-1 items-baseline justify-center">
            <h2 className="text-sm font-semibold mb-1 text-[#597445]">Groom</h2>
            <h2 className="mb-2 text-gray-700 text-nowrap">Kwangsu Choi</h2>
          </div>

          <p className="text-sm mb-2 text-gray-600">
            This man I&apos;m marrying
            <br />
            is a warm and caring person
            <br />I can always lean on
          </p>
          <p className="text-sm text-gray-600">
            I will be a husband like a tree 🌳
          </p>
          <p className="text-xs mt-2 text-gray-600">
            Son of Sungjong Choi and Jinri Lee
          </p>
        </div>
        <div className="flex-1">
          <div className="relative w-full h-48 mb-4">
            <Image
              src="/images/contact-bride.jpg"
              alt="신부"
              layout="fill"
              objectFit="cover"
              objectPosition="center 20%"
              className="rounded-lg"
            />
          </div>

          <div className="flex gap-1 items-baseline justify-center">
            <h2 className="text-sm font-semibold mb-1 text-[#597445]">Bride</h2>
            <h2 className="mb-2 text-gray-700 text-nowrap">Jiwon Kang</h2>
          </div>

          <p className="text-sm mb-2 text-gray-600">
            This woman I&apos;m marrying
            <br />
            is a pure and lovely person
            <br />
            who always makes me smile
          </p>
          <p className="text-sm text-gray-600">
            I will be a wife like sunshine 🌞
          </p>
          <p className="text-xs mt-2 text-gray-600">
            Daughter of Changho Kang and Chunhwa Yang
          </p>
        </div>
      </div>
    </motion.section>
  );
}
