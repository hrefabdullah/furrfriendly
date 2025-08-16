import Image from "next/image";

// BentoBoxes.jsx
const BentoBoxes = () => {
    return (
        <div className="p-8 pt-15 bg-white min-h-screen flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-red-500">Get the BEST for YOUR PET</h2>

            <div className="grid grid-cols-2 gap-4 w-full max-w-6xl">
                {/* Big box */}
                <div className="col-span-2 bg-[#f9d5b6] h-50 lg:h-80 rounded-lg overflow-hidden relative">
                    <div className="md:w-[70%] md:h-[170%] w-[70%] h-[130%] relative md:bottom-5 md:-left-70 -left-[20vw] bottom-[3vw]">
                    <h1 className="text-black text-2xl font-bold absolute">Smart Items</h1>
                        <Image
                            src="/assets/feeder.jpg"
                            alt="Big Box"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl -rotate-15"
                        />
                    </div>
                </div>

                {/* Two smaller boxes */}
                <div className="bg-[#badeed] h-60 rounded-lg overflow-hidden relative">
                    <div className="md:w-[120%] md:h-[140%] w-[120%] h-[70%] relative md:bottom-3 md:-left-70 -left-[6vw] bottom-[5vw]">
                        <h1 className="text-black text-2xl font-bold absolute">Smart Items</h1>
                        <Image
                            src="/assets/food.png"
                            alt="Big Box"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl -rotate-15"
                        />
                    </div>
                </div>
                <div className="bg-[#fff] h-60 rounded-lg overflow-hidden relative">
                    <div className="md:w-[50%] md:h-[120%] w-[130%] h-[130%] relative md:bottom-3 md:-left-0 -left-[6vw] -bottom-[10vw]">
                        <Image
                            src="/assets/bagCat.png"
                            alt="Big Box"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl -rotate-15"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BentoBoxes;
