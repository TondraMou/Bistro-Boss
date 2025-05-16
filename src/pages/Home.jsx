import Banner from "../components/Banner";
import BistroBossSection from "../components/BistroBossSection";
import Category from "../components/Category";
import Featured from "../components/Featured";
import PopularMenu from "../components/PopularMenu";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBossSection></BistroBossSection>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;