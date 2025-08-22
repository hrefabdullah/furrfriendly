import Link from "next/link";

export default function CategorySection() {
  const categories = [
    { title: "Cat Food", img: "https://www.purina.in/sites/default/files/2023-05/AGAIL_Adult%20with%20Sardine_FRONT_0.jpg", alt: "Cat Food", bg: "bg-red-100", link: "/store/catFood" },
    { title: "Cat Grooming", img: "https://m.media-amazon.com/images/I/71GqwnKD4bL._UF1000,1000_QL80_.jpg", alt: "Cat Grooming", bg: "bg-purple-100", link: "/store/catGrooming" },
    { title: "Cat Toys", img: "https://supertails.com/cdn/shop/products/Frame10889-627733_600x.png?v=1696511732", alt: "Cat Toys", bg: "bg-blue-100", link: "/store/catToys" },
    { title: "Dog Food", img: "https://headsupfortails.com/cdn/shop/files/8906002482832_325256e8-336f-4804-a01c-8e4351d124b7.jpg?v=1751632444", alt: "Dog Food", bg: "bg-green-100", link: "/store/dogFood" },
    { title: "Dog Toys", img: "https://www.petsense.com/cdn/shop/files/1921400_8_3000x.jpg?v=1690480086", alt: "Dog Toys", bg: "bg-yellow-100", link: "/store/dogToys" },
    { title: "Dog Grooming", img: "https://www.papapawsome.com/cdn/shop/products/tinywow_CHOOSEYOURKIT-01_19581484.webp?v=1681293203&width=1445", alt: "Dog Grooming", bg: "bg-purple-100", link: "/store/dogGrooming" },
  ];

 
  return (
    <section className="py-12 bg-white text-black" aria-label="category">
      <div className="container mx-auto px-7">
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-[#f4b916]">Top</span> categories
        </h2>
        <ul
          className="grid grid-cols-2 gap-6 sm:flex sm:space-x-8 sm:overflow-x-auto sm:snap-x sm:snap-mandatory"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {categories.map((cat, index) => (
            <li key={index} className="flex-shrink-0 w-40 sm:w-60" role="listitem">
              <Link href={cat.link} className="block">
                <div
                  className={`rounded-lg shadow-sm hover:shadow-lg transition p-2 md:p-4 h-[30vh] w-[43vw] sm:w-65 sm:h-80 flex flex-col items-center justify-between ${cat.bg}`}
                >
                  <figure className="w-full h-5/6 rounded-xl overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.alt}
                      className="object-cover h-full w-full"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="text-base sm:text-lg font-semibold text-center hover:text-indigo-600 transition">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}