import Image from "next/image";
import Link from "next/link";

const BentoBoxes = () => {
    return (
        <section className="relative overflow-hidden py-15 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 lg:mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
                        Find Your{" "}
                        <span className="text-gray-200 drop-shadow-lg underline">Furry Friend</span>
                    </h2>
                    <p className="lg:text-xl text-gray-600 lg:max-w-2xl max-w-lg mx-auto">
                        Discover amazing products for cats and dogs, tailored to their unique needs
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl lg:mx-auto mx-10">
                    {/* Cat Card */}
                    <div className="group relative">
                        <Link href="/store">
                            <div className="relative w-full h-80 lg:h-96 bg-white rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-yellow-600/20"></div>
                                
                                {/* Image Container */}
                                <div className="relative h-full w-full flex items-center justify-center p-8">
                                    <Image
                                        src="/assets/cat3.png"
                                        alt="Cat Products"
                                        fill
                                        className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                                        priority
                                    />
                                </div>
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <h3 className="text-3xl font-bold mb-2">Cat Products</h3>
                                        <p className="text-lg opacity-90">Explore Now →</p>
                                    </div>
                                </div>
                                
                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/30 rounded-full animate-pulse"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce"></div>
                            </div>
                        </Link>
                    </div>

                    {/* Dog Card */}
                    <div className="group relative">
                        <Link href="/store">
                            <div className="relative w-full h-80 lg:h-96 bg-[#fff] lg:rounded-3xl rounded-4xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-yellow-300/20"></div>
                                
                                {/* Image Container */}
                                <div className="relative h-full w-full flex items-center justify-center p-8">
                                    <Image
                                        src="/assets/dog2.png"
                                        alt="Dog Products"
                                        fill
                                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                        priority
                                    />
                                </div>
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <h3 className="text-3xl font-bold mb-2">Dog Products</h3>
                                        <p className="text-lg opacity-90">Explore Now →</p>
                                    </div>
                                </div>
                                
                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/30 rounded-full animate-pulse"></div>
                                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/30 rounded-full animate-bounce"></div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <Link 
                        href="/store"
                        className="inline-block bg-white text-gray-900 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        Explore more  →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BentoBoxes;
