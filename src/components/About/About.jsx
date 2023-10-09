import { Link } from "react-router-dom";

const About = () => {
    return (

        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 max-w-[90rem] m-auto">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        About Us
                    </h2>
                    <h2 className="text-primary" data-aos="fade-right">Our Story</h2>

                    <p className=" text-gray-500 my-4 md:mt-4 md:block" data-aos="fade-right">Founded in Festivefest, our journey began with a vision to bridge cultural gaps and foster understanding through the joy of shared celebrations. Over the years, we have successfully orchestrated countless cultural events that have left lasting impressions on both participants and attendees.</p>

                    <h2 className="text-primary" data-aos="fade-right"> Our Team</h2>
                    <p className=" text-gray-500 my-4 md:mt-4 md:block" data-aos="fade-right">  Our team is a diverse and talented group of event planners, creatives, and cultural enthusiasts who are dedicated to crafting authentic and unforgettable experiences. We pride ourselves on our deep appreciation for the customs, traditions, and history of each culture we celebrate, and we work closely with our clients to ensure every detail is perfectly aligned with their vision.</p>

                    <h2 className="text-primary" data-aos="fade-right">What Sets Us Apart</h2>

                    <ul className=" text-gray-500 my-4 md:mt-4 md:block" data-aos="fade-right">
                        <li> - Cultural Expertise: We bring an in-depth understanding of various cultures to the table, ensuring that every element of your event is culturally respectful and accurate.</li>
                        <li> - Customization: We believe in tailoring each event to the unique preferences and traditions of our clients. Your celebration should be a reflection of your culture and identity.</li>
                        <li> - Sustainability: We are committed to making our events as sustainable as possible, respecting the environment and our global community.</li>
                        <li> - Innovation: We blend tradition with innovation, creating events that are both timeless and contemporary, leaving guests with awe-inspiring memories.</li>
                    </ul>
                    <h2 className="text-primary" data-aos="fade-right">Our Commitment</h2>
                    <p className=" text-gray-500 my-4 md:mt-4 md:block" data-aos="fade-right"> At Festivefest, we are committed to creating culturally rich experiences that transcend boundaries and celebrate diversity. We believe that when people come together to celebrate their differences, they create a world that is more vibrant and united.</p>

                    <h3 className="hidden text-gray-500 my-4 md:mt-4 md:block" data-aos="fade-right">  Join us on a journey through the rich tapestry of cultures from around the world. Let&apos;s make your cultural celebration a breathtaking, unforgettable event.

                        Contact us today to discuss how we can turn your vision into a reality!</h3>
                    <div className="mt-4 md:mt-8" data-aos="fade-right">
                        <Link
                            href="#"
                            className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-violet focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Started Today
                        </Link>
                    </div>
                </div>
            </div>

            <img
                className="object-contain sm:h-full"
                alt="Student"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRlYW18ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"

            />
        </section>
    );
};

export default About;