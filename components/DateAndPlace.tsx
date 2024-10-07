import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DateAndPlace() {

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date('2024-12-07T15:20:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, "", "", "", ""],
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-6 text-center"
    >
      <h1 className="text-3xl font-bold mb-4 text-[#597445] font-courgette">
        Date & Place
      </h1>
      <p className="text-xl mb-4 text-gray-700 font-courgette">
        7th of December, 2024, Saturday, 3:20 PM
      </p>
      <p className="text-xl mb-8 text-gray-700 font-courgette">
        Seoul WorldCup Convention Imperial Ballroom (2F)
      </p>
      <div className="relative w-full h-48 mb-4">
        <Image
          src="/images/dateplace.jpg"
          alt="Date and Place"
          layout="fill"
          objectFit="cover"
          objectPosition="center 70%"
          className="rounded-lg h-48"
        />
      </div>

      <div className="max-w-sm mx-auto">
        <h2 className="text-2xl font-semibold text-[#597445] font-courgette mb-4">
          December
        </h2>
        <div className="grid grid-cols-7 gap-2 mb-2">
          {days.map((day) => (
            <div key={day} className={day === "Sun" ? "font-semibold text-red-700/80" : "font-semibold text-green-800/70"}>
              {day}
            </div>
          ))}
        </div>
        {dates.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-2">
            {week.map((date, dateIndex) => (
              <div
                key={dateIndex}
                className={`p-2 ${
                  date === 7
                    ? "bg-[#729762]/80 rounded-full font-bold text-white"
                    : date === ""
                    ? "text-gray-800"
                    : "text-gray-600"
                }`}
              >
                {date}
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className="text-lg font-semibold text-[#597445] font-courgette mt-10 mb-4">Kwangsu ❤️ Jiwon until wedding</p>
      <div className="flex justify-center space-x-4 mb-4">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#729762] rounded-full flex items-center justify-center mb-2">
              <span className="text-2xl font-bold text-white">{value}</span>
            </div>
            <span className="text-sm text-gray-600 capitalize font-courgette">{key}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
