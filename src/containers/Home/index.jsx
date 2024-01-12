import FeaturedCollection from "../../component/FeaturedCollection";
import VideoHeader from "./VideoHeader";
import "./style.css";
import Gallery from "./gallery";
import Feedback from "./Feedback";
import Collections from "./Collections";
import Header from "../../component/Header";

const Home = () => {
    return (
        <>  
            <Header/>
            <VideoHeader />
            <FeaturedCollection />
            <Gallery />
            <Feedback />
            <Collections />
        </>
    )
}
export default Home