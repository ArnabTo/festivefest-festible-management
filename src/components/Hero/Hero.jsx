import "../../App.css"
const Hero = () => {
    return (
        <div className=" overflow-hidden">
            <div className="hero min-h-screen kenburns-top overflow-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/nb43T84/replicate-prediction-trdswhbbxtsoqp4w4fp5ckzq2e.webphttps://images.pexels.com/photos/2893330/pexels-photo-2893330.jpeg?auto=compress&cs=tinysrgb&w=600)', backgroundSize:"cover" }}>
                <div className="hero-overlay bg-[#000000bd] bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl text-start" data-aos="fade-up">
                        <h1 className="mb-5 text-5xl font-bold tracking-wide">Embrace Culture, Celebrate Traditions, Unite in Joy!</h1>
                        <p className="mb-5 font-light">Join us at Festivefest, where we celebrate cultures and traditions, uniting in joy. From captivating dances to delicious cuisine, we bring the world&apos;s cultural diversity to life. Embrace the experience, and let every moment be a masterpiece.</p>
                        <button className="btn btn-primary brder-none">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
