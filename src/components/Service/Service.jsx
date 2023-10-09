import { Link } from "react-router-dom";

const Service = ({ service }) => {
    // console.log(service)
    const {id, service_title, service_heading, service_headingImage } = service;
    return (
            <div  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                    <img src={service_headingImage} />
                </span>

                <h2 className="mt-2 font-bold text-[#6e07ff] my-4">{service_heading}</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 my-4 tracking-wide leading-6">
                    {service_title}
                </p>
                <Link to={`/serv/${id}`}><button className="btn btn-primary">Read more!</button></Link>
            </div>
    );
};

export default Service;