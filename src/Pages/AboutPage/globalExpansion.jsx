import React from "react";
import {
  ArrowUpRight,
  CheckCircle,
  Globe,
  MapPin,
  PackageSearch,
} from "lucide-react";
import { Card, Row, Col } from "antd";


export const GlobalExpansion = () => {

    return (
        <div className="bg-gradient-to-br from-white to-green-50 py-12 px-4 md:px-10 mt-10 mb-10">
      <Row gutter={[24, 24]} justify="center" align="middle">   

        <Col xs={24} md={13}>
          <div className="space-y-5 p-8">
            <p className="text-green-500 text-2xl headFOnt font-semibold uppercase tracking-wide">
              Global Expansion
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 headFont">
              Connecting Worldwide
            </h2>
            <p className="text-gray-700 text-lg subFont">
              With a strong emphasis on export, we aim to expand our reach globally, connecting with clients and partners around the world. Our dedication to customer satisfaction, combined with our extensive industry experience, positions us as a reliable source for all your herbal and petroleum product needs.
            </p>
            <p className="text-gray-700 text-lg subFont">
              Join us on our journey as we continue to grow and innovate, bringing the best of nature and quality to your doorstep. Thank you for choosing <strong>Radha Rani Exports!</strong>
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* Card 1 */}
              <Card
                className="flex-1 min-w-[250px] max-w-[300px] rounded-2xl border border-gray-100  hover:shadow-md transition duration-300 shadow-xl"
                bodyStyle={{ padding: "20px" }}
              >
                <div className="flex items-start space-x-3 ">
                  <MapPin className="text-green-700 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 headFont">Based in Kolkata</h4>
                    <p className="text-sm text-gray-600 subFont">West Bengal, India – Strategic location for trade</p>
                  </div>
                </div>
              </Card>

              {/* Card 2 */}
              <Card
                className="flex-1 min-w-[250px] max-w-[300px] rounded-2xl border border-gray-100 shadow-xl hover:shadow-md transition duration-300"
                bodyStyle={{ padding: "20px" }}
              >
                <div className="flex items-start space-x-3">
                  <PackageSearch className="text-blue-500 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 headFont">Export Focus</h4>
                    <p className="text-sm text-gray-600 subFont">Worldwide shipping and distribution network</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Col>

        {/* RIGHT SIDE - Global Network */}
        <Col xs={24} md={11}>
          <Card
            className="rounded-3xl shadow-xl border-0 bg-gradient-to-br from-white to-orange-50"
            bodyStyle={{ padding: "32px" }}
          >
            <div className="text-center space-y-6">
              <Globe className="text-green-500 w-10 h-10 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Global Network
              </h3>

              <div className="space-y-4">
                {/* Feature 1 */}
                <div className="flex items-start space-x-3 bg-gradient-to-br from-orange-100 to-white p-3 rounded-lg">
                  <ArrowUpRight className="text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 headFont mr-25">Growing Exports</h4>
                    <p className="text-sm text-gray-600 subFont">
                      Expanding global market presence
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start space-x-3 bg-gradient-to-br from-green-100 to-white p-3 rounded-lg">
                  <CheckCircle className="text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 headFont mr-30">Quality Assurance</h4>
                    <p className="text-sm text-gray-600 subFont">
                      Highest standards maintained globally
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start space-x-3 bg-gradient-to-br from-blue-100 to-white p-3 rounded-lg">
                  <Globe className="text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 headFont mr-10">International Partnerships</h4>
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
    );
};

export default GlobalExpansion;