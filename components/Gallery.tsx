import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const [visibleImages, setVisibleImages] = useState(9);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = Array.from(
    { length: 29 },
    (_, i) => `/images/gallery-${i + 1}.jpg`
  );

  const loadMore = () => {
    setVisibleImages((prev) => Math.min(prev + 9, images.length));
  };

  const collapse = () => {
    setVisibleImages(9);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-10 px-4"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-[#597445] font-courgette">
        Gallery
      </h2>
      <div className="grid grid-cols-3 gap-1">
        {images.slice(0, visibleImages).map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="aspect-square relative overflow-hidden cursor-pointer"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <Image
              src={src}
              alt={`Wedding photo ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-6">
        {visibleImages < images.length ? (
          <button
            onClick={loadMore}
            className="bg-transparent hover:bg-[#597445] hover:text-white text-[#597445] font-bold py-2 px-4 rounded-full text-sm"
          >
            View More ⚆_⚆
          </button>
        ) : (
          <button
            onClick={collapse}
            className="bg-transparent hover:bg-[#597445] hover:text-white text-[#597445] font-bold py-2 px-4 rounded-full text-sm"
          >
            Close
          </button>
        )}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={photoIndex}
        styles={{
          container: { backgroundColor: "white" },
          slide: { boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)" },
        }}
      />
    </motion.section>
  );
}
