// src/components/ExportMap.js

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ✅ South Asia country markers
const markers = [
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "Nepal", coordinates: [84.1240, 28.3949] },
  { name: "Bhutan", coordinates: [90.4336, 27.5142] },
  { name: "Bangladesh", coordinates: [90.3563, 23.6850] },
  { name: "Sri Lanka", coordinates: [80.7718, 7.8731] },
];

// ✅ Create connections from India
const indiaCoord = markers.find((m) => m.name === "India").coordinates;
const connections = markers
  .filter((m) => m.name !== "India")
  .map((m) => ({
    from: indiaCoord,
    to: m.coordinates,
  }));

const ExportMap = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-10">
      <h3 className="text-lg font-semibold text-center mb-4 head">
        Export Destinations
      </h3>

      <div className="w-full h-[420px]">
        <ComposableMap
          projectionConfig={{ scale: 700, center: [85, 20] }}
          width={980}
          height={400}
          className="w-full h-full"
        >
          {/* World geography */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#f0fdf4",
                      stroke: "#e5e7eb",
                      outline: "none",
                    },
                    hover: {
                      fill: "#bbf7d0",
                      stroke: "#4ade80",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Lines from India to other countries */}
          {connections.map(({ from, to }, idx) => (
            <Line
              key={idx}
              from={from}
              to={to}
              stroke="#22c55e"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="4 2"
            />
          ))}

          {/* Markers */}
          {markers.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={5} fill="#22c55e" className="animate-ping" />
              <text
                textAnchor="middle"
                y={-10}
                className="text-xs text-gray-700 font-medium"
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default ExportMap;
