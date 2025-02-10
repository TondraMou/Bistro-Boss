import Banner from "../components/Banner";
import BistroBossSection from "../components/BistroBossSection";
import Category from "../components/Category";
import Featured from "../components/Featured";
import PopularMenu from "../components/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBossSection></BistroBossSection>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;