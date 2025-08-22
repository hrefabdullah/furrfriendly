import Image from "next/image";
import Link from "next/link";

// BentoBoxes.jsx
const BentoBoxes = () => {
    return (
        <div className=" relative overflow-hidden p-8 py-16 bg-[#fff5b2] w-full h-max flex flex-col items-center">
            <h2 className="text-5xl text-center font-bold mb-12 text-[#000]">
                Find Your Furr Friend
            </h2>
            {/* <PawPattern /> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl justify-items-center">
                {/* Cat Card */}
                <div className="w-72 h-72 lg:w-96 lg:h-96 bg-[#f4b916] rounded-full overflow-hidden relative group cursor-pointer shadow-xl">
                    <Link href="/store">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-full">
                            <h1 className="text-white text-2xl font-bold z-10">Cat Products</h1>
                        </div>
                        <Image
                            src="/assets/cat3.png"
                            alt="Cat"
                            fill
                            className="object-contain p-8 group-hover:scale-110 transition-transform"
                            priority
                        />
                    </Link>
                </div>

                {/* Dog Card - Bigger Image */}
                <div className="w-72 h-72 lg:w-96 lg:h-96 bg-[#f4b916] rounded-full overflow-hidden relative group cursor-pointer shadow-xl">
                    <Link href="/store">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-full">
                            <h1 className="text-white text-2xl font-bold z-10">Dog Products</h1>
                        </div>
                        <Image
                            src="/assets/dog2.png"
                            alt="Dog"
                            fill
                            className="object-contain p-4 w-[85%] h-[95%] group-hover:scale-110 transition-transform"
                            priority
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BentoBoxes;
