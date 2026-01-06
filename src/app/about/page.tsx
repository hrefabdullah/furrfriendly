  import React from 'react';
  import Navbar from '../components/Navbar';
  import Footer from '../components/Footer';  

  export default function About() {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">About OnlyPets</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your trusted partner in pet care since 2010
              </p>
            </div>

            {/* Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  OnlyPets began with a simple mission: to provide pet owners with high-quality products and services that enhance the lives of their beloved companions. Founded by a group of passionate pet lovers, our journey started in a small storefront and has grown into a comprehensive pet care destination.
                </p>
                <p className="text-gray-600 mb-4">
                  What sets us apart is our unwavering commitment to understanding the unique needs of each pet and their owners. We believe that pets are family members deserving of the best care possible, and we&apos;re dedicated to making that care accessible and affordable.
                </p>
                <p className="text-gray-600">
                  Today, we continue to expand our offerings while maintaining the personalized service that has been our hallmark since day one. From premium nutrition to expert grooming services, we&apos;re here to support you through every stage of your pet&apos;s life.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Happy pets and owners" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Quality",
                    text: "We carefully select every product in our inventory, ensuring that we offer only the best for your pets. Our quality standards are never compromised.",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )
                  },
                  {
                    title: "Innovation",
                    text: "We continuously seek out the latest advancements in pet care to bring innovative solutions that make pet ownership easier and more enjoyable.",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )
                  },
                  {
                    title: "Compassion",
                    text: "Our love for animals drives everything we do. We treat every pet with the same care and respect we would give to our own furry family members.",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    )
                  }
                ].map((val, i) => (
                  <div key={i} className="bg-gray-50 p-8 rounded-xl shadow-md text-center hover:shadow-lg transition">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 text-gray-700 mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {val.icon}
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{val.title}</h3>
                    <p className="text-gray-600">{val.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Community</h2>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                We&apos;re more than just a pet store – we&apos;re a community of pet lovers dedicated to sharing knowledge, experiences, and the joy that comes with pet companionship. Connect with us through our social media channels or visit our store to become part of our growing family.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition"
              >
                Get In Touch
              </a>
            </div>

          </div>
          <Footer />
      </div>
    );
  }
