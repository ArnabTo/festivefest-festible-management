import { useEffect, useState } from "react";
import Review from "./Review";

const ClientReview = () => {
  const [review, setReview] = useState([])
  useEffect(() => {
    fetch('review.json')
      .then(res => res.json())
      .then(rData => setReview(rData))
  }, [])

  return (
    <section className="bg-gray-50 max-w-[90rem] m-auto">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl" data-aos="fade-up">
              Read trusted reviews from our customers
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-gray-700" data-aos="fade-up">
              At Festivefest, our clients are at the heart of everything we do. We take pride in delivering exceptional services and products that meet and exceed their expectations. As a result, we're thrilled to share that we have had the privilege of serving over 1,237 satisfied clients and counting.
              Our commitment to client satisfaction is unwavering, and we are dedicated to ensuring that every interaction with us is a positive one. We believe that our growing number of happy clients is a testament to our dedication to excellence.
            </p>
          </div>

          <a
            href="#"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-[#6e07ff] px-5 py-3 text-[#6e07ff] transition hover:bg-[#6e07ff] hover:text-white md:mt-0"
          >
            <span className="font-medium"> Read all reviews </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3" data-aos="fade-up">
          {
            review.map(rev => <Review rev={rev} key={rev.id}></Review>)
          }
        </div>
      </div>
    </section>
  );
};

export default ClientReview;