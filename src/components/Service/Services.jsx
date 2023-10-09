import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <section className="max-w-[90rem] m-auto">
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 m-auto">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div className="mx-auto max-w-lg text-start lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                        <h2 className="text-3xl font-bold sm:text-4xl" data-aos="fade-up">Services That Bring Your Cultural Celebration to Life</h2>
                        <p className="mt-4 text-gray-600" data-aos="fade-up">
                            At Festivefest, we offer a comprehensive range of services to ensure your cultural celebration is a memorable success. Our expert team is dedicated to preserving the essence of your culture and delivering an unforgettable experience. From event planning and logistics to entertainment coordination and cultural showcases, we provide end-to-end solutions. We handle every detail with precision, allowing you to fully embrace the joy of your celebration. Explore our services and let us bring your cultural dreams to life, making each moment a masterpiece of tradition and unity.
                        </p>
                        <Link to="/" href="#" className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400" data-aos="fade-up">
                            Get Started Today
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3" data-aos="fade-up">
                        {
                            services.map(serv => <Service service={serv} key={serv.id}></Service>)
                        }
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Services;