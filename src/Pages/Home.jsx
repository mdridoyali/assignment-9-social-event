import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const services = useLoaderData();
  console.log(services.length);
  return (
    <div>
      <Banner></Banner>
      <h2 data-aos="fade-down" className="my-10 text-center text-3xl text-slate-600 font-bold">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-3 md:px-7 gap-10 mb-20  mx-auto ">
        {services.map((card, idx) => (
          <div
            data-aos="fade-up"
            key={idx}
            className="card  w-full text-white bg-slate-600 shadow-xl mx-auto "
          >
            <div className="relative">
              <img
                className="w-full h-52 border-b rounded-t-2xl"
                src={card.image}
                alt=""
              />
              <p className="absolute bottom-0 px-1 pr-3 rounded-tr-3xl bg-blue-500 text-white   font-semibold">
                Price: {card.price}$
              </p>
            </div>
            <div className="card-body space-y-2">
              <h2 className="card-title  text-2xl  ">{card.title}</h2>
              <p className=" font-semibold">{card.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/card/${card.id}`}>
                  <button className="rounded-tr-3xl rounded-bl-3xl bg-blue-500 text-white border-none font-semibold hover:bg-slate-400 btn-sm ">
                    See details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Featured section  */}
      <section className="bg-white px-4 md:px-10 pb-10 rounded mx-auto ">
        <h2 data-aos="fade-down" className="mb-10 text-center text-3xl text-slate-600 font-bold">
          Our Featured Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div data-aos="fade-up" className="bg-gray-200 p-4 rounded">
            <img
              src={" https://i.ibb.co/k56MZmm/food.jpg"}
              alt="Event 1"
              className="w-full h-72"
            />
            <h3 className="text-xl font-semibold mt-2">Donation Food</h3>
            <p className="text-gray-600 text-sm mt-2">Date: January 1, 2024</p>
            <p className="text-gray-700 mt-2">
              Description: Help us make a difference! Contribute to our food
              donation drive. Together, we can combat hunger and provide
              nourishment to those in need. Join us in spreading kindness, one
              meal at a time.
            </p>
            <a
              href="#"
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block hover:bg-blue-600"
            >
              Learn More
            </a>
          </div>

          <div data-aos="fade-up" className="bg-gray-200 p-4 rounded">
            <img
              src={"https://i.ibb.co/CwmqqZG/tree.jpg"}
              alt="Event 2"
              className="w-full h-72"
            />
            <h3 className="text-xl font-semibold mt-2">Planting Tree</h3>
            <p className="text-gray-600 text-sm mt-2">
              Date: February 14, 2024
            </p>
            <p className="text-gray-700 mt-2">
              Description: Join our eco-conscious community in a tree planting
              initiative. Together, we'll nurture the environment, one sapling
              at a time. Contribute to a greener, healthier planet and be part
              of the change.
            </p>
            <a
              href="#"
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block hover:bg-blue-600"
            >
              Learn More
            </a>
          </div>

          {/* Add more event cards as needed */}
        </div>
      </section>

      {/* blog section */}
      <section className=" bg-white px-4 md:px-10 pb-10 rounded mx-auto ">
 
          <h2 data-aos="fade-down" className="mb-10 text-center text-3xl text-slate-600 font-bold">
            Latest Blog Posts
          </h2>
          <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Blog Post 1 */}
            <div className="bg-gray-200 p-4 rounded">
              <img
                src={"https://i.ibb.co/9bg6bdC/comunity.jpg"}
                alt="Blog Post 1"
                className="w-full h-72 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Building Stronger Communities Together
              </h3>

              <p className="text-gray-700">
                Building Stronger Communities Together" explores the
                significance of unity and collaboration in modern society. This
                blog post delves into the ways individuals, organizations, and
                local initiatives can foster connections, inspire change, and
                create thriving, supportive communities. Discover the stories
                and strategies that inspire collective growth and shared
                prosperity.
              </p>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-gray-200 p-4 rounded">
              <img
                src={"https://i.ibb.co/fpmZCz2/nature.jpg"}
                alt="Blog Post 2"
                className="w-full h-72 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Exploring the Beauty of Nature's Wonders
              </h3>

              <p className="text-gray-700">
                Exploring the Beauty of Nature's Wonders" takes you on a
                captivating journey through Earth's most awe-inspiring
                landscapes and wildlife. Dive into the enchanting world of
                natural wonders, from majestic waterfalls to serene forests.
                Gain a deeper appreciation for the planet's extraordinary beauty
                and the importance of preserving it for future generations.
              </p>
            </div>

            {/* Add more blog posts as needed */}
          </div>
       
      </section>

    </div>
  );
};

export default Home;
