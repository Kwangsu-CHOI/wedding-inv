"use client"
import { motion } from 'framer-motion';
import Greeting from "@/components/Greeting";
import Contact from "@/components/Contact";
import DateAndPlace from "@/components/DateAndPlace";
import Gallery from "@/components/Gallery";
import Introduction from '@/components/Introduction';
import Location from '@/components/Location';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <Introduction />
        <Greeting />
        <Contact />
        <DateAndPlace />
        <Gallery />
        <Location />
      </motion.main>
    </div>
  );
}
