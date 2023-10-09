import ClientReview from "../Clientreview/ClientReview";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Services from "../Service/Services";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <ClientReview></ClientReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;