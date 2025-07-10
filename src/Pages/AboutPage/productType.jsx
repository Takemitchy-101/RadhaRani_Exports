import { Row, Col, Card } from "antd";
import {
    Leaf,
    FlaskConical,
    Flame,
    Fuel,
} from "lucide-react"; // Or use your own icons


export const ProductType = () => {


    const products = [
        {
            icon: <Leaf className="text-green-500 w-6 h-6" />,
            iconBg: "bg-green-100",
            title: "Ayurvedic Herbs",
            description: "Premium quality traditional herbs sourced from authentic suppliers across India",
        },
        {
            icon: <FlaskConical className="text-purple-500 w-6 h-6" />,
            iconBg: "bg-purple-100",
            title: "Unani Herbs",
            description: "Traditional Unani medicinal herbs for various therapeutic applications",
        },
        {
            icon: <Flame className="text-orange-500 w-6 h-6" />,
            iconBg: "bg-orange-100",
            title: "Spices",
            description: "High-grade spices for culinary and medicinal purposes with full traceability",
        },
        {
            icon: <Fuel className="text-blue-500 w-6 h-6" />,
            iconBg: "bg-blue-100",
            title: "Petroleum By-products",
            description: "Authorized distributor of Indian Oil Corp with reliable supply chain",
        },
    ];

    return (

        <div>
            <section className="py-12 px-4 md:px-8 lg:px-20 bg-gradient-to-br from-amber-50 via-white to-green-100 mt-10">
                {/* Section Title */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-xl font-medium headFont text-green-500 uppercase tracking-wider mb-2">
                        Our Products
                    </p>
                    <h2 className="text-3xl headFont font-bold text-gray-900 mb-4">
                        Comprehensive Product Portfolio
                    </h2>
                    <p className="text-gray-600 text-base subFont">
                        At Radha Rani Exports, we specialize in a diverse range of products,
                        designed to meet the needs of various industries, particularly
                        focusing on the Ayurvedic manufacturing sector.
                    </p>
                </div>

                {/* Product Cards */}
                <Row gutter={[24, 24]} justify="center">
                    {products.map((item, index) => (
                        <Col xs={24} sm={12} md={12} lg={6} key={index} className="flex justify-center">
                            <Card
                                className="w-[250px] h-[250px] max-w-sm rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 ease-in-out"
                                bodyStyle={{
                                    padding: "24px",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className={`p-3 rounded-xl ${item.iconBg}`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>


        </div>
    );
};

export default ProductType;