import { useEffect, useState } from "react";
import Review from "./Review";

const ClientReview = () => {
const [review, setReview] = useState([])
  useEffect(()=>{
    fetch('review.json')
    .then(res => res.json())
    .then(rData => setReview(rData))
  },[])
  
    return (
<section className="bg-gray-50">
<div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
  <div className="md:flex md:items-end md:justify-between">
    <div className="max-w-xl">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Read trusted reviews from our customers
      </h2>

      <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        praesentium natus sapiente commodi. Aliquid sunt tempore iste
        repellendus explicabo dignissimos placeat, autem harum dolore
        reprehenderit quis! Quo totam dignissimos earum.
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

  <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {
          review.map(rev => <Review rev={rev} key={rev.id}></Review>)
        }
  </div>
</div>
</section>
    );
};

export default ClientReview;