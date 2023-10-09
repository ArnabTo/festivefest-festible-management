import { CountUp } from "use-count-up";
const HappyClient = () => {

    return (
        <div className="hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZlc3RpdmFsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="text-center flex py-8">
                    <p className=" w-1/2 mx-8 text-4xl text-white font-extrabold">
                        Trusted By Over 60+ Clients
                        & 300+ Cups Of Coffee Since 2014
                    </p>
                    <div className="flex justify-between">
                        <span><p className="mx-6 text-6xl items-center"><CountUp isCounting end={60} duration={3.2} /></p>
                            <span className="text-white">Clients</span></span>
                        <span><p className="mx-6 text-6xl items-center"><CountUp isCounting end={8} duration={3.2} />+</p>
                            <span className="text-white"> Years of experience</span></span>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default HappyClient;


