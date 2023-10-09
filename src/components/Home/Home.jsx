import About from "../About/About";
import ClientReview from "../Clientreview/ClientReview";
import Footer from "../Footer/Footer";
import HappyClient from "../HappyClient/HappyClient";
import Hero from "../Hero/Hero";
import Services from "../Service/Services";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Services></Services>
            <HappyClient></HappyClient>
            <ClientReview></ClientReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;