import React, { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import { Card } from "antd";
import { FaGlobeAsia, FaCheckCircle, FaHandshake } from "react-icons/fa";
import commonIcon from "../../assets/commonIcon.png";
import "leaflet/dist/leaflet.css";
import { MapPin, PackageSearch } from "lucide-react";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import gsap from "gsap";

const createLucideIcon = (color = "#1D4ED8") =>
  L.divIcon({
    className: "",
    html: ReactDOMServer.renderToString(
      <MapPin color={color} size={24} strokeWidth={2.5} />
    ),
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });

const INDIA = [22.5937, 78.9629];
const DESTINATIONS = [
  { name: "Nepal", coordinates: [28.3949, 84.124] },
  { name: "Bhutan", coordinates: [27.5142, 90.4336] },
  { name: "Bangladesh", coordinates: [23.685, 90.3563] },
  { name: "Sri Lanka", coordinates: [7.8731, 80.7718] },
];

const features = [
  {
    icon: <FaGlobeAsia className="text-orange-500 text-xl" />,
    title: "100% Natural Exports",
    desc: "Every product meets international quality and certification standards",
    bg: "bg-orange-100",
  },
  {
    icon: <FaCheckCircle className="text-green-500 text-xl" />,
    title: "FSSAI & GMP Certified",
    desc: "Assuring safety, consistency, and quality in all global batches",
    bg: "bg-green-100",
  },
  {
    icon: <FaHandshake className="text-blue-500 text-xl" />,
    title: "Growing Global Demand",
    desc: "Increased interest in Ayurveda across South Asian nations",
    bg: "bg-blue-100",
  },
];

const AnimatedPolyline = ({ positions }) => {
  const polylineRef = useRef();

  useEffect(() => {
    if (polylineRef.current) {
      const path = polylineRef.current._path;
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 1,
      });
    }
  }, []);

  return (
    <Polyline
      ref={polylineRef}
      positions={positions}
      pathOptions={{ color: "#4CAF50", weight: 3 }}
    />
  );
};

const GlobalReachSection = () => {
  return (
    <div className="bg-[#eeffee]">
    <div className=" py-16 px-4 max-w-[1280px] mx-auto mb-20">
      <div className="text-center z-10 relative mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="custom-line" />
          <div className="h-16 w-16 mx-6 flex items-center justify-center">
            <img
              src={commonIcon}
              alt="icon"
              className="h-12 w-12 object-contain"
            />
          </div>
          <div className="custom-line" />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 headFont">
          Rooted in India, Reaching the World
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-2 subFont">
          Delivering India’s finest herbs and wellness essentials across borders
          with trust and tradition.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side - Features + Cards */}
        <div className="space-y-6">
          {features.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 flex items-start gap-4 ${item.bg} shadow`}
            >
              <div>{item.icon}</div>
              <div>
                <h4 className="font-bold text-gray-800 headFont">{item.title}</h4>
                <p className="text-gray-600 text-md subFont font-medium">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Additional Cards */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Card
              className="w-full sm:flex-1 sm:min-w-[230px] sm:max-w-[300px] rounded-2xl border border-gray-100 bg-white/70 hover:shadow-lg transition duration-300"
              bodyStyle={{ padding: "20px" }}
            >
              <div className="flex items-start space-x-3">
                <MapPin className="text-green-700 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 headFont">Based in Kolkata</h4>
                  <p className="text-sm text-gray-800 subFont font-medium">
                    West Bengal, India – Strategic location for trade
                  </p>
                </div>
              </div>
            </Card>

            <Card
              className="w-full sm:flex-1 sm:min-w-[230px] sm:max-w-[300px] rounded-2xl border border-gray-100 bg-white/70 hover:shadow-lg transition duration-300"
              bodyStyle={{ padding: "20px" }}
            >
              <div className="flex items-start space-x-3">
                <PackageSearch className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 headFont">Export Focus</h4>
                  <p className="text-md text-gray-800 subFont font-medium">
                    Worldwide shipping and distri-bution network
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Side - Map */}
        <Card className="rounded-xl shadow-md overflow-hidden bg-white border-0">
          <MapContainer
            center={INDIA}
            zoom={4}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={INDIA} icon={createLucideIcon("#16a34a")}>
              <Popup>India (Kolkata)</Popup>
            </Marker>

            {DESTINATIONS.map((dest, idx) => (
              <React.Fragment key={idx}>
                <Marker
                  position={dest.coordinates}
                  icon={createLucideIcon("#0ea5e9")}
                >
                  <Popup>{dest.name}</Popup>
                </Marker>
                <AnimatedPolyline positions={[INDIA, dest.coordinates]} />
              </React.Fragment>
            ))}
          </MapContainer>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default GlobalReachSection;
