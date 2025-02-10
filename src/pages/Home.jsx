import Banner from "../components/Banner";
import BistroBossSection from "../components/BistroBossSection";
import Category from "../components/Category";
import PopularMenu from "../components/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBossSection></BistroBossSection>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;