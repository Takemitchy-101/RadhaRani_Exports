import React from "react";
import {
  ArrowUpRight,
  CheckCircle,
  Globe,
  MapPin,
  PackageSearch,
} from "lucide-react";
import { Card, Row, Col } from "antd";
import commonIcon from '../../assets/commonIcon.png';

export const GlobalExpansion = () => {
  return (
    <div className="py-10 px-4 md:px-8">
      {/* Section Header */}
      <div className="text-center z-10 relative">
        <div className="flex items-center justify-center mb-4">
          <div className="custom-line" />
          <div className="h-16 w-16 mx-6 flex items-center justify-center">
            <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
          </div>
          <div className="custom-line" />
        </div>
        <h2 className="allheading  text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          Rooted in India, Reaching the World
        </h2>
        <p className=" alldes text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-2">
          Delivering India’s finest herbs and wellness essentials across borders with trust and tradition.
        </p>
      </div>

      {/* Content */}
      <div className="bg-gradient-to-br from-white to-green-50 mt-10 rounded-xl">
        <Row gutter={[24, 32]} justify="center" align="middle" className="p-4 md:p-10">
          {/* LEFT COLUMN */}
          <Col xs={24} md={13}>
            <div className="space-y-6">
              <p className="text-green-500 text-xl font-semibold uppercase tracking-wide headFont">
                Global Expansion
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 headFont">
                Connecting Worldwide
              </h2>
              <p className="text-gray-700 text-base md:text-lg subFont">
                With a strong emphasis on export, we aim to expand our reach globally, connecting with clients and partners around the world. Our dedication to customer satisfaction, combined with our extensive industry experience, positions us as a reliable source for all your herbal and petroleum product needs.
              </p>
              <p className="text-gray-700 text-base md:text-lg subFont">
                Join us on our journey as we continue to grow and innovate, bringing the best of nature and quality to your doorstep. Thank you for choosing <strong>Radha Rani Exports!</strong>
              </p>

              {/* Mini Cards */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Card
                  className="flex-1 min-w-[230px] max-w-[300px] rounded-2xl border border-gray-100 bg-white/70 hover:shadow-lg transition duration-300"
                  bodyStyle={{ padding: "20px" }}
                >
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-green-700 w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 headFont">Based in Kolkata</h4>
                      <p className="text-sm text-gray-600 subFont">
                        West Bengal, India – Strategic location for trade
                      </p>
                    </div>
                  </div>
                </Card>

                <Card
                  className="flex-1 min-w-[230px] max-w-[300px] rounded-2xl border border-gray-100 bg-white/70 hover:shadow-lg transition duration-300"
                  bodyStyle={{ padding: "20px" }}
                >
                  <div className="flex items-start space-x-3">
                    <PackageSearch className="text-blue-500 w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 headFont">Export Focus</h4>
                      <p className="text-sm text-gray-600 subFont">
                        Worldwide shipping and distribution network
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Col>

          {/* RIGHT COLUMN */}
          <Col xs={24} md={11}>
            <Card
              className="rounded-3xl shadow-xl border-0 bg-gradient-to-br from-white to-orange-50 hover:shadow-2xl transition-all duration-300"
              bodyStyle={{ padding: "32px" }}
            >
              <div className="text-center space-y-6">
                <Globe className="text-green-500 w-10 h-10 mx-auto animate-pulse" />
                <h3 className="text-xl font-semibold text-gray-800 headFont">
                  Global Network
                </h3>

                <div className="space-y-4">
                  {/* Feature 1 */}
                  <div className="flex items-start space-x-3 bg-gradient-to-br from-orange-100 to-white p-4 rounded-lg hover:scale-[1.02] transition-all duration-300">
                    <ArrowUpRight className="text-orange-500 mt-1" />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800 headFont">
                        Growing Exports
                      </h4>
                      <p className="text-sm text-gray-600 subFont">
                        Expanding global market presence
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start space-x-3 bg-gradient-to-br from-green-100 to-white p-4 rounded-lg hover:scale-[1.02] transition-all duration-300">
                    <CheckCircle className="text-green-500 mt-1" />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800 headFont">
                        Quality Assurance
                      </h4>
                      <p className="text-sm text-gray-600 subFont">
                        Highest standards maintained globally
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start space-x-3 bg-gradient-to-br from-blue-100 to-white p-4 rounded-lg hover:scale-[1.02] transition-all duration-300">
                    <Globe className="text-blue-500 mt-1" />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800 headFont">
                        International Partnerships
                      </h4>
                      <p className="text-sm text-gray-600 subFont">
                        Building lasting global relationships
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GlobalExpansion;
