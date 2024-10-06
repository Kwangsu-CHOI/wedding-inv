import { motion } from "framer-motion";
import GoogleMapReact from 'google-map-react';

interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
}

const Marker: React.FC<MarkerProps> = ({ text }) => (
  <div className="text-red-600 text-2xl">{text}</div>
);

export default function Location() {
  const defaultProps = {
    center: {
      lat: 37.5682,
      lng: 126.8973
    },
    zoom: 15
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-6 text-center"
    >
      <h1 className="text-2xl font-bold mb-8 text-gray-800">
        Location
      </h1>
      <div className="mb-8">
        <p className="text-gray-600">240 World Cup-ro, Mapo-gu, Seoul, South Korea</p>
        <p className="text-gray-600">(West gate direction, 2nd floor)</p>
      </div>
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker
            lat={37.5682}
            lng={126.8973}
            text="📍"
          />
        </GoogleMapReact>
      </div>

      <div className="mt-8 text-left">
        <h2 className="text-xl font-semibold mb-4 text-gray-800/70">How to get here</h2>
        <h3 className="text-lg font-bold mb-2 text-green-800/70">Subway</h3>
        <p className="mb-4 text-gray-700/70">Line 6, World Cup Stadium Station, Exit 2 (3 minutes walk, 200m)</p>
        <ul className="list-disc list-inside mb-4 text-gray-700/70">
          <li>There is a banner guiding to the vanue (the west direction) at Exit 2.</li>
          <li>Transfer stations: Line 2 (Hapjeong), Line 3 (Yaksu/Yeonsinnae), Line 4 (Samgakji), Line 5 (Gongdeok), Gyeongui-Jungang Line, Airport Railroad (Digital Media City)</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-green-800/70">Bus</h3>
        <p className="mb-2 text-gray-700/70">World Cup Stadium West Side, Culture Tank Park Bus Stop</p>
        <ul className="list-disc list-inside text-gray-700/70">
          <li>Local: 7019, 7715, 8777</li>
          <li>Main: 571, 710, 760</li>
          <li>Express: 9711</li>
        </ul>
      </div>
    </motion.section>
  );
}