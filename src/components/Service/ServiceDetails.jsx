import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const serviceDatas = useLoaderData();
    const { servId } = useParams();

    const servceData = serviceDatas.find(serv => serv.id == servId)
    console.log(serviceDatas, servId, servceData)
    return (
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl border-b-2 border-[#6464642b]">
                       {servceData.service_heading}
                    </h2>
                    <p className="text-base font-medium text-gray-900 md:text-3xl">
                       {servceData.service_title}
                    </p>
                    
                    <p className="text-gray-500 md:mt-4">
                      {servceData.service_details}
                    </p>

                    <div className="mt-4 md:mt-8">
                        <a
                            href="#"
                            className="inline-block rounded bg-[#6e07ff] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#5403c5] focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </div>

            <img alt="Student" className="bg-cover h-56 w-full object-contain sm:h-full rounded-md px-11" src={servceData.service_image}/>
        </section>
    );
};

export default ServiceDetails;